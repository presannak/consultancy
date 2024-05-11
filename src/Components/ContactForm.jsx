// ContactForm.js

import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ContactFormStyles.module.css"

function ContactForm() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // Extract form data
      const formData = new FormData(form.current);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });

      // Make POST request to backend server
      const response = await fetch('http://localhost:3001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        console.log('Form data stored successfully');
        e.target.reset();
        toast.success("Message Sent!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        console.error('Failed to store form data');
        toast.error("Failed to send message!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      toast.error("Failed to send message!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className={styles["form-container"]}>
      <h1>Send a message to us!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Name" name="from_name" />
        <input type="text" placeholder="Email" name="user_email" />
        <input type="text" placeholder="Subject" name="subject" />
        <textarea rows="4" placeholder="Message" name="message"></textarea>
        <input type="submit" value="Send Message" className={styles["submit"]} />
      </form>
      <ToastContainer />
    </div>
  );
}

export default ContactForm;
