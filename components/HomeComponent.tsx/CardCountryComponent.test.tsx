import { render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import CardCountryComponent from "./CardCountryComponent"


const pushFake = vi.fn()
const fakeCounty = {
    name:"fakeName",
    population:2,
    region:"fakeRegion",
    capital:"fakeCapital",
    img:"fakeImg"
}

vi.mock("next/navigation",()=>{
    return{
        useRouter:()=>({
            push:()=>pushFake()
        })
    }
})


describe("<CardCountryComponent/>", () => {

    beforeEach(() => {
        render(<CardCountryComponent {...fakeCounty}/>)
    })

    it("reenderiza correctamente", () => {
        expect(screen.getByText(/fakeName/i)).toBeInTheDocument()
    })

    it("cuando se de click en el componente debe llamarse la funcion", async()=>{
       await userEvent.click(screen.getByText(/fakeName/i))
       expect(pushFake).toBeCalledTimes(1)
    })


})