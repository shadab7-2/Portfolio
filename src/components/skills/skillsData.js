import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaHubspot, FaLaptopCode, FaReact } from "react-icons/fa";
import { SiJavascript, SiRedux } from "react-icons/si";
export const skillsTechData = [
  {
    icon: <FaReact className="skl-inner-icon skl-inner-react-icon" />,
    title: (
      <div className="skl-inner-header skl-inner-react-header">React JS</div>
    ),
  },
  {
    icon: <SiJavascript className="skl-inner-icon skl-inner-js-icon" />,
    title: (
      <div className="skl-inner-header skl-inner-js-header">JavaScript</div>
    ),
  },
  {
    icon: <FaCss3 className="skl-inner-icon skl-inner-css-icon" />,
    title: <div className="skl-inner-header skl-inner-css-header">CSS</div>,
  },
  {
    icon: <SiRedux className="skl-inner-icon skl-inner-redux-icon" />,
    title: <div className="skl-inner-header skl-inner-redux-header">Redux</div>,
  },
  {
    icon: <AiFillHtml5 className="skl-inner-icon skl-inner-html-icon" />,
    title: <div className="skl-inner-header skl-inner-html-header">HTML</div>,
  },
];

export const skillsProData = [
  {
    icon: <FaLaptopCode className="skl-inner-icon skl-inner-frend-icon" />,
    title: (
      <div className="skl-inner-header skl-inner-frend-header">Frontend</div>
    ),
  },
  {
    icon: <FaHubspot className="skl-inner-icon skl-inner-dsa-icon" />,
    title: (
      <div className="skl-inner-header skl-inner-dsa-header">Data Structures</div>
    ),
  },
];
