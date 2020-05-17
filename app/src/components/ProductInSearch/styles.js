import styled from 'styled-components'

export const ProductInSearchWrapper = styled.div`
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
    width: 40%;
`

export const InternalDivisionCenter = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    @media screen and (max-width: 1200px) {
        margin: 0 0.5rem;
    }
`

export const InternalDivisionRigth = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 40%;
`

export const Image = styled.img`
    width: 100%;
`

export const TextGrey = styled.p`
    color: grey;
    font-size: 0.8rem;
    margin-top: 0.3rem;

    @media screen and (max-width: 1200px) {
        font-size: 0.6rem;
    }
`