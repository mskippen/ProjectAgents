import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="wrapper">
        <p>
          @ 2021 Project Agents Pty Ltd. All rights reserved.{" "}
          <a href="https://github.com/mskippen" target="_blank">
            <AiOutlineGithub size={30} color="white" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
