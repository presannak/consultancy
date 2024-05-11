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




function Home() {
  const slides = [
    slide3,
    slide1,
    slide2,
  ]
  return (
    <>
      <Navbar />

      <AnimatedPage>
        <Hero
          parentWidth="100%"
          cName="hero"
          images={slides}
          middle="hero-text"
          title="SOLAR  |  CONSTRUCTION |  WATER"
          text=""
          buttonText="Our Services"
          url="/"
          btnClass="show"
        />

        <Offering />
        <Trait />
        <Footer />
      </AnimatedPage>
    </>
  );
}

export default Home;
