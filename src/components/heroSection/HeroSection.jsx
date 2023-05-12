import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import { TypeWriterDiv } from "./HeroStyle";
import Typewriter from "typewriter-effect";
import { AiOutlineArrowDown } from "react-icons/ai";
const HeroSection = () => {
  return (
    <div id="home" className="hero-main-cont">
      <div className="hero-image-cont">
        <img src="asset/hero-image.jpg" className="hero-image" alt="" />
      </div>
      <div className="hero-content-cont">
        <h3>HI, I'M PRAYAS CHHETRI </h3>
        <TypeWriterDiv>
          <Typewriter
            options={{
              strings: [
                "A Full Stack Developer",
                "A Problem Solver",
                "A Software Engineer",
              ],
              pauseFor: 1500,
              autoStart: true,
              loop: true,
            }}
          />
        </TypeWriterDiv>

        <div className="hero-btns">
          <Link
            to="https://drive.google.com/file/d/1QTt6QOUtMBAeNxPtUxkHLmqEnoggEHe8/view"
            target="_blank"
            className="btn btn-links"
          >
            resume
          </Link>
          <a href="#projects" className="btn btn-light btn-links">
            PROJECTS
          </a>
         
        </div>
        
        
      </div>
    </div>
  );
};

export default HeroSection;
