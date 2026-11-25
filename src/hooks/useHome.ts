import {vagaService} from "@/service/vagaService";
import {useState} from "react";
import {VagaRecebida} from "@/@types/vaga";
import {homeService} from "@/service/homeService";

export function useHome() {
    const [vagas, setVagas] = useState<VagaRecebida[]>([])
    const [carregando, setCarregando] = useState(false);
    const [error, setError] = useState<string | null>("");
    const [status, setStatus] = useState<boolean>();

    async function carregarVagas() {
        try {
            setCarregando(true);
            setError(null);

            const data = await homeService.listarVagasPorStatus(status);

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
}