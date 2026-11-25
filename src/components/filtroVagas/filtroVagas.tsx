'use client'; 

import {
    SelectRoot,
    SelectTrigger,
    SelectValue,
    SelectPortal,
    SelectPositioner,
    SelectPopup,
    SelectItem,
} from '@/components/select/select';
import './filtro.module.css';


export default function FiltroVagas() {
    return (
        <main className='mainFiltroVaga'>
            <div className='flex items-center content-center self-center justify-between w-[94%]'>
                <h1 className='tituloFiltroVaga'>Vagas em andamento</h1>
                <button className='botaoEscuro' onClick={() => window.location.href = '/criar-vaga'}>+ Abrir nova vaga</button>
            </div>
            <div className='flex content-center self-center justify-between w-[94%]'>
                <input type="text" placeholder='Pesquisar por vaga, candidato...' className='inputFiltroVaga' />
                <div className='flex flex-col'>
                    <SelectRoot defaultValue=''>
                        <SelectTrigger>
                            <SelectValue placeholder='Setor...' />
                        </SelectTrigger>

                        <SelectPortal>
                            <SelectPositioner>
                                <SelectPopup>
                                    <SelectItem value='Governança'>Governança</SelectItem>
                                    <SelectItem value='TI'>Tecnologia</SelectItem>
                                    <SelectItem value='RH'>Recursos Humanos</SelectItem>
                                </SelectPopup>
                            </SelectPositioner>
                        </SelectPortal>
                    </SelectRoot>
                </div>
                <div className='flex flex-col'>
                    <SelectRoot defaultValue=''>
                        <SelectTrigger>
                            <SelectValue placeholder='Prioridade...' />
                        </SelectTrigger>

                        <SelectPortal>
                            <SelectPositioner>
                                <SelectPopup>
                                    <SelectItem value='Baixa'>Baixa</SelectItem>
                                    <SelectItem value='Média'>Média</SelectItem>
                                    <SelectItem value='Alta'>Alta</SelectItem>
                                </SelectPopup>
                            </SelectPositioner>
                        </SelectPortal>
                    </SelectRoot>
                </div>
            </div>
            <div className='flex pl-10 self-start justify-between w-[50%]'>
                <p className='txtFiltroVaga'>00 Candidatos totais</p>
                <p className='txtFiltroVaga'>00 Vagas</p>
            </div>
        </main>
    );
}