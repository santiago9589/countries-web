import React, { useState } from 'react'
import OptionsHome from './OptionsHome'

interface props {
    regions: string[]
}

const HeaderHome = ({ regions }: props) => {


    const [isShowOptions, setIsShowOptions] = useState<boolean>()
    const [nameOptions, setnameOptions] = useState<string>()
    const [namesOptions, setnamesOptions] = useState<string[]>(regions)


    const handleShow = () => {
        setIsShowOptions(!isShowOptions)
    }

    const handleName = (name: string) => {
        setnameOptions(name)
        setIsShowOptions(!isShowOptions)
    }

    return (
        <nav className='p-16 flex w-full justify-between items-center box-border'>
            <section className='relative w-[460px] h-8 flex items-center border-2  border-darkblueDM p-6'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" absolute left-0 w-6 h-6 mx-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                    type="text"
                    placeholder='Search for a Country'
                    className='ml-14'
                     />
            </section>
            <section className='relative border-2 border-darkblueDM w-40 h-8'>
                <ul className='absolute top-0 left-0 w-full flex space-y-2 flex-col'>
                    <li className="text-center" onClick={handleShow}>{nameOptions || ("Selected your Region")}</li>
                    {
                        isShowOptions ? (
                            <>
                                {
                                    namesOptions.map((name) => {
                                        return (
                                            <OptionsHome isSelected={nameOptions === name} name={name} key={name} handleName={handleName} />
                                        )
                                    })
                                }
                            </>
                        ) : (null)
                    }
                </ul>
            </section>


        </nav>
    )
}

export default HeaderHome