"use client"

interface props{
    country:Root
}

import ParagraphBlack from 'components/HomeComponent.tsx/paragrah.style';
import React from 'react'
import { Root } from 'types/api';
import ButtonBack from './buttonBack';
import { useHandleRoute } from './hooks/useHandleRouter';




const DetailsBody = ({country}:props) => {

    const [handleRouter] = useHandleRoute()
  

    return (
        <section className='xl:p-16 box-border overflow-y-auto'>
            <ButtonBack handleRouter={handleRouter} />
            <section className='w-full flex flex-col xl:flex-row h-full xl:h-[700px] mt-24 gap-14'>
                <article className='xl:flex-1 xl:border-2 xl:border-whiteDMTLME xl:shadow-lg h-1/2 xl:h-full xl:p-4'>
                    <img src={country?.flags.png} alt="flag-country" className='w-full h-full' />
                </article>
                <article className='xl:flex-1 xl:border-2 xl:border-whiteDMTLME xl:shadow-lg h-1/2 xl:h-full p-4 xl:p-8 flex items-center justify-center flex-col'>
                    <header>
                        <h1 className='text-xl xl:text-3xl font-bold uppercase mb-8 dark:text-whiteDMTLME'>{country?.name}</h1>
                    </header>
                    <section className='flex w-full gap-2 xl:gap-8 flex-col xl:flex-row'>
                        <section className='flex-1 w-full flex flex-col space-y-3'>
                            <section>
                                <ParagraphBlack text='Native Name:' /><span className='text-lg dark:text-whiteDMTLME'>{country?.nativeName}</span>
                            </section>

                            <section>
                                <ParagraphBlack text='Population:' /><span className='text-lg dark:text-whiteDMTLME'>{country?.population}</span>
                            </section>

                            <section>
                                <ParagraphBlack text='Region:' /><span className='text-lg dark:text-whiteDMTLME'>{country?.region}</span>
                            </section>
                            <section>
                                <ParagraphBlack text='Sub-Region:' /><span className='text-lg dark:text-whiteDMTLME'>{country?.subregion}</span>
                            </section>
                            <section>
                                <ParagraphBlack text='Capital:' /><span className='text-lg dark:text-whiteDMTLME'>{country?.capital}</span>
                            </section>
                        </section>

                        <section className='flex-1 w-full flex flex-col space-y-3'>
                            <section>
                                <ParagraphBlack text='Top level domain:' /><span className='text-lg dark:text-whiteDMTLME'>{country?.topLevelDomain}</span>
                            </section>
                            <section>
                                <ParagraphBlack text='Currencies:' /><span className='text-lg dark:text-whiteDMTLME'>{country?.currencies[0].name}</span>
                            </section>
                            <section>
                                <ParagraphBlack text='Languages:' /><span className='text-lg dark:text-whiteDMTLME'>{country?.languages[0].name}</span>
                            </section>
                        </section>

                    </section>
                    <footer className='flex items-center mt-14 flex-col xl:flex-row dark:text-whiteDMTLME'>
                        <h1 className='text-lg font-bold capitalize mr-2'>Border Countries:</h1>
                        <article className='flex xl:space-x-3 space-x-1'>
                            {
                                country?.borders ? (
                                    country?.borders.map((name) => {
                                        return (
                                            <span className="border-2 border-whiteDMTLME shadow-md p-1" key={name}>{name}</span>
                                        )
                                    })
                                ) : (null)
                            }
                        </article>
                    </footer>
                </article>
            </section>
        </section>
    )
}

export default DetailsBody