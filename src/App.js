import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Project } from "./components/Project/Project";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Popup } from "./components/Popup/Popup";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      // offset: 200,
      duration: 900,
      // delay: 1500,
    });
  }, []);
  return (
    <>
      <Popup />
      <Navbar />
      <div className="container">
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
