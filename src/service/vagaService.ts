import { VagaAtualizada, VagaCadastrada, VagaRecebida } from "@/@types/vaga";
import { api } from "./api";

export const vagaService = {
    async listarVagas(): Promise<VagaRecebida[]> {
        const response = await api.get<VagaRecebida[]>("Vaga/vagas");
        return response.data;
    },

    async listarVagasPorEmpresa(empresaId: number): Promise<VagaRecebida[]> {
        const response = await api.get<VagaRecebida[]>(`Vaga/empresa/${empresaId}`);
        return response.data;
    },

    async listarVagasPorSetor(setorId: number): Promise<VagaRecebida[]> {
        const response = await api.get<VagaRecebida[]>(`Vaga/setor/${setorId}`);
        return response.data;
    },

    async listarVagasPorStatus(status: boolean): Promise<VagaRecebida[]> {
        const response = await api.get<VagaRecebida[]>(`Vaga/status?status=${status}`);
        return response.data;
    },

    async listarVagasPorTitulo(tituloVaga: string): Promise<VagaRecebida[]> {
        const response = await api.get<VagaRecebida[]>(`Vaga/titulo/${tituloVaga}`);
        return response.data;
    },

    async buscarPorId(vagaId: number): Promise<VagaRecebida[]> {
        const response = await api.get<VagaRecebida[]>(`Vaga/setor/${vagaId}`);
        return response.data;
    },

    async cadastrarVagas(vaga: VagaCadastrada): Promise<VagaCadastrada> {
        const response = await api.post<VagaCadastrada>(`Vaga/`, vaga)
        return response.data;
    },

    async atualizarVaga(vaga: VagaAtualizada, vagaId: number): Promise<VagaAtualizada> {
        const response = await api.patch<VagaAtualizada>(`Vaga/${vagaId}`, vagaId)
        return response.data;
    },

    async removerVaga(vagaId: number): Promise<string>{
        const response = await api.delete(`Vaga/${vagaId}`);
        return response.data.message;
    }
}