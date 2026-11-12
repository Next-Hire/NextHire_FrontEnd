'use client';

import { useState } from 'react';
import './cardVaga.module.css';

export default function CardVaga() {
    const [aberto, setAberto] = useState(false);

    return (
        <main className='flex flex-col bg-white rounded-lg w-4/5 shadow-md overflow-hidden transition-all duration-300'>
            <div
                onClick={() => setAberto(!aberto)}
                className='flex items-center justify-around h-20 w-full py-4 cursor-pointer'
            >
                <h3 className='font-(family-name:--font-instrument-sans) text-xl text-blue-950 font-semibold'>Desenvolvedor Pleno - Back-end(Python/Django)</h3>
                <p className='flex flex-row items-center gap-2 text-md font-semibold font-(family-name:--font-jost) text-blue-950'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-clock preview-icon"><path d="M16 14v2.2l1.6 1" /><path d="M16 2v3" /><path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338" /><path d="M3 9h5.859" /><path d="M8 2v3" /><circle cx="16" cy="16" r="6" /></svg>12/11/2026 - 12/12/2026
                </p>
                <p className='text-sm font-semibold font-(family-name:--font-jost) bg-yellow-100 text-yellow-800 rounded-md px-5 py-1 shadow-sm'>Prioridade média</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-arrow-big-down preview-icon text-blue-950 transition-transform duration-300 ${aberto ? 'rotate-180' : ''}`}><path d="M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-7.086 7.086a1 1 0 0 1-1.414 0l-7.086-7.086a.707.707 0 0 1 .5-1.207H8a1 1 0 0 0 1-1z" /></svg>
            </div>

            {aberto && (
                <div className='border-t border-blue-950/15 bg-blue-50/40 px-10 py-5 text-blue-950 font-(family-name:--font-jost)'>
                    <h3 className='font-(family-name:--font-instrument-sans) text-xl text-blue-950 font-semibold'>Descrição da vaga</h3>
                    <p className='text-sm leading-relaxed text-blue-950/85'>
                        Buscamos uma pessoa Desenvolvedora Back-end Pleno com experiência em Python e Django para atuar na construção de APIs REST escaláveis, integração de serviços e manutenção do banco de dados junto ao time de engenharia.
                    </p>
                    <a href="/detalheVaga" className='flex flex-row justify-between items-center w-44 underline'>Ver detalhes da vaga <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right-to-line preview-icon w-5"><path d="M17 12H3" /><path d="m11 18 6-6-6-6" /><path d="M21 5v14" /></svg></a>
                </div>
            )}
        </main>
    );
}