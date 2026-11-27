'use client';

import { ArrowRight, CircleX, Link } from "lucide-react";
import "./perfilrh.css";
import { useState } from 'react';

export default function PerfilRh() {
    const [aberto, setAberto] = useState(false);

    return (


        <div>

            <button className='circleUser'
                onClick={() => setAberto(true)}
            >
                <p>rh</p>
            </button>

            {aberto && (
                <div
                    className='sobreposicaoPerfilRH'
                    onClick={() => setAberto(false)}
                >
                    <aside className="flex flex-col justify-between bg-white rounded-s-3xl w-120 h-182 p-8 pb-40">
                        <div className="flex flex-row">

                            <h1 className="titulo">
                                Kauê Sérgio da Conceição Silva Campos
                            </h1>
                            <CircleX className="w-15 h-15 cursor-pointer text-blue-950" onClick={() => setAberto(false)} />
                        </div>
                        <div className="flex flex-col justify-around h-70">
                            <div>
                                <h2 className="font-(family-name:--font-instrument-sans) text-2xl font-bold text-blue-950">Setor:</h2>
                                <p className="font-(family-name:--font-jost) text-xl font-medium">Recursos humanos</p>
                            </div>

                            <div>
                                <h2 className="font-(family-name:--font-instrument-sans) text-2xl font-bold text-blue-950">Email:</h2>
                                <p className="font-(family-name:--font-jost) text-xl font-medium">kaue.s.campos@vortex.com</p>
                            </div>

                            <div>
                                <h2 className="font-(family-name:--font-instrument-sans) text-2xl font-bold text-blue-950">Telefone:</h2>
                                <p className="font-(family-name:--font-jost) text-xl font-medium">(00) 000000-0000</p>
                            </div>
                        </div>
                        <a className="text-blue-950 font-bold font-(family-name:--font-jost) flex flex-row gap-4 underline text-xl" href="">Alterar senha <ArrowRight /></a>
                    </aside>
                </div>
            )}
        </div>
    );
}
