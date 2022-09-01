import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { LighhtTheme } from './components/Themes';
import { Route, Switch } from "react-router-dom";
import Main from './components/Main.js'
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkills from './components/MySkillsPage';
function App() {


  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LighhtTheme}>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/blog' component={BlogPage} />
          <Route exact path='/work' component={WorkPage} />
          <Route exact path='/skills' component={MySkills} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
