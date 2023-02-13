import React from 'react'

interface props {
    name: string
    handleName: (name: string) => void
    isSelected: boolean
    children?:React.ReactNode
}

const OptionsHome = ({ name, handleName, isSelected }: props) => {
    return (
        <li className={`text-center ${isSelected ? ("bg-darkgrayLMI") : ("")}`} onClick={() => handleName(name)}>{name}</li>
    )
}

export default OptionsHome
