import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./About.css";
const About = () => {
  return (
    <div id="about" className="abt-main-cont">
      <div className="abt-lt-side-img-cont">
        <img src="asset/sahdab.jpg" className="abt-lt-side-img" alt="" />
      </div>
      <div className="abt-rgt-side-cont">
        <h1 className="abt-rgt-side-main-header">About me</h1>
        <div className="abt-rgt-side-tp-header">
          I am a skilled frontend developer dedicated to crafting engaging and
          user-friendly web experiences. With a keen eye for design and a
          passion for creating visually stunning interfaces, I deliver seamless
          and intuitive user interactions. I am constantly learning and staying
          updated with the latest technologies to provide innovative solutions.
          Let's bring your ideas to life and create impactful websites together.
        </div>
        <div className="abt-rgt-side-bottom-header">
          As a frontend developer, my goal is to bridge the gap between design
          and functionality, creating websites that not only look impressive but
          also provide a smooth and enjoyable user experience. With expertise in
          HTML, CSS, and JavaScript, I have the ability to transform designs
          into responsive and interactive websites. I am well-versed in modern
          frontend frameworks and tools, enabling me to efficiently develop
          scalable and high-performance web applications. I am passionate about
          collaborating with creative teams and turning their visions into
          reality through clean and well-structured code.
        </div>

        <div className="abt-rgt-bottom-logo-cont">
          <div className="abt-rgt-bottom-logo-inner-cont">
            <a href="http://linkedin.com/in/sahdabansari972" target="_blank">
              <FaLinkedinIn className="abt-rgt-bottom-logo abt-rgt-bottom-lndn-logo" />
            </a>
          </div>
          <div className="abt-rgt-bottom-logo-inner-cont">
            <a href="https://github.com/shadab7-2" target="_blank">
              <FaGithub className="abt-rgt-bottom-logo abt-rgt-bottom-git-logo" />
            </a>
          </div>
          <div className="abt-rgt-bottom-logo-inner-cont">
            <a href="http://linkedin.com/in/sahdabansari972" target="_blank">
              <AiFillFacebook className="abt-rgt-bottom-logo abt-rgt-bottom-fb-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
