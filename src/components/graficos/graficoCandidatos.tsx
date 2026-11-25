"use client"

import { Pie, PieChart } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"

interface GraficoCandidatosProps {
  emAnalise: number
  entrevistaMarcada: number
  dispensados: number
}

const chartConfig = {
  quantidade: {
    label: "Candidatos",
  },
  analise: {
    label: "Em análise",
    color: "#1e3a8a", 
  },
  entrevista: {
    label: "Home marcada",
    color: "#2563eb", 
  },
  dispensados: {
    label: "Dispensados",
    color: "#9bc4fd",
  },
} satisfies ChartConfig

export default function GraficoCandidatos({
  emAnalise,
  entrevistaMarcada,
  dispensados,
}: GraficoCandidatosProps) {
  const chartData = [
    { status: "analise", quantidade: emAnalise, fill: "var(--color-analise)" },
    { status: "entrevista", quantidade: entrevistaMarcada, fill: "var(--color-entrevista)" },
    { status: "dispensados", quantidade: dispensados, fill: "var(--color-dispensados)" },
  ]

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[380px] w-full"
    >
      <PieChart>
        <ChartTooltip
          content={<ChartTooltipContent nameKey="status" hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="quantidade"
          nameKey="status"
          outerRadius={115}
          labelLine={false}
          label={({ cx, cy, midAngle, outerRadius, payload }) => {
            if (!payload.quantidade || midAngle === undefined) return null

            const RADIAN = Math.PI / 180
            const radius = outerRadius + 18
            const x = cx + radius * Math.cos(-midAngle * RADIAN)
            const y = cy + radius * Math.sin(-midAngle * RADIAN)

            return (
              <text
                x={x}
                y={y}
                fill="#172554"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
                fontSize={16}
                fontWeight={700}
              >
                {payload.quantidade}
              </text>
            )
          }}
        />
        <ChartLegend
          content={<ChartLegendContent nameKey="status" />}
          className="pt-2 flex-wrap gap-4 justify-center text-sm"
        />
      </PieChart>
    </ChartContainer>
  )
}