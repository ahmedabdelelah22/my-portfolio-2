import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
import CVDownload from './components/CVDownload';

export default function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <Hero />
      {/* <CVDownload />  */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
     <Certifications /> {/* NEW */}
      <Contact />
      <Footer />
    </div>
  );
}
