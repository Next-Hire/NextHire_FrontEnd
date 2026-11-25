import { curriculoVagaRecebido } from "@/@types/curriculoVaga";
import { VagaRecebida } from "@/@types/vaga";
import { curriculoVagaService } from "@/service/curriculoVagaService";
import { useState } from "react";

export function useCurriculoVaga() { 
    const [curriculoVaga, setCurriculoVaga] = useState<curriculoVagaRecebido[]>([]);
    const [vagasPorCandidato, setVagasPorCandidato] = useState<VagaRecebida[]>([]);
    const [erro, setErro] = useState<string | null>("");
    const [carregandoCurriculoVaga, setCarregandoCurriculoVaga] = useState(false);
    const [carregandoVaga, setCarregandoVaga] = useState(false);
    const [totalVagas, setTotalVagas] = useState(0);
    const [totalCandidatos, setTotalCandidatos] = useState(0);

    async function carregarCuriculosPorVagaId(vagaId: number) {
        try {
            setCarregandoCurriculoVaga(true);
            setErro(null)
            const response = await curriculoVagaService.listarCandidatosPorVagaId(vagaId);

            if (!Array.isArray(response))
                setCurriculoVaga([])

            //? Atribuindo ao state do curriculos por vaga
            //? os dados pegos do backend
            setCurriculoVaga(response)
            setTotalCandidatos(response.length);

        } catch (error: any) {
            setCarregandoCurriculoVaga(false);
            setErro(error);
            console.log("Erro ao carregar os curriculos da vaga", error);
        } finally {
            setCarregandoCurriculoVaga(false);
        }
    }

    async function listarVagasPorCandidatoId(candidatoId: number){
        try {
            setCarregandoVaga(true);
            setErro(null)
            const response = await curriculoVagaService.listarVagasPorCandidatoId(candidatoId);

            if (!Array.isArray(response))
                setCurriculoVaga([])

            //? Atribuindo ao state de vagas que o candidato está inscrito
            //? os dados pegos do backend
            setVagasPorCandidato(response)
            setTotalVagas(response.length);

        } catch (error: any) {
            setCarregandoVaga(false);
            setErro(error);
            console.log("Erro ao carregar os curriculos da vaga", error);
        } finally {
            setCarregandoVaga(false);
        }
    }

    return {
        //? Variaveis
        curriculoVaga,
        carregandoVaga,
        carregandoCurriculoVaga,
        erro,
        totalCandidatos,
        vagasPorCandidato,
        totalVagas,
        
        //? Funcoes
        carregarCuriculosPorVagaId,
        listarVagasPorCandidatoId,
        
    }
}