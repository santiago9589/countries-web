import { Root } from "types/api";
import { data } from "./data";
import { uniData } from "./data";




export const api = {
    list: async (): Promise<Root[]> => {
        return data
    },
    country:async(name:string):Promise<Root> =>{
        return uniData
    }
}