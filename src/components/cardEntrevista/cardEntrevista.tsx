import React from 'react'
import { ChevronRight } from 'lucide-react'
export const cardEntrevista = () => {

    const dados = {
        nomeCand: "Carlos Eduardo",
        statusCand: "Em avaliacao",
        nota: 80
    }
  return (
    <div className='display-inline'>
        <div>{dados.nomeCand.charAt(0)}</div>{/* cor1 - cinza */}
        <div className='inline-cinza'>
        <p>{dados.nomeCand}</p> 
        <label htmlFor=""> {dados.statusCand}</label> {/* laranja e texto central */}
        </div>
        <ChevronRight/>
        <p></p> {/* cor1 - cinza */}
    </div>
  )
}
