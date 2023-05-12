import React from "react";
import "./Skills.css";
import { skillsProData, skillsTechData } from "./skillsData";
const Skills = () => {
  return (
    <div id="skills" className="skills-main-cont">
      {/* Technologies */}
      <div className="skl-top-btm-cont skl-top-cont">
        <p className="skl-cont-header">Technologies</p>
        <div className="skl-top-btm-main-cont">
          {skillsTechData.map((item, index) => {
            return (
              <div className="skl-inner-cont" key={index}>
                {item.icon}
                {item.title}
              </div>
            );
          })}
        </div>
      </div>

      {/* Proficiencies */}
      <div className="skl-btm-cont skl-top-btm-cont">
        <p className="skl-cont-header">Proficiencies</p>
        <div className="skl-btm-main-cont">
          {skillsProData.map((item, index) => {
            return (
              <div className="skl-inner-cont" key={index}>
                {item.icon}
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
