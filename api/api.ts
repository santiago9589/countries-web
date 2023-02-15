import axios from "axios";
import { Root } from "types/api";
import { data } from "./data";
import { uniData } from "./data";


export const api = {
    list: async (): Promise<Root[]> => {
        const response = await axios.get("https://restcountries.com/v2/all")
        return response.data
    },
    country: async (name: string): Promise<Root> => {
        const response = await axios.get(`https://restcountries.com/v2/name/${name}`)
        return response.data[0]
    }
}