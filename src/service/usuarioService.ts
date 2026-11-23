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

export interface UsuarioGET {
    UsuarioId: number,
    Nome: string,
    Email: string,
    PrimeiroAcesso: boolean,
    StatusUsuario: boolean
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

}


