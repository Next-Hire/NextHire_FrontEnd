
'use client'
// necessário para evitar:
// React Context is unavailable in Server Components
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"
import { jwtDecode } from "jwt-decode"
import { useRouter } from "next/navigation" // !next/router
import { UsuarioGET } from "@/service/usuarioService"
import { authService } from "@/service/authService"
import { toast } from "sonner"

export interface UsuarioPayload {
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"?: string
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"?: string
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"?: string
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"?: string
  nameidentifier?: string
  usuarioID?: string
  usuarioId?: string
  email?: string
  name?: string
  exp?: number
  iss?: string
  aud?: string
  sub?: string
  id?: string
}

export interface AuthContextData {
  usuario: UsuarioGET | null
  token: string | null
  email: string
  setEmail: (email: string) => void
  senha: string
  setSenha: (senha: string) => void
  loading: boolean
  erro: string | null
  handleLogin: () => Promise<void>
  loginComToken: (tokenRecode: string) => Promise<void> // token para o linkedin
  logout: () => void
  atualizarEstadoUsuario: (novosDados: Partial<UsuarioGET>) => void
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function decodificarToken(token: string) {
  
  try {
    const decoded = jwtDecode<UsuarioPayload>(token)

    const rawId =
      decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] ||
      decoded.nameidentifier ||
      decoded.usuarioID ||
      decoded.usuarioId ||
      decoded.sub ||
      decoded.id ||
      console.log("e agora?")

    const nome =
      decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] ||
      decoded.name ||
      "Usuário"

    const email =
      decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"] ||
      decoded.email ||
      ""

    const role =
      decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || "0"

    return {
      usuarioId: Number(rawId) || 0,
      nome,
      email,
      tipoUsuario: Number(role) || 0,
      exp: decoded.exp,
    }
  } catch (error) {
    console.error("Erro ao decodificar token:", error)
    return null
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<UsuarioGET | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [email, setEmail] = useState<string>("")
  const [senha, setSenha] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const [erro, setErro] = useState<string | null>(null)

  const router = useRouter()

  useEffect(() => {
    async function carregarDadosDoUsuario() {
      try {
        setLoading(true)
        const tokenSalvo = await authService.getToken()

        if (!tokenSalvo) return

        const usuarioDecodificado = decodificarToken(tokenSalvo)
        const tokenExpirado =
          usuarioDecodificado?.exp && usuarioDecodificado.exp * 1000 < Date.now()

        if (!usuarioDecodificado || tokenExpirado) {
          authService.logout()
          setToken(null)
          setUsuario(null)
          return
        }

        setToken(tokenSalvo)

        if (usuarioDecodificado.email) {
          const dadosUsuario = await authService.getUsuario(usuarioDecodificado.email)

          const usuarioFinal: UsuarioGET = {
            usuarioId: dadosUsuario?.usuarioId ?? usuarioDecodificado.usuarioId,
            nome: dadosUsuario?.nome ?? usuarioDecodificado.nome,
            email: dadosUsuario?.email ?? usuarioDecodificado.email,
            primeiroAcesso: dadosUsuario?.primeiroAcesso ?? false,
            statusUsuario: dadosUsuario?.statusUsuario ?? true,
            tipoUsuario: dadosUsuario?.tipoUsuario ?? usuarioDecodificado.tipoUsuario,
          }

          setUsuario(usuarioFinal)
          authService.salvarUsuario(usuarioFinal)
        }
      } catch (error) {
        console.error("Erro ao carregar os dados do usuário:", error)
        authService.logout()
        setToken(null)
        setUsuario(null)
      } finally {
        setLoading(false)
      }
    }

    carregarDadosDoUsuario()
  }, [])

  async function handleLogin() {
    setErro(null)
    const emailFormatado = email.trim().toLowerCase()
    const senhaAtual = senha.trim() // se colocar to loWerCase() aqui quebra na requisicao se tiver maiuscula.

    if (!emailFormatado || !senhaAtual) {
      setErro("Preencha todos os campos..")
      return
    }

    try {
      setLoading(true)

      const response = await authService.login({
        email: emailFormatado,
        senha: senhaAtual,
      })

      const tokenRecebido = response.token
      setToken(tokenRecebido)

      const usuarioDecodificado = decodificarToken(tokenRecebido)
      const dadosUsuarioAPI = await authService.getUsuario(emailFormatado)

      const usuarioEncontrado: UsuarioGET = 
        {
          usuarioId: dadosUsuarioAPI?.usuarioId ?? usuarioDecodificado?.usuarioId ?? 0,
          nome: dadosUsuarioAPI?.nome ?? usuarioDecodificado?.nome ?? "Usuário",
          email: dadosUsuarioAPI?.email ?? usuarioDecodificado?.email ?? emailFormatado,
          primeiroAcesso: dadosUsuarioAPI?.primeiroAcesso ?? false,
          statusUsuario: dadosUsuarioAPI?.statusUsuario ?? true,
          tipoUsuario: dadosUsuarioAPI?.tipoUsuario ?? usuarioDecodificado?.tipoUsuario ?? 0, 
          //<p> nao sei como mas funcionou</p>
        }

      setUsuario(usuarioEncontrado)
      authService.salvarUsuario(usuarioEncontrado)

      setEmail("")
      setSenha("")

      toast.success("Bem vindo ao sistema "+ usuarioEncontrado.nome)
      console.log("sucesso")
      setTimeout(() => {
        router.replace("/home")
      }, 3000)
    } 
      catch (error: any) 
        {
          console.log("chegouErro")

          const status = error?.response?.status
          if (status === 400 || status === 401 || status === 404) {
            const data = error.response.data
            console.log("erro1")
            const mensagem = typeof data === "string" ? data : data?.message
            setErro(mensagem || "E-mail ou senha inválidos.")
            toast.error(mensagem || "E-mail ou senha incorretos")
            console.log("erro2")
          } else {
            console.log('erro catch')
            setErro("Não foi possível conectar ao servidor.")
          }
          } 
            finally {
              setLoading(false)
            }
  }

  async function loginComToken(tokenRecode: string){

try {
      setLoading(true)
      const usuarioDecodificado = decodificarToken(tokenRecode)

      if (!usuarioDecodificado || !usuarioDecodificado.email) {
        throw new Error("Token inválido")
      }

      // Salva o token usando o mesmo padrão do seu authService
      // (Se o seu authService tiver um método salvarToken, use-o aqui; caso contrário, mantenha o localStorage)
      localStorage.setItem("token", tokenRecode)
      setToken(tokenRecode)

      const dadosUsuarioAPI = await authService.getUsuario(usuarioDecodificado.email)

      const usuarioEncontrado: UsuarioGET = {
        usuarioId: dadosUsuarioAPI?.usuarioId ?? usuarioDecodificado.usuarioId ?? 0,
        nome: dadosUsuarioAPI?.nome ?? usuarioDecodificado.nome ?? "Usuário",
        email: dadosUsuarioAPI?.email ?? usuarioDecodificado.email,
        primeiroAcesso: dadosUsuarioAPI?.primeiroAcesso ?? false,
        statusUsuario: dadosUsuarioAPI?.statusUsuario ?? true,
        tipoUsuario: dadosUsuarioAPI?.tipoUsuario ?? usuarioDecodificado.tipoUsuario ?? 0,
      }

      setUsuario(usuarioEncontrado)
      authService.salvarUsuario(usuarioEncontrado)

      toast.success("Bem vindo ao sistema " + usuarioEncontrado.nome)
      router.replace("/home")
    } catch (error) {
      console.error("Erro ao autenticar com LinkedIn:", error)
      toast.error("Falha ao processar login com LinkedIn.")
      router.replace("/login")
    } finally {
      setLoading(false)
    }

  }

  function logout() {
    authService.logout()
    setToken(null)
    setUsuario(null)
    router.replace("/login")
  }

  function atualizarEstadoUsuario(novosDados: Partial<UsuarioGET>) {
    setUsuario((prev) => {
      if (!prev) return null
      const atualizado = { ...prev, ...novosDados }
      authService.salvarUsuario(atualizado)
      return atualizado
    })
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        token,
        email,
        setEmail,
        senha,
        setSenha,
        loading,
        erro,
        handleLogin,
        loginComToken,
        logout,
        atualizarEstadoUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider")
  }

  return context
}