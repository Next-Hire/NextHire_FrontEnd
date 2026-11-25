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

export interface Setor {
    setor: string;
}

const setores: Setor[] = [
    { setor: "TI" },
    { setor: "RH" },
    { setor: "Administração" },
];

export default function ProcessoSeletivoPage() {
    const [setoresSelecionados, setSetoresSelecionados] = useState<string[]>([]);

    const handleMudarSetores = (novosValores: string[]) => {
        if (novosValores.includes("Todos os setores")) {
            setSetoresSelecionados([]);
            return;
        }

        setSetoresSelecionados(novosValores);
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
                                    <SelectRoot defaultValue='Último mês'>
                                        <SelectTrigger>
                                            <SelectValue placeholder='Data' />
                                        </SelectTrigger>

                                        <SelectPortal>
                                            <SelectPositioner>
                                                <SelectPopup>
                                                    <SelectItem value='Último mês'>Último mês</SelectItem>
                                                    <SelectItem value='Últimos 3 meses'>Últimos 3 meses</SelectItem>
                                                    <SelectItem value='Últimos 6 meses'>Últimos 6 meses</SelectItem>
                                                    <SelectItem value='Último ano'>Último ano</SelectItem>
                                                </SelectPopup>
                                            </SelectPositioner>
                                        </SelectPortal>
                                    </SelectRoot>
                                </div>
                            </div>

                            <div className='flex gap-10'>
                                <div>
                                    <p><span>32</span> Candidatos totais</p>
                                </div>
                                <div>
                                    <p><span>16</span> Processos seletivos em andamento</p>
                                </div>
                            </div>
                        </article>
                    </section>

                    <section className='flex gap-8'>
                        <CardProcessoSeletivo />
                        <CardProcessoSeletivo />
                    </section>
                </div>
            </main>
        </>
    );
}