"use client"

interface props {
  data: Root[]
}

import React from 'react'
import { useStore } from 'store/store'
import { Root } from 'types/api'
import CardCountryComponent from './CardCountryComponent'
import HeaderHome from './HeaderHome'
import { useData } from './hooks/useData'
import { useRegions } from './hooks/useRegions'

const BodyHomeComponent = ({ data }: props) => {

  const [arrayRegions] = useRegions()
  const search = useStore((state) => state ? state.search : "");
  const selected = useStore((state) => state ? state.selected : "");
  const [dataFilterSelected] = useData({data,search,selected})
  
  return (
    <>
      <HeaderHome regions={arrayRegions} />
      <section className=' grid grid-cols-1 xl:grid-cols-4 box-border gap-12  p-4 xl:p-12 ' >
        {
          dataFilterSelected.map((country) => {
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