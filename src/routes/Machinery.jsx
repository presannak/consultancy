import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Offering from "../Components/Offering";
import Trait from "../Components/Traits";
import AnimatedPage from "../Components/AnimatedPage";


// pictures
import slide1 from "../assets/img2.png";
import slide2 from "../assets/img9.png";
import slide3 from "../assets/img14.png";

import AboutImg from "../assets/img12.png";



function Machinery() {
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
          h2="Machinery"
          btnClass="hide"
        />

        <Trait />
        <Footer />
      </AnimatedPage>
    </>
  );
}

export default Machinery;
