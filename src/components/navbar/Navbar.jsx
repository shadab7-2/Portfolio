import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { navList } from "./NavbarLists";
import { Toggle } from "./Toggle";
const Navbar = ({isDark,setIsDark,themeToggler}) => {
  const navigate = useNavigate();
  const [activeHam, setActiveHam] = useState(false);
  const [color, setColor] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [deviceType, setDeviceType] = useState("desktop");
  const [active, setActive] = useState(false);
  const [activeLink, setActiveLink] = useState(activePage);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleHamClick = () => {
    setActiveHam(!activeHam);
  };

  // scroll to change bg color
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const changeActiveLinks = () => {
    setActive(false);
    if (deviceType === "desktop") {
      if (window.scrollY >= 0 && window.scrollY <= 100) {
        setActivePage(0);
        navigate("#home");
      } else if (window.scrollY >= 635 && window.scrollY <= 1200) {
        setActivePage(1);
        navigate("#skills");
      } else if (window.scrollY >= 1201 && window.scrollY <= 1835) {
        setActivePage(2);
        navigate("#projects");
      } else if (window.scrollY >= 1836 && window.scrollY <= 2600) {
        setActivePage(3);
        navigate("#about");
      } else if (window.scrollY >= 2601 && window.scrollY <= 3200) {
        setActivePage(4);
        navigate("#contact");
      }
    } else if (deviceType === "tablet") {
      if (window.scrollY <= 100) {
        setActivePage(0);
        navigate("#home");
      } else if (window.scrollY <= 516) {
        setActivePage(1);
        navigate("#skills");
      } else if (window.scrollY <= 1050) {
        setActiveLink("skills");
      } else if (window.scrollY <= 2150) {
        setActiveLink("Perks");
      } else if (window.screenY <= 2464) {
        setActiveLink("");
      }
    } else if (deviceType === "mobile") {
      if (window.scrollY >= 0 && window.scrollY <= 100) {
        setActivePage(0);
        navigate("#home");
      } else if (window.scrollY >= 435 && window.scrollY <= 725) {
        setActivePage(1);
        navigate("#skills");
      } else if (window.scrollY <= 1148) {
        setActiveLink("Life");
      } else if (window.scrollY <= 2150) {
        setActiveLink("Perks");
      } else if (window.screenY <= 2464) {
        setActiveLink("");
      }
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 708) {
      setDeviceType("mobile");
    }
    if (window.innerWidth >= 708 && window.innerWidth <= 1024) {
      setDeviceType("tablet");
    } else if (window.innerWidth > 1025) {
      setDeviceType("desktop");
    }
  }, [window.innerWidth]);
  useEffect(() => {
    if (
      activePage === "Faqs" ||
      activePage == "Interview" ||
      activePage == "join-us"
    ) {
      return;
    } else {
      window.addEventListener("scroll", changeActiveLinks);
      return () => {
        window.removeEventListener("scroll", changeActiveLinks);
      };
    }
  }, [activeLink, deviceType]);
  useEffect(() => {
    setActiveLink(activePage);
  }, []);

  // console.log(deviceType)

  useEffect(() => {
     let body = document.getElementsByTagName("body");
     console.log("hello",body)
     if(isDark){
      body[0].classList="dark-bdy"
     }
     else{
      body[0].classList="light-bdy"


     }
  },[isDark])
  return (
    <div className={color ? "nav-main-cont nav-main-cont-bg" : "nav-main-cont"}>
      <div className="nav-left-header" onClick={() => navigate("/")}>
        My Portfolio.
      </div>

      <ul
        className={
          activeHam
            ? "nav-right-list-cont nav-list-active"
            : "nav-right-list-cont"
        }
      >
        {navList &&
          navList.map((item, index) => {
            return (
              <li className="nav-right-list" key={index}>
                <a
                  onClick={() => {setActivePage(index)
                    setTimeout(() =>{
                      setActiveHam(false)
                    },300)
                  
                  }}
                  href={item.link}
                  className={` ${
                    activePage === index
                      ? "active-nav "
                      : "nav-right-list-title"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
      </ul>
      {/* <Toggle themeToggler={themeToggler} /> */}
      <div className="nav-right-ham-cont" onClick={handleHamClick}>
        {activeHam ? (
          <FaTimes
            style={{ color: "#fff", fontWeight: "200", fontSize: "20px" }}
          />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
