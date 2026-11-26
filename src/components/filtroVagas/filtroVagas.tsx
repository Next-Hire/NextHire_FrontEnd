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

interface filtroVagasProps {
    numeroVagas: number,
    totalCandidatos: number,
    totalVagas: number,
    termo: string,
    aoDigitar: (novoTermo: string) => void,
    setor: string,
    aoMudarSetor: (novoSetor: string) => void,
    prioridade: string,
    aoMudarPrioridade: (novaPrioridade: string) => void
};

export default function FiltroVagas(props: filtroVagasProps) {
    return (
        <main className='mainFiltroVaga'>
            <div className='flex content-center self-center justify-between w-[94%]'>
                <h1 className='tituloFiltroVaga'>Vagas em andamento</h1>
                <button className='btnAdicionarVaga' onClick={() => window.location.href = '/criar-vaga'}>+ Abrir nova vaga</button>
            </div>
            <div className='flex content-center self-center justify-between w-[94%]'>
                <input
                    type="text"
                    placeholder='Pesquisar por vaga, candidato...'
                    className='inputFiltroVaga'
                    value={props.termo}
                    onChange={(e) => props.aoDigitar(e.target.value)} />
                <div className='flex flex-col'>
                    <SelectRoot defaultValue='' value={props.setor} onValueChange={props.aoMudarSetor} >
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
                    <SelectRoot defaultValue='' value={props.prioridade} onValueChange={props.aoMudarPrioridade}>
                        <SelectTrigger>
                            <SelectValue placeholder='Prioridade...' />
                        </SelectTrigger>

                        <SelectPortal>
                            <SelectPositioner>
                                <SelectPopup>
                                    { nivelPrioridadeEnum.map((prioridade) => (
                                        <SelectItem key={prioridade[2]} value={prioridade[0]}>{prioridade[1]}</SelectItem>
                                    ))}
                                </SelectPopup>
                            </SelectPositioner>
                        </SelectPortal>
                    </SelectRoot>
                </div>
            </div>
            <div className='flex content-center self-center justify-between w-[94%]'>
                <p className='txtFiltroVaga'>Candidatos: {props.totalCandidatos} </p>
                <p className='txtFiltroVaga'>Questionários enviados: {props.totalCandidatos}</p>
                <p className='txtFiltroVaga'>Vagas: {props.numeroVagas}</p>
            </div>
        </main>
    );
}