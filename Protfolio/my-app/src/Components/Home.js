import React, { useEffect, useRef } from "react";
import Typed from "typed.js"; // Correct import for typed.js
import hero from "./data/hero.json";


const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Who am I?",
        "Sonali Gupta",
        "Full stack web developer",
        "Coding Enthusiast",
        "IIIT ALLAHABAD'25"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      startDelay: 500,
      backDelay: 1000,
      backSpeed: 35,
      fadeOut: true,
      loop:true
    };

    const typed = new Typed("#typed", options);

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    if (typeof AOS !== "undefined") {
      AOS.init();
    }
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <section>
  <div className="text__editor">
    <div className="text__body">
      <span > 
        <span style={{ color: "red",fontWeight:600  }}>root</span>
        <span>@sonali:</span>
        <span style={{ color: "blue",fontWeight:900 }}>~</span>$&nbsp;
      </span>
      <span style={{ color: "#ff00dd" }} id="typed"></span>
    </div>
  </div>
</section>

         

          <a
            href={"https://drive.google.com/file/d/1d624dPjYKNp2MPYu5qxD_a4Ku9F17p0o/view?usp=sharing"}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            View Resume
          </a>
        </div>
        <div className="flex justify-end p-4">
  <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-1000" data-aos="fade-up-left" data-aos-duration="1000">
    <img src={`/assets/${hero.imgSrc}`} alt="hero" className="w-full h-auto object-cover rounded-md transform hover:scale-105 transition-transform duration-1000" />
  </div>
</div>

      </div>
    </>
  );
};

export default Home;
