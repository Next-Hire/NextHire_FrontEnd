export interface CandidatoEntrevista {
    candidatoId: number;
    nomeCandidato: string;
    email: string;
    telefone: string;
    idade: number;
    localizacao: string;
    descricao: string;
    contatos: string[];
}

export interface Entrevista {
    entrevistaId: number;
    tituloEntrevista: string;
    dataInicio: string;
    dataEncerra: string;
    statusEntrevista: boolean;
    processoSeletivoId: number;
    listaCandidatos: CandidatoEntrevista[];
}

export interface Setor_Ocupacao{
    setor_OcupacaoId: number;
    nomeSetor: string;
}