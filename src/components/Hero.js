import React from "react";
import backgroungImg from "../images/home-pool.jpg"
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home" className="Hero">
      <div className="hero-bg">
        <div className="hero-content">
            <div>
              <h4>Marketing + Content</h4>
              <h5>Design - Consultancy - Delivery</h5>
            </div>
        </div>
      </div>
    </section>
  );
};

/*
 {/* {" "}
      <article>
        <p>Hi There,</p>
        <h1>I Am a Developer</h1>
        <p>Welcome to my Portfolio Website.</p>
        <Link
          activeClass="active"
          to="intro-background"
          spy={true}
          smooth={true}
          offset={0}
          duration={1100}
        >
          <button>
            <img src={person} alt="user icon" />
            More About Me
          </button>
        </Link>
      </article>
*/

export default Hero;
