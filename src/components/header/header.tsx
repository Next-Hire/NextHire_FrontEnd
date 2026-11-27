'use client';

import PerfilRh from '../perfilRH/perfilrh';
import './header.module.css';
import Link from "next/link";

export default function Header() {
    return (
        <header className='headerContainer'>
            <div className='rowHeader'>
                <img className='Logo w-30' src="/imgs/logo.svg" alt="Logo NextHire" onClick={() => window.location.href = '/home'} />
                <nav className='nav'>
                    <Link href="/vagas">Vagas</Link>
                    <Link href="/processo-seletivo">Processos Seletivos</Link>
                    <Link href="/entrevista">Entrevistas</Link>
                </nav>
                <PerfilRh />
            </div>
        </header>
    );
}