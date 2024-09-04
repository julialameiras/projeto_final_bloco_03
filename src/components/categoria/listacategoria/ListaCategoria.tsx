import { useEffect, useState } from "react"
import Categoria from "../../../models/categoria/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";
import { ThreeCircles } from "react-loader-spinner";

function ListaCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategoria() {
        try {
            await buscar('/categorias', setCategorias)
        } catch (error: any) {
            alert("Algo deu errado")
            console.log(error)
        }
    }

    useEffect(() => {
        buscarCategoria();
    }, [categorias.length])
    return (
        <>
            {categorias.length === 0 && (
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
                        {categorias.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategoria