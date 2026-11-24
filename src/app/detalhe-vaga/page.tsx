import Header from '@/components/header/header';
import './detalheVaga.css';
import InformacoesVaga from '@/components/detalhesVaga/informacoesVaga';

export default function DetalheVagaPage() {
    return (
        <main className='flex flex-col justify-center'>
            <Header />
            <section className='flex flex-col w-[80%] py-5'>
                <h1 className='tituloDetalhe'>Desenvolvedor Pleno - Back-end(Python/Django)</h1>
                <div className='flex justify-between w-250 pl-38'>
                    <div className='flex'>
                        <p className='font-(family-name:--font-jost) text-base font-semibold pr-2'>Publicação: </p>
                        <p className='font-(family-name:--font-jost) font-bold text-blue-950'>11/11/2026</p>
                    </div>
                    <div className='flex'>
                        <p className='font-(family-name:--font-jost) text-base font-semibold pr-2'>Encerramento: </p>
                        <p className='font-(family-name:--font-jost) font-bold text-blue-950'>11/12/2026</p>
                    </div>
                    <div className='flex'>
                        <p className='font-(family-name:--font-jost) text-base font-semibold pr-2'>Incritos: </p>
                        <p className='font-(family-name:--font-jost) font-bold text-blue-950'>000</p>
                    </div>
                    <p className={`w-40 text-center text-sm font-semibold font-(family-name:--font-jost)  rounded-md px-5 py-1 shadow-sm bg-green-100 text-green-900`}>
                        Prioridade Baixa
                    </p>
                </div>
            </section>
            <section className='flex flex-col justify-center items-center'>
                <InformacoesVaga />
            </section>
            <div className='flex justify-end my-6 mb-15 mr-38'>
                <button className='btnEditar'>Editar vaga <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-pen preview-icon"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg></button>

                <button type='button' className='btnBaixar'>
                    Baixar vaga
                </button>
            </div>
        </main>
    );
}