import React from "react";
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {

  return (
    <>
      <AppBar position="static" className="back" >
        <Toolbar variant="dense" className="font">
          <Box className="cursor" >
            <Typography variant="h6" color="inherit" >
              Blog Pessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Cadastrar Tema
              </Typography>
            </Box>
            <Link to='/login' className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Logout
                </Typography>
              </Box>
            </Link>

          </Box>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;