import React from 'react'
import Header from "@/components/header/header"
import './gerar_feedback.module.css'
import {SquareArrowLeftEnter, Search} from "lucide-react"
const page = () => {

    const dados = {
        oi: 2,
        titulo: "Desenvolvedor Full-Stack",
        data: "09/11/2026",
        hora: "11",
        qntdCandidatos: 50

    }

    
    

  return (
    <>
    <Header/>
    <h1 className='titulo_vaga'> Entrevista - {dados.titulo} - {dados.data} - {dados.hora}H </h1>
    <section className='containerMain'>
    <nav className='candidatoSidebar'>
      <label htmlFor="">
      <h4>Candidatos ({dados.qntdCandidatos})</h4>
      <SquareArrowLeftEnter/>
      </label>

      <div></div>
      <label htmlFor="">

      </label>

    </nav>
    
    </section>

    </>
  )
}

export default page