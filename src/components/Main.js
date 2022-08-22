import styled from 'styled-components'
import LogoComponent from '../subComponent/LogoComponent'
import PowerButton from '../subComponent/PowerButton'
import SocialIcons from '../subComponent/SocialIcons'
import { NavLink } from 'react-router-dom'
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

const Contact = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
`

const Main = () => {
    return (
        <MainContainer>
            <Container>
                <PowerButton />
                <LogoComponent/>
                <SocialIcons/>
                <Contact target="_blank" to={{pathname:'mailto:agnabiieldeeeb@gmail '}}>
                    <h3>
                        say hi...
                    </h3>
                </Contact>
            </Container>
        </MainContainer>
    )
}

export default Main