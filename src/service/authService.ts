import secureLocalStorage from "react-secure-storage";
import { api, token_key } from "./api";
import { FuncionarioPOST, LoginRequest, LoginResponse, UsuarioGET, UsuarioGET_Email, UsuarioLogin, usuarioService } from "./usuarioService";

export const authService = {

    async login(dados: LoginRequest) : Promise<LoginResponse>{
        const { data } = await api.post<LoginResponse>("Autenticacao", dados)
        console.log("oi")
        if(data.token)
            await secureLocalStorage.setItem(token_key, data.token)

        return data
    },

    async logout() : Promise<void> {
        await secureLocalStorage.removeItem(token_key)
    },

    async getToken() : Promise<string>{
        const token = await secureLocalStorage.getItem(token_key)
        if(token == undefined)
            return ("")
        return token?.toString()

    },

    async getUsuario(email: string): Promise<UsuarioGET_Email | null> {
        const response = await usuarioService.buscarUsuarioPorEmail(email);
        return response;
    },

    
    async cadastrarCandidato(dados: UsuarioLogin): Promise<UsuarioLogin> {
        const {data} = await api.post("Usuario/candidato", dados )
        return data
    },
    async cadastrarFuncionario(dados: FuncionarioPOST, empresaId: number): Promise<FuncionarioPOST>{

        const {data} = await api.post(`Usuario/funcionario/${empresaId}` + dados)
        return data
        
    },

    async salvarUsuario(usuario: UsuarioGET_Email): Promise<void> {
        await secureLocalStorage.setItem('teste',JSON.stringify(usuario)) // 
    }




}