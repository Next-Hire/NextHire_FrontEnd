
export interface ListarVaga {
    vagaId: number,
    nomeAnalista: string,
    analistaRh: number,
    dataAbertura: Date,
    dataFechamento: Date,
    descricao: string,
    nomeEmpresa: string
    empresaId: number
    IdiomasDesejados: string[],
    StatusVaga: boolean,
    nivelPrioridade: string,
    remuneracao: number
    tipoVaga: string,
    tempoExperienciaDesejado: number,
    tituloVaga: string
}

export interface CadastrarVaga {
    tituloVaga: string
    analistaRh: number,
    setorOcupacaoId: number,
    dataFechamento: Date,
    descricao: string,
    empresaId: number
    IdiomasDesejados: string[],
    remuneracao: number
    tipoVaga: string,
    nivelPrioridade: string,
    tempoExperienciaDesejado: number,
}

export interface AtualizarVaga {
    tituloVaga: string
    analistaRh: number,
    setorOcupacaoId: number,
    dataFechamento: Date,
    descricao: string,
    empresaId: number
    IdiomasDesejados: string[],
    remuneracao: number
    tipoVaga: string,
    nivelPrioridade: string,
    tempoExperienciaDesejado: number,
}