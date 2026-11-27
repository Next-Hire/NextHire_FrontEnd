import Link from "next/link";
import { MoveRight } from "lucide-react";

type PrioridadeTipo = "baixo" | "medio" | "alto";

interface CardProps {
  prioridade_vaga_enum: PrioridadeTipo;
}

const configuracaoPrioridade: Record<
  PrioridadeTipo,
  {
    texto: string;
    corTexto: string;
    borda: string;
    fundo: string;
  }
> = {
  baixo: {
    texto: "Prioridade Baixa",
    corTexto: "text-green-900",
    borda: "border-green-200",
    fundo: "bg-green-200",
  },
  medio: {
    texto: "Prioridade Média",
    corTexto: "text-yellow-900",
    borda: "border-yellow-200",
    fundo: "bg-yellow-200",
  },
  alto: {
    texto: "Prioridade Alta",
    corTexto: "text-red-900",
    borda: "border-red-200",
    fundo: "bg-red-200",
  },
};

export default function CardProcessoSeletivo({ prioridade_vaga_enum }: CardProps) {
  const estiloAtual =
    configuracaoPrioridade[prioridade_vaga_enum] || configuracaoPrioridade.baixo;

  return (
    <article
      className={`w-full min-w-0 bg-white rounded-lg py-4 shadow-md px-4 flex flex-col justify-between font-(family-name:--font-instrument-sans) border-l-8 ${estiloAtual.borda} gap-4`}
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-semibold text-xl sm:text-2xl text-blue-950 min-w-0 wrap-break-word">
          Desenvolvedor Full-Stack
        </h4>

        <div
          className={`${estiloAtual.fundo} shrink-0 rounded-lg flex items-center justify-center text-sm sm:text-base font-semibold px-4 py-1 text-center whitespace-nowrap font-(family-name:--font-jost)`}
        >
          <p
            className={`${estiloAtual.corTexto} `}
          >
            {estiloAtual.texto}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="font-semibold text-sm sm:text-base text-gray-600 space-y-1 font-(family-name:--font-jost)">
          <p>
            Setor: <span className="font-medium">Tecnologia da informação</span>
          </p>
          <p>
            Gestor: <span className="font-medium">Samanta Nascimento</span>
          </p>
          <p>
            Total de candidatos: <span className="font-medium">58</span>
          </p>
        </div>

        <div className="flex gap-1 items-center underline">
          <Link href="/ranking" className="text-sm font-medium font-(family-name:--font-jost) text-[#7D8EC4]">
            Ver detalhes do processo
          </Link>
          <MoveRight strokeWidth={1.6} color="#7D8EC4" className="w-4 h-4 shrink-0" />
        </div>
      </div>
    </article>
  );
}