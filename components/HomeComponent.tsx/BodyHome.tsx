"use client"

interface props {
  data: Root[]
}

import React from 'react'
import { Root } from 'types/api'
import CardCountryComponent from './CardCountryComponent'
import HeaderHome from './HeaderHome'

const BodyHomeComponent = ({ data }: props) => {

  return (
    <>
      <HeaderHome />
      <section className='border-2 border-b-darkgrayLMI grid grid-cols-4 box-border gap-5' >
        {
          data.map((country) => {
            return (
          
              <CardCountryComponent
                key={country.name}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                img={country.flags.svg}
              />
            )
          })
        }
      </section>
    </>
  )
}

export default BodyHomeComponent