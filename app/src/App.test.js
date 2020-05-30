import React from "react";
import { render } from "@testing-library/react"
import App from "./App"

describe("App", () => {
    let getByTestId
    beforeEach(() => {
        const view = render(<App/>)
        getByTestId = view.getByTestId
    })
    
    it("should render App correctly", async () => {
        const header = getByTestId("header")        
        expect(header).toHaveClass("header")
    })

})