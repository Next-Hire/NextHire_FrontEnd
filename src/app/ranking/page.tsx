import CardRanking from "@/components/cardRanking/cardRanking";
import Header from "@/components/header/header";
import { Clock, Funnel, Search } from 'lucide-react';

export default function RankingPage() {
    return (
        <>
            <Header />
            <main className='flex justify-center min-h-[88vh] py-8'>
                <div className='flex flex-col w-4/5 gap-[3vw]'>

                    {/* Seção inicial */}
                    <section className='card flex flex-col gap-4'>
                        <h1 className='titulo'>Ranking de candidatos: <span>Desenvolvedor Full-Stack</span></h1>
                        <div className='flex gap-1 items-center '>
                            <Clock size={18} color="#7D8EC4" />
                            <p className='text-lg text-[#7D8EC4]'>Última atualização: <span className='text-gray-600 font-medium'>hoje às 9:00am</span></p>
                        </div>
                    </section>

                    {/* Seção Ranking */}
                    <section className='card flex flex-col gap-6 font-(family-name:--font-instrument-sans)'>
                        <div>
                            <h4 className='text-3xl text-blue-950 font-semibold'>Ranking - <span>25 candidatos</span></h4>
                            <p>Ordenado por compatibilidade com a vaga</p>
                        </div>
                        <div className='flex'>
                            <div className='relative'>
                                <Search className='absolute inset-y-0 left-3 my-auto h-4 w-4' />
                                <input
                                    type="text"
                                    placeholder='Buscar candidato...'
                                    className='inputFiltro pl-[32px]!'
                                />
                            </div>
                            <div className='relative'>
                                <Funnel className='absolute inset-y-0 left-3 my-auto h-4 w-4' />
                                <input
                                    type="text"
                                    className='inputFiltro pl-[32px]!'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <CardRanking/>
                            <CardRanking/>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}