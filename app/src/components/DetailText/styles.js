import styled from 'styled-components'

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const BeforePrice = styled.span`
    margin-right: 0.5rem;
    color: grey;
    text-decoration: line-through;
`

export const Installments = styled.span`
    color: grey;
    font-size: 0.8em;
    font-weight: bold;
`

export const SizeWrapper = styled.div`
    margin: 0.5rem 0;
`

export const TitleGrey = styled.p`
    color: grey;
    margin-bottom: 0.5rem;
`

export const SecretText = styled.p`
    margin-bottom: 0.5rem;
    color: red;
    font-size: 0.8em;
`

export const SizeButton = styled.button`
    width: 30px;
    height: 25px;
    margin-right: 5px;
    background: transparent;
    border-radius: 5px;
    border: 1px solid grey;
`

export const SizeButtonBlack = styled.button`
    width: 30px;
    height: 25px;
    margin-right: 5px;
    background: black;
    color: white;
    border-radius: 5px;
    border: 1px solid black;
`

export const AddButton = styled.button`
    margin-top: 1rem;
    padding: 5px;
    background: black;
    color: white;
    border-radius: 5px;
    border: 1px solid grey;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);

`