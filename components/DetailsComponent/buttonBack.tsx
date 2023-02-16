import React from 'react'

interface props {
    handleRouter: (url: string) => void
}

const ButtonBack = ({ handleRouter }: props) => {
    return (
        <section className="border-2 flex justify-around items-center text-xl border-whiteDMTLME shadow-md w-[150px] text-center p-4 rounded-lg mt-4 xl:mt-0" onClick={() => handleRouter("/")} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            <button>Back</button>
        </section>
    )
}

export default ButtonBack