"use client"


import * as React from "react"
import { Pie, PieChart } from "recharts"


import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
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
    label: "Entrevista marcada",
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
  const chartData = React.useMemo(
    () => [
      { status: "analise", quantidade: emAnalise, fill: "var(--color-analise)" },
      { status: "entrevista", quantidade: entrevistaMarcada, fill: "var(--color-entrevista)" },
      { status: "dispensados", quantidade: dispensados, fill: "var(--color-dispensados)" },
    ],
    [emAnalise, entrevistaMarcada, dispensados]
  )


  const totalCandidatos = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.quantidade, 0)
  }, [chartData])


  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Container relativo exclusivo do gráfico para centralização perfeita */}
      <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent nameKey="status" hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="quantidade"
              nameKey="status"
              cx="50%"
              cy="50%"
              innerRadius={68}
              outerRadius={110}
              strokeWidth={4}
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
          </PieChart>
        </ChartContainer>


        {/* Texto centralizado com CSS Flexbox (zero distorção de SVG) */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-3xl font-bold text-[#0f172a] leading-none">
            {totalCandidatos.toLocaleString("pt-BR")}
          </span>
          <span className="text-sm text-muted-foreground mt-1">
            Candidatos
          </span>
        </div>
      </div>


      {/* Legenda alinhada na mesma ordem das fatias */}
      <div className="flex flex-wrap items-center justify-center gap-5 pt-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[2px] bg-[#1e3a8a]" />
          <span>Em análise</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[2px] bg-[#2563eb]" />
          <span>Entrevista marcada</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[2px] bg-[#9bc4fd]" />
          <span>Dispensados</span>
        </div>
      </div>
    </div>
  )
}