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
    color: "#1e3a8a", // blue-900
  },
  entrevista: {
    label: "Entrevista marcada",
    color: "#2563eb", // blue-600
  },
  dispensados: {
    label: "Dispensados",
    color: "#94a3b8", // slate-400
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
      // 1. Aumentamos de max-h-[280px] para max-h-[380px]
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
          // 2. Aumentamos o raio de 78 para 115
          outerRadius={115}
          labelLine={false}
          label={({ cx, cy, midAngle, outerRadius, payload }) => {
            if (!payload.quantidade) return null

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
                fontSize={16} // 3. Fonte levemente maior para acompanhar a proporção
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