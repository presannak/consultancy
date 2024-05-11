import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import AboutImg from "../assets/img1.png";
import AnimatedPage from "../Components/AnimatedPage";

function Contact() {
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
          h2="Contact Us"
          btnClass="hide"
        />
        <ContactForm />
        <Footer />
        
      </AnimatedPage>
    </>
  );
}

export default Contact;
