'use client'; // Necessário pois o seletor de calendário usa estado (useState) e interações de clique

import { useState } from 'react';
import Header from '@/components/header/header';
import './criarVaga.css';

// 1. Importações para formatação de data em português (date-fns) e tipagem de intervalo (react-day-picker)
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { type DateRange } from 'react-day-picker';
import { CalendarIcon } from 'lucide-react';

// 2. Importações dos componentes do shadcn/ui (Popover + Calendar)
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

export default function CriarVagaPage() {
    // 3. Estado que armazena a data de início (periodo.from) e a data final (periodo.to) da vaga
    const [periodo, setPeriodo] = useState<DateRange | undefined>({
        from: undefined,
        to: undefined,
    });

    return (
        <main className='mainCriarVaga'>
            <Header />
            <section className='sectionCriarVaga'>
                <h1 className='tituloCriarVaga'>Adicionar nova vaga</h1>
                <div className='secaoFormVaga'>

                    <div className='flex flex-col'>
                        <h2 className='subtituloCriarVaga'>Título da vaga</h2>
                        <input
                            type='text'
                            placeholder='Digite aqui o título da vaga...'
                            className='inputCriarVaga'
                        />

                        {/* Campo: Descrição da vaga */}
                        <div className='flex flex-col'>
                            <h2 className='subtituloCriarVaga'>Descrição da vaga</h2>
                            <textarea
                                placeholder='Digite aqui a descrição da vaga...'
                                className='textareaCriarVaga'
                            />
                        </div>
                    </div>

                    {/* Linha com Período (Calendário shadcn/ui), Setor e Prioridade */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {/* 4. Seletor de Data (Popover + Calendar do shadcn/ui) */}
                        <div className='flex flex-col'>
                            <h2 className='subtituloCriarVaga'>Período da vaga</h2>
                            <Popover>
                                {/* O PopoverTrigger transforma o botão abaixo no gatilho que abre o calendário */}
                                <PopoverTrigger className='btnSeletorData'>
                                    <span className={periodo?.from ? 'text-blue-950 font-medium' : 'text-blue-950/50'}>
                                        {periodo?.from ? (
                                            periodo.to ? (
                                                // Exibe "DD/MM/AAAA - DD/MM/AAAA" quando início e fim foram escolhidos
                                                `${format(periodo.from, 'dd/MM/yyyy', { locale: ptBR })} - ${format(periodo.to, 'dd/MM/yyyy', { locale: ptBR })}`
                                            ) : (
                                                // Exibe apenas a data inicial enquanto o usuário escolhe a data final
                                                format(periodo.from, 'dd/MM/yyyy', { locale: ptBR })
                                            )
                                        ) : (
                                            'Selecione o período (Início - Fim)'
                                        )}
                                    </span>
                                    <CalendarIcon className='w-5 h-5 text-blue-950 shrink-0' />
                                </PopoverTrigger>

                                {/* Janela flutuante que exibe o calendário estilizado com as cores do projeto */}
                                <PopoverContent align='start' className='w-auto p-3 bg-white border-2 border-blue-950 rounded-lg shadow-lg'>
                                    <Calendar
                                        mode='range' // Permite selecionar intervalo (data de abertura e fechamento)
                                        selected={periodo}
                                        onSelect={setPeriodo}
                                        numberOfMonths={2} // Mostra 2 meses lado a lado para facilitar a escolha do período
                                        locale={ptBR} // Deixa os meses e dias da semana em português
                                        className='font-(family-name:--font-jost) text-blue-950'
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* Campo: Setor */}
                        <div className='flex flex-col'>
                            <h2 className='subtituloCriarVaga'>Setor</h2>
                            <select name='setor' id='setor' className='selectCriarVaga' defaultValue=''>
                                <option value='' disabled>Selecione o setor...</option>
                                <option value='Governança'>Governança</option>
                                <option value='TI'>Tecnologia</option>
                                <option value='RH'>Recursos Humanos</option>
                            </select>
                        </div>

                        {/* Campo: Prioridade */}
                        <div className='flex flex-col'>
                            <h2 className='subtituloCriarVaga'>Prioridade</h2>
                            <select name='prioridade' id='prioridade' className='selectCriarVaga' defaultValue=''>
                                <option value='' disabled>Selecione a prioridade...</option>
                                <option value='baixa'>Prioridade baixa</option>
                                <option value='media'>Prioridade média</option>
                                <option value='alta'>Prioridade alta</option>
                            </select>
                        </div>
                    </div>

                    {/* Botão de salvar */}
                    <div className='flex justify-end mt-2'>
                        <button type='button' className='btnSalvarVaga'>
                            Salvar vaga
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}