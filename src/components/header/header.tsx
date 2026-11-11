import './header.module.css';
import Link from "next/link";

export default function Header() {
    return (
        <header className='containerMain'>
            <div className='rowHeader'>
                <img className='Logo w-34' src="/imgs/logo.svg" alt="Logo NextHire" />
                <div className='nav'>
                    <Link href="">Vagas</Link>
                    <Link href="">Processos Seletivos</Link>
                    <Link href="">Entrevistas</Link>
                </div>
                <div className='circleUser'>
                    <p>rh</p>
                </div>
            </div>
        </header>
    );
}