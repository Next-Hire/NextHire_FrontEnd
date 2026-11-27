'use client';

import {useEffect, useState} from "react";
import Header from "@/components/header/header";
import { ArrowUp, CalendarCheck2, CalendarDays } from 'lucide-react';
import './home.css';
import CardAgendaHome from "@/components/cardAgendaHome/cardAgendaHome";
import MiniCalendarioHome from "@/components/calendario/miniCalendarioHome";
import GraficoCandidatos from "@/components/graficos/graficoCandidatos";
import GraficoVagas, { type SetorVagasData } from "@/components/graficos/graficoVagas";
import { useHome } from "@/hooks/useHome";

import {
	SelectRoot,
	SelectTrigger,
	SelectValue,
	SelectPortal,
	SelectPositioner,
	SelectPopup,
	SelectItem,
} from '@/components/select/select';

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
	const {
		entrevistasHoje,
		totalVagas,
		totalProcessos,
		totalEntrevistas,
		totalEntrevistasHoje,
		setor,
		loading,
	} = useHome();

	const opcoesSetores = [
		{ value: "Geral", label: "Geral" },
		...setor.map((item) => ({
			value: item.nomeSetor,
			label: item.nomeSetor,
		})),
	];

	const [setoresSelecionados, setSetoresSelecionados] = useState<string[]>(['Geral']);

	const dadoGeral: SetorVagasData = {
		setor: 'Geral',
		vagasAbertas: dadosVagasPorSetor.reduce((acc, item) => acc + item.vagasAbertas, 0),
		processoAndamento: dadosVagasPorSetor.reduce((acc, item) => acc + item.processoAndamento, 0),
		entrevistas: dadosVagasPorSetor.reduce((acc, item) => acc + item.entrevistas, 0),
	};

	const todasAsOpcoes: SetorVagasData[] = [dadoGeral, ...dadosVagasPorSetor];

	const handleMudarSetores = (novosValores: string[]) => {
		if (novosValores.length === 0) {
			setSetoresSelecionados(['Geral']);
			return;
		}

		const clicouEmGeral = !setoresSelecionados.includes('Geral') && novosValores.includes('Geral');

		if (clicouEmGeral) {
			setSetoresSelecionados(['Geral']);
		} else {
			setSetoresSelecionados(novosValores.filter((v) => v !== 'Geral'));
		}
	};

	const dadosFiltrados = todasAsOpcoes.filter((item) =>
		setoresSelecionados.includes(item.setor)
	);

	return (
		<>
			<Header />
			<main className='containerMain'>
				<div className='layoutGuide'>

					<div className='saudacao card'>
						<div className='flex items-end gap-[1%]'>
							<h1>Olá!</h1>
							<p>Aqui está sua visão operacional completa para hoje.</p>
						</div>
						<div className='flex flex-col'>
							<SelectRoot defaultValue='Último mês'>
								<SelectTrigger>
									<SelectValue placeholder='Data' />
								</SelectTrigger>

								<SelectPortal>
									<SelectPositioner>
										<SelectPopup>
											<SelectItem value='Último mês'>Último mês</SelectItem>
											<SelectItem value='Últimos 3 meses'>Últimos 3 meses</SelectItem>
											<SelectItem value='Últimos 6 meses'>Últimos 6 meses</SelectItem>
											<SelectItem value='Último ano'>Último ano</SelectItem>
										</SelectPopup>
									</SelectPositioner>
								</SelectPortal>
							</SelectRoot>
						</div>
					</div>

					{/* Seção 1 - Gráfico candidatos e agenda entrevistas */}
					<section className='graficoCandidatosAgenda'>
						<article className='card'>
							<h3>Visão geral de candidatos</h3>
							<GraficoCandidatos
								emAnalise={105}
								entrevistaMarcada={55}
								dispensados={30}
							/>
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

							{loading ? (
								<p className='text-sm text-gray-500 py-4'>Carregando agenda...</p>
							) : entrevistasHoje.length === 0 ? (
								<p className='text-sm text-gray-500 py-4'>Nenhuma entrevista marcada para hoje.</p>
							) : (
								entrevistasHoje.map((entrevista) => (
									<CardAgendaHome
										key={entrevista.entrevistaId}
										entrevista={entrevista}
									/>
								))
							)}
						</article>
					</section>

					{/* Seção 2 - Gráfico vagas e kpi */}
					<section className='vagasKpi flex gap-[4%]'>
						<article className='card flex-1 flex flex-col gap-4'>
							<div className='relative flex items-center justify-center w-full px-4 min-h-10'>
								<h3>Visão Geral de vagas</h3>

								<div className='absolute right-4'>
									<SelectRoot
										multiple
										value={setoresSelecionados}
										onValueChange={handleMudarSetores}
									>
										<SelectTrigger>
											<SelectValue placeholder='Setores'>
												{(valores: string[]) => {
													if (!valores || valores.length === 0 || valores.includes('Geral')) {
														return 'Geral';
													}
													if (valores.length === setor.length) {
														return 'Todos os setores';
													}
													return valores.join(', ');
												}}
											</SelectValue>
										</SelectTrigger>

										<SelectPortal>
											<SelectPositioner>
												{loading ? (
													<SelectItem value="carregando" disabled>
														Carregando setores...
													</SelectItem>
												) : setor.length === 0 ? (
													<SelectItem value="vazio" disabled>
														Nenhum setor encontrado
													</SelectItem>
												) : (
													opcoesSetores.map((item) => (
														<SelectItem key={item.value} value={item.value}>
															{item.label}
														</SelectItem>
													))
												)}
											</SelectPositioner>
										</SelectPortal>
									</SelectRoot>
								</div>
							</div>

							<GraficoVagas dados={dadosFiltrados} />
						</article>

						{/* Kpis */}
						<div className='estatisticas flex flex-col gap-[6%]'>
							<article className='card flex items-center justify-center'>
								<div>
									<h2>{loading ? "..." : totalVagas}</h2>
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

							<article className='card flex items-center justify-center'>
								<div>
									<h2>{loading ? "..." : totalProcessos}</h2>
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

							<article className='card flex items-center justify-center'>
								<div>
									<h2>{loading ? "..." : totalEntrevistas}</h2>
								</div>
								<div className='textosCardEstatisticas'>
									<h3>Entrevistas marcadas</h3>
									<div className='comparacao'>
										<div className='destaqueComparacao gap-1'>
											<CalendarCheck2 size={18} />
											<p>{loading ? "..." : totalEntrevistasHoje}</p>
										</div>
										<p>marcadas hoje</p>
									</div>
								</div>
							</article>
						</div>
					</section>

					{/* Seção 3 - Calendário */}
					<section className='calendario'>
						<article className='card flex flex-col'>
							<h3>Calendário de entrevistas</h3>
							<MiniCalendarioHome />
						</article>
					</section>

				</div>
			</main>
		</>
	);
}
