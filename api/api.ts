import axios, { AxiosError } from "axios";
import { Root } from "types/api";


export const api = {
    list: async (): Promise<Root[]> => {
            const response = await axios.get("https://restcountries.com/v2/all")
            return response.data
    },
    country: async (name: string): Promise<Root | any> => {
            const response = await axios.get(`https://restcountries.com/v2/name/${name}`)
            return response.data[0]
    },
    routes: async (): Promise<string[] | any> => {
            const response = await axios.get("https://restcountries.com/v2/all")
            const routes: string[] = response.data.reduce((prev: string[], current: Root) => {
                prev.push(current.name)
                return prev
            }, [])
            return routes
    }
}