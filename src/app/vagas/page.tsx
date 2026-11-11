import FiltroVagas from '@/components/filtroVagas/filtroVagas';
import './vagas.module.css';
import Header from '@/components/header/header';

export default function LoginPage() {
  return (
    <main className='bg-blue-800/15'>
      <Header />
      <section className='flex flex-col items-center'>
      <FiltroVagas />
      </section>
    </main>
  );
}