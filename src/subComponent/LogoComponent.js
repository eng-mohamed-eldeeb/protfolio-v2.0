
import styled from 'styled-components';
const Logo = styled.h1`
    display: inline-block;
    color: ${props => props.theme.text};
    position: fixed;
    left:2rem;
    z-index:3;
`

const LogoComponent = () => {
    return (
        <Logo>
            El-Deeb
        </Logo>
    )
}

export default LogoComponent