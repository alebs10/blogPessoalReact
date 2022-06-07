import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

function Home() {

  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
  
  useEffect(() => {
    if (token == "") {
        alert("Você precisa estar logado")
        navigate("/login")

    }
}, [token])


  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className='background'>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='font'>Seja Bem-Vinde!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='font'>Expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            <ModalPostagem />
            </Box>
            <Link to="/posts" className='text-decorator'>
            <Button variant="outlined" className='button'>Ver Postagens</Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://i.imgur.com/a48uw5A.gif" alt="esqueleto" width="500px" height="500px" />
        </Grid>
        <Grid xs={12} className="post">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;