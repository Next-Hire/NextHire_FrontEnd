'use client';

import { useState } from 'react';
import './cardVaga.module.css';

export type PrioridadeVaga = 'baixa' | 'media' | 'alta';

interface CardVagaProps {
    titulo?: string;
    periodo?: string;
    prioridade?: PrioridadeVaga;
    descricao?: string;
}

const PRIORIDADE_STYLES: Record<PrioridadeVaga, { texto: string; cor: string }> = {
    baixa: {
        texto: 'Prioridade baixa',
        cor: 'bg-green-100 text-green-900',
    },
    media: {
        texto: 'Prioridade média',
        cor: 'bg-yellow-100 text-yellow-900',
    },
    alta: {
        texto: 'Prioridade alta',
        cor: 'bg-red-100 text-red-900',
    },
};

export default function CardVaga({
    titulo = 'Desenvolvedor Pleno - Back-end(Python/Django)',
    periodo = '12/11/2026 - 12/12/2026',
    prioridade = 'media',
    descricao = 'Buscamos uma pessoa Desenvolvedora Back-end Pleno com experiência em Python e Django para atuar na construção de APIs REST escaláveis, integração de serviços e manutenção do banco de dados junto ao time de engenharia.',
}: CardVagaProps) {
    const [aberto, setAberto] = useState(false);
    const badge = PRIORIDADE_STYLES[prioridade];

    return (
        <main className='mainCardVaga'>
            <div
                onClick={() => setAberto(!aberto)}
                className='cardVaga'
            >
                <h3 className='tituloCardVaga'>{titulo}</h3>
                <p className='periodoCardVaga'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-clock preview-icon shrink-0"><path d="M16 14v2.2l1.6 1" /><path d="M16 2v3" /><path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338" /><path d="M3 9h5.859" /><path d="M8 2v3" /><circle cx="16" cy="16" r="6" /></svg>{periodo}
                </p>
                <p className={`w-40 text-center text-sm font-semibold font-(family-name:--font-jost)  rounded-md px-5 py-1 shadow-sm ${badge.cor}`}>
                    {badge.texto}
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-arrow-big-down preview-icon text-blue-950 transition-transform duration-300 ${aberto ? 'rotate-180' : ''}`}><path d="M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-7.086 7.086a1 1 0 0 1-1.414 0l-7.086-7.086a.707.707 0 0 1 .5-1.207H8a1 1 0 0 0 1-1z" /></svg>
            </div>

            {aberto && (
                <div className='cardVagaAberto'>
                    <div className='flex flex-col h-25 justify-around mb-5'>
                        <h3 className='subtituloCardVagaAberto'>Descrição da vaga</h3>
                        <p className='txtCardVagaAberto'>
                            {descricao}
                        </p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <a href="/detalheVaga" className='linkCardVagaAberto'>Ver detalhes da vaga <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-to-line preview-icon w-5 "><path d="M17 12H3" /><path d="m11 18 6-6-6-6" /><path d="M21 5v14" /></svg></a>
                        <button className='btnCardVagaAberto'>Baixar informações da vaga</button>
                    </div>
                </div>
            )}
        </main>
    );
}