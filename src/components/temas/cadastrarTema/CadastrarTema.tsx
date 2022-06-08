import { Button, Container, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './CadastrarTema.css';

function CadastrarTema() {

    let history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    // Vai alterar um tema cadastrado
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token === "") {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            history('/login')
        }
    }, [token])

    useEffect(() => {
        // Se há um id
        if (id !== undefined) {
            findById(id)
        }
    }, [id])


    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>){

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        // Se o ID for diferente de indefinido tente Atualizar
        if (id !== undefined) {

            // TRY: Tenta executar a atualização 
            try {
                await put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Tema atualizado com sucesso !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                  });
            

            // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error('Erro, por favor verifique a quantidade minima de caracteres!', {
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

        // Se o ID for indefinido, tente Cadastrar
        } else {

            // TRY: Tenta executar o cadastro
            try {
                await post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Tema cadastrado com sucesso !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                  });
                
            
            // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error('Erro, por favor verifique a quantidade minima de caracteres!', {
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
        
        back()
    }

    function back(){
        history('/temas')
    }

return (
    <Container maxWidth="sm" className="topo">
        <form onSubmit={onSubmit}>
            <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>

            <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />

            <Button type="submit" variant="contained" color="primary">
                Finalizar
            </Button>
        </form>
    </Container>
)
}

export default CadastrarTema