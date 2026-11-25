"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
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

const ORDEM_EXIBICAO = ["vagasAbertas", "processoAndamento", "entrevistas"]

const chartConfig = {
  vagasAbertas: {
    label: "Vagas em aberto",
    color: "#1e3a8a",
  },
  processoAndamento: {
    label: "Processo seletivo em andamento",
    color: "#2563eb",
  },
  entrevistas: {
    label: "Entrevistas",
    color: "#9bc4fd",
  },
} satisfies ChartConfig

export default function GraficoVagas({ dados }: GraficoVagasProps) {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[300px] max-h-[380px] w-full"
    >
      <BarChart
        accessibilityLayer
        data={dados}
        margin={{ top: 28 }}
        barGap={6}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="setor"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <YAxis hide domain={[0, "dataMax + 5"]} />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />

        <ChartLegend
          itemSorter={(item) => ORDEM_EXIBICAO.indexOf(String(item.dataKey))}
          content={<ChartLegendContent />}
          className="pt-4 flex-wrap gap-6 justify-center text-sm"
        />

        {/* 1º na esquerda: Vagas em aberto */}
        <Bar
          dataKey="vagasAbertas"
          fill="var(--color-vagasAbertas)"
          radius={4}
          barSize={32}
          animationDuration={600}
        >
          <LabelList
            position="top"
            offset={8}
            fill="#172554"
            fontSize={13}
            fontWeight={700}
          />
        </Bar>

        {/* 2º no meio: Processo seletivo em andamento */}
        <Bar
          dataKey="processoAndamento"
          fill="var(--color-processoAndamento)"
          radius={4}
          barSize={32}
          animationDuration={600}
        >
          <LabelList
            position="top"
            offset={8}
            fill="#172554"
            fontSize={13}
            fontWeight={700}
          />
        </Bar>

        {/* 3º na direita: Entrevistas */}
        <Bar
          dataKey="entrevistas"
          fill="var(--color-entrevistas)"
          radius={4}
          barSize={32}
          animationDuration={600}
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
