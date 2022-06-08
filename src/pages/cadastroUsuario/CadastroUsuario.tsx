import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, TextField, Typography, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { useNavigate } from "react-router-dom";
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmarSenha === user.senha && user.senha.length >= 8) {

            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
                toast.success('🐲 Usuário cadastrado com sucesso !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                  });

            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error('👺 Usuário já existente', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                  });
                // alert("Usuário já existente")
            }

        } else {
            toast.error('👺 Dados inconsistentes. Favor verificar as informações de cadastro.', {
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
        <Grid container direction='row' justifyContent="center" alignItems="center">
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos2">
                            Cadastrar
                        </Typography>

                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth required />

                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="usuario" variant="outlined" name="usuario" margin="normal" fullWidth required />

                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="foto" label="foto" variant="outlined" name="foto" margin="normal" fullWidth/>

                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" required fullWidth />

                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="confirmarSenha" label="confirmarSenha" variant="outlined" name="confirmarSenha" margin="normal" type="password" fullWidth required />

                        <Box marginTop={2} textAlign="center">
                            <Link to='/login' className="text-decorator-none">
                                <Button variant="contained" color="secondary" className="btnCancelar">
                                    Cancelar
                                </Button>
                            </Link>

                            <Button type='submit' variant="contained" color="secondary" className="btnCadastrar">
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    );
}

export default CadastroUsuario;