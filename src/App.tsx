import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Home from './pages/home/Home';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastrarTema from './components/temas/cadastrarTema/CadastrarTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (

    <Provider store={store}>
      <ToastContainer/>
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cadastro' element={<CadastroUsuario />} />
          <Route path='/temas' element={<ListaTema />} />
          <Route path='/posts' element={<ListaPostagem />} />
          <Route path="/formularioPostagem" element={<CadastroPostagem />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
          <Route path="/formularioTema" element={<CadastrarTema />} />
          <Route path="/formularioTema/:id" element={<CadastrarTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />

        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
