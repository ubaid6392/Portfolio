// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import reduxLogo from './assets/tech_logo/redux.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';



import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import cLogo from './assets/tech_logo/c.png';

import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';


import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';


import postgreLogo from './assets/tech_logo/postgre.png';


// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import aktu from './assets/education_logo/aktu_logo.png';
import up from './assets/education_logo/up_logo.png';


// Project Section Logo's
import Cm from './assets/work_logo/cm.jpeg';
import cspre from './assets/work_logo/cs_prep.jpeg';
import imagesearch from './assets/work_logo/image_search.jpeg';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
      ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
     
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: aktu ,
      school: "Dr.A.P.J Abdul Kalam Technical University",
      date: "Sept 2020 - July 2024",
      grade: "6.87 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science and Engineering (B.Tech) from S.R Group of institutions, Jhansi. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at S.R Group of institutions allowed me to work on projects that applied theoretical concepts to real-world problems.", 
      degree: "Bachelor of Technology - B.Tech",
    },
    {
      id: 1,
      img: up,
      school: "Sunny Convent Inter College",
      date: "Sept 2019 - Aug 2020",
      grade: "60%",
      desc: "I completed my class 12 education from Sunny Covent Inter College,  under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM) .",
      
      degree: "UP Board (XII), PCM",
    },
    
    
    {
      id: 2,
      img: up,
      school: "shri Raghuraj Singh Inter college",
      date: "Apr 2018 - March 2019",
      grade: "84.6%",
      desc: "I completed my class 10 education from shri Raghuraj Singh Inter college  ,  under the UP board, where I studied Science with Computer.",
      degree: "UP board(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Mordan chair",
      description:"Customization tools for changing colors, materials, and finishes in real-time.Responsive design that works seamlessly across desktop, tablet, and mobile devices",
       image: Cm,
      tags: ["HTML", "CSS", "JavaScript",  "API"],
      github: "https://github.com/ubaid6392/Mordan-Chair-page",
      webapp: "https://github.com/ubaid6392/Mordan-Chair-page",
    },
    {
      id: 1,
      title: "Blog-context",
      description:
        "Built a full-featured blogging platform using React.js.in which we can read the blog of various type of technology like Ai, web desiging,machine learning,App development",
      image: cspre,
      tags: ["React JS", "Node.js", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ubaid6392/Blog-context-App",
      webapp: "https://github.com/ubaid6392/Blog-context-App",
    },
    {
      id: 2,
      title: "Tour with love",
      description:
        "A React-based web application that provides tour rate and picture where  you want to go",
      image: imagesearch,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ubaid6392/Tour-with-love",
      webapp: "https://github.com/ubaid6392/Tour-with-love",
    },
    
   ];
