import { useEffect, useState } from "react"
import { buscar } from "../../../services/Service";
import { ThreeCircles } from "react-loader-spinner";
import Produto from "../../../models/produto/Produto";
import CardProduto from "../cardproduto/CardProduto";

function ListaProduto() {
    const [produtos, setProdutos] = useState<Produto[]>([])

    async function buscarProduto() {
        try {
            await buscar('/produtos', setProdutos)
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