import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am currently a second-year student pursuing a Bachelor of Technology in Artificial Intelligence and Machine Learning at Birla Institute of Technology, Mesra. With a CGPA of 8.52, I am passionate about exploring the realms of data structures and algorithms (DSA) and full stack development. My journey in technology has led me to complete various projects and internships in web development, providing me with hands-on experience and expertise. My goal is to continue learning and growing, leveraging my skills to create innovative solutions and contribute to meaningful projects.`;

export const ABOUT_TEXT = `As a second-year student pursuing a Bachelor of Technology in Artificial Intelligence and Machine Learning at Birla Institute of Technology, Mesra, I am deeply engaged in exploring the realms of data structures and algorithms (DSA) and full stack development. With a CGPA of 8.52, I have honed my skills in various technologies, including React, Node.js, MongoDB, MySQL, and more. My journey in technology has been marked by hands-on experience and expertise gained through completing various projects and internships in web development. I am dedicated to continuously learning and adapting to new challenges, with a goal of leveraging my skills to contribute meaningfully to projects and make a positive impact.`;

export const EDUCATION = [
  {
    year: "2022 - Present",
    degree:
      "Bachelor of Technology in Artificial Intelligence and Machine Learning",
    institution: "Birla Institute of Technology, Mesra",
    description:
      "Currently a second-year student with a CGPA of 8.52. Possesses skills in Data Structures and Algorithms (DSA) and full stack development. Completed various projects and internships in web development.",
  },
  {
    year: "2019 - 2021",
    degree: "Senior Secondary (12th Grade)",
    institution: "Valley View School",
    description:
      "Completed senior secondary education with a specialization in Science (Physics, Chemistry, Mathematics and Computer Science). Secured 94.4% in the CBSE board exams.",
  },
  {
    year: "2019 ",
    degree: "Secondary (10th Grade)",
    institution: "Valley View School",
    description:
      "Completed secondary education with a strong emphasis on Science and Mathematics. Achieved 92% in the CBSE board exams.",
  },
];

export const PROJECTS = [
  {
    title: "ClubConnect",
    image: project1,
    description:
      "A project designed for college clubs to add news in the newsroom and recruit students. It includes features for posting news updates, managing events, and handling student applications.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Mongoose",
      "Tailwind CSS",
    ],
    liveLink: "https://mega-project-mu.vercel.app/",
    codeLink: "https://github.com/sumitt-kun/mega_project",
  },
  {
    title: "BitWebApp",
    image: project2,
    description:
      "A web application for the CSE department of Birla Institute of Technology, Mesra. Users can create and update their profiles, record achievements, and administrators can access and manage this data.",
    technologies: ["React", "Node.js", "MongoDB", "Mongoose", "Tailwind CSS"],
    liveLink: "https://bit-web-app-24.vercel.app/",
    codeLink: "https://github.com/BitWebApp/BitWebApp-24",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://www.sumitkun.tech/",
    codeLink: "https://github.com/sumitt-kun/portfolio",
  },
  {
    title: "UsePopcorn",
    image: project4,
    description:
      "An application that fetches movie data from the OMDb API. Users can search for movies, add them to a watchlist, and rate them.",
    technologies: ["React", "Tailwind CSS"],
    liveLink: "https://usepopcorn-rust-eta.vercel.app/",
    codeLink: "https://github.com/sumitt-kun/usepopcorn",
  },
];

export const CONTACT = {
  address: "Telco Area Jamshedpur, Jharkhand, India",
  phoneNo: "+91 9334349312 ",
  email: "sumitkumar933434@gmail.com",
};
