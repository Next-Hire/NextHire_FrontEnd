export default function CadastroPage() {
  return (
    <main className='grid grid-cols-2'>
      <section className="flex flex-col justify-around items-center bg-linear-to-r from-white-500 to-blue-100/55 h-[100vh]">
        <h1 className="text-5xl font-[family-name:var(--font-instrument-sans)] font-bold text-blue-950 ">Cadastro</h1>
        <form className="flex flex-col justify-between h-80">
          <div className="flex flex-col justify-between h-14">
            <label className="font-semibold text-blue-950" htmlFor="nome">Nome:</label>
            <input className="" type="text" id="nome" name="nome" />
          </div>  

          <div className="flex flex-col justify-between h-14">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="flex flex-col justify-between h-14">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" />
          </div>

          <div className="flex flex-col justify-between h-14">
            <label htmlFor="confirmarSenha">Confirmar Senha:</label>
            <input type="password" id="confirmarSenha" name="confirmarSenha" />
          </div>
        </form>

        <button type="submit">Cadastrar</button>
        <a href="/login">Entrar no sistema como administrador</a>
      </section>

      <aside>
        <h1>Seja bem vindo ao NextHire</h1>
        <h2>Seu sistema para criação de vagas e avaliação de candidatos</h2>
      </aside>
    </main>
  );
}