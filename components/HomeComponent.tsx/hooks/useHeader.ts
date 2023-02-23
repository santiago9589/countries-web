import { useState } from "react"
import { Root } from "types/api"

export const useHeader = (regions:string[]):[boolean,string[],() => void]=>{
    const [isShowOptions, setIsShowOptions] = useState<boolean>(false)
    const [namesOptions, setnamesOptions] = useState<string[]>(regions)

    const handleShow = () => {
        setIsShowOptions(!isShowOptions)
    }


    return [isShowOptions!,namesOptions,handleShow]
}