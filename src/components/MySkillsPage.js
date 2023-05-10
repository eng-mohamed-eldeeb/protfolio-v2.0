import styled, { ThemeProvider } from "styled-components";
import { LighhtTheme } from "./Themes";
import Develope from "./Develope";
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  @media only screen and (max-width: 450px) {
    width: 55vw;
    height: 50vh;
  }

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em+1vh);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: 1.3em;
  padding: 0.5rem 0;
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const MySkills = () => {
  return (
    <ThemeProvider theme={LighhtTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <HomeBtn />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} heght={40} /> Develope
          </Title>
          <Description>
            I am fond of creating simple yet amazing Full-Stack sites.
            though It is very complex to create simple sites, thus I enjoy bringing new ideas to life.
          </Description>
          <Description>
            <strong>SKILLS</strong>
            <p>
              JS, React JS, Next JS, Tailwind, Ruby, Rails, ect...
            </p>
            
            <strong>Soft skills</strong>
            <p>Teamwork, Problem solving, Communication, Adaptability, Critical thinking, Time management, Interpersonal etc.</p>
          </Description>
          <Description>
            <stromg>Tools</stromg>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="27%" right="68.6%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkills;
