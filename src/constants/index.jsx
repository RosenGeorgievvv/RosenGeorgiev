import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import pizzaProject from "../assets/pizza.png";
import cameraProject from "../assets/magicshoprental.png";
import movieProject from "../assets/movie.png";
import quizProject from "../assets/quiz.png";
import movies from "../assets/movies.png";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
];

export const HERO = {
  name: "ROSEN GEORGIEV",
  greet: "Hello there! 👋🏻",
  description:
    "I am a dedicated frontend developer with a talent for crafting visually appealing and highly functional user interfaces. I enjoy turning concepts into captivating digital experiences, bringing creativity and technical expertise to every project for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "MagicShop Rental",
    description:
      "Freelance project build with ReactJS",
    image: cameraProject,
    githubLink: "https://github.com/RosenGeorgievvv/magicshop",
    demoLink: "https://www.magicshoprental.com",
  },
  {
    id: 2,
    name: "Movie Magic",
    description:
      "A movie library website built with ExpressJS to show my skill with the technology. Variety of functionalities. Try it!",
    image: movies,
    githubLink: "https://github.com/RosenGeorgievvv/Movie-Magic",
  },
  {
    id: 3,
    name: "Movie World",
    description:
      "MovieWorld is a dynamic web application designed for movie enthusiasts.",
    image: movieProject,
    githubLink: "https://github.com/RosenGeorgievvv/MovieWorld",
    demoLink: "https://movie-world-rosy.vercel.app",
  },
  {
    id: 4,
    name: "Slice Heaven",
    description:
      "SliceHeaven is a modern web application designed to provide users with a seamless and interactive experience for browsing and ordering pizzas.",
    image: pizzaProject,
    githubLink: "https://github.com/RosenGeorgievvv/SliceHeaven",
    demoLink: "https://slice-heaven.vercel.app",
  },
  {
    id: 5,
    name: "Quizzy",
    description:
      "Quizzy is an interactive quiz application designed to provide an engaging platform for users to test their knowledge across various topics.",
    image: quizProject,
    githubLink: "https://github.com/RosenGeorgievvv/Quizzy",
    demoLink: "https://quizzy-inky.vercel.app",
  },
];

export const BIO = [
  "Rosen Georgiev studied Software Engineering at Software University,from which he graduated in 2024.As a multi-disciplinary frontend developer, Rosen Georgiev brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like ReactJS and NextJS.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1 year",
  },
  {
    icon: <SiJavascript className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Javascript",
    experience: "3 years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1 years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1+ years",
  },
  {
    icon: <IoLogoFirebase className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Firebase",
    experience: "1+ years",
  },
];

export const EXPERIENCES = [
  {
    title: "Senior Support Engineer",
    company: "Tek-Experts",
    duration: "March 2020 - Present",
    description:
      "As a Senior Support Engineer, I led the resolution of complex technical issues, utilizing my deep expertise in advanced technologies and troubleshooting techniques. I collaborated closely with cross-functional teams, including developers, product managers, and QA, to ensure the delivery of robust and efficient solutions. My role involved mentoring junior engineers and continuously improving support processes to enhance customer satisfaction and operational efficiency.",
  },
  {
    title: "Support Engineer",
    company: "Tek-Experts",
    duration: "April 2019 - February 2020",
    description:
      "As a Junior Software Support Engineer, I provided first-level technical support, assisting users with troubleshooting software issues and resolving basic technical problems. I developed a solid understanding of software applications and customer service, focusing on identifying and documenting recurring issues to improve support processes. My role involved collaborating with senior engineers and the development team to escalate more complex cases, ensuring timely and effective solutions for users. This position honed my problem-solving skills and laid a strong foundation for my career in software support. ",
  },
];

export const EDUCATION = [
  {
    degree: "Software Engineer",
    institution: "Software University",
    duration: "June 2022 - August 2024",
    description:
      "The Front End Developer program at Software University in Sofia, Bulgaria, offers comprehensive training in JavaScript, from fundamentals to advanced concepts. The curriculum emphasizes building a strong foundation in core JavaScript principles and gradually advances to complex topics, ensuring a deep understanding of the language. Also gain hands-on experience with modern frameworks and tools, including React for building dynamic user interfaces, Tailwind and Bootstrap for responsive design, and NodeJS with ExpressJS for developing server-side applications. This education equips graduates with the skills needed to excel in creating efficient, scalable, and visually appealing web applications.",
  },
  {
    degree: "Business Informatics",
    institution: "Business Academy Dimitar A. Tsenov",
    duration: "September 2016 - June 2020",
    description:
      "Business Informatics equips students with a blend of technical and business skills, focusing on the intersection of IT and business processes. The program covers areas such as data analysis, information systems, and business management, preparing graduates to design and implement technology-driven solutions that optimize business operations. With a strong foundation in both computer science and business principles, graduates are well-prepared to bridge the gap between technology and business, driving innovation and efficiency in various industries.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=100043661731914",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/RosenGeorgievvv",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },        
  { 
    href: "https://www.linkedin.com/in/rosen-georgiev-253611180/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "mailto:rosengeorgiew1@gmail.com",
    icon: <MdEmail fontSize={25} className="hover:opacity-80" />,
  },
];
