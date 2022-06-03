import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blogpessoalxande.herokuapp.com'
})

export const login = async (url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
}

export const cadastroUsuario = async (url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

// Reuisição pra buscar temas e postagens, header é passado o token para autenticação, e vão retornar os dados
export const busca = async (url: any, setDados: any, header:any) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const buscaId = async (url: any, setDados: any, header:any) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const post = async (url: any, dados:any, setDados: any, header:any) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const put = async (url: any, dados:any, setDados: any, header:any) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deleteId = async (url: any, header:any) => {
    
    // Não vou armazenar valor nenhuma variavel
    await api.delete(url, header)
    
}
