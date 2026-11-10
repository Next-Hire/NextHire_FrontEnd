import GhostFibers from '@/components/ghostfibers/GhostFibers';
import './login.css';

export default function LoginPage() {
  return (
    <main className='loginPage'>
      <div className='fixed inset-0 -z-10'>
        <GhostFibers
          glowColor="#3b82f6"
          layers={3}
          twist={1.55}
          threads={39}
          fiberStyle="dots"
          depthOfField={0.75}
          hoverEffect="focus"
          intro={true}
          mouseInteraction={true}
          lineColor="#063ed4"
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
        <h1 className='tituloLogin'>Login</h1>
        <form className='formularioLogin'>
          <div className='flex flex-col justify-between h-18'>
            <label className='labelLogin' htmlFor='email'>Email:</label>
            <input className='inputLogin' type='email' id='email' name='email' placeholder='emailfuncionario@vortex.com' />
          </div>

          <div className='flex flex-col justify-between h-18'>
            <label className='labelLogin' htmlFor='senha'>Senha:</label>
            <input className='inputLogin' type='password' id='senha' name='senha' placeholder='Digite a senha' />
          </div>
        </form>
        <div className='flex flex-col items-center justify-between h-18'>
          <button className='botaoLogin' type='submit'>Entrar</button>
          <a className='linkAdministrador' href='/login'>Esqueceu a senha?</a>
        </div>
      </section>

      <aside className='asideLogin'>
        <h1 className='bemvindoLogin'>Seja bem vindo ao NextHire</h1>
        <h2 className='subtituloBemvindo'>Seu sistema para criação de vagas e avaliação de candidatos</h2>
      </aside>
    </main>
  );
}