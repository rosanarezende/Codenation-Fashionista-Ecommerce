import React from "react";
import { render } from "@testing-library/react"
import Backdrop from "./index"

describe("Backdrop", () => {
    let getByTestId
    beforeEach(() => {
        const view = render(<Backdrop/>)
        getByTestId = view.getByTestId
    })
    
    it("should render BACKDROP correctly", async () => {
        const backdrop = getByTestId("backdrop")        
        expect(backdrop).toHaveClass("backdrop")
    })


})