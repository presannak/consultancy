import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// import reactLogo from "./assests/react.svg"
import Navbar from "./Components/Navbar";
import Home from "./routes/Home";
import Service from "./routes/Service";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Testimonial from "./routes/Testimonial";
import Machinery from "./routes/Machinery"
import {AnimatePresence} from "framer-motion"
import "./styles.css";

const App = ()=> {
  const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/machinery" element={<Machinery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={<Testimonial />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
