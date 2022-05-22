import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { light } from "./styles/theme";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/section/home/Home";
import About from "./components/section/about/About";
import Roadmap from "./components/section/roadmap/Roadmap";
import ShowCase from "./components/section/showCase/ShowCase";
import Team from "./components/section/team/Team";
import Faq from "./components/section/faq/Faq";
import Footer from "./components/section/footer/Footer";
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
        <Team />
        <Faq />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
