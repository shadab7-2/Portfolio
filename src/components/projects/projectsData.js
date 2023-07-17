import { AiFillGithub } from "react-icons/ai";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiHeroku, SiMongodb, SiRedux } from "react-icons/si";

export const projectData = [
  {
    id: 1,
    project_name: "Real Estate Plateform",
    image:
      "./realestate.png",
    project_desc:
      "Built a comprehensive real estate website with property listing, search, and interactive features like image galleries and contact forms. The platform aimed to provide users with a seamless experience for browsing, searching, and connecting with properties.",
    deploy_link: "https://react-project-liard-seven.vercel.app/",
    repo_link: "https://github.com/shadab7-2/React-Project/tree/real-estate",
    tech_stack: [
      <FaReact />,
      <FaHtml5 className="prj-flx-inner-tech-stk-icon" />,
      <FaCss3 className="prj-flx-inner-tech-stk-icon" />,
      <FaJs className="prj-flx-inner-tech-stk-icon" />,
    ],
  },
  {
    id: 2,
    project_name: "Fit Club Gym Website",
    image:
      "./gym.png",
    project_desc:
      "Developed and launched a dynamic website for Fit Club Gym, offering a seamless online experience for gym members and potential customers. The website aimed to showcase the gym's facilities, services, and membership options while promoting engagement and conversion.",
    deploy_link: "https://aadityaneve.github.io/Clone-Pluralsight",
    repo_link: "https://github.com/aadityaneve/Clone-Pluralsight",
    tech_stack: [
      <FaHtml5 className="prj-flx-inner-tech-stk-icon" />,
      <FaCss3 className="prj-flx-inner-tech-stk-icon" />,
      <FaJs className="prj-flx-inner-tech-stk-icon" />,
      <FaNodeJs className="prj-flx-inner-tech-stk-icon" />,
      <FaReact />,
    ],
  },
  {
    id: 3,
    project_name: "Instagram Clone",
    image:
      "./instagramclone.png",
    project_desc:
      "Developed a frontend for an Instagram Clone application that replicated the core features and user interface of the popular social media platform. The project aimed to provide users with a familiar and intuitive experience for sharing photos, following other users, and engaging with content.",
    deploy_link: "https://aadityaneve.github.io/Movie-App",
    repo_link: "https://github.com/aadityaneve/Movie-App",
    tech_stack: [
      <FaReact />,
      <FaJs className="prj-flx-inner-tech-stk-icon" />,
      <FaHtml5 className="prj-flx-inner-tech-stk-icon" />,
      <FaCss3 className="prj-flx-inner-tech-stk-icon" />,
    ],
    codeLink:"",
    demoLink:""
  },
];
