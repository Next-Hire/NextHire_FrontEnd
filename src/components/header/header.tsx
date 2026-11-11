import './header.module.css';
import Link from "next/link";

export default function Header() {
    return (
        <header className='headerContainer'>
            <div className='rowHeader'>
                <img className='Logo w-34' src="/imgs/logo.svg" alt="Logo NextHire" />
                <nav className='nav'>
                    <Link href="/vagas">Vagas</Link>
                    <Link href="">Processos Seletivos</Link>
                    <Link href="">Entrevistas</Link>
                </nav>
                <div className='circleUser'>
                    <p>rh</p>
                </div>
            </div>
        </header>
    );
}