import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./About.css";
const About = () => {
  return (
    <div id="about" className="abt-main-cont">
      <div className="abt-lt-side-img-cont">
        <img src="asset/prayash.jpg" className="abt-lt-side-img" alt="" />
      </div>
      <div className="abt-rgt-side-cont">
        <h1 className="abt-rgt-side-main-header">About me</h1>
        <div className="abt-rgt-side-tp-header">
          Hello Learners, I am Prayas Chhetri from Siliguri. An optimistic and
          self motivated individual, looking forward to work in an It industry
          which allows pushing my boundries and serve really good work.
        </div>
        <div className="abt-rgt-side-bottom-header">
          After graduating from my higher secondary school. I couldn't carry on
          with my study due to some really severe financial crisis in my home
          and to sort it out I worked in serveral cities and states in India.
          From a salesman to a parcel boy I faced some really challenging times
          but I was always interested to be a problem solver and because of this
          attitude I came to know about the tech industries and how they work.
          After scrolling to many skill-building websites and watching tons of
          turorial videos I was feeling directionless but joining Masai School
          was my best decision till now.
        </div>

        <div className="abt-rgt-bottom-logo-cont">
          <div className="abt-rgt-bottom-logo-inner-cont">
            <a href="https://www.linkedin.com/in/prayash-chhetri/" target="_blank">
              <FaLinkedinIn className="abt-rgt-bottom-logo abt-rgt-bottom-lndn-logo" />
            </a>
          </div>
          <div className="abt-rgt-bottom-logo-inner-cont">
            <a href="https://github.com/prayaschhetri1" target="_blank">
              <FaGithub className="abt-rgt-bottom-logo abt-rgt-bottom-git-logo" />
            </a>
          </div>
          <div className="abt-rgt-bottom-logo-inner-cont">
            <a href="https://www.facebook.com/prayash.chhetri.90/" target="_blank">
              <AiFillFacebook className="abt-rgt-bottom-logo abt-rgt-bottom-fb-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
