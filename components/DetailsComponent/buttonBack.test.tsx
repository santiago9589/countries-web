import {render,screen} from "@testing-library/react"
import {vi} from "vitest"
import userEvent from '@testing-library/user-event'
import ButtonBack from "./buttonBack"
import "@testing-library/jest-dom"

const handleRouterFake = vi.fn()


describe("<ButtonBack/>",()=>{

    beforeEach(()=>{
        render(<ButtonBack handleRouter={handleRouterFake}/>)
    })

    it("reenderiza correctamente",()=>{
        expect(screen.getByText(/back/i)).toBeInTheDocument()
    })

    it("cuando hago click se llama a la funcion",async()=>{
        await userEvent.click(screen.getByText(/back/i))
        expect(handleRouterFake).toBeCalledTimes(1)
    })
})