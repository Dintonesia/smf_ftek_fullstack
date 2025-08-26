import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <Footer />
    </>
  );
};

export default App;
