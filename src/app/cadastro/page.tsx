import GhostFibers from '@/components/GhostFibers';
import './cadastro.module.css';

export default function CadastroPage() {
  return (
    <main className='cadastroPage'>
      <div className="fixed inset-0 -z-10">
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
        <h1 className="tituloCadastro">Cadastro</h1>
        <form className="formularioCadastro">
          <div className="flex flex-col justify-between h-14">
            <label className="labelCadastro" htmlFor="nome">Nome:</label>
            <input className="inputCadastro" type="text" id="nome" name="nome" placeholder="Seu nome aqui" />
          </div>

          <div className="flex flex-col justify-between h-14">
            <label className="labelCadastro" htmlFor="email">Email:</label>
            <input className="inputCadastro" type="email" id="email" name="email" />
          </div>

          <div className="flex flex-col justify-between h-14">
            <label className="labelCadastro" htmlFor="senha">Senha:</label>
            <input className="inputCadastro" type="password" id="senha" name="senha" />
          </div>

          <div className="flex flex-col justify-between h-14">
            <label className="labelCadastro" htmlFor="confirmarSenha">Confirmar Senha:</label>
            <input className="inputCadastro" type="password" id="confirmarSenha" name="confirmarSenha" />
          </div>
        </form>
        <div className="flex flex-col items-center justify-between h-18">
          <button className="botaoCadastro" type="submit">Cadastrar</button>
          <a className="font-display" href="/login">Entrar no sistema como administrador</a>
        </div>
      </section>

      <aside>
        <h1 className="font-display">Seja bem vindo ao NextHire</h1>
        <h2 className="font-sans">Seu sistema para criação de vagas e avaliação de candidatos</h2>
      </aside>
    </main>
  );
}