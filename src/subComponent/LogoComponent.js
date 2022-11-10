import styled from "styled-components";
import { DarkTheme } from "../components/Themes";
const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 99;
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}>El-Deeb</Logo>;
};

export default LogoComponent;
