import { curriculoVagaRecebido } from "@/@types/curriculoVaga";
import { api } from "./api";
import { VagaRecebida } from "@/@types/vaga";

export const curriculoVagaService = {
    async listarCandidaturasPorEmpresaID(empresaId: number): Promise<curriculoVagaRecebido[]> {
        const response = await api.get(`CurriculoVaga/Candidaturas/empresa/${empresaId}`);
        return response.data;
    },

    async listarCandidatosPorVagaId(vagaId: number): Promise<curriculoVagaRecebido[]> {
        const response = await api.get(`CurriculoVaga/CandidatosPorVagaId/${vagaId}`);
        return response.data;
    },

    async listarVagasPorCandidatoId(candidatoId: number): Promise<VagaRecebida[]> {
        const response = await api.get(`CurriculoVaga/VagasPorCandidatoId/${candidatoId}`);
        return response.data;
    },

    async efetuarCandidatura(curriculoId: number, vagaId: number) {
        const response = await api.post(`CurriculoVaga/EfetuarCandidatura/${curriculoId}/vaga;${vagaId}`);
        return response.data;
    },

    async cancelarCandidatura(curriculoId: number, vagaId: number) {
        const response = await api.delete(`CurriculoVaga/CancelarCandidatura/curriculo/${curriculoId}/vaga/${vagaId}`);
        return response.data;
    },

    async avaliarCandidatura(vagaId: number, candidatoId: number) {
        const response = await api.post(`CurriculoVaga/AvaliarCandidatura/vaga/${vagaId}/candidato/${candidatoId}`);
            return response.data;
    }
}