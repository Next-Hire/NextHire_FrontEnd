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
                <h1 className='tituloCriarVaga'>Adicionar nova vaga</h1>
                <div className='secaoFormVaga'>

                    <div className='flex flex-col justify-between h-full gap-8'>

                        <div className='flex flex-col'>
                            <label className='labelCriarVaga'>Título da vaga</label>
                            <input
                                type='text'
                                placeholder='Digite aqui o título da vaga...'
                                className='inputCriarVaga'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='labelCriarVaga'>Empresa</label>
                            <input
                                type='text'
                                placeholder='Digite aqui o nome da empresa...'
                                className='inputCriarVaga'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='labelCriarVaga'>Responsável do setor</label>
                            <input
                                type='text'
                                placeholder='Digite aqui o nome do responsável...'
                                className='inputCriarVaga'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='labelCriarVaga'>Salário</label>
                            <input
                                type='text'
                                placeholder='Digite aqui o salário...'
                                className='inputCriarVaga'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='labelCriarVaga'>Cargo</label>
                            <input
                                type='text'
                                placeholder='Digite aqui o cargo...'
                                className='inputCriarVaga'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='labelCriarVaga'>Descrição da vaga</label>
                            <textarea
                                placeholder='Digite aqui a descrição da vaga...'
                                className='textareaCriarVaga'
                            />
                        </div>
                    </div>

                    {/* Linha com Período, Setor e Prioridade */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {/* Seletor de data do calendário */}
                        <div className='flex flex-col'>
                            <label className='labelCriarVaga'>Período da vaga</label>
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
                            <label className='labelCriarVaga'>Idioma</label>
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
                            <label className='labelCriarVaga'>Experiência</label>
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
                            <label className='labelCriarVaga'>Modelo de trabalho</label>
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
                            <label className='labelCriarVaga'>Prioridade</label>
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
                            <label className='labelCriarVaga'>Local</label>
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
                            <label className='labelCriarVaga'>Escala de trabalho</label>
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
                            <label className='labelCriarVaga'>Tipo da vaga</label>
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
                            <label className='labelCriarVaga'>Setor</label>
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
                            <label className='labelCriarVaga'>Empresa</label>
                            <SelectRoot defaultValue=''>
                                <SelectTrigger className='h-10 w-full'>
                                    <SelectValue placeholder='Selecione a empresa...' />
                                </SelectTrigger>

                                <SelectPortal>
                                    <SelectPositioner>
                                        <SelectPopup>
                                            <SelectItem value='Vortex'>Vortex</SelectItem>
                                            <SelectItem value='Rappi'>Rappi</SelectItem>
                                            <SelectItem value='L4'>L4</SelectItem>
                                        </SelectPopup>
                                    </SelectPositioner>
                                </SelectPortal>
                            </SelectRoot>
                        </div>
                        <div className='flex flex-col'>
                            <label className='labelCriarVaga'>Regime contratual</label>
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
                    <div className='flex flex-col'>
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
                        <div>
                            <div className='flex flex-col'>
                                <label className='labelCriarVaga'>Adicionar habilidade</label>
                                <input
                                    type='text'
                                    placeholder='Digite aqui o nome da habilidade...'
                                    className='inputCriarVaga'
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className='labelCriarVaga'>Nível da habilidade</label>
                                <SelectRoot defaultValue=''>
                                    <SelectTrigger className='h-10 w-full'>
                                        <SelectValue placeholder='Selecione o regime contratual...' />
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
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end mt-2'>
                        <button type='button' className='btnSalvarVaga'>
                            Salvar vaga
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}