import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Offering from "../Components/Offering";
import AnimatedPage from "../Components/AnimatedPage";


// pictures

import AboutImg from "../assets/img12.png";





function Service() {
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
          h2="Services"
          btnClass="hide"
        />

        <Offering />

        <Footer />
      </AnimatedPage>
    </>
  );
}

export default Service;
