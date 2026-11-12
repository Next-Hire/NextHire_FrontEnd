import CardVaga from '../cardVaga/cardVaga';
import './listaVaga.module.css';


export default function ListaVaga() {
    return (
        <main className='flex flex-col items-center justify-around min-h-130 gap-4 py-4 w-[100%]'>
            <CardVaga />
            <CardVaga />
            <CardVaga />
            <CardVaga />
            <CardVaga />

        </main>
    );
}