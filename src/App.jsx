import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import BackgroundEffects from "./components/Hero/BackgroundEffects";
import GitHubActivity from "./components/GitHubActivity/GitHubActivity";
import Testimonials from "./components/Testimonials/Testimonials";
import InteractiveTerminal from "./components/InteractiveTerminal/InteractiveTerminal";

const THEME_KEY = "portfolio-theme";

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem(THEME_KEY);
    return savedTheme === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    // Apply theme globally so CSS variables and theme selectors work.
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;

    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Theme remains functional for the current session.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <div
      className="portfolio-root relative min-h-screen overflow-x-hidden"
      data-theme={theme}
    >
      <BackgroundEffects />

      <div className="relative z-10">
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <GitHubActivity />
          <InteractiveTerminal />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
