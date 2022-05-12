import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { light } from "./styles/theme";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/section/home/Home";
import About from "./components/section/about/About";
import Roadmap from "./components/section/roadmap/Roadmap";
import ShowCase from "./components/section/showCase/ShowCase";
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <ShowCase />
      </ThemeProvider>
    </>
  );
}

export default App;
