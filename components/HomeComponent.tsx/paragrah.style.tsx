import React from 'react'

interface props{
    text:string
}

const ParagraphBlack = ({text}:props) => {
  return (
    <span className='text-lg font-bold capitalize mr-2'>{text}</span>
  )
}

export default ParagraphBlack