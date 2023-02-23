import { useMemo } from "react"
import { Root } from "types/api"

interface props{
    data:Root[]
    search:string
    selected:string
}

export const useData = ({data,search,selected}:props):[Root[]] =>{

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
    
    return [dataFilterSelected]
      
}