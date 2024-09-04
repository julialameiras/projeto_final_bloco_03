import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Produto from '../../../models/produto/Produto';
import { buscar, deletar } from '../../../services/Service';
import { RotatingLines } from 'react-loader-spinner';

function DeletarProduto() {
    const [produto, setProduto] = useState<Produto>({} as Produto)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/produtos/${id}`, setProduto
        );
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/")
    }

    async function DeletarProduto() {
        setIsLoading(true)
        try{
            await deletar(`/categorias/${id}`)
        }catch(error){
            alert("Erro ao deletar")
            console.log(error)
        }
        setIsLoading(false)
        retornar();
    }
  return (
    <div className='container w-1/3 mx-auto'>
    <h1 className='text-4xl text-center my-4'>Deletar Produto</h1>

    <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o produto a seguir?</p>

    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-green-600 text-white font-bold text-2xl'>Produto</header>
        <p className='p-8 text-3xl bg-slate-200 h-full'>{produto.nome}</p>
        <div className="flex">
            <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
            <button className='w-full text-slate-100 bg-green-400 hover:bg-green-600 flex items-center justify-center' onClick={DeletarProduto}>
            {isLoading ?
                    <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}/> :
                    <span>Sim</span>}
            </button>
        </div>
    </div>
</div>
  )
}

export default DeletarProduto