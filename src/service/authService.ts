import secureLocalStorage from "react-secure-storage";
import { api, token_key } from "./api";
import { candidatoPOST, FuncionarioPOST, LoginRequest, LoginResponse, UsuarioGET, usuarioService } from "./usuarioService";

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

    async getUsuario(email: string): Promise<UsuarioGET | null> {
        const response = await usuarioService.buscarUsuarioPorEmail(email);
        return response;
    },

    
 

    async salvarUsuario(usuario: UsuarioGET): Promise<void> {
        await secureLocalStorage.setItem('teste',JSON.stringify(usuario)) // 
    }




}