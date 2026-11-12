import './cardAgendaHome.module.css';

export default function CardAgendaHome() {
    return (
        <>
            <main className='mainCardAgendaHome'>
                <hr className='linhaHorizontal' />
                <div className='infosAgenda'>
                    <div className='userCircle'>
                        <p className='flex'>Js</p>
                    </div>
                    <div className='textoInfos'>
                        <p>09:00</p>
                        <p>João Silva | Dev Full Stack </p>
                    </div>
                </div>
            </main>
        </>
    );
}