import { useEffect, useState } from "react";
import { Entrevista } from "@/@types/Home";
import { VagaRecebida } from "@/@types/vaga";
import { ProcessoSeletivo } from "@/@types/processoSeletivo";
import { homeService } from "@/service/homeService";

export function useHome() {
    const [entrevistas, setEntrevistas] = useState<Entrevista[]>([]);
    const [entrevistasHoje, setEntrevistasHoje] = useState<Entrevista[]>([]);
    const [vagas, setVagas] = useState<VagaRecebida[]>([]);
    const [processosSeletivos, setProcessosSeletivos] = useState<ProcessoSeletivo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function carregarDados() {
            try {
                const [resEntrevistas, resEntrevistasHoje, resVagas, resProcessos] = await Promise.all([
                    homeService.listarEntrevistaPorStatus(true),
                    homeService.listarEntrevistasHoje(),
                    homeService.listarVagasPorStatus(true),
                    homeService.listarProcessoPorStatus(true),
                ]);

                setEntrevistas(resEntrevistas);
                setEntrevistasHoje(resEntrevistasHoje);
                setVagas(resVagas);
                setProcessosSeletivos(resProcessos);
                console.log(resEntrevistas.length);
                console.log(resVagas.length);
                console.log(resProcessos.length);
                console.log(resEntrevistasHoje.length)
            } catch (error) {
                console.error("Erro ao carregar dados da Home:", error);
            } finally {
                setLoading(false);
            }
        }

        carregarDados();
    }, []);

    return {
        entrevistas,
        entrevistasHoje,
        vagas,
        processosSeletivos,
        totalEntrevistas: entrevistas.length,
        totalEntrevistasHoje: entrevistasHoje.length,
        totalVagas: vagas.length,
        totalProcessos: processosSeletivos.length,
        loading,
    };
}