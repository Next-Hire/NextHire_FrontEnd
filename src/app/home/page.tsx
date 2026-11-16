import Header from "@/components/header/header";
import { ArrowUp, CalendarCheck2, CalendarDays } from 'lucide-react';
import './home.module.css';
import CardAgendaHome from "@/components/cardAgendaHome/cardAgendaHome";
import MiniCalendarioHome from "@/components/calendario/miniCalendarioHome";

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
									<ArrowUp size={20} />
									<p>+3</p>
								</div>
								<p>vs. mês passado</p>
							</div>
						</article>

						<article className='card'>
							<h3>Processos em andamento</h3>
							<p>99</p>
							<div className='comparacao'>
								<div className='destaqueComparacao'>
									<ArrowUp size={20} />
									<p>+3</p>
								</div>
								<p>concluídos nesse mês</p>
							</div>
						</article>

						<article className='card'>
							<h3>Entrevistas marcadas</h3>
							<p>55</p>
							<div className="comparacao">
								<div className='destaqueComparacao gap-1 items-center'>
									<CalendarCheck2 size={20} />
									<p>3</p>
								</div>
								<p>marcadas hoje</p>
							</div>
						</article>
					</section>

					<section className='agendaCalendario'>
						<article className='card'>
							<h3>Calendário de entrevistas</h3>
							<MiniCalendarioHome />
						</article>
						<article className='card h-min'>
							<div className='topoAgenda'>
								<div>
									<CalendarDays size={28} />
								</div>
								<div className='flex gap-1'>
									<h3>Entrevistas -</h3>
									<h3>Hoje</h3>
								</div>
							</div>
							<CardAgendaHome />
							<CardAgendaHome />
							<CardAgendaHome />
						</article>
					</section>

					<section className='graficos flex gap-[4%]'>
						<article className='card'>
							<h3>Visão Geral de vagas</h3>
						</article>

						<article className='card'>
							<h3>Visão geral de candidatos</h3>
						</article>
					</section>

				</div>
			</main>
		</>
	);
}