import { NavLink } from "react-router-dom"
import { Facebook, Github,Twitter } from "../components/AllSvgs"
import styled from 'styled-components';

const Icons = styled.div`
    display: flex;
    flex-Direction: column;
    
`

const SocialIcons = () =>{
return (
    <Icons>
        <div>
            <NavLink to="/">
                <Github width={25} height={25} fill='currentColor' />
            </NavLink>
        </div>
        <div>
            <NavLink to="/">
                <Twitter width={25} height={25} fill='currentColor' />
            </NavLink>
        </div>
        <div>
            <NavLink to="/">
                <Facebook width={25} height={25} fill='currentColor' />
            </NavLink>
        </div>
    </Icons>
)
}

export default SocialIcons