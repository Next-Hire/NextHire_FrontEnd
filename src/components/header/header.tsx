'use client';

import './header.module.css';
import Link from "next/link";

export default function Header() {
    return (
        <header className='headerContainer'>
            <div className='rowHeader'>
                <img className='Logo w-30' src="/imgs/logo.svg" alt="Logo NextHire" onClick={() => window.location.href = '/home'} />
                <nav className='nav'>
                    <Link href="/vagas">Vagas</Link>
                    <Link href="/processos-seletivos">Processos Seletivos</Link>
                    <Link href="/entrevista">Entrevistas</Link>
                </nav>
                <div className='circleUser'>
                    <p>rh</p>
                </div>
            </div>
        </header>
    );
}