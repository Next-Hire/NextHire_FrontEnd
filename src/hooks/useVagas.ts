import { VagaRecebida } from "@/@types/vaga";
import { vagaService } from "@/service/vagaService";
import { useEffect, useState } from "react";

export function useVagas() {
    const [vagas, setVagas] = useState<VagaRecebida[]>([])
    const [carregando, setCarregando] = useState(false);
    const [error, setError] = useState<string | null>("");

    async function carregarVagas() {
        try {
            setCarregando(true);
            setError(null);
            
            const data = await vagaService.listarVagas();

            if (!Array.isArray(data)) {
                setVagas([]);
            }

            setVagas(data);
        } catch (error: any) {
            setError(error);
            console.error("Erro ao carregar vagas", error);
        } finally {
            setCarregando(false);
        }
    }

    async function filtrarVagas(setor?: string, prioridade?: string){
        if(!setor && !prioridade)
            return vagas;

        else if(prioridade && !setor){
            return vagas.filter(v => v.nivelPrioridade == prioridade)
        }

    }   

    useEffect(() => {
        carregarVagas();
        filtrarVagas();
    }, []);

    return {
        vagas,
        carregando,
        error,
        filtrarVagas
    };
}