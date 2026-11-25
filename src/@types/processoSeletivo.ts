export interface ProcessoSeletivo {
    processoSeletivoId: number,
    tituloProcesso: string,
    dataAbertura: string,
    dataFechamento: string,
    statusProcessoSeletivo: boolean,
    vagaId: number,
    nomeVaga: string,
    empresaId: number,
    nomeEmpresa: string,
}