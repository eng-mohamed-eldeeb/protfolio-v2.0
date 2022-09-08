import styled, { ThemeProvider, keyframes } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from "./../subComponent/LogoComponent";
import SocialIcons from "../subComponent/SocialIcons";
import HomeBtn from "../subComponent/HomeBtn";
import ParticleComponent from "./../subComponent/ParticleComponent";

import astronaut from "../assets/Images/spaceman.png";
import BigTitle from "../subComponent/BigTitle";
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
  0% {transform: translateY(-10px)}
  50% {transform: translateY(15px) translateX(15px)}
  100% {transform: translateY(-10px)}
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s infinite;
  img {
    width: 100%;
    height: auto;
  }
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
  left: calc(5rem + 5vw);
  top: 10rem;
  font-style: italic;
`

const MySkills = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <HomeBtn />
        <ParticleComponent theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="space man" />
        </Spaceman>
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
