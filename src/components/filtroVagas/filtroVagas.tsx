import './filtro.module.css';


export default function FiltroVagas() {
    return (
        <main className='flex flex-col justify-around bg-white rounded-lg h-50 w-3/4 py-4'>
            <div className='flex content-center self-center justify-between w-[95%]'>
                <h1 className='text-4xl font-bold text-blue-950 font-(family-name:--font-instrument-sans)'>Vagas em andamento</h1>
                <button className='bg-blue-950 rounded-md text-white w-40 font-(family-name:--font-instrument-sans) font-semibold'>+ Abrir nova vaga</button>
            </div>
            <div className='flex content-center justify-between w-[58%] ml-[2.5%]'>
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
            <div className='flex content-center justify-between w-[58%] ml-[2.5%]'>
                <p className='font-(family-name:--font-instrument-sans) font-medium text-blue-950'>00 Candidatos totais</p>
                <p className='font-(family-name:--font-instrument-sans) font-medium text-blue-950'>00 Questionários enviados</p>
                <p className='font-(family-name:--font-instrument-sans) font-medium text-blue-950'>00 Vagas</p>
            </div>
        </main>
    );
}