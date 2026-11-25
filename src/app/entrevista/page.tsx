'use client';

import { useState } from 'react';
import Header from '@/components/header/header';
import FiltroEntrevista from '@/components/filtroEntrevista/filtroEntrevista';
import './entrevista.css';
import {
    addDays,
    format,
    isSameDay,
    startOfWeek,
    subWeeks,
    addWeeks,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
    CalendarDays,
    ChevronLeft,
    ChevronRight,
    Clock,
    Copy,
    Check,
    Plus,
    User,
    Video,
    Briefcase,
    X,
} from 'lucide-react';
import { Calendar, CalendarDayButton } from '@/components/calendario/calendar';
import {
    SelectRoot,
    SelectTrigger,
    SelectValue,
    SelectPortal,
    SelectPositioner,
    SelectPopup,
    SelectItem,
} from '@/components/select/select';

type TipoEntrevista = 'triagem' | 'gestor';

interface EntrevistaEvento {
    id: number;
    candidato: string;
    iniciais: string;
    vaga: string;
    avaliador: string;
    diaOffset: number; // 0 = Segunda, 1 = Terça, 2 = Quarta, 3 = Quinta, 4 = Sexta
    horarioInicio: string;
    horarioFim: string;
    tipo: TipoEntrevista;
    linkMeet: string;
}

const HORARIOS_GRADE = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
];

// Converte "HH:mm" para total de minutos desde 00:00
function paraMinutos(horario: string): number {
    const [horas, minutos] = horario.split(':').map(Number);
    return horas * 60 + (minutos || 0);
}

// Calcula posição vertical (top) e altura (height) proporcional à linha de 1 hora (60 min = 100%)
function calcularEstiloDuracao(horarioInicio: string, horarioFim: string) {
    const inicioMin = paraMinutos(horarioInicio);
    const fimMin = paraMinutos(horarioFim);
    const duracaoMin = Math.max(30, fimMin - inicioMin); // Mínimo visual de 30 min
    const offsetMinutosNaHora = inicioMin % 60;

    const topPercent = (offsetMinutosNaHora / 60) * 100;
    const heightPercent = (duracaoMin / 60) * 100;

    return {
        top: `calc(${topPercent}% + 2px)`,
        height: `calc(${heightPercent}% - 4px)`,
    };
}

const ENTREVISTAS_MOCK: EntrevistaEvento[] = [
    {
        id: 1,
        candidato: 'João Silva',
        iniciais: 'JS',
        vaga: 'Desenvolvedor Sênior - Full Stack',
        avaliador: 'Mariana Souza (Tech Lead)',
        diaOffset: 0,
        horarioInicio: '09:00',
        horarioFim: '10:30',
        tipo: 'gestor',
        linkMeet: 'meet.nexthire.com/js-fullstack-sr',
    },
    {
        id: 2,
        candidato: 'Beatriz Oliveira',
        iniciais: 'BO',
        vaga: 'UX/UI Designer Júnior',
        avaliador: 'Camila Rocha (RH)',
        diaOffset: 0,
        horarioInicio: '14:00',
        horarioFim: '14:45',
        tipo: 'triagem',
        linkMeet: 'meet.nexthire.com/bo-uxui-triagem',
    },
    {
        id: 3,
        candidato: 'Lucas Mendes',
        iniciais: 'LM',
        vaga: 'Desenvolvedor Pleno - Back-end (Python/Django)',
        avaliador: 'Mariana Souza (Tech Lead)',
        diaOffset: 1,
        horarioInicio: '10:00',
        horarioFim: '11:30',
        tipo: 'gestor',
        linkMeet: 'meet.nexthire.com/lm-python-pleno',
    },
    {
        id: 4,
        candidato: 'Fernanda Costa',
        iniciais: 'FC',
        vaga: 'Engenheiro de Dados Pleno',
        avaliador: 'Ricardo Alves (Gestor)',
        diaOffset: 2,
        horarioInicio: '11:00',
        horarioFim: '12:00',
        tipo: 'gestor',
        linkMeet: 'meet.nexthire.com/fc-dados-gestor',
    },
    {
        id: 5,
        candidato: 'Rafael Santos',
        iniciais: 'RS',
        vaga: 'Desenvolvedor Pleno - Back-end (Python/Django)',
        avaliador: 'Camila Rocha (RH)',
        diaOffset: 2,
        horarioInicio: '15:00',
        horarioFim: '15:45',
        tipo: 'triagem',
        linkMeet: 'meet.nexthire.com/rs-python-triagem',
    },
    {
        id: 6,
        candidato: 'Amanda Lima',
        iniciais: 'AL',
        vaga: 'Analista de Recursos Humanos',
        avaliador: 'Camila Rocha (RH)',
        diaOffset: 3,
        horarioInicio: '09:00',
        horarioFim: '09:45',
        tipo: 'triagem',
        linkMeet: 'meet.nexthire.com/al-rh-triagem',
    },
    {
        id: 7,
        candidato: 'Gabriel Pereira',
        iniciais: 'GP',
        vaga: 'Desenvolvedor Sênior - Full Stack',
        avaliador: 'Ricardo Alves (Gestor)',
        diaOffset: 4,
        horarioInicio: '16:00',
        horarioFim: '17:00',
        tipo: 'gestor',
        linkMeet: 'meet.nexthire.com/gp-fullstack-final',
    },
];

const ESTILO_TIPO: Record<
    TipoEntrevista,
    { classe: string; label: string; badgeCor: string }
> = {
    gestor: {
        classe: 'eventoGestor',
        label: 'Entrevista com Gestor',
        badgeCor: 'bg-blue-950 text-white',
    },
    triagem: {
        classe: 'eventoTriagem',
        label: 'Triagem RH',
        badgeCor: 'bg-blue-100 text-blue-950',
    },
};

export default function EntrevistaPage() {
    const hoje = new Date();
    const [dataBase, setDataBase] = useState<Date>(hoje);

    const [filtroTipo, setFiltroTipo] = useState<string>('todas');

    const [entrevistaSelecionada, setEntrevistaSelecionada] =
        useState<EntrevistaEvento | null>(ENTREVISTAS_MOCK[2]);

    const [copiado, setCopiado] = useState(false);

    // Calcula a segunda-feira da semana selecionada
    const inicioSemana = startOfWeek(dataBase, { weekStartsOn: 1 });

    const diasSemana = Array.from({ length: 5 }, (_, index) =>
        addDays(inicioSemana, index)
    );

    // Datas com entrevistas marcadas para destacar no mini calendário
    const datasComEntrevista = ENTREVISTAS_MOCK.map((ev) =>
        addDays(inicioSemana, ev.diaOffset)
    );

    const entrevistasFiltradas = ENTREVISTAS_MOCK.filter((ev) =>
        filtroTipo === 'todas' || !filtroTipo ? true : ev.tipo === filtroTipo
    );

    const copiarLinkMeet = (link: string) => {
        navigator.clipboard?.writeText(`https://${link}`);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000);
    };

    return (
        <main className='mainEntrevista'>
            <Header />
            <section className='sectionEntrevista'>
                <FiltroEntrevista
                    dataBase={dataBase}
                    setDataBase={setDataBase}
                    setFiltroTipo={setFiltroTipo}
                />
                {/* Corpo principal: Barra Lateral (Mini Calendário + Detalhes da Sala Meet) + Grade Semanal */}
            <div className='layoutCalendarioMeet'>
                {/* Coluna Lateral Esquerda */}
                <aside className='painelLateralMeet'>
                    {/* Mini Calendário para navegação rápida */}
                    <div className='cardLateralMeet items-center'>
                        <Calendar
                            mode='single'
                            selected={dataBase}
                            onSelect={(novaData) =>
                                novaData && setDataBase(novaData)
                            }
                            locale={ptBR}
                            modifiers={{
                                comEntrevista: datasComEntrevista,
                            }}
                            className='w-full font-(family-name:--font-jost) text-blue-950 [--cell-size:--spacing(8)] bg-transparent'
                            classNames={{
                                root: 'w-full',
                                day: 'flex-1 h-9 aspect-auto',
                            }}
                            components={{
                                DayButton: ({
                                    children,
                                    modifiers,
                                    className,
                                    ...props
                                }) => {
                                    const temEntrevista =
                                        modifiers.comEntrevista;
                                    return (
                                        <CalendarDayButton
                                            modifiers={modifiers}
                                            className={`relative aspect-auto h-9 w-full ${temEntrevista
                                                ? 'text-blue-950 font-semibold'
                                                : 'text-slate-400 font-normal'
                                                } ${className ?? ''}`}
                                            {...props}
                                        >
                                            {children}
                                            {temEntrevista && (
                                                <span className='absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-green-500' />
                                            )}
                                        </CalendarDayButton>
                                    );
                                },
                            }}
                        />
                    </div>

                    {/* Painel de Detalhes da Sala Google Meet (abre ao clicar em uma entrevista na grade) */}
                    {entrevistaSelecionada && (
                        <div className='cardLateralMeet border-t-4 border-blue-950'>
                            

                            <div className='flex items-center gap-3'>
                               
                                <div>
                                    <h3 className='text-xl font-bold text-blue-950 font-(family-name:--font-instrument-sans) leading-tight'>
                                        {entrevistaSelecionada.candidato}
                                    </h3>
                                    <p className='text-base text-blue-950/70 font-(family-name:--font-jost) font-medium'>
                                        Candidato(a) selecionado(a)
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2.5 text-base font-(family-name:--font-jost) text-black p-3 rounded-md border shadow-sm'>
                                <div className='flex items-center gap-2'>
                                    <Briefcase className='w-4 h-4 text-blue-950' />
                                    <span className='font-medium line-clamp-1'>
                                        {entrevistaSelecionada.vaga}
                                    </span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Clock className='w-4 h-4 text-blue-950' />
                                    <span >
                                        {format(
                                            addDays(
                                                inicioSemana,
                                                entrevistaSelecionada.diaOffset
                                            ),
                                            "EEEE, dd 'de' MMMM",
                                            { locale: ptBR }
                                        )}{' '}
                                        •{' '}
                                        <strong className='font-medium text-blue-950'>
                                            {
                                                entrevistaSelecionada.horarioInicio
                                            }{' '}
                                            -{' '}
                                            {
                                                entrevistaSelecionada.horarioFim
                                            }
                                        </strong>
                                    </span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <User className='w-4 h-4 text-blue-950' />
                                    <span>
                                        Avaliador:{' '}
                                        <strong className='font-medium text-blue-950'>
                                            {
                                                entrevistaSelecionada.avaliador
                                            }
                                        </strong>
                                    </span>
                                </div>
                            </div>

                            {/* Ações da Sala de Videochamada (Estilo Google Meet) */}
                            <div className='flex flex-col gap-2 pt-1'>
                                <button
                                    type='button'
                                    className='btnEntrarMeet'
                                >
                                    <Video className='w-5 h-5' />
                                    Entrar na sala de entrevista
                                </button>

                                <button
                                    type='button'
                                    onClick={() =>
                                        copiarLinkMeet(
                                            entrevistaSelecionada.linkMeet
                                        )
                                    }
                                    className='btnCopiarLink'
                                >
                                    {copiado ? (
                                        <>
                                            <Check className='w-4 h-4 text-blue-950' />
                                            <span className='text-blue-950'>
                                                Link da sala copiado!
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className='w-4 h-4' />
                                            <span className='text-xs'>
                                                {
                                                    entrevistaSelecionada.linkMeet
                                                }
                                            </span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    )}
                </aside>

                {/* Grade Principal de Horários da Semana (Seg a Sex) */}
                <div className='gradeSemanaCard'>
                    {/* Cabeçalho dos dias da semana */}
                    <div className='cabecalhoGradeSemana'>
                        <div className='flex items-center justify-center'>
                        </div>
                        {diasSemana.map((dia) => {
                            const ehHoje = isSameDay(dia, hoje);
                            const ehSelecionado = isSameDay(dia, dataBase);
                            return (
                                <div
                                    key={dia.toISOString()}
                                    onClick={() => setDataBase(dia)}
                                    className='celulaDiaCabecalho cursor-pointer hover:bg-blue-100/40 transition-colors'
                                >
                                    <span className='text-sm font-semibold uppercase tracking-wider text-blue-950'>
                                        {format(dia, 'EEE', {
                                            locale: ptBR,
                                        })}
                                    </span>
                                    <span
                                        className={`numeroDiaCabecalho ${ehHoje || ehSelecionado
                                            ? 'numeroDiaAtivo'
                                            : ''
                                            }`}
                                    >
                                        {format(dia, 'dd')}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Linhas de horários (08:00 às 17:00) */}
                    <div className='corpoGradeHorarios'>
                        {HORARIOS_GRADE.map((horario) => (
                            <div key={horario} className='linhaHorario'>
                                {/* Rótulo da hora */}
                                <div className='colunaHoraLabel'>
                                    {horario}
                                </div>

                                {/* Slots de Segunda a Sexta para aquele horário */}
                                {diasSemana.map((dia, diaIdx) => {
                                    const horaLinha = horario.split(':')[0];
                                    const evento =
                                        entrevistasFiltradas.find(
                                            (ev) =>
                                                ev.diaOffset === diaIdx &&
                                                ev.horarioInicio.split(':')[0] === horaLinha
                                        );

                                    return (
                                        <div
                                            key={`${dia.toISOString()}-${horario}`}
                                            className='celulaSlotHorario'
                                        >
                                            {evento && (
                                                <button
                                                    type='button'
                                                    style={calcularEstiloDuracao(
                                                        evento.horarioInicio,
                                                        evento.horarioFim
                                                    )}
                                                    onClick={() =>
                                                        setEntrevistaSelecionada(
                                                            evento
                                                        )
                                                    }
                                                    className={`cardEventoGrade ${ESTILO_TIPO[
                                                        evento.tipo
                                                    ].classe
                                                        } ${entrevistaSelecionada?.id ===
                                                            evento.id
                                                            ? 'ring-2 ring-blue-950 ring-offset-1 z-20'
                                                            : ''
                                                        }`}
                                                >
                                                    <div className='flex items-center justify-between gap-1'>
                                                        <span className='text-xs font-semibold'>
                                                            {
                                                                evento.horarioInicio
                                                            }{' '}
                                                            -{' '}
                                                            {
                                                                evento.horarioFim
                                                            }
                                                        </span>
                                                        <Video className='w-3.5 h-3.5 shrink-0 opacity-85' />
                                                    </div>
                                                    <p className='font-semibold text-sm leading-tight truncate mt-0.5'>
                                                        {evento.candidato}
                                                    </p>
                                                    <p className='text-sm opacity-85 truncate'>
                                                        {evento.vaga}
                                                    </p>
                                                </button>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </main >
    );
}
