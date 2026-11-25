'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';


export default function CriarEntrevista() {

    const [aberto, setAberto] = useState(false);

    return (
        <main>
            <button type='button' className='botaoEscuro' onClick={() => setAberto(!aberto)}>
                <Plus className='w-5 h-5' />
                Agendar nova entrevista
            </button>

            {aberto && (
                <div className='flex justify-center rounded-lg shadow-md'>
                    <div className='flex flex-col h-25 justify-around p-10'>
                        <h3 className='tituloCriarVaga'>Adicionar nova entrevista</h3>
                        <p className='txtCardVagaAberto'>
                        </p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <a href="/detalhe-vaga" className='linkCardVagaAberto'>Ver detalhes da vaga <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-to-line preview-icon w-5 "><path d="M17 12H3" /><path d="m11 18 6-6-6-6" /><path d="M21 5v14" /></svg></a>
                        <button className='btnCardVagaAberto'>Baixar informações da vaga</button>
                    </div>
                </div>
            )}
        </main>
    );
}