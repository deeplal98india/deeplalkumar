import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import BackgroundEffects from "./components/Hero/BackgroundEffects";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030712]">
      {/* Global Background */}
      <BackgroundEffects />

      {/* Portfolio Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}