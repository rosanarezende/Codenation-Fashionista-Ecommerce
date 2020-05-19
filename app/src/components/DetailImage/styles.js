import styled from 'styled-components'

export const ImageCard = styled.div`
width: 30vw;
margin-right: 2rem;
display: flex;
overflow: hidden;
position: relative;

@media screen and (max-width: 1200px) {
    margin-bottom: 1rem;
    width: 80vw;
}
`

export const Image = styled.img`
width: 100%;
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