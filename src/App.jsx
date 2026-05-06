import Hero from "./sections/Hero";
import Header from "./sections/Header";
import About from "./sections/About";
import Services from "./sections/Services";
import Results from "./sections/Results";
import Contact from "./sections/Contact";
import ScrollTop from "./components/ScrollTop";

export default function App() {
  return (
    <>
      <Header />
      <ScrollTop />
      <Hero />
      <About />
      <Services />
      <Results />
      <Contact />
    </>
  );
}
