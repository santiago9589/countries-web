"use client"

interface props {
  data: Root[]
}

import React, { useMemo } from 'react'
import { Root } from 'types/api'
import CardCountryComponent from './CardCountryComponent'
import HeaderHome from './HeaderHome'

const BodyHomeComponent = ({ data }: props) => {

  const setArray = new Set<string>()

  const arrayRegions: string[] = useMemo(() => {
    return data.reduce((previus, current) => {
      setArray.add(current.region)
      return Array.from(setArray)
    }, [""])
  }, [data])

  return (
    <>
      <HeaderHome regions={arrayRegions} />
      <section className=' grid grid-cols-4 box-border gap-12 p-12 ' >
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