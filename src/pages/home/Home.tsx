import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home() {

  

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
            </Box>
            <Button variant="outlined" className='button'>Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://i.imgur.com/a48uw5A.gif" alt="esqueleto" width="500px" height="500px" />
        </Grid>
        <Grid xs={12} className="post">
          <TabPostagem/>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;