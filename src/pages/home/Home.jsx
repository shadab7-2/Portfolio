import React, { useEffect, useState } from "react";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import HeroSection from "../../components/heroSection/HeroSection";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark,setIsDark] = useState(true)
  const [currentTheme, setCurrentTheme] = useState('light');
  useEffect(() => {
    let timerId = setTimeout(() => {
      setIsLoading(false);
      return () => clearTimeout(timerId);
    }, 2500);
  }, []);
  const themeToggler = () => {
      currentTheme === 'light'
          ? setCurrentTheme('dark')
          : setCurrentTheme('light');
  };

  // console.log("loading state -->",isLoading)
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="home-main-cont">
      <Navbar setIsDark={setIsDark} isDark={isDark} themeToggler={themeToggler} />
      <HeroSection />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
