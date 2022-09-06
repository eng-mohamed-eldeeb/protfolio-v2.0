import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from "./../subComponent/LogoComponent";
import SocialIcons from "../subComponent/SocialIcons";
import HomeBtn from "../subComponent/HomeBtn";

import { Work } from "../data/WorkData";
import Card from "./../subComponent/Card";
import { useEffect, useRef } from "react";
import BigTitle from "./../subComponent/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 270vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled.ul`
  position: fixed;
  top: 17rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  z-index: 3;
  color: #fff;
`;

const WorkPage = () => {
  const ref = useRef(null);
  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
    };

    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <HomeBtn />
        <Main ref={ref}>
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>

        <BigTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
