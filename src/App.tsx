import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' ;
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Home from './pages/home/Home';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh'}}>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/cadastro' element={<CadastroUsuario/>}/>
          <Route path='/temas' element={<ListaTema/>}/> 
          <Route path='/posts' element={<ListaPostagem/>}/>  
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
