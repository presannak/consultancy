import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import AboutImg from "../assets/m.webp";
import AnimatedPage from "../Components/AnimatedPage";
import Testimonials from "../Components/Testimonials";
function Testimonial() {
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
          h2="Testimonials"
          btnClass="hide"
        />
        <Testimonials />
        <Footer />
        
      </AnimatedPage>
    </>
  );
}

export default Testimonial;
