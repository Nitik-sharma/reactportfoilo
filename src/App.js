import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <SocialLinks />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
