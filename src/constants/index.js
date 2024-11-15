import { image } from "framer-motion/client";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    oole,
    dent,
    Sorting,
    threejs,
    parth,
    honest,
    orangecat,
    anmol,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    
    {
      title: "Content Creator",
      icon: creator,
    },

    {
      title: "Beatboxer",
      icon: mobile,
    },

    {
      title: "Guitar-Player",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "The Honest Company",
      icon: honest,
      iconBg: "#383E56",
      date: "June 2024 - July 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Orange Cat",
      icon: orangecat,
      iconBg: "#E6DEDD",
      date: "Nov 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Kanishq proved me wrong.",
      name: "Parth Sharma",
      designation: "Co-Founder",
      company: "Orange Cat",
      image: parth,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Kanishq does.",
      name: "Anmol Singal",
      designation: "Co-Founder",
      company: "The Honest Company",
      image: anmol,
    },
  ];
  
  const projects = [
    {
      name: "Modern UI/UX Website",
      description:
        "Created a fully responsive design compatible with desktop, tablet, and mobile devices using HTML5 , CSS3, Javascript and ReactJs. Designed and implemented modular components to enhance reusability and maintainability of the codebase.",
      tags: [

        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },

        {
          name: "Js",
          color: "green-text-gradient",
        },
        
        {
          name: "react",
          color: "blue-text-gradient",
        },  
      ],
      image: oole,
      source_code_link: "https://github.com/Kanishq2324/Chat_GPT3",
      live_demo_link: "https://modern-gpt3-ui-ux.netlify.app/"
    },
    {
      name: "Dental Website",
      description:
        "Designed and deployed a visually appealing, fully responsive dental website with intuitive navigation and essential features, including appointment booking and patient information sections, ensuring seamless access across all devices.",
      tags: [
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },

        {
          name: "Js",
          color: "blue-text-gradient",
        },
        
      ],
      image: dent,
      source_code_link: "https://github.com/Kanishq2324/Dental-Web",
      live_demo_link: "https://kanishq2324.github.io/Dental-Web/"
    },
    {
      name: "Sorting Visualizer",
      description:
        "Sorting Visualizer is a web app for visualizating different sort of sorting algorithms like Selection sort, Bubble sort, Heap sort, Merge sort, Quick sort, Insertion sort with a functionalality of Speed control and Array size control",
      tags: [
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },

        {
          name: "Js",
          color: "blue-text-gradient",
        },
      ],
      image: Sorting,
      source_code_link: "https://github.com/Kanishq2324/Kanishq_Visualiser-main",
      live_demo_link: "https://kanishq-visualizer.netlify.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };