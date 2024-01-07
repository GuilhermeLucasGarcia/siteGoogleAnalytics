import './App.css';
import Navbar from './Navbar.js';
import Home from "./pages/Home/Home.js"
import Carrinho from "./pages/Carrinho/Carrinho.js"
import Cadastro from "./pages/Cadastro/Cadastro.js"
import { Route, Routes } from 'react-router-dom';
function App() {
  console.log(window.location)
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Carrinho' element={<Carrinho/>}></Route>
          <Route path='/Cadastro' element={<Cadastro/>}></Route>
        </Routes>
      </div>
    </>
  )

}

export default App;
