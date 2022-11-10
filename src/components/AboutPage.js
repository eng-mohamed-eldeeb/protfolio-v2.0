import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from "./../subComponent/LogoComponent";
import SocialIcons from "../subComponent/SocialIcons";
import HomeBtn from "../subComponent/HomeBtn";
import ParticleComponent from "./../subComponent/ParticleComponent";

import BigTitle from "../subComponent/BigTitle";
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color:  ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height:1.5;

  display: flex ;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;


  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(3px);

  position: absolute;
  font-style: italic;
  @media only screen and (max-width: 450px) {
    width: 60vw;
    height: 40vh;
  }
`

const MySkills = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <HomeBtn />
        <ParticleComponent theme="dark" />
        <Main>
          <p>
          I'm a front-end developer located in EGYPT. I love to create simple
          yet beautiful websites with great user experience.
          <br />
            
          </p>
          <p>

          I'm interested in the whole frontend stack Like trying new things and
          building great projects.
          </p>
          <p>

          <br />I believe everything is an Art. You can connect with me via social links.
          </p>
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" /> 
      </Box>
    </ThemeProvider>
  );
};

export default MySkills;
