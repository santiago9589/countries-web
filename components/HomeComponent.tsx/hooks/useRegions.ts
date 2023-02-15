import { data } from "api/data"
import { useMemo } from "react"

export const useRegions = (): [string[]] => {
    const setArray = new Set<string>()

    const arrayRegions: string[] = useMemo(() => {
        return data.reduce((previus, current) => {
            setArray.add(current.region)
            return Array.from(setArray)
        }, [""])
    }, [data])

    return [arrayRegions]
}