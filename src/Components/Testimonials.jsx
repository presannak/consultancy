import React, { useRef, useState, useEffect } from 'react';
import styles from './testimonials.module.css';
import Navbar from './Navbar';
import arrow from '../assets/arrow.png';
import back from '../assets/back.png';
import profile from '../assets/profile.jpg';
import { ToastContainer,toast } from 'react-toastify';

const Testimonials = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Ram",
      location: "Erode",
      text: "SSV Earthmovers exceeded my expectations with their professionalism and efficiency. Their top-notch equipment and skilled team made our project a breeze."
    },
    {
      name: "Naveen",
      location: "Perundurai",
      text: "Choosing SSV Earthmovers was the best decision we made for our construction project. Their commitment to quality and timely delivery sets them apart from the rest."
    },
    {
      name: "Suresh",
      location: "Coimbatore",
      text: "SSV Earthmovers is synonymous with reliability and excellence. Their dedication to customer satisfaction and unmatched expertise make them our go-to choice for all our earthmoving needs."
    },
    {
      name: "Raj",
      location: "Trichy",
      text: "SSV Earthmovers proved to be the backbone of our construction endeavor. Their responsive communication and skilled workforce made every phase of the project a success."
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const slider = useRef();
  let tx = 0;

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('http://localhost:3001/reviews');
      const {data} = await response.json();
      setReviews([...reviews, ...data]);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newReview = {
      name: formData.get('name'),
      location: formData.get('location'),
      text: formData.get('text')
    };

    try {
      const response = await fetch('http://localhost:3001/submitTestimonial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReview)
      });

      if (!response.ok) {
        throw new Error('Failed to submit testimonial');
      }
      const {message} = await response.json();
      console.log(message)
      toast.success(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      
      setTimeout(()=>{

          setReviews([...reviews, newReview]);
          setShowForm(false); // Hide the form after submission
      },2500)
      event.target.reset();
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    }
  };

  return (
    <>
    <Navbar />
    <div className={styles['testimonials']} id="testimonials">
      <img src={arrow} alt="" className={styles['next-btn']} onClick={slideForward} />
      <img src={back} alt="" className={styles['back-btn']} onClick={slideBackward} />
      <div className={styles["slider"]}>
        <ul ref={slider}>
          {reviews.map((review, index) => (
            <li key={index}>
              <div className={styles["slide"]}>
                <div className={styles["user-info"]}>
                  <img src={profile} alt="" />
                  <div>
                    <h3>{review.name}</h3>
                    <span>{review.location}</span>
                  </div>
                </div>
                <p>{review.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {!showForm && <button onClick={() => setShowForm(true)} style={{padding:20}} className={styles['add']}>Add your review</button>}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          
          <label htmlFor="location">Your Location:</label>
          <input type="text" id="location" name="location" placeholder="Your Location" required />
          
          <label htmlFor="text">Your Review:</label>
          <textarea id="text" name="text" placeholder="Your Review" required></textarea>
          
          <button className={styles['add']} style={{backgroundColor:"#f9060c"}} type="submit">Submit</button>
        </form>
      )}
    </div>
    <ToastContainer />
    </>
  );
};

export default Testimonials;