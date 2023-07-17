import React from "react";
import "./Projects.css";
import { projectData } from "./projectsData";

const Projects = () => {
  return (
    <div id="projects" className="prj-main-cont">
      <div className="skl-cont-header">PROJECTS</div>
      <div className="prj-flx-main-cont">
        {projectData.map((item, index) => {
          return (
            <div className="prj-flx-inner-cont" key={index}>
              <img className="prj-flx-inner-image" src={item.image} alt="" />
              <div className="prj-flx-inner-title">{item.project_name}</div>
              <div className="prj-flx-inner-dsc">{item.project_desc}</div>
              <div className="prj-flx-inner-tech-stk-cont">
                {item.tech_stack.map((inItem, index) => {
                  return <React.Fragment key={index}>{inItem}</React.Fragment>;
                })}
              </div>
              <div className="prj-flx-inner-btn-cont">
                <a
                  className="btn prj-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.repo_link}
                >
                  CODE
                </a>
                <a
                  className="btn btn-light prj-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.deploy_link}
                >
                  DEMO
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
