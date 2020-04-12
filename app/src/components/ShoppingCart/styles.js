import styled from 'styled-components'

export const ShoppingCartWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 26vw;
    height: 100vh;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 1200px) {
        width: 75vw;
    }
`

export const ShoppingCartHeader = styled.header`
    background-color: white;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const IconLink = styled.a`
    margin: 1rem;
    text-decoration: none;
    color: black;
    transition: all 0.2s ease-in-out;
    :hover{
        color: #bababa;
    }
`

export const ShoppingCartMain = styled.main`
    background-color: #f9f9f9;
    width: 100%;
    height: 90vh;
    @media screen and (max-width: 1200px) {
        font-size: 0.7rem;
    }
    overflow: auto;
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 90%;
    margin: 1rem;
    @media screen and (max-width: 1200px) {
        width: 85%;
    }
`

export const ShoppingCartFooter = styled.footer`
    background-color: black;
    color: white;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

