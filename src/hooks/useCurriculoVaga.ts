import { curriculoVagaRecebido } from "@/@types/curriculoVaga";
import { VagaRecebida } from "@/@types/vaga";
import { curriculoVagaService } from "@/service/curriculoVagaService";
import { useEffect, useState } from "react";

export function useCurriculoVaga() {
    const [curriculoVaga, setCurriculoVaga] = useState<curriculoVagaRecebido[]>([]);
    const [vagasPorCandidato, setVagasPorCandidato] = useState<VagaRecebida[]>([]);
    const [erro, setErro] = useState<string | null>("");
    const [carregando, setCarregado] = useState(false);
    const [totalVagas, setTotalVagas] = useState(0);
    const [totalCandidatos, setTotalCandidatos] = useState(0);

    async function listarCandidaturasPorEmpresa(empresaId: number) {
        try {
            setCarregado(true);
            setErro(null)
            const response = await curriculoVagaService.listarCandidaturasPorEmpresaID(empresaId);

            if (!Array.isArray(response))
                setCurriculoVaga([])

            //? Atribuindo ao state do curriculos por vaga
            //? os dados pegos do backend
            setCurriculoVaga(response)
            setTotalCandidatos(response.length);

        } catch (error: any) {
            setCarregado(false);
            setErro(error);
            console.log("Erro ao carregar os curriculos da vaga", error);
        } finally {
            setCarregado(false);
        }
    };

    async function listarCuriculosPorVagaId(vagaId: number) {
        try {
            setCarregado(true);
            setErro(null)
            const response = await curriculoVagaService.listarCandidatosPorVagaId(vagaId);

            if (!Array.isArray(response))
                setCurriculoVaga([])

            //? Atribuindo ao state do curriculos por vaga
            //? os dados pegos do backend
            setCurriculoVaga(response)
            setTotalCandidatos(response.length);

        } catch (error: any) {
            setCarregado(false);
            setErro(error);
            console.log("Erro ao carregar os curriculos da vaga", error);
        } finally {
            setCarregado(false);
        }
    };

    async function listarVagasPorCandidatoId(candidatoId: number) {
        try {
            setCarregado(true);
            setErro(null)
            const response = await curriculoVagaService.listarVagasPorCandidatoId(candidatoId);

            if (!Array.isArray(response))
                setCurriculoVaga([])

            //? Atribuindo ao state de vagas que o candidato está inscrito
            //? os dados pegos do backend
            setVagasPorCandidato(response)
            setTotalVagas(response.length);

        } catch (error: any) {
            setCarregado(false);
            setErro(error);
            console.log("Erro ao carregar os curriculos da vaga", error);
        } finally {
            setCarregado(false);
        }
    };

    async function efetuarCandidatura(curriculoId: number, vagaId: number) {
        try {
            setCarregado(true);
            const response = await curriculoVagaService.efetuarCandidatura(curriculoId, vagaId);

            return response;
        } catch (error: any) {
            setCarregado(false);
            setErro(error);
        } finally {
            setCarregado(false)
        }
    };

    async function cancelarCandidatura(curriculoId: number, vagaId: number) {
        try {
            setCarregado(true);
            const response = await curriculoVagaService.cancelarCandidatura(curriculoId, vagaId);

            return response;
        } catch (error: any) {
            setCarregado(false);
            setErro(error);
        } finally {
            setCarregado(false)
        }
    };

    async function avaliarCandidatura(vagaId: number, candidatoId: number) {
        try {
            setCarregado(true);
            const response = await curriculoVagaService.avaliarCandidatura(vagaId, candidatoId);

            return response;
        } catch (error: any) {
            setCarregado(false);
            setErro(error);
        } finally {
            setCarregado(false)
        }
    };

    useEffect(() => {
        listarCandidaturasPorEmpresa(1);
        listarCuriculosPorVagaId(1);
        listarVagasPorCandidatoId(1);
    }, []);

    return {
        //? Variaveis
        curriculoVaga,
        carregando,
        erro,
        totalCandidatos,
        vagasPorCandidato,
        totalVagas,

        //? Funcoes
        listarCuriculosPorVagaId,
        listarVagasPorCandidatoId,
        efetuarCandidatura,
        cancelarCandidatura,
        avaliarCandidatura
    }
}