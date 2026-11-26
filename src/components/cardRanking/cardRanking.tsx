export default function CardRanking() {
    return (
        <article className='flex border-1 rounded-lg p-4 items-center justify-between font-(family-name:--font-instrument-sans)'>
            <div className='flex gap-5'>
                <div className='flex items-center justify-center w-14 h-14 bg-blue-950 rounded-full text-3xl text-white font-semibold'>
                    <p>1</p>
                </div>
                <div>
                    <p className='text-2xl font-semibold text-blue-950'>Matheus Souza</p>
                    <p className='text-base font-semibold text-gray-600'>Nota: 91/100</p>
                </div>
            </div>
            <div className='flex items-center justify-center w-20 h-10 bg-[#5682D9] rounded-full text-lg text-white font-semibold'>
                <p>91%</p>
            </div>
        </article>
    )
}