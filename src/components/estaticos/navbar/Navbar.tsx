import React from "react";
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import './Navbar.css';

function Navbar() {

const[token, setToken] = useLocalStorage('token')
let history = useNavigate();

function goLogout(){
  setToken('')
  alert("Usuário Deslogado !")
  history('/login')
}

  return (
    <>
      <AppBar position="static" className="back" >
        <Toolbar variant="dense" className="font">
          <Box className="cursor" >
            <Typography variant="h6" color="inherit" className="cursor" >
              Blog Pessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Link to='/home' className="text-decorator-none">
            <Box mx={1} className="cursor ">
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
            </Link>

            <Link to='/posts' className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            </Link>

            <Link to='/temas' className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            </Link>

            <Link to='/formularioTema' className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Cadastrar Tema
              </Typography>
            </Box>
            </Link>

            {/* Vai realizar o processo de logout ao clicar */}
              <Box mx={1} className="cursor" onClick={goLogout} >
                <Typography variant="h6" color="inherit" className="text-decorator-none">
                  Logout
                </Typography>
              </Box>
            

          </Box>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;