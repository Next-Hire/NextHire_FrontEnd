import secureLocalStorage from "react-secure-storage";
import { api, token_key } from "./api";
import { FuncionarioPOST, LoginRequest, UsuarioGET, UsuarioLogin } from "./usuarioService";

export const authService = {

    async login(dados: LoginRequest) : Promise<LoginRequest>{
        const { data } = await api.post("Autenticacao", dados)
        if(data.token)
            await secureLocalStorage.setItem(token_key, data.token)

        return data
    },

    async logout() : Promise<void> {
        await secureLocalStorage.removeItem(token_key)
    },

    
    async cadastrarCandidato(dados: UsuarioLogin): Promise<UsuarioLogin> {
        const {data} = await api.post("Usuario/candidato", dados )
        return data
    },
    async cadastrarFuncionario(dados: FuncionarioPOST, empresaId: number): Promise<FuncionarioPOST>{

        const {data} = await api.post(`Usuario/funcionario/${empresaId}` + dados)
        return data
        
    }




}