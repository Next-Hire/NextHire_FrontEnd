"use client";
import { VagaRecebida } from '@/@types/vaga';
import FiltroVagas from '@/components/filtroVagas/filtroVagas';
import Header from '@/components/header/header';
import ListaVaga from '@/components/listaVaga/listaVaga';
import { useVagas } from '@/hooks/useVagas';
import { vagaService } from '@/service/vagaService';
import { useEffect, useState } from 'react';

export default function VagasPage() {
  //
  const {
    vagas,
    carregando,
    error,
    filtrarVagas
  } = useVagas();

  return (
    <main>
      <Header />
      <section className='flex flex-col items-center py-8'>
        <FiltroVagas />
        <ListaVaga vagas={vagas} />
      </section>
    </main>
  );
}