import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

import AboutImg from "../assets/img14.png";
import AnimatedPage from "../Components/AnimatedPage";

function About() {
  const slides = [AboutImg];

  return (
    <>
      <Navbar />
      <AnimatedPage>
        <Hero
          cName="hero-mid"
          heading="hero-h2"
          middle="hero-text"
          images={slides}
          h2="About"
          btnClass="hide"
        />
        <AboutUs />
        <Footer />
      </AnimatedPage>
    </>
  );
}

export default About;
