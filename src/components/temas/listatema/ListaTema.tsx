import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';

function ListaTema() {

    //Temas armazenados dentro de um array, ele começa vazio
    const [temas, setTemas] = useState<Tema[]>([])

    //Para acessar o tema precisamos do token armazenado
    const [token, setToken] = useLocalStorage('token')

    //Ele faz o redirecionamento
    let history = useNavigate();

    useEffect(() => {
        if (token === '') {
            alert("Voce precisa estar logado")
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
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarTema/${tema.id}`}  className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
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