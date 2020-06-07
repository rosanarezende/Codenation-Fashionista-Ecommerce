import React from 'react'
import { useSelector } from 'react-redux'

import ErrorBoundary from '../../containers/ErrorBoundary'
import Header from '../../containers/Header';
import Main from '../../containers/Main';
import Search from '../../containers/Search';
import ShoppingCart from '../../containers/ShoppingCart/index.js';

function HomePage() {
    const shoppingCartAppears = useSelector(state => state.shoppingCart?.shoppingCartAppears)
    const searchAppears = useSelector(state =>state.search?.searchAppears)

    return (
        <ErrorBoundary>
            <Header />
            <Main />
            {shoppingCartAppears && <ShoppingCart />}
            {searchAppears && <Search />}
        </ErrorBoundary>
    );
}

export default HomePage;


// import React from "react";
// import { render, fireEvent } from "@testing-library/react"
// import { HomePage } from './index'

// import { Provider } from "react-redux";
// import configureMockStore from "redux-mock-store";

// const mockStore = configureMockStore();
// const store = mockStore({});

// // const mockShoppingCartAppears = true
// // const mockSearchAppears = true

// describe("HomePage", () => {
//     let getByTestId
//     beforeEach(() => {
//         getByTestId = render(
//             <Provider store={store}>
//                 <HomePage
//                 // shoppingCartAppears={mockShoppingCartAppears} 
//                 // searchAppears={mockSearchAppears}
//                 />
//             </Provider>
//         ).getByTestId
//     })

//     it("should render ErrorBoundary correctly", async () => {

//         const erro = getByTestId("erro")
//         expect(erro).toHaveClass("erro")

//     })


// })