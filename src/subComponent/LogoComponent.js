
import styled from 'styled-components';
import { DarckTheme } from '../components/Themes';
const Logo = styled.h1`
    display: inline-block;
    color: ${props => props.color === 'dark' ? DarckTheme.text : DarckTheme.body};
    position: fixed;
    left:2rem;
    z-index:3;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
            El-Deeb
        </Logo>
    )
}

export default LogoComponent