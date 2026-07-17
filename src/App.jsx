import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-surface font-sans text-ink antialiased dark:bg-slate-950 dark:text-slate-100">
      {/* Navbar */}
      <Navbar />
      <main>
        {/* Hero, Skills, Projects, Contact */}
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
