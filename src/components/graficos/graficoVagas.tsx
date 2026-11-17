"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"

export interface SetorVagasData {
  setor: string
  vagasAbertas: number
  processoAndamento: number
  entrevistas: number
}

interface GraficoVagasProps {
  dados: SetorVagasData[]
}

const chartConfig = {
  vagasAbertas: {
    label: "Vagas em aberto",
    color: "#1e3a8a", // blue-900
  },
  processoAndamento: {
    label: "Processo em andamento",
    color: "#2563eb", // blue-600
  },
  entrevistas: {
    label: "Entrevistas",
    color: "#0ea5e9", // sky-500
  },
} satisfies ChartConfig

export default function GraficoVagas({ dados }: GraficoVagasProps) {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[300px] max-h-[380px] w-full"
    >
      {/* barGap={6} deixa um respiro sutil entre as barras do mesmo setor */}
      <BarChart accessibilityLayer data={dados} margin={{ top: 24 }} barGap={6}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="setor"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <ChartLegend
          content={<ChartLegendContent />}
          className="pt-4 flex-wrap gap-6 justify-center text-sm"
        />

        {/* barSize={24} define a largura exata de cada barra em pixels */}
        <Bar
          dataKey="vagasAbertas"
          fill="var(--color-vagasAbertas)"
          radius={4}
          barSize={32}
        >
          <LabelList
            position="top"
            offset={8}
            fill="#172554"
            fontSize={13}
            fontWeight={700}
          />
        </Bar>

        <Bar
          dataKey="processoAndamento"
          fill="var(--color-processoAndamento)"
          radius={4}
          barSize={32}
        >
          <LabelList
            position="top"
            offset={8}
            fill="#172554"
            fontSize={13}
            fontWeight={700}
          />
        </Bar>

        <Bar
          dataKey="entrevistas"
          fill="var(--color-entrevistas)"
          radius={4}
          barSize={32}
        >
          <LabelList
            position="top"
            offset={8}
            fill="#172554"
            fontSize={13}
            fontWeight={700}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}