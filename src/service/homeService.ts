import { api } from "./api";
import {CandidatoEntrevista, Entrevista} from "../@types/Home"
import {VagaRecebida} from "@/@types/vaga";
import {ProcessoSeletivo} from "@/@types/processoSeletivo";


export const homeService = {
    async listarEntrevistaPorStatus(status: boolean): Promise<Entrevista[]> {
        const response = await api.get<Entrevista[]>(`Entrevista/status=${status}`);
        return response.data
    },
    async listarVagasPorStatus(status: boolean): Promise<VagaRecebida[]> {
        const response = await api.get<VagaRecebida[]>(`Vaga/status?status=${status}`);
        return response.data;
    },

    async listarProcessoPorStatus(status: boolean): Promise<ProcessoSeletivo[]> {
        const response = await api.get<ProcessoSeletivo[]>(`ProcessoSeletivo/ProcessoSeletivo/status/${status}`);
        return response.data;
    }
    }