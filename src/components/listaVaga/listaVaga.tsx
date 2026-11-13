import CardVaga, { PrioridadeVaga } from '../cardVaga/cardVaga';

const VAGAS_MOCK: {
    id: number;
    titulo: string;
    periodo: string;
    prioridade: PrioridadeVaga;
    descricao: string;
}[] = [
    {
        id: 1,
        titulo: 'Desenvolvedor Sênior - Full Stack (Next.js/Node)',
        periodo: '10/11/2026 - 30/11/2026',
        prioridade: 'alta',
        descricao: 'Buscamos uma pessoa Desenvolvedora Full Stack Sênior para liderar o desenvolvimento de novas funcionalidades críticas na plataforma, garantindo performance e escalabilidade.',
    },
    {
        id: 2,
        titulo: 'Desenvolvedor Pleno - Back-end (Python/Django)',
        periodo: '12/11/2026 - 12/12/2026',
        prioridade: 'media',
        descricao: 'Buscamos uma pessoa Desenvolvedora Back-end Pleno com experiência em Python e Django para atuar na construção de APIs REST escaláveis, integração de serviços e manutenção do banco de dados.',
    },
    {
        id: 3,
        titulo: 'Analista de Recursos Humanos - Tech Recruiter',
        periodo: '15/11/2026 - 20/12/2026',
        prioridade: 'baixa',
        descricao: 'Responsável pela condução de processos seletivos de tecnologia de ponta a ponta, triagem de perfis, entrevistas por competências e acompanhamento de indicadores de RH.',
    },
    {
        id: 4,
        titulo: 'Engenheiro de Dados Pleno - (Spark/AWS)',
        periodo: '18/11/2026 - 18/12/2026',
        prioridade: 'alta',
        descricao: 'Atuação na construção e manutenção de pipelines de dados em nuvem, modelagem de Data Warehouse e suporte aos times de Analytics e Ciência de Dados.',
    },
    {
        id: 5,
        titulo: 'UX/UI Designer Júnior - Produtos Digitais',
        periodo: '20/11/2026 - 10/01/2027',
        prioridade: 'baixa',
        descricao: 'Apoio na criação de protótipos no Figma, pesquisas com usuários, evolução do Design System e acompanhamento de handoff junto ao time de Front-end.',
    },
];

export default function ListaVaga() {
    return (
        <main className='flex flex-col items-center justify-around min-h-130 gap-4 py-4 w-[100%]'>
            {VAGAS_MOCK.map((vaga) => (
                <CardVaga
                    key={vaga.id}
                    titulo={vaga.titulo}
                    periodo={vaga.periodo}
                    prioridade={vaga.prioridade}
                    descricao={vaga.descricao}
                />
            ))}
        </main>
    );
}