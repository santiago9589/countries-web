import React from 'react'

interface props {
    name: string
    handleName: (name: string) => void
    isSelected: boolean
}

const OptionsHome = ({ name, handleName, isSelected }: props) => {
    return (
        <span className={`ml-4 p-4 flex-1 rounded-md text-lg uppercase  ${isSelected ? ("") : ("")}`} onClick={() => handleName(name)}>{name}</span>
    )
}

export default OptionsHome
