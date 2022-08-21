import styled from 'styled-components'
import LogoComponent from '../subComponent/LogoComponent'
import PowerButton from '../subComponent/PowerButton'
import SocialIcons from '../subComponent/SocialIcons'
const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;
h2,h3,h4,h5,h6{
    font-weight:500;
}
`

const Container = styled.div`
padding:2rem;
`

const Main = () => {
    return (
        <MainContainer>
            <Container>
                <PowerButton />
                <LogoComponent/>
                <SocialIcons/>
            <h1>hi there</h1>   

            </Container>
        </MainContainer>
    )
}

export default Main