import Header from '@/components/header/header';
import './detalheVaga.css';
import InformacoesVaga from '@/components/detalhesVaga/informacoesVaga';

export default function DetalheVagaPage() {
    return (
        <main className='flex flex-col justify-center'>
            <Header />
            <section className='flex flex-col w-[80%]'>
                <h1 className='tituloDetalhe'>Desenvolvedor Pleno - Back-end(Python/Django)</h1>
                <div className='flex justify-between w-145 pl-36'>
                    <div className='flex'>
                        <p className='font-(family-name:--font-jost) text-base font-semibold pr-2'>Publicação: </p>
                        <p className='font-(family-name:--font-jost) font-bold text-blue-950'>11/11/2026</p>
                    </div>
                    <div className='flex'>
                        <p className='font-(family-name:--font-jost) text-base font-semibold pr-2'>Encerramento: </p>
                        <p className='font-(family-name:--font-jost) font-bold text-blue-950'>11/12/2026</p>
                    </div>
                </div>
            </section>
            <section className='flex flex-col justify-center items-center'>
                <InformacoesVaga />
            </section>
        </main>
    );
}