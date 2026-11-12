import FiltroVagas from '@/components/filtroVagas/filtroVagas';
import './vagas.css';
import Header from '@/components/header/header';
import CardVaga from '@/components/cardVaga/cardVaga';
import ListaVaga from '@/components/listaVaga/listaVaga';

export default function LoginPage() {
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