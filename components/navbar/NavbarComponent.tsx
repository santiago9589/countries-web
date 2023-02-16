"use client"

import React from 'react'

const NavbarComponent = () => {

  const handleMode = () =>{
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className=' px-2  xl:px-16 text-verydarkblueLMT h-14  flex justify-between items-center bg-whiteDMTLME  border-b-2  border-b-whiteDMTLME  shadow-sm  box-border dark:bg-verydarkblueDMB dark:text-whiteDMTLME dark:border-b-darkblueDM'>
      <h1 className='capitalize  font-bold  text-sm xl:text-xl'>Where in the world?</h1>
      <section onClick={()=>handleMode()} className='flex items-center  justify-center xl:justify-start w-28 xl:w-40'>
        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
        <p  className='capitalize font-bold text-sm xl:text-xl  ml-1 xl:ml-4'>
          Dark Mode
        </p>
      </section>
    </nav>
  )
}

export default NavbarComponent