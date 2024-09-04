import { ChangeEvent, useEffect, useState } from 'react'
import Produto from '../../../models/produto/Produto';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

function FormularioProduto() {
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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/")
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto)
                alert('Produto atualizado com sucesso')
                retornar()
            } catch (error: any) {
                alert('Erro ao atualizar o produto')

            }
        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto
                )
                alert('Produto cadastrado com sucesso')
            } catch (error: any) {
                alert('Erro ao cadastrar o produto')
            }
        }
        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastre um novo produto' : 'Editar produto'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoProduto}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Produto</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.nome || ""}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-green-400 hover:bg-green-800 w-1/2 py-2 mx-auto flex items-center justify-center"
                    type="submit"
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24" visible={true} /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>}
                </button>
            </form>
        </div>
    )
}

export default FormularioProduto