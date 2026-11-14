'use client'; // Necessário pois o seletor de calendário usa estado (useState) e interações de clique

import { useState } from 'react';
import Header from '@/components/header/header';
import './criarVaga.css';

// --- Bibliotecas de calendário e data ---
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { type DateRange } from 'react-day-picker';
import { CalendarIcon } from 'lucide-react';

// --- Componentes do calendário e popover do projeto ---
import { Calendar } from '@/components/calendario/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/calendario/popover';

// --- Select customizado com estilo alinhado ao restante do layout ---
import {
    SelectRoot,
    SelectTrigger,
    SelectValue,
    SelectPortal,
    SelectPositioner,
    SelectPopup,
    SelectItem,
} from '@/components/select/select';

export default function CriarVagaPage() {
    // --- Estado do período da vaga para o calendário ---
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

                    <div className='flex flex-col justify-between h-60'>

                        <div className='flex flex-col'>
                            <h2 className='subtituloCriarVaga'>Título da vaga</h2>
                            <input
                                type='text'
                                placeholder='Digite aqui o título da vaga...'
                                className='inputCriarVaga'
                            />
                        </div>

                        {/* Campo: descrição da vaga */}
                        <div className='flex flex-col'>
                            <h2 className='subtituloCriarVaga'>Descrição da vaga</h2>
                            <textarea
                                placeholder='Digite aqui a descrição da vaga...'
                                className='textareaCriarVaga'
                            />
                        </div>
                    </div>

                    {/* Linha com Período, Setor e Prioridade */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {/* Seletor de data do calendário */}
                        <div className='flex flex-col'>
                            <h2 className='subtituloCriarVaga'>Período da vaga</h2>
                            <Popover>
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

                        {/* Campo: Setor usando Select customizado do Base UI */}
                        <div className='flex flex-col'>
                            <h2 className='subtituloCriarVaga'>Setor</h2>
                            <SelectRoot defaultValue=''>
                                <SelectTrigger>
                                    <SelectValue placeholder='Selecione o setor...' />
                                </SelectTrigger>

                                <SelectPortal>
                                    <SelectPositioner>
                                        <SelectPopup>
                                            <SelectItem value='Governança'>Governança</SelectItem>
                                            <SelectItem value='TI'>Tecnologia</SelectItem>
                                            <SelectItem value='RH'>Recursos Humanos</SelectItem>
                                        </SelectPopup>
                                    </SelectPositioner>
                                </SelectPortal>
                            </SelectRoot>
                        </div>

                        {/* Campo: Prioridade usando Select customizado do Base UI */}
                        <div className='flex flex-col'>
                            <h2 className='subtituloCriarVaga'>Prioridade</h2>
                            <SelectRoot defaultValue=''>
                                <SelectTrigger>
                                    <SelectValue placeholder='Selecione a prioridade...' />
                                </SelectTrigger>

                                <SelectPortal>
                                    <SelectPositioner>
                                        <SelectPopup>
                                            <SelectItem value='baixa'>Prioridade baixa</SelectItem>
                                            <SelectItem value='media'>Prioridade média</SelectItem>
                                            <SelectItem value='alta'>Prioridade alta</SelectItem>
                                        </SelectPopup>
                                    </SelectPositioner>
                                </SelectPortal>
                            </SelectRoot>
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