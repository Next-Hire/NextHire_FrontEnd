import { VagaRecebida } from "@/@types/vaga";
import { vagaService } from "@/service/vagaService";
import { useEffect, useState } from "react";

export function useVagas() {
    const [vagas, setVagas] = useState<VagaRecebida[]>([])
    const [carregando, setCarregando] = useState(false);
    const [error, setError] = useState<string | null>("");
    const [numeroVagas, setNumeroVagas] = useState<number>(0);

    async function carregarVagas() {
        try {
            setCarregando(true);
            setError(null);

            const data = await vagaService.listarVagasPorEmpresa(1);

            if (!Array.isArray(data)) {
                setVagas([]);
            }

            setNumeroVagas(data.length);
            setVagas(data);
        } catch (error: any) {
            setError(error);
            console.error("Erro ao carregar vagas", error);
        } finally {
            setCarregando(false);
        }
    }

    async function filtrarVagas(setor?: string, prioridade?: string) {
        if (!setor && !prioridade)
            return vagas;

        if (prioridade && !setor)
            return vagas.filter(v => v.nivelPrioridade == prioridade)

        if (setor && !prioridade)
            return vagas.filter(v => v.setorId == setor)

    }

    useEffect(() => {
        carregarVagas();
        filtrarVagas();
    }, []);

    return {
        numeroVagas,
        vagas,
        carregando,
        error,
        filtrarVagas
    };
}