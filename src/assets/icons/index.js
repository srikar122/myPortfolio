// frontend imports
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

// backend imports
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

// programming languages
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaJs } from "react-icons/fa";

// others
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const skills = {
  frontend: [
    { 
      icon: FaReact,
      color: "#61DAFB",
      name: "React",
    },
    {
      icon: FaHtml5,
      color: "#E34F26",
      name: "HTML5",
    },
    {
      icon: FaCss3Alt,
      color: "#1572B6",
      name: "CSS3",
    },
    {
      icon: FaJsSquare,
      color: "yellow",
      name: "JavaScript",
    },
    {
      icon: SiTypescript,
      color: "#3178c6",
      name: "TypeScript",
    },
    {
      icon: RiTailwindCssFill,
      color: "#007bff",
      name: "Tailwind",
    },
    {
      icon: FaBootstrap,
      color: "#0d6efd",
      name: "Bootstrap",
    },
    {
      icon: RiNextjsFill,
      color: "#000000",
      name: "Next.js",
    },
  ],
  backend: [
    {
      icon: FaNodeJs,
      color: "#339933",
      name: "Node.js",
    },
    {
      icon: SiExpress,
      color: "white",
      name: "Express.js",
    },
    {
      icon: SiMongodb,
      color: "#47A248",
      name: "MongoDB",
    },
    {
      icon: BsFiletypeSql,
      color: "",
      name: "SQL",
    },
  ],
  programming: [
    {
      icon: TbBrandCpp,
      color: "#00599C",
      name: "C++",
    },
    {
      icon: FaJava,
      color: "#007396",
      name: "Java",
    },
    {
      icon: FaPython,
      color: "#3776AB",
      name: "Python",
    },
    {
      icon: FaJs,
      color: "yellow",
      name: "JavaScript",
    },
  ],
  other: [
    {
      icon: FaGithub,
      color: "white",
      name: "GitHub",
    },
    {
      icon: FaGitAlt,
      color: "#F05032",
      name: "Git",
    },
    {
      icon: VscVscode,
      color: "#007ACC",
      name: "VS Code",
    },
  ],
};

export default skills;
