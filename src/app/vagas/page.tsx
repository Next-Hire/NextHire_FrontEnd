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
  const [termoBuscado, setTermoBuscado] = useState("");
  const [setorSelecionado, setSetorSelecionado] = useState("");
  const [prioridadeSelecionada, setPrioridadeSelcionada] = useState("");

  const {
    numeroVagas,
    vagas,
    carregando,
    error,
    filtrarVagas
  } = useVagas();

  const vagasFiltradas = filtrarVagas(
    termoBuscado,
    setorSelecionado,
    prioridadeSelecionada
  );

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
          termo={termoBuscado}
          aoDigitar={setTermoBuscado}
          setor={setorSelecionado}
          aoMudarSetor={setSetorSelecionado}
          prioridade={prioridadeSelecionada}
          aoMudarPrioridade={setPrioridadeSelcionada}
        />

        <ListaVaga vagas={vagasFiltradas} />
      </section>
    </main>
  );
}