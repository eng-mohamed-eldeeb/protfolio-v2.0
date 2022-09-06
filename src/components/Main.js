import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponent/LogoComponent";
import HomeBtn from "../subComponent/HomeBtn";
import SocialIcons from "../subComponent/SocialIcons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Intro from "../components/Intro";
import { motion } from "framer-motion";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
`;

const CV = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);

  /* transform: rotate(90deg) translate(-50%, -50%); */
  text-decoration: none;
`;

const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 45%;
  left: 2rem;
  /* transform: translate(-50%, -50%) rotate(-90deg); */
  text-decoration: none;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
`;

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
`;

const rotate = keyframes`
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg)
    }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 3.5s linear;
  }
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #131313;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};

  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <HomeBtn />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />
        <Center click={click}>
          <svg
            onClick={() => handleClick()}
            aria-hidden="true"
            data-prefix="fas"
            data-icon="yin-yang"
            className="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            width={click ? 120 : 200}
            height={click ? 120 : 200}
          >
            <path
              fill="currentColor"
              d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
            />
          </svg>
          <span>click here</span>
        </Center>
        <Contact
          target="_blank"
          to={{ pathname: "mailto:agnabiieldeeeb@gmail " }}
        >
          <motion.h2 whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.94 }}>
            say hi man
          </motion.h2>
        </Contact>
        <CV
          target="_blank"
          to={{
            pathname:
              "https://docs.google.com/document/d/1xczwsejW0CerM5iJABIICZmI2IHeCh2XzNcJMfgS368/edit?usp=sharing",
          }}
        >
          <motion.h2 whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.94 }}>
            {"=>"} CV
          </motion.h2>
        </CV>
        <Work to="/work" click={click}>
          <motion.h2 whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.94 }}>
            Work {"<="}
          </motion.h2>
        </Work>
        <BottomBar>
          <About click={click} to="/about">
            <motion.h2 whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.94 }}>
              {"-"}About.
            </motion.h2>
          </About>
          <Skills to="/skills">
            <motion.h2 whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.94 }}>
              {"-"}My Skills .
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>
      {click ? <Intro /> : null}
    </MainContainer>
  );
};

export default Main;
