import React from "react";
import brandLogo from "../../images/Icon_White.png";
import { IoLogoLinkedin, IoNewspaperSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <div className="brand">
          <img src={brandLogo} alt="Brand logo" />
        </div>
        <div className="nav-links">
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Work</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
        </div>
        <div className="nav-icon">
            <span><IoLogoLinkedin size={30}/></span>
        </div>
      </nav>
      <header>
        {/* <div className="brand">
                    <img src={brandLogo} alt="Brand logo" />
                </div>
                <div className="nav-links">
                    <ul>
                        <li><a>Consultancy</a></li>
                        <li><a>Brand Strategy</a></li>
                        <li><a>Logo Design</a></li>
                        <li><a>Website Design</a></li>
                        <li><a>Marketing</a></li>
                        <li><a>Communications</a></li>
                        <li><a>Public Relations</a></li>
                    </ul>
                </div>
                <div className="nav-icons">
                    <ul>
                        <li><a><IoLogoLinkedin /></a></li>
                        <li><a><AiFillGithub /></a></li>
                        <li><a><MdEmail /></a></li>
                        <li><a><IoNewspaperSharp /></a></li>
                    </ul>
                </div> */}
      </header>
    </div>
  );
};

export default Navbar;
