import { VagaCadastrada, VagaRecebida } from "@/@types/vaga";
import { vagaService } from "@/service/vagaService";
import { useEffect, useState } from "react";

export function useVagas() {
    const [vagas, setVagas] = useState<VagaRecebida[]>([])
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState<string | null>("");
    const [numeroVagas, setNumeroVagas] = useState<number>(0);

    async function carregarVagas() {
        try {
            setCarregando(true);
            setErro(null);

            const data = await vagaService.listarVagasPorEmpresa(1);

            if (!Array.isArray(data))
                setVagas([]);

            setNumeroVagas(data.length);
            setVagas(data);
        } catch (error: any) {
            setErro(error.response?.data);
            console.error("Erro ao carregar vagas", error);
        } finally {
            setCarregando(false);
        }
    };

    function filtrarVagas(termo?: string, setor?: string, prioridade?: string) {
        return vagas.filter((vaga) => {
            const bateTermo = !termo || vaga.titulo.toLocaleLowerCase().includes(termo.toLocaleLowerCase());
            const bateSetor = !setor || vaga.nomeSetor.toLowerCase().includes(setor.toLowerCase());
            const batePrioridade = !prioridade || vaga.nivelPrioridade.toLowerCase().includes(prioridade.toLowerCase());

            return bateTermo && bateSetor && batePrioridade;
        })
    };

    async function cadastrarVagas(vagaAdiciona: VagaCadastrada){
        try {
            setCarregando(true);
            setErro(null);
            const data = await vagaService.cadastrarVagas(vagaAdiciona);
            return data;
        } catch (error: any) {
            setErro(error.response?.data)
        }
    };

    useEffect(() => {
        carregarVagas();
        filtrarVagas();
    }, []);

    return {
        //? Variaveis
        numeroVagas,
        vagas,
        carregando,
        erro,

        //? Funcoes
        filtrarVagas,
        cadastrarVagas,
    };
}