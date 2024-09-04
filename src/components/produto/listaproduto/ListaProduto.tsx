import { useEffect, useState } from "react"
import { buscar } from "../../../services/Service";
import { ThreeCircles } from "react-loader-spinner";
import Produto from "../../../models/produto/Produto";
import CardProduto from "../cardproduto/CardProduto";
import { Link } from "react-router-dom";

function ListaProduto() {
    const [produtos, setProduto] = useState<Produto[]>([])

    async function buscarProduto() {
        try {
            await buscar('/produtos', setProduto)
        } catch (error: any) {
            alert("Algo deu errado")
            console.log(error)
        }
    }

    useEffect(() => {
        buscarProduto();
    }, [produtos.length])
    return (
        <>
            {produtos.length === 0 && (
                <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
            )}

            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 my-6">
            <div className="flex justify-end mb-6">
                <Link to="/cadastroProduto">
                    <button className="py-2 px-6 bg-green-600 text-white rounded-lg border border-green-700 hover:bg-green-700 transition duration-300">
                        Novo Produto
                    </button>
                </Link>
            </div>
            </div>

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {produtos.map((produto) => (
                            <CardProduto key={produto.id} produto={produto} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaProduto