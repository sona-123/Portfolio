import React, { useEffect, useRef } from "react";
import Typed from "typed.js"; // Correct import for typed.js
import hero from "./data/hero.json"; // Adjusted path to hero.json

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "👋 Hello, I'm Sonali Gupta",
        "💻 Passionate Full Stack Web Developer",
        "🧩 Coding Enthusiast & Problem Solver",
        
        "🚀 Building Scalable and Robust Web Applications",
        "🎓 Pursuing B.Tech at IIIT Allahabad, Class of 2025",
        "🔍 Open to Internship and Job Opportunities",
        "🤝 Let's Connect and Create Amazing Projects Together!"
      ],
      
      typeSpeed: 50,
      backSpeed: 50,
      startDelay: 500,
      backDelay: 1000,
      backSpeed: 35,
      fadeOut: true,
      loop: true
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
        {/* <span style={{ color: "red",fontWeight:600  }}>root</span> */}
        {/* <span>@Sonali: </span> */}
        {/* <span style={{ color: "blue",fontWeight:900 }}>~</span>$&nbsp; */}
      </span>
      <span style={{ color: "#ff00dd", fontFamily: "cursive" , fontSize: "20px"}} id="typed"></span>
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

        <div className="right">
  <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
    {/* Properly concatenate the image source using template literals */}
    <img src={`/assets/${hero.imgSrc}`} alt="hero" className="w-auto h-auto max-h-full rounded-full object-cover" />
  </div>
</div>

      </div>
    </>
  );
};

export default Home;
