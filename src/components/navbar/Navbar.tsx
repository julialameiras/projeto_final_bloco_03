import { Link } from "react-router-dom"

function Navbar() {

    return (

        <div className="bg-green-700 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-2xl font-extrabold">Farmácia Saúde</a>
          <ul className="flex space-x-8">
            <li><Link to="/" className="text-white hover:text-gray-300 transition-colors duration-300">Início</Link></li>
            <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Sobre Nós</a></li>
            <li><Link to="/produtos" className="text-white hover:text-gray-300 transition-colors duration-300">Produtos</Link></li>
            <li><Link to="/categorias" className="text-white hover:text-gray-300 transition-colors duration-300">Categorias</Link></li>
            <li><a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">Contato</a></li>
          </ul>
        </div>
        </div>
    )
}

export default Navbar