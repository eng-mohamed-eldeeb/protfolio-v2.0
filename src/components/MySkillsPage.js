import styled, { ThemeProvider } from "styled-components";
import { LighhtTheme } from "./Themes";



const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: 2px solid ${props => props.theme.text};
background-color: 2px solid ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
`




const MySkills = () => {
  return (
    <ThemeProvider theme={LighhtTheme}>
      <Box>
            <Main>
                <Title></Title>
            </Main>
            <Main>

            </Main>
        </Box>
    </ThemeProvider>
  );
};

export default MySkills;
