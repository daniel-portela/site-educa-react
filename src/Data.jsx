import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

import courses1 from "./assets/courses1.jpg";
import courses2 from "./assets/courses2.jpg";
import courses3 from "./assets/courses3.jpg";
import courses4 from "./assets/courses4.jpg";
import courses5 from "./assets/courses5.jpg";
import courses6 from "./assets/courses6.jpg";
import courses7 from "./assets/courses7.jpg";
import courses8 from "./assets/courses8.jpg";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Início",
  },
  {
    id: 2,
    href: "about",
    link: "Sobre",
  },
  {
    id: 3,
    href: "courses",
    link: "Cursos",
  },
  {
    id: 4,
    href: "teacher",
    link: "Professores",
  },
  {
    id: 5,
    href: "contact",
    link: "Contato",
  },
];

export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Design",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Desenvolvimento",
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "Negócios",
  },
  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "Ciências",
  },
];

export const courses = [
  {
    id: 1,
    image: courses1,
    category: "Web Design",
    title: "Curso completo de Web Design",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 2,
    image: courses2,
    category: "Desenvolvimento Web",
    title: "Curso de Desenvolvimento Web",
    rating: 4.8,
    participants: 700,
    price: 125,
  },
  {
    id: 3,
    image: courses3,
    category: "Desenvolvimento Web",
    title: "Curso avançado de Pyton",
    rating: 4.9,
    participants: 300,
    price: 99,
  },
  {
    id: 4,
    image: courses4,
    category: "Web Design",
    title: "Curso de UI/UX Design com Arrays",
    rating: 4.7,
    participants: 600,
    price: 85,
  },
  {
    id: 5,
    image: courses5,
    category: "Desenvolvimento IA",
    title: "Desenvolvimento de IA com Python (curso completo para iniciantes)",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 6,
    image: courses6,
    category: "Web Design",
    title: "Curso completo de Web Design",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 7,
    image: courses7,
    category: "Web Design",
    title: "Curso completo de Web Design",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 8,
    image: courses8,
    category: "Web Design",
    title: "Curso completo de Web Design",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "O que é Skillex?",
  },
  {
    id: 2,
    title: "O que posso aprender com a Skillex?",
  },
  {
    id: 3,
    title: "Posso ensinar no Skillex?",
  },
  {
    id: 4,
    title: "O que está incluído na minha assinatura Skillex?",
  },
];
