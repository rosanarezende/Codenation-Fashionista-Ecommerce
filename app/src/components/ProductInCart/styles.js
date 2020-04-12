import styled from 'styled-components'

export const ProductInCartWrapper = styled.div`
    margin-bottom: 0.5rem;
    width: 100%;
    background-color: white;
    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
`

export const InternalDivisionLeft = styled.div`
    display: flex;
    flex-direction: column;
`

export const InternalDivisionCenter = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 1rem;
    @media screen and (max-width: 1200px) {
        width: 60%;
        margin: 0 0.5rem;
    }
`

export const InternalDivisionRigth = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const Image = styled.img`
    width: 100%;
`

export const Remove = styled.p`
    color: red;
    cursor: pointer;
    align-self: center;
`

export const QuantityContainer = styled.div`
    display: flex;
    margin-top: 0.5rem;
`

export const Button = styled.button`
    background-color: transparent;
    border: 1px solid black;
    width: 25px;
`

export const Quantity = styled.span`
    margin: 0 0.5rem;
    @media screen and (max-width: 1200px) {
        margin: 0 0.3rem;
    }
`

export const TextGrey = styled.p`
    color: grey;
    font-size: 0.8rem;
    margin: 0.5rem 0;

    @media screen and (max-width: 1200px) {
        font-size: 0.6rem;
    }
`