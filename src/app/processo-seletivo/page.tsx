'use client';

import Header from "@/components/header/header";
import { Search } from 'lucide-react';
import {
    SelectRoot,
    SelectTrigger,
    SelectValue,
    SelectPortal,
    SelectPositioner,
    SelectPopup,
    SelectItem,
} from '@/components/select/select';
import CardProcessoSeletivo from "@/components/cardProcessoSeletivo/cardProcessoSeletivo";
import { useState } from "react";
import CardProcessoSeletivoAlto from "@/components/cardProcessoSeletivo/cardProcessoSeletivo";

export interface Setor {
    setor: string;
}

const setores: Setor[] = [
    { setor: "TI" },
    { setor: "RH" },
    { setor: "Administração" },
];

export interface Prioridade {
    prioridade: string;
}

const prioridades: Prioridade[] = [
    { prioridade: "Prioridade Alta" },
    { prioridade: "Prioridade Média" },
    { prioridade: "Prioridade Baixa" },
];

export default function ProcessoSeletivoPage() {
    const [setoresSelecionados, setSetoresSelecionados] = useState<string[]>(['Todos os setores']);
    const [selectSetoresAberto, setSelectSetoresAberto] = useState(false);

    const handleMudarSetores = (novosValores: string[]) => {
        if (novosValores.length === 0) {
            setSetoresSelecionados(["Todos os setores"]);
            return;
        }

        const clicouEmTodos =
            !setoresSelecionados.includes("Todos os setores") &&
            novosValores.includes("Todos os setores");

        if (clicouEmTodos) {
            setSetoresSelecionados(["Todos os setores"]);
            setSelectSetoresAberto(false);
            return;
        }

        const semTodos = novosValores.filter((v) => v !== "Todos os setores");
        setSetoresSelecionados(semTodos.length > 0 ? semTodos : ["Todos os setores"]);
    };

    const [prioridadesSelecionadas, setPrioridadesSelecionadas] = useState<string[]>(['Todas as prioridades']);
    const [selectPrioridadeAberta, setSelectPrioridadeAberta] = useState(false);

    const handleMudarPrioridades = (novosValores: string[]) => {
        if (novosValores.length === 0) {
            setPrioridadesSelecionadas(["Todas as prioridades"]);
            return;
        }

        const clicouEmTodas =
            !prioridadesSelecionadas.includes("Todas as prioridades") &&
            novosValores.includes("Todas as prioridades");

        if (clicouEmTodas) {
            setPrioridadesSelecionadas(["Todas as prioridades"]);
            setSelectPrioridadeAberta(false);
            return;
        }

        const semTodas = novosValores.filter((v) => v !== "Todas as prioridades");
        setPrioridadesSelecionadas(semTodas.length > 0 ? semTodas : ["Todas as prioridades"]);
    };

    return (
        <>
            <Header />
            <main className='containerMainProcessoSeletivo flex justify-center min-h-[88vh] py-8'>
                <div className='layoutGuide flex flex-col w-4/5 gap-[3vw]'>
                    <section className='topoFiltros'>
                        <article className='card flex flex-col gap-6'>
                            <h1 className='titulo'>Processos Seletivos em Andamento</h1>

                            <div className='filtros flex flex-wrap items-center gap-8'>
                                <div className='relative'>
                                    <Search className='absolute inset-y-0 left-3 my-auto h-4 w-4' />
                                    <input
                                        type="text"
                                        placeholder='Pesquisar por processo, candidato...'
                                        className='inputFiltro pl-[32px]!'
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <SelectRoot
                                        multiple
                                        open={selectSetoresAberto}
                                        onOpenChange={setSelectSetoresAberto}
                                        value={setoresSelecionados}
                                        onValueChange={handleMudarSetores}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Todos os setores">
                                                {(valores: string[]) => {
                                                    if (!valores || valores.length === 0 || valores.length === setores.length || valores.includes('Todos os setores')) {
                                                        return "Todos os setores";
                                                    }
                                                    return valores.join(", ");
                                                }}
                                            </SelectValue>
                                        </SelectTrigger>

                                        <SelectPortal>
                                            <SelectPositioner>
                                                <SelectPopup className='flex flex-col gap-1'>
                                                    <SelectItem value="Todos os setores">
                                                        Todos os setores
                                                    </SelectItem>

                                                    {setores.map((item) => (
                                                        <SelectItem key={item.setor} value={item.setor}>
                                                            {item.setor}
                                                        </SelectItem>
                                                    ))}
                                                </SelectPopup>
                                            </SelectPositioner>
                                        </SelectPortal>
                                    </SelectRoot>
                                </div>

                                <div className='flex flex-col'>
                                    <SelectRoot
                                        multiple
                                        open={selectPrioridadeAberta}
                                        onOpenChange={setSelectPrioridadeAberta}
                                        value={prioridadesSelecionadas}
                                        onValueChange={handleMudarPrioridades}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Todas as prioridades">
                                                {(valores: string[]) => {
                                                    if (!valores || valores.length === 0 || valores.length === prioridades.length || valores.includes('Todas as prioridades')) {
                                                        return "Todas as prioridades";
                                                    }
                                                    return valores.join(", ");
                                                }}
                                            </SelectValue>
                                        </SelectTrigger>

                                        <SelectPortal>
                                            <SelectPositioner>
                                                <SelectPopup className='flex flex-col gap-1'>
                                                    <SelectItem value="Todas as prioridades">
                                                        Todas as prioridades
                                                    </SelectItem>

                                                    {prioridades.map((item) => (
                                                        <SelectItem key={item.prioridade} value={item.prioridade}>
                                                            {item.prioridade}
                                                        </SelectItem>
                                                    ))}
                                                </SelectPopup>
                                            </SelectPositioner>
                                        </SelectPortal>
                                    </SelectRoot>
                                </div>
                            </div>

                            <div className='flex gap-10 font-medium text-base text-blue-950 font-(family-name:--font-instrument-sans)'>
                                <div>
                                    <p><span>32</span> Candidatos totais</p>
                                </div>
                                <div>
                                    <p><span>16</span> Processos seletivos em andamento</p>
                                </div>
                            </div>
                        </article>
                    </section>

                    <section className='grid grid-cols-3 justify-between gap-8'>
                        <CardProcessoSeletivo prioridade_vaga_enum="alto" />
                        <CardProcessoSeletivo prioridade_vaga_enum="medio"/>
                        <CardProcessoSeletivo prioridade_vaga_enum="baixo"/>
                        <CardProcessoSeletivo prioridade_vaga_enum="baixo"/>
                        <CardProcessoSeletivo prioridade_vaga_enum="medio"/>
                        <CardProcessoSeletivo prioridade_vaga_enum="alto" />
                        <CardProcessoSeletivo prioridade_vaga_enum="baixo"/>
                        <CardProcessoSeletivo prioridade_vaga_enum="alto"/>
                    </section>
                </div>
            </main>
        </>
    );
}