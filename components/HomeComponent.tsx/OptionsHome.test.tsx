import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import OptionsHome from "./OptionsHome"
import userEvent  from "@testing-library/user-event"

const handleNameFake = vi.fn()

describe("<OptionsHome/>",()=>{

    beforeEach(()=>{
        render(<OptionsHome name="nametest" handleName={handleNameFake} isSelected={false}  />)
    })

    it("reenderiza correctamente",()=>{
        expect(screen.getByText(/nametest/i)).toBeInTheDocument()
    })

    it("se llama a la funcion cuando doy click",async()=>{
        await userEvent.click(screen.getByText(/nametest/i))
        expect(handleNameFake).toBeCalledTimes(1)
    })
})