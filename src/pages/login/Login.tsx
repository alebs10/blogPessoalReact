import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import './Login.css';
import UserLogin from "../../models/UserLogin";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";


function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
           id: 0,
           nome: '',
           usuario: '',
           senha: '',
           foto: '',
           token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

        useEffect(() =>{
            if(token != ''){
                dispatch(addToken(token))
                navigate('/home')
            }
        }, [token])

    // Envia os dados da requisição os dados de Login.
    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
       
        // impede o comportamento padrão do botão
        e.preventDefault();

        try{
            await login(`/usuarios/logar`, userLogin, setToken)
            toast.success('🐲 Usuario logado com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
              });
        }catch(error){
            toast.error('👺 Dados do usuário incosistentes. Erro ao logar', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
              });
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos">
                            Entrar
                        </Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="usuario" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center">
                                <Button type="submit" variant="contained" color="primary" className="button-login">
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta ?</Typography>
                        </Box>
                        <Link to='/cadastro' className="text-decorator-none">
                            <Typography variant="subtitle1" gutterBottom align="center" className="textos">Cadastre-se ai parça</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} className="imagem">

            </Grid>
        </Grid>
    );
}

export default Login;