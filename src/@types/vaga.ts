import { StringToBoolean } from "class-variance-authority/types"

export type PrioridadeVaga = 'baixa' | 'media' | 'alta';

export interface VagaRecebida {
    vagaId: number,
    nomeAnalista: string,
    analistaRh: number,
    dataAbertura: Date,
    dataFechamento: Date,
    descricao: string,
    nomeEmpresa: string,
    empresaId: number,
    setorId: number,
    IdiomasDesejados: string[],
    StatusVaga: boolean,
    nivelPrioridade: PrioridadeVaga,
    remuneracao: number,
    tipoVaga: string,
    tempoExperienciaDesejado: number,
    titulo: string,
    escala: string,
}

export interface VagaCadastrada {
    tituloVaga: string,
    analistaRh: number,
    setorOcupacaoId: number,
    dataFechamento: Date,
    descricao: string,
    empresaId: number,
    idiomasDesejados: string[],
    remuneracao: number,
    tipoVaga: string,
    nivelPrioridade: string,
    tempoExperienciaDesejado: number,
    escala: string,
}

export interface VagaAtualizada {
    tituloVaga: string,
    analistaRh: number,
    setorOcupacaoId: number,
    dataFechamento: Date,
    descricao: string,
    empresaId: number,
    IdiomasDesejados: string[],
    remuneracao: number,
    tipoVaga: string,
    nivelPrioridade: string,
    tempoExperienciaDesejado: number,
    escala: string,
}