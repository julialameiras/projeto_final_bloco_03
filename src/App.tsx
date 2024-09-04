import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import FormularioCategoria from './components/categoria/formulariocategoria/FormularioCategoria';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';
import ListaCategoria from './components/categoria/listacategoria/ListaCategoria';
import ListaProduto from './components/produto/listaproduto/ListaProduto';
import FormularioProduto from './components/produto/formularioproduto/FormularioProduto';
import DeletarProduto from './components/produto/deletarproduto/DeletarProduto';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
          <Route path='/produtos' element={<ListaProduto/>} />
          <Route path='/cadastroProduto' element={<FormularioProduto />} />
          <Route path='/editarProduto/:id' element={<FormularioProduto/>}/>
          <Route path='/deletarProduto/:id' element={<DeletarProduto/>}/>
          <Route path='/categorias' element={<ListaCategoria/>} />
          <Route path='/cadastroCategoria' element={<FormularioCategoria />} />
          <Route path='/editarCategoria/:id' element={<FormularioCategoria/>}/>
          <Route path='/deletarCategoria/:id' element={<DeletarCategoria/>}/>
          <Route path='/' element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App