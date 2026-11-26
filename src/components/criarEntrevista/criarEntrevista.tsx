'use client';

import { useState } from 'react';
import { CalendarIcon, Plus, X } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar } from '@/components/calendario/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/calendario/popover';
import {
    SelectRoot,
    SelectTrigger,
    SelectValue,
    SelectPortal,
    SelectPositioner,
    SelectPopup,
    SelectItem,
} from '@/components/select/select';
import './criarEntrevista.css';

export default function CriarEntrevista() {
    const [aberto, setAberto] = useState(false);
    const [dataEntrevista, setDataEntrevista] = useState<Date | undefined>(
        new Date()
    );

    return (
        <div>
            <button
                type='button'
                className='botaoEscuro flex items-center justify-center gap-2'
                onClick={() => setAberto(true)}
            >
                <Plus className='w-5 h-5' />
                Agendar nova entrevista
            </button>

            {aberto && (
                <div
                    className='sobreposicaoCriarEntrevista'
                    onClick={() => setAberto(false)}
                >
                    <div
                        className='card h-160 w-170 p-8 flex flex-col gap-6 justify-center'
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Cabeçalho do Modal */}
                        <div className='flex items-center justify-between pb-4'>
                            <h3 className='tituloCriarEntrevista'>
                                Agendar nova entrevista
                            </h3>
                            <button
                                type='button'
                                onClick={() => setAberto(false)}
                                className='botaoClaro'
                                aria-label='Fechar modal'
                            >
                                <X className='w-5 h-5' />
                            </button>
                        </div>

                        {/* Formulário do Pop-up */}
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col'>
                                <label className='label'>
                                    Vaga
                                </label>
                                <input
                                    type='text'
                                    placeholder='Pesquise a vaga...'
                                    className='input'
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className='label'>
                                    Entrevistador
                                </label>
                                <input
                                    type='text'
                                    placeholder='Nome do entrevistador...'
                                    className='input'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='label'>
                                    Candidato
                                </label>
                                <input
                                    type='text'
                                    placeholder='Nome do candidato...'
                                    className='input'
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className='label'>
                                    Etapa da entrevista
                                </label>
                                <SelectRoot defaultValue=''>
                                    <SelectTrigger className='h-10 w-full'>
                                        <SelectValue placeholder='Selecione a etapa...' />
                                    </SelectTrigger>
                                    <SelectPortal>
                                        <SelectPositioner>
                                            <SelectPopup>
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


                            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                                {/* Data da entrevista */}
                                <div className='flex flex-col'>
                                    <label className='label'>
                                        Data
                                    </label>
                                    <Popover>
                                        <PopoverTrigger className='input flex items-center justify-between cursor-pointer'>
                                            <span
                                                className={
                                                    dataEntrevista
                                                        ? 'text-blue-950 font-medium'
                                                        : 'text-blue-950/50'
                                                }
                                            >
                                                {dataEntrevista
                                                    ? format(
                                                        dataEntrevista,
                                                        'dd/MM/yyyy',
                                                        { locale: ptBR }
                                                    )
                                                    : 'Selecione a data'}
                                            </span>
                                            <CalendarIcon className='w-4 h-4 text-blue-950 shrink-0' />
                                        </PopoverTrigger>
                                        <PopoverContent
                                            align='start'
                                            className='w-auto p-3 bg-white border-2 border-blue-950 rounded-lg shadow-lg'
                                        >
                                            <Calendar
                                                mode='single'
                                                selected={dataEntrevista}
                                                onSelect={setDataEntrevista}
                                                locale={ptBR}
                                                className='font-(family-name:--font-jost) text-blue-950'
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                {/* Horário de Início */}
                                <div className='flex flex-col'>
                                    <label className='label'>
                                        Horário de início
                                    </label>
                                    <input
                                        type='time'
                                        defaultValue='00:00'
                                        className='input'
                                    />
                                </div>

                                {/* Horário de Término */}
                                <div className='flex flex-col'>
                                    <label className='label'>
                                        Horário de término
                                    </label>
                                    <input
                                        type='time'
                                        defaultValue='00:00'
                                        className='input'
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Rodapé com botões de ação */}
                        <div className='flex items-center justify-end gap-4 pt-4 border-t border-blue-950/15'>
                            <button
                                type='button'
                                onClick={() => setAberto(false)}
                                className='botaoClaro mx-0 w-auto'
                            >
                                Cancelar
                            </button>
                            <button
                                type='button'
                                onClick={() => setAberto(false)}
                                className='botaoEscuro flex items-center justify-center'
                            >
                                Salvar entrevista
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
