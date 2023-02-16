"use client"

import { api } from 'api/api';
import ParagraphBlack from 'components/HomeComponent.tsx/paragrah.style';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Root } from 'types/api';
import ButtonBack from './buttonBack';
import { useCountry } from './hooks/useCountry';
import { useHandleRoute } from './hooks/useHandleRouter';

const DetailsBody = () => {

    const [handleRouter] = useHandleRoute()
    const [country] = useCountry()
   
    return (
        <section className='p-16 box-border'>
            <ButtonBack handleRouter={handleRouter} />
            <section className='w-full flex h-[700px] mt-24 gap-14'>
                <article className='flex-1 border-2 border-whiteDMTLME shadow-lg h-full p-4'>
                    <img src={country?.flags.png} alt="flag-country" className='w-full h-full' />
                </article>
                <article className='flex-1 border-2 border-whiteDMTLME shadow-lg h-full p-8 flex items-center justify-center flex-col'>
                    <header>
                        <h1 className='text-3xl font-bold uppercase mb-8'>{country?.name}</h1>
                    </header>
                    <section className='flex w-full gap-8'>
                        <section className='flex-1 w-full flex flex-col space-y-3'>
                            <section>
                                <ParagraphBlack text='Native Name:' /><span className='text-lg'>{country?.nativeName}</span>
                            </section>

                            <section>
                                <ParagraphBlack text='Population:' /><span className='text-lg'>{country?.population}</span>
                            </section>

                            <section>
                                <ParagraphBlack text='Region:' /><span className='text-lg'>{country?.region}</span>
                            </section>
                            <section>
                                <ParagraphBlack text='Sub-Region:' /><span className='text-lg'>{country?.subregion}</span>
                            </section>
                            <section>
                                <ParagraphBlack text='Capital:' /><span className='text-lg'>{country?.capital}</span>
                            </section>
                        </section>

                        <section className='flex-1 w-full flex flex-col space-y-3'>
                            <section>
                                <ParagraphBlack text='Top level domain:' /><span className='text-lg'>{country?.topLevelDomain}</span>
                            </section>
                            <section>
                                <ParagraphBlack text='Currencies:' /><span className='text-lg'>{country?.currencies[0].name}</span>
                            </section>
                            <section>
                                <ParagraphBlack text='Languages:' /><span className='text-lg'>{country?.languages[0].name}</span>
                            </section>
                        </section>

                    </section>
                    <footer className='flex items-center mt-14'>
                        <h1 className='text-lg font-bold capitalize mr-2'>Border Countries:</h1>
                        <article className='flex space-x-3'>
                            {
                                country?.borders.map((name) => {
                                    return (
                                        <span className="border-2 border-whiteDMTLME shadow-md p-1" key={name}>{name}</span>
                                    ) 
                                })
                            }
                        </article>
                    </footer>
                </article>
            </section>
        </section>
    )
}

export default DetailsBody