import { Link } from "react-router-dom";
import Produto from "../../../models/produto/Produto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div>
        <div className='flex flex-col rounded-2xl overflow-hidden justify-between text-center '>
            <p className='p-8 text-3xl bg-green-200 h-full'>{produto.nome}</p>
            <div className="flex *:w-2/4 *:uppercase">
                <Link to={`/editarProduto/${produto.id}`} className="bg-green-600 text-white">
                    <button>editar</button>
                </Link>
                <Link to={`/deletarProduto/${produto.id}`} className="bg-red-600 text-white">
                    <button >deletar</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CardProduto