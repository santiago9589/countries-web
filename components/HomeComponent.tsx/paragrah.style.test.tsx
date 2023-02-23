import {render,screen} from "@testing-library/react"
import ParagraphBlack from "./paragrah.style"
import "@testing-library/jest-dom"



describe("<Paragrahp text/>",()=>{

    beforeEach(()=>{
        render(<ParagraphBlack text="faketext"/>)
    })

    it("reenderiza correctamente",()=>{
        expect(screen.getByText(/faketext/i)).toBeInTheDocument()
    })
})