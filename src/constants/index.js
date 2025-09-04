import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nextjs,
    nodejs,
    mongodb,
    git,
    sji,
    threejs,
    img,
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
      title: "Software Engineer Intern",
      company_name: "SJ Innovation",
      icon: sji,
      iconBg: "#383E56",
      date: "May 2025 - July 2025",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Participated in code reviews and learned best practices for clean, maintainable code.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Advice De",
      description:
        "A web app that lets users generate shareable links to receive anonymous advice from anyone online. Focused on simplicity and privacy, it enables open and honest feedback without revealing identities.",
      tags: [
        {
          name: "Next js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      // image: ,
      source_code_link: "https://github.com/Ishan-Me/AdviceDe",
    },
    
    {
      name: "Imagination",
      description:
        "An AI-powered application that converts text prompts into unique images. It allows users to visualize ideas instantly with a simple and intuitive interface.",
      tags: [
        {
          name: "Next js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: img ,
      source_code_link: "https://github.com/Ishan-Me/Imagination",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };