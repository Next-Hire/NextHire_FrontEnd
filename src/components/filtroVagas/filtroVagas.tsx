'use client'; // Necessário pois o seletor de calendário usa estado (useState) e interações de clique

import { useState } from 'react';
import Header from '@/components/header/header';

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
import './filtro.module.css';
import { nivelPrioridadeEnum } from '@/@types/nivelPrioridadeEnum';


export default function  FiltroVagas() {
    return (
        <main className='mainFiltroVaga'>
            <div className='flex content-center self-center justify-between w-[94%]'>
                <h1 className='tituloFiltroVaga'>Vagas em andamento</h1>
                <button className='btnAdicionarVaga' onClick={() => window.location.href = '/criar-vaga'}>+ Abrir nova vaga</button>
            </div>
            <div className='flex content-center self-center justify-between w-[94%]'>
                <input type="text" placeholder='Pesquisar por vaga, candidato...' className='inputFiltroVaga' />
                <div className='flex flex-col'>
                    <SelectRoot defaultValue=''>
                        <SelectTrigger>
                            <SelectValue placeholder='Setor...' />
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
                <div className='flex flex-col'>
                    <SelectRoot defaultValue=''>
                        <SelectTrigger>
                            <SelectValue placeholder='Prioridade...' />
                        </SelectTrigger>

                        <SelectPortal>
                            <SelectPositioner>
                                <SelectPopup>
                                    <SelectItem value={nivelPrioridadeEnum[0][0]}>Baixa</SelectItem>
                                    <SelectItem value={nivelPrioridadeEnum[1][0]}>Média</SelectItem>
                                    <SelectItem value={nivelPrioridadeEnum[2][0]}>Alta</SelectItem>
                                </SelectPopup>
                            </SelectPositioner>
                        </SelectPortal>
                    </SelectRoot>
                </div>
            </div>
            <div className='flex content-center self-center justify-between w-[94%]'>
                <p className='txtFiltroVaga'>00 Candidatos totais</p>
                <p className='txtFiltroVaga'>00 Questionários enviados</p>
                <p className='txtFiltroVaga'>00 Vagas</p>
            </div>
        </main>
    );
}