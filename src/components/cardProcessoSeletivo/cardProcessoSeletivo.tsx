import Link from "next/link";
import { MoveRight } from 'lucide-react';

export default function CardProcessoSeletivo() {
    return (
        <>
            <main className='bg-white'>
                <div>Prioridade Alta</div>
                <h4>Desenvolvedor Full-Stack</h4>
                <div>
                    <p>Setor: <span>Tecnologia da informação</span></p>
                    <p>Gestor: <span>Samanta Nascimento</span></p>
                    <p>Total de candidatos: <span>58</span></p>
                </div>
                <Link href="">Ver detalhes do processo <span><MoveRight /></span></Link>
            </main>
        </>
    );
}