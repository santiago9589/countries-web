import { useState } from "react"

export const useInput = ():[string,(value: string) => void] =>{

    const [state,setState] = useState<string>("")

    const handleInput = (value:string)=>{
        setState(value)
    }

    return [state,handleInput]
}