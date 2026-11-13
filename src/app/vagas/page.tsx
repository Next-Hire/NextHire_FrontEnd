import FiltroVagas from '@/components/filtroVagas/filtroVagas';
import Header from '@/components/header/header';
import ListaVaga from '@/components/listaVaga/listaVaga';

export default function VagasPage() {
  return (
    <main className='bg-blue-800/15'>
      <Header />
      <section className='flex flex-col items-center py-8'>
        <FiltroVagas />
        <ListaVaga />
      </section>
    </main>
  );
}