import { render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import HeaderHome from "./HeaderHome"


const fakeRegions = ["fakeRegion"]


describe("<HeaderHome/>", () => {

    beforeEach(() => {
        render(<HeaderHome regions={fakeRegions} />)
    })

    it("reenderiza correctamente", () => {
        expect(screen.getByText(/Selected your Region/i)).toBeInTheDocument()
    })

    it("muestra las regiones cuando le das click al menu", async()=>{
        await userEvent.click(screen.getByText(/Selected your Region/i))
        expect(screen.getByText(/fakeRegion/i)).toBeInTheDocument()
    })

    it("se puede escribir en el input", async()=>{
        await userEvent.type(screen.getByPlaceholderText("Search your country"),"fakeinput")
        expect(screen.getByPlaceholderText("Search your country")).toHaveValue("fakeinput")
    })

})