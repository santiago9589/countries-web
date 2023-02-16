"use client"

interface props {
  data: Root[]
}

import React from 'react'
import { Root } from 'types/api'
import CardCountryComponent from './CardCountryComponent'
import HeaderHome from './HeaderHome'
import { useRegions } from './hooks/useRegions'

const BodyHomeComponent = ({ data }: props) => {

  const [arrayRegions] = useRegions()
  return (
    <>
      <HeaderHome regions={arrayRegions} />
      <section className=' grid grid-cols-1 xl:grid-cols-4 box-border gap-12  p-4 xl:p-12 ' >
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