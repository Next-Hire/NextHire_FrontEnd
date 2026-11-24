'use client';
import './informacoesVaga.module.css';

const VAGA_MOCK = {
    descricao:
        'Buscamos uma pessoa Desenvolvedora Back-end Pleno com sólida experiência em Python e Django para atuar na construção e evolução de APIs REST escaláveis, integração de microsserviços, otimização de consultas em banco de dados PostgreSQL e aplicação de boas práticas de testes automatizados junto ao time de engenharia.',
    empresa: 'Vortex Tecnologia',
    responsavelSetor: 'Mariana Souza',
    salario: 'R$ 8.500,00',
    cargo: 'Desenvolvedor Back-end Pleno',
    periodoVaga: '11/11/2026 - 11/12/2026',
    idioma: 'Inglês (Intermediário)',
    experiencia: '3 - 5 anos',
    modeloTrabalho: 'Híbrido',
    prioridade: 'Prioridade média',
    local: 'São Paulo - SP',
    escalaTrabalho: 'Segunda a Sexta (09h às 18h)',
    tipoVaga: 'Expansão de equipe',
    setor: 'Tecnologia',
    regimeContratual: 'CLT',
    competencias: [
        { nome: 'Python / Django', nivel: 5 },
        { nome: 'APIs REST', nivel: 5 },
        { nome: 'PostgreSQL', nivel: 4 },
        { nome: 'Comunicação', nivel: 4 },
        { nome: 'Trabalho em equipe', nivel: 5 },
    ],
};

export default function InformacoesVaga() {
    return (
        <main className='flex flex-col justify-around bg-white rounded-lg w-[80%] p-8 pb-12 my-1 shadow-md gap-8 my-10'>

            <section className='flex flex-col justify-between h-full gap-8 mb-5'>
                <div className='flex flex-col'>
                    <h2 className='subtituloInfoVaga '>Descrição</h2>
                    <p className='paragrafoInfoVaga'>
                        {VAGA_MOCK.descricao}
                    </p>
                </div>
            </section>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='cardInfo'>
                    <h2 className='subtituloInfoVaga'>Empresa</h2>
                    <p className='paragrafoInfoVaga'>{VAGA_MOCK.empresa}</p>
                </div>

                <div className='cardInfo'>
                    <h2 className='subtituloInfoVaga'>Responsável do setor</h2>
                    <p className='paragrafoInfoVaga'>{VAGA_MOCK.responsavelSetor}</p>
                </div>

                <div className='cardInfo'>
                    <h2 className='subtituloInfoVaga'>Salário</h2>
                    <p className='paragrafoInfoVaga'>{VAGA_MOCK.salario}</p>
                </div>

                <div className='cardInfo'>
                    <h2 className='subtituloInfoVaga'>Cargo</h2>
                    <p className='paragrafoInfoVaga'>{VAGA_MOCK.cargo}</p>
                </div>

                <div className='cardInfo'>
                    <h2 className='subtituloInfoVaga'>Período Vaga</h2>
                    <p className='paragrafoInfoVaga'>{VAGA_MOCK.periodoVaga}</p>
                </div>

                <div className='cardInfo'>
                    <h2 className='subtituloInfoVaga'>Idioma</h2>
                    <p className='paragrafoInfoVaga'>{VAGA_MOCK.idioma}</p>
                </div>

                <div className='cardInfo'>
                    <h2 className='subtituloInfoVaga'>Experiência</h2>
                    <p className='paragrafoInfoVaga'>{VAGA_MOCK.experiencia}</p>
                </div>

                <div className='cardInfo'>
                    <h2 className='subtituloInfoVaga'>Modelo de trabalho</h2>
                    <p className='paragrafoInfoVaga'>{VAGA_MOCK.modeloTrabalho}</p>
                </div>

                <div className='cardInfo'>
                    <h2 className='subtituloInfoVaga'>Prioridade</h2>
                    <p className='paragrafoInfoVaga'>{VAGA_MOCK.prioridade}</p>
                </div>

                <div className='cardInfo'>
                    <h2 className='subtituloInfoVaga'>Local</h2>
                    <p className='paragrafoInfoVaga'>{VAGA_MOCK.local}</p>
                </div>

                <div className='cardInfo'>
                    <h2 className='subtituloInfoVaga'>Escala de trabalho</h2>
                    <p className='paragrafoInfoVaga'>{VAGA_MOCK.escalaTrabalho}</p>
                </div>

                <div className='cardInfo'>
                    <h2 className='subtituloInfoVaga'>Tipo da vaga</h2>
                    <p className='paragrafoInfoVaga'>{VAGA_MOCK.tipoVaga}</p>
                </div>

                <div className='cardInfo'>
                    <h2 className='subtituloInfoVaga'>Setor</h2>
                    <p className='paragrafoInfoVaga'>{VAGA_MOCK.setor}</p>
                </div>

                <div className='cardInfo'>
                    <h2 className='subtituloInfoVaga'>Regime contratual</h2>
                    <p className='paragrafoInfoVaga'>{VAGA_MOCK.regimeContratual}</p>
                </div>
            </div>

            <div className='flex flex-col justify-around'>
                <h2 className='subtituloCriarVaga'>Competências</h2>
                <div className='flex flex-wrap gap-4'>
                    {VAGA_MOCK.competencias.map((comp) => (
                        <span key={comp.nome} className='tagCompetencia'>
                            {comp.nome}
                            <span className='flex items-center justify-center h-7 px-3 border border-blue-950 bg-blue-100 text-blue-950 font-bold rounded-md'>
                                {comp.nivel}
                            </span>
                        </span>
                    ))}
                </div>
            </div>

        </main>
    );
}