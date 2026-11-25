import Link from "next/link";
import { MoveRight } from 'lucide-react';

type PrioridadeTipo = "baixo" | "medio" | "alto";

interface CardProps {
  prioridade_vaga_enum: PrioridadeTipo;
}

const configuracaoPrioridade: Record<PrioridadeTipo, {
  texto: string;
  borda: string;
  fundo: string;
}> = {
  baixo: {
    texto: "Prioridade Baixa",
    borda: "border-green-500",
    fundo: "bg-green-500",
  },
  medio: {
    texto: "Prioridade Média",
    borda: "border-yellow-400",
    fundo: "bg-yellow-400",
  },
  alto: {
    texto: "Prioridade Alta",
    borda: "border-red-500",
    fundo: "bg-red-500",
  },
};

export default function CardProcessoSeletivo({ prioridade_vaga_enum }: CardProps) {
  // estilização da prioridade baixa é um "padrão" caso ele não consiga pegar de prioridade_vaga_enum
  const estiloAtual = configuracaoPrioridade[prioridade_vaga_enum] || configuracaoPrioridade.baixo;

  return (
    <main className={`bg-white rounded-lg py-4 my-1 shadow-md px-4 flex flex-col w-125 font-(family-name:--font-instrument-sans) border-l-8 ${estiloAtual.borda} gap-4`}>
      <div className="flex justify-between">
        <h4 className="font-semibold text-2xl text-blue-950">Desenvolvedor Full-Stack</h4>
        
        <div className={`${estiloAtual.fundo} w-40 h-fit rounded-lg flex items-center justify-center`}>
          <p className="text-white text-base font-medium px-2 py-0.5 text-center">
            {estiloAtual.texto}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="font-semibold text-base text-gray-600">
          <p>Setor: <span>Tecnologia da informação</span></p>
          <p>Gestor: <span>Samanta Nascimento</span></p>
          <p>Total de candidatos: <span>58</span></p>
        </div>
        <div className="flex gap-1 items-center underline">
          <Link href="" className="text-sm font-medium text-[#7D8EC4]">
            Ver detalhes do processo
          </Link>
          <MoveRight strokeWidth={1.6} color="#7D8EC4" className="mt-1" />
        </div>
      </div>
    </main>
  );
}
