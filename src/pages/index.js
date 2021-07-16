import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import Facts from "../components/Facts/Facts";
import Hero from "../components/Hero/Hero";
import Testimonials from "../components/Testimonials/Testimonials";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import FunFacts from "../components/FunFacts/FunFacts";
import Footer from "../components/Footer/Footer";

// import TerryChill from "./img/Terrychill.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Projects />

      <Testimonials />
      <FunFacts />
      <Footer />
    </div>
  );
}

export default App;
