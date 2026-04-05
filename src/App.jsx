import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProblemSolution from "./components/ProblemSolution";
import Services from "./components/Services";
import Income from "./components/Income";
import Contact from "./components/Contact";
import WhatsappFloat from "./components/WhatsappFloat";

function App() {
  return (
    <div className="pt-20">
      <Navbar />
      <Hero />
      <About />
      <ProblemSolution />
      <Services />
      <Income />
      <Contact />
    </div>  
  );
}

export default App;