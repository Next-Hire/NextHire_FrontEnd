import Header from "@/components/header/header";
import { ArrowUp, CalendarCheck2 } from 'lucide-react';
import './home.module.css';

export default function Home() {
    return (
        <>
            <Header/>
            <main className='containerMain'>
                <div className='layoutGuide'>

                    <div className='saudacao'>
                        <h1>Olá!</h1>
                        <p>Aqui está sua visão operacional completa para hoje.</p>
                    </div>

                    <section className='estatisticas'>
                        <article className='border-blue-950'>
                            <h3>Vagas abertas</h3>
                            <p>99</p>
                            <div className='comparacao'>
                                <ArrowUp/>
                                <p>+3</p>
                                <p>vs. mês passado</p>
                            </div>
                        </article>

                        <article>
                            <h3>Processos seletivos em andamento</h3>
                            <p>99</p>
                            <div className='comparacao'>
                                <ArrowUp/>
                                <p>+3</p>
                                <p>concluídos nesse mês</p>
                            </div>
                        </article>

                       <article>
                            <h3>Entrevistas marcadas</h3>
                            <p>55</p>
                            <div className="comparacao">
                                <CalendarCheck2/>
                                <p>3</p>
                                <p>marcadas hoje</p>
                            </div>
                        </article>
                    </section>
                    
                    <section className="graficoAgenda">
                        <article></article>
                        <article></article>
                    </section>

                </div>
            </main>
        </>
    );
}