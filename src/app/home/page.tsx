import Header from "@/components/header/header";
import { ArrowUp, CalendarCheck2, CalendarDays } from 'lucide-react';
import './home.module.css';
import CardAgendaHome from "@/components/cardAgendaHome/cardAgendaHome";
import MiniCalendarioHome from "@/components/calendario/miniCalendarioHome";
import GraficoCandidatos from "@/components/graficos/graficoCandidatos";
import GraficoVagas, { type SetorVagasData } from "@/components/graficos/graficoVagas";

const dadosVagasPorSetor: SetorVagasData[] = [
	{
		setor: "TI",
		vagasAbertas: 14,
		processoAndamento: 9,
		entrevistas: 6,
	},
	{
		setor: "RH",
		vagasAbertas: 8,
		processoAndamento: 5,
		entrevistas: 4,
	},
	{
		setor: "Administração",
		vagasAbertas: 11,
		processoAndamento: 7,
		entrevistas: 3,
	},
];

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
							<div>
								<h2>99</h2>
							</div>
							<div className='textosCardEstatisticas'>
								<h3>Vagas abertas</h3>
								<div className='comparacao'>
									<div className='destaqueComparacao'>
										<ArrowUp size={18} />
										<p>+3</p>
									</div>
									<p>vs. mês passado</p>
								</div>
							</div>
						</article>

						<article className='card'>
							<div>
								<h2>99</h2>
							</div>
							<div className='textosCardEstatisticas'>
								<h3>Processos em andamento</h3>
								<div className='comparacao'>
									<div className='destaqueComparacao'>
										<ArrowUp size={18} />
										<p>+3</p>
									</div>
									<p>concluídos nesse mês</p>
								</div>
							</div>
						</article>

						<article className='card'>
							<div>
								<h2>55</h2>
							</div>
							<div className='textosCardEstatisticas'>
								<h3>Entrevistas marcadas</h3>
								<div className='comparacao'>
									<div className='destaqueComparacao gap-1'>
										<CalendarCheck2 size={18} />
										<p>3</p>
									</div>
									<p>marcadas hoje</p>
								</div>
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
							<GraficoVagas dados={dadosVagasPorSetor} />
						</article>

						<article className='card'>
							<h3>Visão geral de candidatos</h3>
							<GraficoCandidatos
								emAnalise={85}
								entrevistaMarcada={55}
								dispensados={30}
							/>
						</article>
					</section>

				</div>
			</main>
		</>
	);
}