"use client";
import { VagaRecebida } from '@/@types/vaga';
import FiltroVagas from '@/components/filtroVagas/filtroVagas';
import Header from '@/components/header/header';
import ListaVaga from '@/components/listaVaga/listaVaga';
import { useCurriculoVaga } from '@/hooks/useCurriculoVaga';
import { useVagas } from '@/hooks/useVagas';
import { vagaService } from '@/service/vagaService';
import { useEffect, useState } from 'react';

export default function VagasPage() {
  //
  const {
    numeroVagas,
    vagas,
    carregando,
    error,
    filtrarVagas
  } = useVagas();

  const {
    curriculoVaga,
    totalCandidatos,
    vagasPorCandidato,
    totalVagas,
    listarCuriculosPorVagaId,
    listarVagasPorCandidatoId,
    efetuarCandidatura,
    cancelarCandidatura,
    avaliarCandidatura
  } = useCurriculoVaga();

  return (
    <main>
      <Header />
      <section className='flex flex-col items-center py-8'>
        <FiltroVagas
          totalCandidatos={totalCandidatos}
          totalVagas={totalVagas}
          numeroVagas={numeroVagas}
        />

        <ListaVaga vagas={vagas} />
      </section>
    </main>
  );
}