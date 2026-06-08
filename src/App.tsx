import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LivingBackground from './components/CosmicBackground';
import { 
  Navbar, Hero, About, TechStack, Projects, TechMarquee, 
  Experience, Education, Certifications, Achievement, 
  Contact, Footer 
} from './components/Sections';
import { ModernCursor, LoadingScreen } from './components/UIElements';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen text-gray-900 selection:bg-blue-600 selection:text-white overflow-x-hidden custom-scrollbar bg-[#dfe3e8]">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <LivingBackground />
      <ModernCursor />
      
      {!isLoading && (
        <>
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <TechMarquee />
            <Experience />
            <Education />
            <Certifications />
            <Achievement />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
