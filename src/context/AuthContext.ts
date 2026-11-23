import { UsuarioGET } from "@/service/usuarioService";

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

import {jwtDecode } from "jwt-decode"

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function decodificarToken(token: string): UsuarioGET | null {
    try {
        const decoded: any = jwtDecode<UsuarioPayload>(token)

        const usuarioID = 
        decoded []
        
    } catch () {
        
    }
}