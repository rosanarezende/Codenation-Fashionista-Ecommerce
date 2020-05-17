import styled from 'styled-components'

export const DetailPageWrapper = styled.div`
    display: flex;
    margin-top: 5vh;
    padding: 2rem;

    @media screen and (max-width: 1200px) {
        flex-direction: column
    }
`

export const ImageCard = styled.div`
    height: 85vh;
    margin-right: 2rem;
    display: flex;
    /* flex-direction: column;
    text-align: center; */
    overflow: hidden;
    /* position: relative;
    :hover{
        cursor: pointer;
    } */

    @media screen and (max-width: 1200px) {
        margin-bottom: 1rem;
        height: 50vh;
    }
`

export const Image = styled.img`
    height: 85vh;
    @media screen and (max-width: 1200px) {
        height: 100%;
    }
`

export const Stamp = styled.div`
	position: absolute;
	display: flex;
    align-items: flex-end;
	top: 0;
	right: 0;
    background-color: black;
    color: white;
    padding: 0.2rem 0.5rem;
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