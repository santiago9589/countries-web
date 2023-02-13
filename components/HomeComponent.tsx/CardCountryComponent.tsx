import React from 'react'
import ParagraphBlack from './paragrah.style'

interface props {
    name: string
    population:number
    region:string
    capital:string
    img:string
}

const CardCountryComponent = ({ name,population,region,capital,img }: props) => {
    return (
        <article className='w-full p-4 border-2 h-[450px] border-b-darkblueDM box-border'>
            <img className="h-2/3 w-full" src={img} alt="img-country" />
            <section className="h-1/3 w-full">
                <h1 className='text-center' >{name}</h1>
                <section className='flex flex-col space-y-2'>
                    <section>
                        <ParagraphBlack text='Population:' /><span>{population}</span>
                    </section>
                    <section>
                        <ParagraphBlack text='Region:' /><span>{region}</span>
                    </section>
                    <section>
                        <ParagraphBlack text='Capital:' /><span>{capital}</span>
                    </section>
                </section>
            </section>
        </article>
    )
}

export default CardCountryComponent