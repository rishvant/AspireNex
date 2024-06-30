import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Front from "./components/Front";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link as ScrollLink, Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import Preloader from "./components/Preloader";
import Projects from "./components/Projects";

AOS.init();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  },[])

  return (
    <>
      {loading ? (<Preloader></Preloader>) : (
        <>
          <Navbar></Navbar>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
            <Front></Front>
          </div>
          <Element name="about">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
              <About></About>
            </div>
          </Element>
          <Element name="portfolio">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
              <Skills></Skills>
            </div>
          </Element>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
            <Education></Education>
          </div>
          <Element name="projects">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
              <Projects />
            </div>
          </Element>
          <Element name="contact">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true">
              <Contact></Contact>
            </div>
          </Element>
        </>
      )}
    </>
  )
}

export default App;