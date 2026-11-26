import { Rss } from "lucide-react";
import { api } from "./api";

export interface candidatoPOST {
    nome: string,
    email: string,
    senha: string
}

export interface FuncionarioPOST {
    //tem que passar empresaId quando for fazer post de funcionario
    nome: string,
    email: string,
    cargo: number
}

export interface LoginResponse{
    token: string
}

export interface UsuarioGET {
    usuarioId: number,
    nome: string,
    email: string,
    primeiroAcesso: boolean,
    statusUsuario: boolean,
    tipoUsuario: number
}





export interface LoginRequest {
    email: string,
    senha: string
}



export const usuarioService = {
    async buscarUsuarioPorCandidatoId(candidatoId: string): Promise<UsuarioGET> {
        const { data } = await api.get<UsuarioGET>(`Usuario/candidato/${candidatoId}`)
        return data
    },

    async buscarUsuariosCandidatos(): Promise<UsuarioGET> {
        const {data} = await api.get<UsuarioGET>(`Usuario/candidatos/`)
        return data
    },

    async buscarUsuarioPorEmail(email: string): Promise<UsuarioGET>{
        const {data} = await api.get<UsuarioGET>(`Usuario/email/${email}`)
        console.log("oi")
        return data
    },


    async cadastrarCandidato(dados: candidatoPOST){
        try {
            const response = await api.post("Usuario/candidato", dados)
        } catch (error: any) {
            const message = 
            error.response?.data?.message ||
            error.response?.data?.mensagem ||
            `Não foi possível cadastrar o usuário ${dados.nome}`

            throw new Error(message)
        }
    },

    async cadastrarFuncionario(dados: FuncionarioPOST, empresaId: number){
        try {
            const response = await api.post(`Usuario/funcionarios/${empresaId}`, dados)
            return response.data
        } 
        catch (error: any) {
            const message = 
                error.response?.data?.message ||
                error.response?.data?.mensagem ||
                `Não foi possível cadastrar o usuário ${dados.nome}`
            
                throw new Error(message)
        }
    }



}


