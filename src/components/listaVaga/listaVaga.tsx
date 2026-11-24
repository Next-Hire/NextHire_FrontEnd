"use client";

import { useEffect, useState } from 'react';
import { useStackId } from 'recharts/types/cartesian/BarStack';
import { PrioridadeVaga, VagaRecebida } from '@/@types/vaga';
import CardVaga from '../cardVaga/cardVaga';
import { vagaService } from '@/service/vagaService';

interface ListaVagaProps{
    vagas: VagaRecebida[];
}

export default function ListaVaga({vagas}: ListaVagaProps) {
    const formatarData = (data?: Date | string | null) => {
        if (!data) return ""; // ou "A definir"
        return new Date(data).toLocaleDateString("pt-BR");
    };

    return (
        <main className='flex flex-col items-center justify-around min-h-130 gap-4 py-4 w-[100%]'>
            {vagas.map((vaga) => (
                <CardVaga
                    key={vaga.vagaId}
                    vagaId={vaga.vagaId}
                    titulo={vaga.titulo}
                    periodo={`${formatarData(vaga.dataAbertura)} - ${formatarData(vaga.dataFechamento)}`}
                    prioridade={vaga.nivelPrioridade}
                    descricao={vaga.descricao}
                />
            ))}
        </main>
    );
}