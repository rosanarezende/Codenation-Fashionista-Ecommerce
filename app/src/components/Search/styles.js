import styled from 'styled-components'

export const SearchWrapper = styled.div`
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
        width: 100vw;
    }
`

export const SearchHeader = styled.header`
    background-color: white;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 2rem;
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

export const SearchMain = styled.main`
    background-color: #f9f9f9;
    width: 100%;
    height: 5%;
    @media screen and (max-width: 1200px) {
        height: 8%;
    }
`

export const SearchFooter = styled.footer`
    background-color: #f9f9f9;
    width: 100%;
    height: 90%;
    @media screen and (max-width: 1200px) {
        font-size: 0.7rem;
    }
    overflow: auto;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    margin: 1rem;
    margin-right: 2rem;
`

export const SearchInput = styled.input`
    width: 100%;
    border-radius: 5px;
    border: 1px solid grey;
    outline: 0;
    padding: 0.2rem 0.5rem;
`

export const Quantity = styled.p`
    margin-bottom: 1rem;
`
