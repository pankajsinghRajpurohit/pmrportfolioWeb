// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import cLogo from "./assets/tech_logo/c.png"
import reduxLogo from './assets/tech_logo/redux.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';


import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';




// Education Section Logo's
import CVM from "./assets/education_logo/CVM.png"
import RPTP from "./assets/education_logo/RPTP.jpg"
import MBIT from "./assets/education_logo/MBIT.png"

// Project Section Logo'
import Zerodha from "./assets/work_logo/Zerodha.png"
import foodweb from "./assets/work_logo/foodweb.png"
import Recipe from "./assets/work_logo/Recipe.png"
import WanderLust from "./assets/work_logo/WanderLust.png"
import WavyMusic from "./assets/work_logo/WavyMusic.png"
import Netflix from "./assets/work_logo/Netflix.png"
import weather from "./assets/work_logo/weather.png"
import githubdetLogo from './assets/work_logo/github_det.png';

import pmrdelta from './assets/work_logo/pmrdelta.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [

      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
    
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
   
    ],
  },
];


   
  
  export const education = [
  
    {
      id: 0,
      img: MBIT,
      school: "Madhuben & Bhanubhai Patel Institute of Technology, CVM University",
      date: " 2022 -  2026",
      degree: " pursuing B.Tech in Information Technology ",
    },
    {
      id: 1,
      img: RPTP,
      school: "RPTP High Secondary School , Anand(GUJ)",
      date: " 2020 - 2022",
      degree: "GSEB(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: CVM,
      school: "M.U. Patel High School, Anand",
      date: "2020",
  
      degree: "GSEB(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Food Delivery Web App",
      description:
        "Built a full-stack food ordering and delivery platform using the MERN stack.Implemented features like restaurant listings, food menus, cart management, order placement, and paymentgateway integration (Stripe). Designed a responsive and user-friendly interface for seamless browsing and checkout. (Tech: MERN, Stripe, JWT, MongoDB)",
      image:foodweb,
      tags: ["HTML", "CSS", "JavaScript", "MERN Stack", "Stripe Payment"],
      github: "https://github.com/pankajsinghRajpurohit/FoodDelivery",
      webapps: [
      { url: "https://fooddelivery-frontend-z4jp.onrender.com/", label: "User App" },
      { url: "https://fooddelivery-admin-l15w.onrender.com/", label: "Admin Panel" },
    ],
    },
    {
      id: 1,
      title: "Wanderlust (Airbnb Clone)",
      description:
        " Created a full-stack web application for property listing and booking usingNode.js, Express, MongoDB, and EJS,following the MVC architecture. Implemented CRUD operations for listingsand reviews, user authentication, and flash messaging, delivering a complete Airbnb-like experience. (Tech:Node.js, Express.js, MongoDB, EJS, MVC)",
      image:WanderLust,
      tags: [ "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","EJS"],
      github: "https://github.com/pankajsinghRajpurohit/wanderLust",
      webapps: [ { url: "https://wanderlust-xn4y.onrender.com", label:"View Live" } ],
    },
    {
      id: 2,
      title: "Zerodha Web Clone",
      description:
        " Designed and developed a Zerodha trading platform clone using the MERN stack.Implemented core features like stock chart integration, user authentication, portfolio management, andresponsive UI to simulate a stock trading experience.(Tech: MERN, JWT, Chart.js, MongoDB) React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: Zerodha,
      tags: ["React JS", "API", "HTML", "CSS",,"MERN Stack", "JavaScript" ,],
      github: "https://github.com/pankajsinghRajpurohit/ZerodhaClone",
     
    },
    {
      id: 3,
      title: "Wavy Music Web App",
      description:
        "Developed a full-stack music streaming application with a custom audio player andplaylist management. Used Node.js, Express, and MongoDB for backend and database, ensuring secure userauthentication and efficient song storage. Integrated a clean frontend with HTML, CSS, and JavaScript fordynamic song loading and seamless interactions. (Tech: Node.js, Express.js, MongoDB, HTML, CSS, JavaScript)",
      image: WavyMusic,
      tags: ["React JS", "API", "HTML", "CSS",,"MERN Stack", "JavaScript" ,],
      github: "https://github.com/pankajsinghRajpurohit/WavyMusic-FullStack",
     
    },
    {
      id: 4,
      title: "Dynamic Recipe Finder Web App",
      description:
        "a Dynamic Recipe Finder Web App powered by TheMealDB API 🍲. Users can search recipes in real-time, explore categories like desserts or seafood, and view ingredients through interactive popups. Built with HTML, CSS, and Vanilla JS, this project helped me sharpen my skills in API integration, DOM manipulation, and creating a clean, responsive UI.",
      tags: ["JavaScript", "API", "HTML", "CSS"],
      image: Recipe,

      github: "https://github.com/pankajsinghRajpurohit/recipe-web",
      
    },
    {
      id: 5,
      title: "Netflix Clone",
      description:
        "-Developed a responsive clone of Netflix using only HTML, CSS, andJavaScript. Built dynamic sections like trending movies, popular shows, and a responsive video banner.Implemented hover effects, media queries for responsiveness, and interactive UI similar to Netflix’s design.The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: Netflix,
      tags: ["HTML", "CSS", "JavaScript", ],
      github: "https://github.com/pankajsinghRajpurohit/netflix-clone",
     
    },
    {
      id: 6,
      title: "WeatherWeb",
      description:
        "Weather App using React.js ⛅⚡ that fetches live data from a public Weather API. Users can search cities to instantly view temperature, conditions, and forecasts, all displayed in a clean, responsive UI. This project strengthened my skills in React hooks, API integration, and state management, while focusing on delivering a smooth user experience",
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://github.com/pankajsinghRajpurohit/WeatherWeb",
        image: weather,
    },
    
  ];  
