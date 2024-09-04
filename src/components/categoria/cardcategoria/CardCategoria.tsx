import { Link } from "react-router-dom"
import Categoria from "../../../models/categoria/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='flex flex-col rounded-2xl overflow-hidden justify-between text-center '>
            <p className='p-8 text-3xl bg-green-200 h-full'>{categoria.nome}</p>
            <div className="flex *:w-2/4 *:uppercase">
                <Link to={`/editarCategoria/${categoria.id}`} className="bg-green-600 text-white">
                    <button>editar</button>
                </Link>
                <Link to={`/deletarCategoria/${categoria.id}`} className="bg-red-600 text-white">
                    <button >deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria