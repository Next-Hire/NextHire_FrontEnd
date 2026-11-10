import './header.module.css';

export default function Header() {
    return (
        <header className='containerMain'>
            <div className='rowHeader'>
                <img className='Logo' src="/imgs/logo.svg" alt="Logo NextHire" />
                <div className='nav'>
                    <p>Vagas</p>
                    <p>Processos Seletivos</p>
                    <p>Entrevistas</p>
                </div>
                <div className='w-14 h-14 bg-blue-500 rounded-full'>
                    <p>rh</p>
                </div>
            </div>
        </header>
    );
}