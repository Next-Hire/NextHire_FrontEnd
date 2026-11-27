'use client'; // Necessário pois o seletor de calendário usa estado (useState) e interações de clique

import { useState } from 'react';
import Header from '@/components/header/header';
import './criarVaga.css';

// --- Bibliotecas de calendário e data ---
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { type DateRange } from 'react-day-picker';
import { CalendarIcon } from 'lucide-react';

// --- Componentes do calendário e popover do projeto ---
import { Calendar } from '@/components/calendario/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/calendario/popover';

// --- Select customizado com estilo alinhado ao restante do layout ---
import {
    SelectRoot,
    SelectTrigger,
    SelectValue,
    SelectPortal,
    SelectPositioner,
    SelectPopup,
    SelectItem,
} from '@/components/select/select';

export default function CriarVagaPage() {
    // --- Estado do período da vaga para o calendário ---
    const [periodo, setPeriodo] = useState<DateRange | undefined>({
        from: undefined,
        to: undefined,
    });

    return (
        <main className='mainCriarVaga'>
            <Header />
            <section className='sectionCriarVaga'>
                <div className='w-full pl-38 pb-8'>
                    <h1 className='titulo'>Adicionar nova vaga</h1>
                </div>
                <div className='secaoFormVaga'>

                    <form className='flex flex-col justify-between h-full gap-8'>

                        <div className='flex flex-col'>
                            <label className='label'>Título da vaga</label>
                            <input
                                type='text'
                                placeholder='Digite aqui o título da vaga...'
                                className='input'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='label'>Salário</label>
                            <input
                                type='text'
                                placeholder='Digite aqui o salário...'
                                className='input'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='label'>Cargo</label>
                            <input
                                type='text'
                                placeholder='Digite aqui o cargo...'
                                className='input'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='label'>Descrição da vaga</label>
                            <textarea
                                placeholder='Digite aqui a descrição da vaga...'
                                className='textareaCriarVaga'
                            />
                        </div>
                    </form>

                    {/* Linha com Período, Setor e Prioridade */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {/* Seletor de data do calendário */}
                        <div className='flex flex-col'>
                            <label className='label'>Período da vaga</label>
                            <Popover>
                                <PopoverTrigger className='btnSeletorData'>
                                    <span className={periodo?.from ? 'text-blue-950 font-medium' : 'text-blue-950/50'}>
                                        {periodo?.from ? (
                                            periodo.to ? (
                                                // Exibe "DD/MM/AAAA - DD/MM/AAAA" quando início e fim foram escolhidos
                                                `${format(periodo.from, 'dd/MM/yyyy', { locale: ptBR })} - ${format(periodo.to, 'dd/MM/yyyy', { locale: ptBR })}`
                                            ) : (
                                                // Exibe apenas a data inicial enquanto o usuário escolhe a data final
                                                format(periodo.from, 'dd/MM/yyyy', { locale: ptBR })
                                            )
                                        ) : (
                                            'Selecione o período (Início - Fim)'
                                        )}
                                    </span>
                                    <CalendarIcon className='w-5 h-5 text-blue-950 shrink-0' />
                                </PopoverTrigger>

                                {/* Janela flutuante que exibe o calendário estilizado com as cores do projeto */}
                                <PopoverContent align='start' className='w-auto p-3 bg-white border-2 border-blue-950 rounded-lg shadow-lg'>
                                    <Calendar
                                        mode='range' // Permite selecionar intervalo (data de abertura e fechamento)
                                        selected={periodo}
                                        onSelect={setPeriodo}
                                        numberOfMonths={2} // Mostra 2 meses lado a lado para facilitar a escolha do período
                                        locale={ptBR} // Deixa os meses e dias da semana em português
                                        className='font-(family-name:--font-jost) text-blue-950'
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* Campo: Setor usando Select customizado do Base UI */}
                        <div className='flex flex-col'>
                            <label className='label'>Idioma</label>
                            <SelectRoot defaultValue=''>
                                <SelectTrigger className='h-10 w-full'>
                                    <SelectValue placeholder='Idioma...' />
                                </SelectTrigger>

                                <SelectPortal>
                                    <SelectPositioner>
                                        <SelectPopup>
                                            <SelectItem value='Português'>Português</SelectItem>
                                            <SelectItem value='Inglês'>Inglês</SelectItem>
                                            <SelectItem value='Espanhol'>Espanhol</SelectItem>
                                            <SelectItem value='Francês'>Francês</SelectItem>
                                            <SelectItem value='Chinês'>Chinês</SelectItem>
                                        </SelectPopup>
                                    </SelectPositioner>
                                </SelectPortal>
                            </SelectRoot>
                        </div>

                        <div className='flex flex-col'>
                            <label className='label'>Experiência</label>
                            <SelectRoot defaultValue=''>
                                <SelectTrigger className='h-10 w-full'>
                                    <SelectValue placeholder='Selecione o nível de experiência...' />
                                </SelectTrigger>

                                <SelectPortal>
                                    <SelectPositioner>
                                        <SelectPopup>
                                            <SelectItem value='Sem experiência'>Sem experiência</SelectItem>
                                            <SelectItem value='Menos de 1 ano de experiência'>Menos de 1 ano de experiência</SelectItem>
                                            <SelectItem value='1 - 3 anos'>1 - 3 anos</SelectItem>
                                            <SelectItem value='3 - 5 anos'>3 - 5 anos</SelectItem>
                                            <SelectItem value='5 - 10 anos'>5 - 10 anos</SelectItem>
                                            <SelectItem value='Mais de 10 anos'>Mais de 10 anos</SelectItem>
                                        </SelectPopup>
                                    </SelectPositioner>
                                </SelectPortal>
                            </SelectRoot>
                        </div>
                        <div className='flex flex-col'>
                            <label className='label'>Modelo de trabalho</label>
                            <SelectRoot defaultValue=''>
                                <SelectTrigger className='h-10 w-full'>
                                    <SelectValue placeholder='Selecione o modelo de trabalho...' />
                                </SelectTrigger>

                                <SelectPortal>
                                    <SelectPositioner>
                                        <SelectPopup>
                                            <SelectItem value='Presencial'>Presencial</SelectItem>
                                            <SelectItem value='Híbrido'>Híbrido</SelectItem>
                                            <SelectItem value='Remoto'>Remoto</SelectItem>
                                        </SelectPopup>
                                    </SelectPositioner>
                                </SelectPortal>
                            </SelectRoot>
                        </div>
                        <div className='flex flex-col'>
                            <label className='label'>Prioridade</label>
                            <SelectRoot defaultValue=''>
                                <SelectTrigger className='h-10 w-full'>
                                    <SelectValue placeholder='Selecione a prioridade...' />
                                </SelectTrigger>

                                <SelectPortal>
                                    <SelectPositioner>
                                        <SelectPopup>
                                            <SelectItem value='Baixa'>Baixa</SelectItem>
                                            <SelectItem value='Média'>Média</SelectItem>
                                            <SelectItem value='Alta'>Alta</SelectItem>
                                        </SelectPopup>
                                    </SelectPositioner>
                                </SelectPortal>
                            </SelectRoot>
                        </div>

                        <div className='flex flex-col'>
                            <label className='labelarVaga'>Local</label>
                            <SelectRoot defaultValue=''>
                                <SelectTrigger className='h-10 w-full'>
                                    <SelectValue placeholder='Selecione o local...' />
                                </SelectTrigger>

                                <SelectPortal>
                                    <SelectPositioner>
                                        <SelectPopup>
                                            <SelectItem value='Unidade 1'>Unidade 1</SelectItem>
                                            <SelectItem value='Unidade 2'>Unidade 2</SelectItem>
                                            <SelectItem value='Unidade 3'>Unidade 3</SelectItem>
                                        </SelectPopup>
                                    </SelectPositioner>
                                </SelectPortal>
                            </SelectRoot>
                        </div>

                        <div className='flex flex-col'>
                            <label className='label'>Escala de trabalho</label>
                            <SelectRoot defaultValue=''>
                                <SelectTrigger className='h-10 w-full'>
                                    <SelectValue placeholder='Selecione a escala de trabalho...' />
                                </SelectTrigger>

                                <SelectPortal>
                                    <SelectPositioner>
                                        <SelectPopup>
                                            <SelectItem value='5x2'>5x2</SelectItem>
                                            <SelectItem value='4x3'>4x3</SelectItem>
                                            <SelectItem value='36x12'>36x12</SelectItem>
                                        </SelectPopup>
                                    </SelectPositioner>
                                </SelectPortal>
                            </SelectRoot>
                        </div>
                        <div className='flex flex-col'>
                            <label className='label'>Tipo da vaga</label>
                            <SelectRoot defaultValue=''>
                                <SelectTrigger className='h-10 w-full'>
                                    <SelectValue placeholder='Selecione o tipo de vaga...' />
                                </SelectTrigger>

                                <SelectPortal>
                                    <SelectPositioner>
                                        <SelectPopup>
                                            <SelectItem value='Nova função'>Nova função</SelectItem>
                                            <SelectItem value='Expansão de equipe'>Expansão de equipe</SelectItem>
                                            <SelectItem value='Substituição'>Substituição</SelectItem>
                                        </SelectPopup>
                                    </SelectPositioner>
                                </SelectPortal>
                            </SelectRoot>
                        </div>
                        <div className='flex flex-col'>
                            <label className='label'>Setor</label>
                            <SelectRoot defaultValue=''>
                                <SelectTrigger className='h-10 w-full'>
                                    <SelectValue placeholder='Selecione o setor...' />
                                </SelectTrigger>

                                <SelectPortal>
                                    <SelectPositioner>
                                        <SelectPopup>
                                            <SelectItem value='Governança'>Governança</SelectItem>
                                            <SelectItem value='Tecnologia'>Tecnologia</SelectItem>
                                            <SelectItem value='Administração'>Administração</SelectItem>
                                        </SelectPopup>
                                    </SelectPositioner>
                                </SelectPortal>
                            </SelectRoot>
                        </div>
                        <div className='flex flex-col'>
                            <label className='label'>Responsável por setor</label>
                            <SelectRoot defaultValue=''>
                                <SelectTrigger className='h-10 w-full'>
                                    <SelectValue placeholder='Selecione o responsável setor...' />
                                </SelectTrigger>

                                <SelectPortal>
                                    <SelectPositioner>
                                        <SelectPopup>
                                            <SelectItem value='Gomes'>Gomes</SelectItem>
                                            <SelectItem value='Ricardo'>Ricardo</SelectItem>
                                            <SelectItem value='Aline'>Aline</SelectItem>
                                        </SelectPopup>
                                    </SelectPositioner>
                                </SelectPortal>
                            </SelectRoot>
                        </div>
                        <div className='flex flex-col'>
                            <label className='label'>Regime contratual</label>
                            <SelectRoot defaultValue=''>
                                <SelectTrigger className='h-10 w-full'>
                                    <SelectValue placeholder='Selecione o regime contratual...' />
                                </SelectTrigger>

                                <SelectPortal>
                                    <SelectPositioner>
                                        <SelectPopup>
                                            <SelectItem value='CLT'>CLT</SelectItem>
                                            <SelectItem value='PJ'>PJ</SelectItem>
                                            <SelectItem value='Estágio'>Estágio</SelectItem>
                                            <SelectItem value='Temporário'>Temporário</SelectItem>
                                            <SelectItem value='Jovem aprendiz'>Jovem aprendiz</SelectItem>
                                            <SelectItem value='Freelancer'>Freelancer</SelectItem>
                                            <SelectItem value='Externo'>Externo</SelectItem>
                                        </SelectPopup>
                                    </SelectPositioner>
                                </SelectPortal>
                            </SelectRoot>

                        </div>
                    </div>
                    <div className='flex flex-col justify-around'>

                        <h2 className='subtituloCriarVaga'>Adicionar competência</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            <input
                                type='text'
                                placeholder='Digite o nome da competência...'
                                className='input'
                            />
                            <SelectRoot defaultValue=''>
                                <SelectTrigger className='h-10 w-full'>
                                    <SelectValue placeholder='Selecione o nível da competência...' />
                                </SelectTrigger>

                                <SelectPortal>
                                    <SelectPositioner>
                                        <SelectPopup>
                                            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                                <SelectItem key={num} value={String(num)}>
                                                    {num}
                                                </SelectItem>
                                            ))}
                                        </SelectPopup>
                                    </SelectPositioner>
                                </SelectPortal>
                            </SelectRoot>
                            <button type='button' className='botaoEscuro'>
                                Adicionar competência
                            </button>
                        </div>

                        <h2 className='subtituloCriarVaga'>Competências</h2>
                        <div className='flex flex-wrap gap-8'>
                            <span className='tagCompetencia'>
                                Comunicação
                                <SelectRoot defaultValue='2'>
                                    <SelectTrigger className='h-7 w-14 px-2 py-0 border border-blue-950 bg-blue-100 text-blue-950 font-bold rounded-md cursor-pointer'>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectPortal>
                                        <SelectPositioner>
                                            <SelectPopup>
                                                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                                    <SelectItem key={num} value={String(num)}>
                                                        {num}
                                                    </SelectItem>
                                                ))}
                                            </SelectPopup>
                                        </SelectPositioner>
                                    </SelectPortal>
                                </SelectRoot>
                                <button type='button'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x preview-icon cursor-pointer"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                                </button>
                            </span>

                            <span className='tagCompetencia'>
                                Trabalho em equipe
                                <SelectRoot defaultValue='3'>
                                    <SelectTrigger className='h-7 w-14 px-2 py-0 border border-blue-950 bg-blue-100 text-blue-950 font-bold rounded-md cursor-pointer'>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectPortal>
                                        <SelectPositioner>
                                            <SelectPopup>
                                                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                                    <SelectItem key={num} value={String(num)}>
                                                        {num}
                                                    </SelectItem>
                                                ))}
                                            </SelectPopup>
                                        </SelectPositioner>
                                    </SelectPortal>
                                </SelectRoot>
                                <button type='button'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x preview-icon cursor-pointer"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                                </button>
                            </span>

                            <span className='tagCompetencia'>
                                Liderança
                                <SelectRoot defaultValue='7'>
                                    <SelectTrigger className='cursor-pointer h-7 w-14 px-2 py-0 border border-blue-950 bg-blue-100 text-blue-950 font-bold rounded-md'>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectPortal>
                                        <SelectPositioner>
                                            <SelectPopup>
                                                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                                    <SelectItem key={num} value={String(num)}>
                                                        {num}
                                                    </SelectItem>
                                                ))}
                                            </SelectPopup>
                                        </SelectPositioner>
                                    </SelectPortal>
                                </SelectRoot>
                                <button type='button'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x preview-icon cursor-pointer"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                                </button>
                            </span>
                        </div>
                    </div>

                </div>
            </section>
            <div className='flex justify-end my-6 mb-15 mr-38'>
                <button className='botaoClaro mx-8'>Salvar rascunho <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-save-pen preview-icon"><path d="M13.33 13H8a1 1 0 00-1 1v7" /><path d="M14.363 17.634a2 2 0 00-.506.854l-.837 2.87a.5.5 0 00.62.62l2.87-.837a2 2 0 00.854-.506l4.013-4.009a1 1 0 10-3.004-3.004z" /><path d="M7 3v4a1 1 0 001 1h7" /><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h10.2a2 2 0 011.4.6l3.8 3.8a2 2 0 01.6 1.4v.3" /></svg></button>

                <button type='button' className='botaoEscuro'>
                    Salvar vaga
                </button>
            </div>
        </main>
    );
}