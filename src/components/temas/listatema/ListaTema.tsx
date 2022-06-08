import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaTema() {

    //Temas armazenados dentro de um array, ele começa vazio
    const [temas, setTemas] = useState<Tema[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    //Ele faz o redirecionamento
    let history = useNavigate();

    useEffect(() => {
        if (token === '') {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
              });
            history('/login')
        }
    }, [token])

    // Faz a requisição de todos os temas dentro da api
    // setTemas se tiver dados ela vai atualizar o state
    async function getTema() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    //Sempre que o tamanho do tema alterar, vai chamar a função para "atualizar"
    useEffect(() => {
        getTema()
    }, [temas.length])

    return (
        <>
            {
                temas.map(tema => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Tema
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {tema.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft button-atualizar" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarTema/${tema.id}`}  className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary" className='button-deletar'>
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}


export default ListaTema;