'use client';

import './filtro.module.css';


export default function FiltroVagas() {
    return (
        <main className='mainFiltroVaga'>
            <div className='flex content-center self-center justify-between w-[95%]'>
                <h1 className='tituloFiltroVaga'>Vagas em andamento</h1>
                <button className='btnAdicionarVaga' onClick={() => window.location.href = '/criar-vaga'}>+ Abrir nova vaga</button>
            </div>
            <div className='flex content-center justify-between w-[62%] ml-[2.5%]'>
                <input type="text" placeholder='Pesquisar por vaga, candidato...' className='inputFiltroVaga' />
                <select name="Setor" id="Setor" className='selectFiltroVaga'>
                    <option value="Governança">Governança</option>
                    <option value="TI">Tecnologia</option>
                    <option value="RH">Recursos Humanos</option>
                </select>
                <select name="Prioridade" id="Prioridade" className='selectFiltroVaga'>
                    <option value="Baixa">Baixa</option>
                    <option value="Média">Média</option>
                    <option value="Alta">Alta</option>
                </select>
            </div>
            <div className='flex content-center justify-between w-[62%] ml-[2.5%]'>
                <p className='txtFiltroVaga'>00 Candidatos totais</p>
                <p className='txtFiltroVaga'>00 Questionários enviados</p>
                <p className='txtFiltroVaga'>00 Vagas</p>
            </div>
        </main>
    );
}