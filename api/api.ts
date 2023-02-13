import { Root } from "types/api";
import { data } from "./data";




export const api = {
    list: async (): Promise<Root[]> => {
        return data
    }
}