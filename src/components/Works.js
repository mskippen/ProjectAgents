import React, { useState } from "react";
import assanaLogo from "../images/assana-dusk.png";
import macquarieLogo from "../images/mdg-logo.png";
import wimpLogo from "../images/logo_wimp.jpg";
import projectifyLogo from "../images/projectify-logo-white.png";
import marcommmLogo from "../images/marcomm.png";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {FiArrowLeftCircle, FiArrowRightCircle} from "react-icons/fi"

const Works = () => {
  const data = [
    {
      img: macquarieLogo,
      title: "MACQUARIE DEVELOPMENTS GROUP",
      subTitle: "Full corporate campaign",
      description:
        "A mix of innovative strategy, creative and disruptive implementation, across all platforms including brand, CGIâ€™s, brochure, website UX design and development.",
      urlTitle: "MDG Website",
      url: "www.mdgl.com.au",
      bgCode: "mdg-bg",
    },
    {
      img: wimpLogo,
      title: "WHAT'S IN MY PANTRY",
      subTitle: "Web design and development",
      description:
        "An easy to use, all-in-one recipe search app that will display recipes based on a list of food items that are currently in your pantry.            ",
      urlTitle: "What's In My Pantry",
      url: "https://mskippen.github.io/whats-in-my-pantry/",
      bgCode: "wimp-bg",
    },
    {
      img: projectifyLogo,
      title: "PROJECTIFY",
      subTitle: "Web design and development",
      description:
        "An all-in-one marketing lead generation tool for freelance and small-to-medium business owners. The app helps owners to manage their client’s in their online business, digital marketing and advertising campaigns, ‘projecting’ user ad clicks and call-to-action registrations on client’s Landing Page, Facebook and Instagram social media platforms. The application also manages and displays performance data of each campaign by full-month periods.",
      urlTitle: "Projectify Marketing App",
      url: "https://projectify-marketing-app.herokuapp.com/",
      bgCode: "projectify-bg",
    },
    {
      img: marcommmLogo,
      title: "MARCOMM STUDIO ASSISTANT",
      subTitle: "Web design and development",
      description:
        "Marcomm Studio Assistant is a web based marketing and communications studio management system.",
      urlTitle: "Marcomm Studio Assistant App",
      url: "https://marcomm-assist.herokuapp.com/",
      bgCode: "marcomm-bg",
    },
    {
      img: assanaLogo,
      title: "Assana, Broadbeach",
      subTitle: "Assana Website",
      description:
        "A mix of innovative strategy, creative and disruptive implementation, across all platforms including brand, CGI’s, brochure, website UX design and development.            ",
      urlTitle: "Assana Website",
      url: "www.assanabroadbeach.com.",
      bgCode: "assana-bg",
    },
  ];
  const [isNext, setIsNext] = useState(true);
  const [current, setCurrent] = useState(0);
  let index = current;

  function slideNext() {
    let tempIndex = current;
    let length = data.length - 1;

    if (tempIndex == length) tempIndex = -1;
    tempIndex = tempIndex + 1;

    setCurrent(tempIndex);
    setIsNext(true);
  }

  function slidePrev() {
    let tempIndex = current;
    let length = data.length - 1;

    if (tempIndex < 1) tempIndex = length;
    tempIndex = tempIndex - 1;

    setCurrent(tempIndex);
    setIsNext(true);
  }

  return (
    <section id="works" className="Works">
      <div className="wrapper">
        <h3>Work</h3>
        <p>
          Our expertise is in creating, building, developing and repositioning
          brands
        </p>
        <div className="carousel-wrapper">
          <TransitionGroup>
            <CSSTransition
              transitionName={{
                enter: isNext ? "enter-next" : "enter-prev",
                enterActive: "enter-active",
                leave: "leave",
                leaveActive: isNext ? "leave-active-next" : "leave-active-prev",
              }}
            >
              <div key={index}>
                <div className="d-grid">
                  <div className="img-block">
                    <div
                      className={data[index].bgCode}
                      style={{ height: "70vh" }}
                    >
                      <div className="img-container">
                        <img src={data[index].img} />
                      </div>
                    </div>
                  </div>
                  <div className="text-block">
                    <div className="content">
                      <h4>{data[index].title}</h4>
                      <p>{data[index].subTitle}</p>
                      <p className="desc">{data[index].description}</p>
                      {/* <h3>{data[index].urlTitle}</h3> */}
                      <a href={data[index].url} target="_blank">
                        {data[index].urlTitle}
                      </a>
                    </div>
                    <div className="carousel-btn">
                      <span onClick={slidePrev}><FiArrowLeftCircle size={40}/></span>
                      <span onClick={slideNext}><FiArrowRightCircle size={40}/></span>
                    </div>
                  </div>
                </div>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </section>
  );
};

export default Works;
