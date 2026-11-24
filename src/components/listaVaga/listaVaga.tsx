"use client";

import { useEffect, useState } from 'react';
import { useStackId } from 'recharts/types/cartesian/BarStack';
import { PrioridadeVaga, VagaRecebida } from '@/@types/vaga';
import CardVaga from '../cardVaga/cardVaga';
import { vagaService } from '@/service/vagaService';

export default function ListaVaga() {
    const [vagas, setVagas] = useState<VagaRecebida[]>()
    const [carregado, setCarregado] = useState(false);

    async function carregarVagas() {
        try {
            setCarregado(true);
            const data = await vagaService.listarVagas()

            if (!Array.isArray(data)) {
                setVagas([]);
                return;
            }

            setVagas(data);
        } catch (error) {
            console.error("Erro ao carregar vagas", error);
        } finally {
            setCarregado(false);
        }
    }

    const formatarData = (data?: Date | string | null) => {
        if (!data) return ""; // ou "A definir"
        return new Date(data).toLocaleDateString("pt-BR");
    };

    useEffect(() => {
        carregarVagas();
    }, [])

    return (
        <main className='flex flex-col items-center justify-around min-h-130 gap-4 py-4 w-[100%]'>
            {vagas?.map((vaga) => (
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