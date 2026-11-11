import Header from "@/components/header/header";
import { ArrowUp, CalendarCheck2 } from 'lucide-react';
import './home.module.css';

export default function Home() {
	return (
		<>
			<Header />
			<main className='containerMain'>
				<div className='layoutGuide'>

					<div className='saudacao'>
						<h1>Olá!</h1>
						<p>Aqui está sua visão operacional completa para hoje.</p>
					</div>

					<section className='estatisticas'>
						<article className='card'>
							<h3>Vagas abertas</h3>
							<p>99</p>
							<div className='comparacao'>
								<div className='destaqueComparacao'>
									<ArrowUp />
									<p>+3</p>
								</div>
								<p>vs. mês passado</p>
							</div>
						</article>

						<article className='card'>
							<h3>Processos seletivos em andamento</h3>
							<p>99</p>
							<div className='comparacao'>
								<div className='destaqueComparacao'>
									<ArrowUp />
									<p>+3</p>
								</div>
								<p>concluídos nesse mês</p>
							</div>
						</article>

						<article className='card'>
							<h3>Entrevistas marcadas</h3>
							<p>55</p>
							<div className="comparacao">
								<div className='destaqueComparacao gap-1'>
									<CalendarCheck2 />
									<p>3</p>
								</div>
								<p>marcadas hoje</p>
							</div>
						</article>
					</section>

					<section className="graficoAgenda">
						<article className='card'></article>
						<article className='card'></article>
					</section>

				</div>
			</main>
		</>
	);
}