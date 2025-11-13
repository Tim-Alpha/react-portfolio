import { useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Docs from './components/Docs';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  const openDocs = () => setIsDocsOpen(true);
  const closeDocs = () => setIsDocsOpen(false);

  return (
    <div className="App">
      <Header onOpenDocs={openDocs} />
      <Hero onOpenDocs={openDocs} />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer onOpenDocs={openDocs} />
      <BottomNav onOpenDocs={openDocs} />
      <Docs isOpen={isDocsOpen} onClose={closeDocs} />
    </div>
  );
}

export default App;
