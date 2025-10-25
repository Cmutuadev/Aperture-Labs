import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import About from './components/sections/About'; 
import ContactCTA from './components/sections/ContactCTA'; 
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="font-body text-neutral-dark bg-neutral-light min-h-screen">
      
      <Header />

      <main>
        <Hero />
        <Features /> 
        <About />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;