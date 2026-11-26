'use client';

import GhostFibers from '@/components/ghostfibers/GhostFibers';
import './login.css';
import { useAuth } from '@/context/AuthContext';
import React from 'react';
// import {  } from '@/context/AuthContext';


export default function LoginPage() {

  const {
    email,
    setEmail,
    senha,
    setSenha,
    loading,
    erro,
    handleLogin,
    usuario
  } = useAuth()

  function realizarLogin(e: React.FormEvent) {
    e.preventDefault()
    handleLogin()
  }




  return (
    <main className='loginPage'>
      <div className='fixed inset-0 -z-10 opacity-85'>
        <GhostFibers
          glowColor="#66a5ecff"
          layers={3}
          twist={1.55}
          threads={40}
          fiberStyle="dots"
          depthOfField={0.75}
          hoverEffect="focus"
          intro={true}
          mouseInteraction={true}
          lineColor="#4c72daff"
          secondaryColor="#069fd4"
          gradient="across"
          waves={0.4}
          volume={0.65}
          spread={1.15}
          scale={0.85}
          perspective={0.59}
          thickness={0.9}
          foldGlow={3}
          speed={0}
          flow={-0.3}
          rollSpeed={0.14}
          focusDepth={0.2}
          particles={0.55}
          sparkle={0.55}
          glow={0.75}
          brightness={1.55}
          vignette={0}
          grain={0}
          mouseStrength={1.55}
          lightMode
        />
      </div>

      <section className='containerForm '>
        <h1 className='tituloLogin'>Login</h1>
        <form className='formularioLogin' onSubmit={realizarLogin}>
          <div className='flex flex-col justify-between h-18'>
            <label className='labelLogin' htmlFor='email'>Email:</label>
            <input className='inputLogin' type='email' id='email' name='email' placeholder='emailfuncionario@vortex.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='flex flex-col justify-between h-18'>
            <label className='labelLogin' htmlFor='senha'>Senha:</label>
            <input className='inputLogin' type='password' id='senha' name='senha' placeholder='Digite a senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
          </div>

          <div className='flex flex-col gap-3 mt-5'>
            <button className='botaoLogin' type='submit'>Entrar</button>
            <a className='linkAdministrador' href='/login'>Esqueceu a senha?</a>
            <a href="https://localhost:7232/api/v1/Auth/LinkedIn">
              Entrar com LinkedIn
            </a>
          </div>
        </form>
      </section>

      <aside className='asideLogin'>
        <h1 className='bemvindoLogin'>Seja bem vindo ao NextHire</h1>
        <h2 className='subtituloBemvindo'>Seu sistema para criação de vagas e avaliação de candidatos</h2>
      </aside>
    </main>
  );

}