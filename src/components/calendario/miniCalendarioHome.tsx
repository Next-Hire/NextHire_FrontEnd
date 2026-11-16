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
            <h3 className='text-2xl font-semibold text-blue-950 font-(family-name:--font-instrument-sans)'>
                Calendário de Entrevistas
            </h3>

            <Calendar
                mode='single'
                selected={diaSelecionado}
                onSelect={setDiaSelecionado}
                locale={ptBR}
                modifiers={{
                    comEntrevista: DATAS_COM_ENTREVISTA,
                }}
                className='font-(family-name:--font-jost) text-blue-950 [--cell-size:--spacing(9)] bg-transparent'
                components={{
                    DayButton: ({ children, modifiers, className, ...props }) => {
                        const temEntrevista = modifiers.comEntrevista;

                        return (
                            <CalendarDayButton
                                modifiers={modifiers}
                                className={`relative ${
                                    temEntrevista
                                        ? 'text-blue-950 font-semibold'
                                        : 'text-slate-400 font-normal'
                                } ${className ?? ''}`}
                                {...props}
                            >
                                {children}
                                {temEntrevista && (
                                    <span
                                        className='absolute top-1 right-1 w-2 h-2 rounded-full bg-green-500'
                                        aria-label='Entrevista marcada'
                                    />
                                )}
                            </CalendarDayButton>
                        );
                    },
                }}
            />

            {/* Legenda */}
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

