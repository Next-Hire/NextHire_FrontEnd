'use client';

import './filtroEntrevista.css';
import { useState } from 'react';
import { format, startOfWeek, subWeeks, addWeeks } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import {
    SelectRoot,
    SelectTrigger,
    SelectValue,
    SelectPortal,
    SelectPositioner,
    SelectPopup,
    SelectItem,
} from '@/components/select/select';

interface FiltroEntrevistaProps {
    dataBase?: Date;
    setDataBase?: (data: Date) => void;
    setFiltroTipo?: (tipo: string) => void;
}

export default function FiltroEntrevista({
    dataBase: dataBaseProp,
    setDataBase: setDataBaseProp,
    setFiltroTipo: setFiltroTipoProp,
}: FiltroEntrevistaProps) {
    const hoje = new Date();
    const [dataInterna, setDataInterna] = useState<Date>(hoje);
    const dataBase = dataBaseProp ?? dataInterna;
    const atualizarData = setDataBaseProp ?? setDataInterna;

    const inicioSemana = startOfWeek(dataBase, { weekStartsOn: 1 });

    return (
        <div className='topoEntrevistaCard'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
                <div className='flex items-center gap-3'>
                    <h1 className='tituloEntrevista'>Entrevistas</h1>
                </div>

                <button type='button' className='btnAgendarEntrevista'>
                    <Plus className='w-5 h-5' />
                    Agendar nova entrevista
                </button>
            </div>

            <div className='flex flex-wrap items-center justify-between gap-4 pt-2'>
                {/* Controles Hoje / Semana Anterior / Próxima Semana + Mês Atual */}
                <div className='flex items-center gap-3'>
                    <button
                        type='button'
                        onClick={() => atualizarData(hoje)}
                        className='btnHoje'
                    >
                        Hoje
                    </button>

                    <div className='flex items-center gap-1.5'>
                        <button
                            type='button'
                            onClick={() =>
                                atualizarData(subWeeks(dataBase, 1))
                            }
                            className='btnNavSemana'
                            aria-label='Semana anterior'
                        >
                            <ChevronLeft className='w-5 h-5' />
                        </button>
                        <button
                            type='button'
                            onClick={() =>
                                atualizarData(addWeeks(dataBase, 1))
                            }
                            className='btnNavSemana'
                            aria-label='Próxima semana'
                        >
                            <ChevronRight className='w-5 h-5' />
                        </button>
                    </div>

                    <h2 className='text-2xl font-bold text-blue-950 font-(family-name:--font-instrument-sans) ml-4'>
                        {format(inicioSemana, "MMMM 'de' yyyy", {
                            locale: ptBR,
                        })}
                    </h2>
                </div>

                {/* Filtro por etapa e legenda rápida */}
                <div className='flex flex-wrap items-center gap-6'>
                    <div className='flex items-center gap-6'>
                        <span className='flex items-center gap-1.5 font-(family-name:--font-instrument-sans) font-semibold text-blue-950 text-base text-shadow-sm'>
                            <span className='w-3 h-3 rounded-sm bg-blue-200 border border-blue-950 inline-block' />
                            Triagem RH
                        </span>
                        <span className='flex items-center gap-1.5 font-(family-name:--font-instrument-sans) font-semibold text-blue-950 text-base text-shadow-sm'>
                            <span className='w-3 h-3 rounded-sm bg-blue-950 inline-block' />
                            Gestor
                        </span>
                    </div>

                    <SelectRoot
                        defaultValue='todas'
                        onValueChange={(val) =>
                            setFiltroTipoProp?.(val ?? 'todas')
                        }
                    >
                        <SelectTrigger className='h-9 w-52'>
                            <SelectValue placeholder='Filtrar por etapa...' />
                        </SelectTrigger>
                        <SelectPortal>
                            <SelectPositioner>
                                <SelectPopup>
                                    <SelectItem value='todas'>
                                        Todas as etapas
                                    </SelectItem>
                                    <SelectItem value='triagem'>
                                        Triagem RH
                                    </SelectItem>
                                    <SelectItem value='gestor'>
                                        Entrevista com Gestor
                                    </SelectItem>
                                </SelectPopup>
                            </SelectPositioner>
                        </SelectPortal>
                    </SelectRoot>
                </div>
            </div>
        </div>
    );
}
