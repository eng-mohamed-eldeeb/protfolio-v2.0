import styled from 'styled-components'
 
const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;
h2,h3,h4,h5,h6{
    font-family: 'karla', sans-serif;
    font-weight:500;
}
`

const Contaoiner = styled.div`
padding:2rem;
`

const Main = () => {
    return (
        <MainContainer>
            <Contaoiner>
                M A I N
            </Contaoiner>
        </MainContainer>
    )
}

export default Main