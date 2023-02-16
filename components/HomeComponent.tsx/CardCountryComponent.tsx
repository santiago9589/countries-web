"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import ParagraphBlack from './paragrah.style'

interface props {
    name: string
    population: number
    region: string
    capital: string
    img: string
}

const CardCountryComponent = ({ name, population, region, capital, img }: props) => {

    const router = useRouter();

    return (
            <article className='w-full border-[0.8px] rounded-md h-[450px] border-whiteDMTLME dark:border-darkblueDM shadow-md box-border' onClick={() => router.push(`details/${name}`)}>
                <img className="h-2/3 w-full" src={img} alt="img-country" />
                <section className="h-1/3 w-full">
                    <h1 className='text-center dark:text-whiteDMTLME  my-2 uppercase font-bold text-sm w-full' >{name}</h1>
                    <section className='flex flex-col space-y-1 px-2'>
                        <section>
                            <ParagraphBlack text='Population:' /><span className="dark:text-whiteDMTLME">{population}</span>
                        </section>
                        <section>
                            <ParagraphBlack text='Region:' /><span className="dark:text-whiteDMTLME">{region}</span>
                        </section>
                        <section>
                            <ParagraphBlack text='Capital:' /><span className="dark:text-whiteDMTLME">{capital}</span>
                        </section>
                    </section>
                </section>
            </article>
    )
}

export default CardCountryComponent