import "./HeroStyles.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

function Hero(props) {

  const timeRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = useCallback( () => {
    const isLastSlide = currentIndex === props.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, props.images]);

  const goToImage = (imageIndex) => {
    setCurrentIndex(imageIndex)
  }

  useEffect(()=> {
    if (timeRef.current){
      clearTimeout(timeRef.current)
    }
    console.log( "Use effect")
    timeRef.current = setTimeout(()=>{
      goToNext()
    }, 5000)

    return () => clearTimeout(timeRef.current)
  }, [goToNext])


  return (
    <>
      <div className={props.cName}>
        <div className="left Arrow" onClick={goToPrevious}>
          &#10096;
        </div>
        <div className="right Arrow" onClick={goToNext}>
          &#10097;
        </div>

        <img src={props.images[currentIndex]} alt="images" />

        <div className="dotsContainer">
          {props.images.map((image, imageIndex) => (
            <div
              key={imageIndex}
              className="dots"
              onClick={() => goToImage(imageIndex)}
            >
              &#9679;
            </div>
          ))}
        </div>
      </div>
      <div className={props.middle}>
        <h1>Earth Movers</h1>
        <h2 className={props.heading}>{props.h2}</h2>
        <p>{props.text}</p>

        <Link
          className={props.btnClass}
          to="offering"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          >
          {props.buttonText}
        </Link>
      </div>
    </>
  );
}

export default Hero;
