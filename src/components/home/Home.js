import React from "react";
import Navbar from "../header/Navbar";
import "./Home.css";
import video from "../../video/home-video.mp4";

const Home = () => {
  return (
    <div className="Home">
      <div className="video-showcase">
          <video src={video} muted loop autoPlay />
        <div className="video-overlay">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
