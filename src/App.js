import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { LighhtTheme } from "./components/Themes";
import { Route, Switch, useLocation } from "react-router-dom";
import Main from "./components/Main.js";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/Projects";
import MySkills from "./components/MySkillsPage";
import { AnimatePresence } from "framer-motion";
import { useEffect } from 'react';
function App() {
  const location = useLocation();
  useEffect(() => {
    document.title = 'El-deeb';
  });
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LighhtTheme}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route exact path="/skills" component={MySkills} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
