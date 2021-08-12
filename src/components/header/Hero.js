import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

export default Hero;
