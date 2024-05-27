import { useEffect, useState } from "react";
import "./App.css";
import './i18n';
import NavigationBar from "./components/header/navigationbar";
import About from "./pages/about";

import Home from "./pages/home";
import Projects from "./pages/project";
import Resume from "./pages/resume";
import ContactForm from "./pages/contact";

import { ThemeProvider } from './Context/ThemeContext.jsx';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);

        }
      });
    }, { threshold: [0.5, 0.8, 0.5, 0.4], rootMargin: "50px", }); // Adjust threshold value as needed

    // Observe each section
    document.querySelectorAll('.home-div, .about, #project-sec,.resume,#contact').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (


    <ThemeProvider>
      <div className="App">
        <div className="main">
          <NavigationBar activeSection={activeSection} />
          <Home />
          <About />
          <Projects />

          <ContactForm />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
