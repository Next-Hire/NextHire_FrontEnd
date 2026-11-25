import {jwtDecode } from "jwt-decode"
import { UsuarioGET, UsuarioGET_Email } from "@/service/usuarioService";
import React, {  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode } from "react"
import { authService } from "../service/authService"
import { useRouter } from "next/router";



export interface UsuarioPayload {
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string;
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string;
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string
  exp: number;
  iss: string;
  aud: string;
  sub?: string; //podem vir nulos
  id?: string; // podem vir nulos
}

export interface AuthContextData {
  usuario: UsuarioGET | null;
  token: string | null;
  email: string;
  setEmail: (email: string) => void;
  senha: string;
  setSenha: (senha: string) => void;
  loading: boolean;
  erro: string | null;
  handleLogin: () => Promise<void>;
  handleMockLogin: () => Promise<void>;
  logout: () => Promise<void>;
  atualizarEstadoUsuario: (novosDados: Partial<UsuarioGET>) => void;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export async function decodificarToken(token: string)//: UsuarioGET | null {
  {
    try {
        const decoded: any = jwtDecode<UsuarioPayload>(token)

    // Mapeia todas as variações conhecidas de ID em tokens JWT do ASP.NET Core
    const UsuarioId =
      decoded[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
      ] ||
      decoded["nameidentifier"] ||
     
      decoded["usuarioID"] ||
      decoded["usuarioId"] ||
      "";

    const Nome =
      decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] ||
      "Usuário";

    const Email =
      decoded[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
      ] ||
      decoded["email"] ||
      "";

    return {
      UsuarioId,
      Nome,
      Email,
    };
     
    
        
    } catch (error: any) {
        throw new Error(error.response)
    }
}



export function AuthProvider({children} : {children: ReactNode}) {

  const [usuario, setUsuario] = useState<UsuarioGET | null>(null)
  const[usuarioEmail, setUsuarioEmail] = useState<UsuarioGET_Email | null>(null)
  const [token, setToken] = useState<string | null> (null)
  const [email, setEmail] = useState<string> ("")
  const [tipoUsuario, setTipoUsuario] = useState<string> ("")
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);




  const router = useRouter()

  useEffect(() => {



    async function carregarDadosDoUsuario() {
      try
      {
        setLoading(true)
        const tokenSalvo = await authService.getToken()

        if(tokenSalvo) 
        {
          setToken(tokenSalvo)
          const usuarioDecodificado = await decodificarToken(tokenSalvo)
          const emailBusca = usuarioDecodificado.Email

          if(emailBusca)
            try{
          {
            const dadosUsuario = await authService.getUsuario(emailBusca);

             const idEncontrado =
                dadosUsuario?.usuarioId ||
                usuarioDecodificado?.UsuarioId ||
                "";

                const usuarioEncontrado: UsuarioGET = {
                  UsuarioId: idEncontrado,
                  Nome: dadosUsuario?.nome || usuarioDecodificado.Email,
                  Email: dadosUsuario?.email || usuarioDecodificado.Email,

                  
                }


                setUsuarioEmail(dadosUsuario)
                if(dadosUsuario == null)
                  throw new Error("usuário não decodificado")
                await authService.salvarUsuario(dadosUsuario)
                
          }
          }
          
          catch(error: any)
          {

            if(!usuario)
              return error.response.data
          }

          
        }

  
      }

            catch(error: any)
          {
            console.log('erro ao carregar os dados do usuario: '+ error)
          }

          finally{
            setLoading(false)
          }

          carregarDadosDoUsuario()
    }


    
async function realizarLogin() {
  const emailFormatado = email.trim().toLowerCase()
  const senhaFormatada = senha.trim().toLowerCase()


      if(!emailFormatado || !senhaFormatada)
      {
        setErro("Preencha todos os campos!")
        return;
      }

      try{
        setLoading(true)

        const response = await authService.login({
          email: emailFormatado,
          senha: senhaFormatada
        })

        var TokenJSON = response.token
        setToken(TokenJSON)

        const usuarioDecodificado = decodificarToken(TokenJSON)
        const dadosUsuarioAPI = await authService.getUsuario(emailFormatado)

         const idDetectado: any = dadosUsuarioAPI?.usuarioId || "";
                const usuarioEncontrado: UsuarioGET = {
                  UsuarioId: idDetectado,
                  Nome: dadosUsuarioAPI?.nome || (await usuarioDecodificado).Nome,
                  Email: dadosUsuarioAPI?.email || (await usuarioDecodificado).Email,
                }
                setUsuario(usuarioEncontrado)
                
                setEmail("")
                setSenha("")
                router.replace("/vaga")



      }


      catch(error:any)
      {
        console.log('Erro: ', error)

        const status = error.response.status

        if(status === 400 || status === 401)
        {
          const mensagem = typeof error.response.data === 'string'
          ? error.response.data
          : error.response.data.message;

          setErro(mensagem || "email ou senha inválidos")
        }
      }

      finally{
        setLoading(false)
      }
}
}, [])
}




export function useAuth(){
  const context = useContext(AuthContext)

    if(!context)
      throw new Error("useAuth deve ser usado dentro de um AuthProvider")

  return context
}