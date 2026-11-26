'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { usuarioService } from '@/service/usuarioService'
import { useRouter } from 'next/navigation'


export function useUsuario() {
  const [nome, setNome] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const [cargo, setCargo] = useState<number>(0)

  const [confirmarSenha, setConfirmarSenha] = useState<string>('')
  const [erro, setErro] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()

  const cadastrarCandidato = async (e: React.FormEvent) => {
    e.preventDefault()
    setErro(null)

    if (!nome.trim() || !email.trim() || !senha.trim()) {
      const msg = 'Preencha todos os campos obrigatórios'
      setErro(msg)
      toast.error(msg)
      return
    }

    if (senha !== confirmarSenha) {
      const msg = 'As senhas não coincidem!'
      setErro(msg)
      toast.error(msg)
      return
    }

    try {
      setLoading(true)
      await usuarioService.cadastrarCandidato({
        nome: nome.trim(),
        email: email.trim().toLowerCase(),
        senha: senha.trim()
      })

      toast.success(`Bem-vindo ao sistema, ${nome.trim()}!`)
      setTimeout(() => {
          router.replace('/login')
      }, 2000)
    } catch (error: any) {
      const msg = error.message || 'Erro ao realizar cadastro.'
      setErro(msg)
      toast.error(msg)
    } finally {
      setLoading(false)
    }
  }

  const cadastrarFuncionario = async (e: React.FormEvent, empresaId: number) => {
    e.preventDefault()
    setErro(null)

    if (!nome.trim() || !email.trim() || !senha.trim()) {
      const msg = 'Preencha todos os campos obrigatórios'
      setErro(msg)
      toast.error(msg)
      return
    }

    if (senha !== confirmarSenha) {
      const msg = 'As senhas não coincidem!'
      setErro(msg)
      toast.error(msg)
      return
    }

    try {
      setLoading(true)
      await usuarioService.cadastrarFuncionario({
        nome: nome.trim(),
        email: email.trim().toLowerCase(),
        cargo: cargo
      }, empresaId)

      toast.success(`Bem-vindo ao sistema, ${nome.trim()}!`)
      setTimeout(() => {
          router.replace('/login')
      }, 2000)
    } catch (error: any) {
      const msg = error.message || 'Erro ao realizar cadastro.'
      setErro(msg)
      toast.error(msg)
    } finally {
      setLoading(false)
    }
  }

  return {
    nome,
    setNome,
    email,
    setEmail,
    senha,
    setSenha,
    confirmarSenha,
    setConfirmarSenha,
    erro,
    loading,
    cadastrarCandidato,
  }
}