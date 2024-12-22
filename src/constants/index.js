import {
    newPort,
    firstPort,
    marvelGame,
    srikarNike,
    smartShopping,
  } from "../assets";
  

  
  const projects = [
    {
      name: "New Portfolio",
      description:
        "A sleek and modern portfolio featuring 3D elements, animations, and interactive designs, showcasing advanced web development skills and creativity.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "tailwindcss", color: "green-text-gradient" },
        { name: "threejs", color: "pink-text-gradient" },
        { name: "framerMotion", color: "blue-text-gradient" },
      ],
      image: newPort,
      source_code_link: "https://github.com/",
    },
    {
      name: "Nike-Srikar",
      description:
        "An elegant React-based website crafted to demonstrate expertise in Tailwind CSS, showcasing seamless styling and responsive design.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "tailwindcss", color: "green-text-gradient" },
      ],
      image: srikarNike,
      source_code_link: "https://github.com/srikar122/srikar-nike",
    },
    {
      name: "My Marvel Game",
      description:
        "A thrilling Marvel-themed puzzle game with three challenging levels. Built using the MERN stack, it tracks user data, progress, and scores for an engaging experience.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "css", color: "green-text-gradient" },
        { name: "mongoDB", color: "pink-text-gradient" },
        { name: "nodeJS", color: "blue-text-gradient" },
        { name: "expressJS", color: "green-text-gradient" },
      ],
      image: marvelGame,
      source_code_link: "https://github.com/srikar122/Marvel",
    },
    {
      name: "First Portfolio",
      description:
        "The very first website I built with passion, using the MERN stack and CSS for styling. It reflects my early enthusiasm and commitment to web development.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "css", color: "green-text-gradient" },
        { name: "mongoDB", color: "pink-text-gradient" },
        { name: "nodeJS", color: "blue-text-gradient" },
        { name: "expressJS", color: "green-text-gradient" },
      ],
      image: firstPort,
      source_code_link: "https://github.com/srikar122/srikar",
    },
    {
      name: "Smart Shopping Recommendation System",
      description:
        "An intelligent commodity search platform using the MERN stack and machine learning. It features web scraping, product filters, and personalized recommendations.",
      tags: [
        { name: "mern", color: "blue-text-gradient" },
        { name: "machine learning", color: "green-text-gradient" },
        { name: "web scraping", color: "pink-text-gradient" },
        { name: "neural networks", color: "blue-text-gradient" },
      ],
      image: smartShopping,
      source_code_link: "https://github.com/",
    },
  ];
  
  
  export {projects};