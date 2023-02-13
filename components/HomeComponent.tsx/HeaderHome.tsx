

import React, { useState } from 'react'
import OptionsHome from './OptionsHome'

const HeaderHome = () => {

    const [isShowOptions, setIsShowOptions] = useState<boolean>()
    const [nameOptions, setnameOptions] = useState<string>()
    const [namesOptions, setnamesOptions] = useState<string[]>(["pedro", "juan", "jose", "maria"])


    const handleShow = () => {
        setIsShowOptions(!isShowOptions)
    }

    const handleName = (name: string) => {
        setnameOptions(name)
        setIsShowOptions(!isShowOptions)
    }

    return (
        <nav className='p-16 flex w-full justify-between items-center box-border'>
            <section>
                <input
                    placeholder='Search for a Country' />
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