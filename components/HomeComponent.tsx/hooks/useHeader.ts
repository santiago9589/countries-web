import { useState } from "react"
import { Root } from "types/api"

export const useHeader = (regions:string[]):[boolean,string[],string,(name: string) => void,() => void]=>{
    const [isShowOptions, setIsShowOptions] = useState<boolean>(false)
    const [nameOptions, setnameOptions] = useState<string>("")
    const [namesOptions, setnamesOptions] = useState<string[]>(regions)

    const handleShow = () => {
        setIsShowOptions(!isShowOptions)
    }

    const handleName = (name: string) => {
        setnameOptions(name)
        setIsShowOptions(!isShowOptions)
    }

    return [isShowOptions!,namesOptions,nameOptions!,handleName,handleShow]
}