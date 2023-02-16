import React from 'react'
import { useHeader } from './hooks/useHeader'
import OptionsHome from './OptionsHome'

interface props {
    regions: string[]
}

const HeaderHome = ({ regions }: props) => {

    const [isShowOptions, namesOptions, nameOptions, handleName, handleShow] = useHeader(regions)

    return (
        <nav className='flex items-start  flex-col xl:flex-row box-border justify-between container mx-auto h-[140px] mt-4 xl:mt-8 px-4 xl:px-12'>
            <section className='border-2 border-whiteDMTLME flex  justify-between items-center shadow-md  w-full xl:w-[580px] p-1 rounded-md h-[45px] xl:h-[60px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <section className='w-[500px]'>
                    <input
                        placeholder='Search your country'
                        className='rounded-lg p-1 w-full h-full placeholder-opacity-80 bg-verylightgrayLMB'
                    />
                </section>
            </section>
            <section className='relative border-2 border-whiteDMTLME shadow-md   w-2/3 xl:w-[300px] p-2 rounded-md h-[45px] xl:h-[60px]'>
                <section className='box-border h-full' onClick={() => handleShow()}>
                    <section className='flex items-center justify-between h-full'>
                        <span className='ml-4  text-sm xl:text-lg font-bold capitalize'>{nameOptions || "Selected your Region"}</span>
                        {
                            isShowOptions ?
                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="relative z-20 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                                ) :
                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="relative z-20 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>)
                        }
                    </section>
                    {
                        isShowOptions ? (
                            <section className='absolute top-0 left-0 w-full flex space-y-2 flex-col bg-verylightgrayLMB p-2 rounded-lg shadow-sm' onClick={() => handleShow()}>
                                {
                                    namesOptions.map((option) => {
                                        return (
                                            <OptionsHome name={option} isSelected={option === nameOptions} handleName={handleName} />
                                        )
                                    })
                                }
                            </section>
                        ) : (null)
                    }
                </section>
            </section>
        </nav>
    )
}

export default HeaderHome


