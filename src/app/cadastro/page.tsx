'use client';
import GhostFibers from '@/components/ghostfibers/GhostFibers';
import './cadastro.css';

export default function CadastroPage() {
  return (
    <main className='cadastroPage'>
      <div className='fixed inset-0 -z-10'>
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

      <section className='containerForm'>
        <h1 className='tituloCadastro'>Cadastro</h1>
        <form className='formularioCadastro'>
          <div className='flex flex-col justify-between h-18'>
            <label className='label' htmlFor='nome'>Nome:</label>
            <input className='input' type='text' id='nome' name='nome' placeholder='Seu nome aqui' />
          </div>

          <div className='flex flex-col justify-between h-18'>
            <label className='label' htmlFor='email'>Email:</label>
            <input className='input' type='email' id='email' name='email' placeholder='emailfuncionario@vortex.com' />
          </div>

          <div className='flex flex-col justify-between h-18'>
            <label className='label' htmlFor='senha'>Senha:</label>
            <input className='input' type='password' id='senha' name='senha' placeholder='Digite a senha' />
          </div>

          <div className='flex flex-col justify-between h-18'>
            <label className='label' htmlFor='confirmarSenha'>Confirmar Senha:</label>
            <input className='input' type='password' id='confirmarSenha' name='confirmarSenha' placeholder='Insira novamente a senha' />
          </div>
          <div className='flex flex-col gap-3 mt-5'>
            <button className='botaoEscuro' type='submit'>Cadastrar</button>
            <a href='/home' className='linkAdministrador'>Entrar no sistema como administrador</a>
          </div>
        </form>
      </section>

      <aside className='flex flex-col justify-center items-center text-center'>
        <h1 className='tituloBemVindo'>Seja bem vindo ao NextHire</h1>
        <h2 className='subtituloBemVindo'>Seu sistema para criação de vagas e avaliação de candidatos</h2>
      </aside>
    </main>
  );
}