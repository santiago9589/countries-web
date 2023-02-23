"use client"

interface props {
  data: Root[]
}

type filtres = {
  searchFilter : (value:string)=>boolean
  selectedFilter : (value:string)=>boolean
}

import React, { useMemo } from 'react'
import { useStore } from 'store/store'
import { Root } from 'types/api'
import CardCountryComponent from './CardCountryComponent'
import HeaderHome from './HeaderHome'
import { useRegions } from './hooks/useRegions'

const BodyHomeComponent = ({ data }: props) => {

  const [arrayRegions] = useRegions()
  const search = useStore((state) => state ? state.search : "");
  const selected = useStore((state) => state ? state.selected : "");

  const dataFilterSearch = useMemo(() => {
    return data.filter((value) => {
      return value.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [search])

  const dataFilterSelected = useMemo(() => {
    return dataFilterSearch.filter((value) => {
      return value.region.toLowerCase().includes(selected.toLowerCase())
    })
  }, [selected,search])

  

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