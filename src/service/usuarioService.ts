import { api } from "./api";

export interface UsuarioLogin {
    nome?: string,
    email: string,
    senha: string
}

export interface FuncionarioPOST {
    nome: string,
    email: string,
    cargo: number
}

export interface LoginResponse{
    token: string
}
export interface UsuarioGET {
    UsuarioId: number,
    Nome: string,
    Email: string,
    PrimeiroAcesso?: boolean,
    StatusUsuario?: boolean
}

export interface UsuarioGET_Email{
    usuarioId: number,
    nome: string,
    email: string,
    primeiroAcesso?: boolean,
    statusUsuario?: boolean, 
    tipoUsuario?: number
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

    async buscarUsuarioPorEmail(email: string): Promise<UsuarioGET_Email>{
        const {data} = await api.get<UsuarioGET_Email>(`Usuario/email/${email}`)
        console.log("oi")
        return data
    }

}


