'use client';

import { useState } from 'react';
import { ptBR } from 'date-fns/locale';
import { Calendar, CalendarDayButton } from '@/components/calendario/calendar';

// Datas mockadas com entrevistas no mês atual
const hoje = new Date();
const anoAtual = hoje.getFullYear();
const mesAtual = hoje.getMonth();

const DATAS_COM_ENTREVISTA: Date[] = [
    new Date(anoAtual, mesAtual, 4),
    new Date(anoAtual, mesAtual, 9),
    new Date(anoAtual, mesAtual, 12),
    new Date(anoAtual, mesAtual, 16),
    new Date(anoAtual, mesAtual, 19),
    new Date(anoAtual, mesAtual, 24),
    new Date(anoAtual, mesAtual, 27),
];

export default function MiniCalendarioHome() {
    const [diaSelecionado, setDiaSelecionado] = useState<Date | undefined>(hoje);

    return (
        <div className='flex flex-col items-center justify-between w-full h-full py-4 px-6'>
            <Calendar
                mode='single'
                selected={diaSelecionado}
                onSelect={setDiaSelecionado}
                locale={ptBR}
                modifiers={{
                    comEntrevista: DATAS_COM_ENTREVISTA,
                }}
                className='w-full font-(family-name:--font-jost) text-blue-950 [--cell-size:--spacing(10)] bg-transparent'
                classNames={{
                    root: 'w-full',
                    months: 'w-full relative',
                    month: 'w-full flex flex-col gap-4',
                    month_caption: 'flex justify-center items-center w-full h-10',
                    caption_label: 'text-xl font-medium text-blue-950 capitalize',
                    nav: 'flex items-center justify-between w-full h-10 absolute top-0 left-0 pointer-events-none',
                    button_previous: 'pointer-events-auto absolute left-[35%] h-10 w-10 flex items-center justify-center rounded-lg hover:bg-slate-100 [&_svg]:size-6 cursor-pointer',
                    button_next: 'pointer-events-auto absolute right-[35%] h-10 w-10 flex items-center justify-center rounded-lg hover:bg-slate-100 [&_svg]:size-6 cursor-pointer',
                    month_grid: 'w-full border-collapse',
                    weekdays: 'flex w-full',
                    weekday: 'flex-1 text-center font-normal text-sm text-slate-500',
                    week: 'flex w-full mt-2',
                    day: 'flex-1 h-12 p-0 text-center',
                }}
                components={{
                    DayButton: ({ children, modifiers, className, ...props }) => {
                        const temEntrevista = modifiers.comEntrevista;

                        return (
                            <CalendarDayButton
                                modifiers={modifiers}
                                className={`relative aspect-auto h-12 w-full ${temEntrevista
                                        ? 'text-blue-950 font-semibold'
                                        : 'text-slate-400 font-normal'
                                    } ${className ?? ''}`}
                                {...props}
                            >
                                {children}
                                {temEntrevista && (
                                    <span
                                        className='absolute top-2.5 right-12 w-2 h-2 rounded-full bg-green-500'
                                        aria-label='Entrevista marcada'
                                    />
                                )}
                            </CalendarDayButton>
                        );
                    },
                }}
            />
            
            <div className='flex items-center justify-center gap-6 pt-2 border-t border-blue-950/10 w-full text-sm font-(family-name:--font-jost)'>
                <div className='flex items-center gap-2 text-blue-950 font-medium'>
                    <span className='w-2.5 h-2.5 rounded-full bg-green-500 shrink-0' />
                    <span>Dia com entrevista</span>
                </div>
                <div className='flex items-center gap-2 text-slate-400 font-medium'>
                    <span className='w-2.5 h-2.5 rounded-full bg-slate-300 shrink-0' />
                    <span>Sem entrevistas</span>
                </div>
            </div>
        </div>
    );
}

