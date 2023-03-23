import {
  acuarela,
  backend,
  contentCreator,
  css,
  danisoft,
  docker,
  dulzia,
  e80,
  figma,
  freelancer,
  git,
  html,
  javascript,
  lucca,
  mockup,
  mongodb,
  nodejs,
  rafael,
  reactjs,
  redux,
  ricardo,
  tailwind,
  threejs,
  typescript,
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
    icon: mockup,
  },
  /*  {
    title: "React Native Developer",
    icon: mobile,
  }, */
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: contentCreator,
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "PLC Programmer",
    company_name: "Elettric 80",
    icon: e80,
    iconBg: "#383E56",
    date: "September 2018 - April 2021",
    points: [
      "Developing and maintaining software using TIA Portal and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Starting up Automatic Warehouses and Conveyor belts in Companies in SouthAmerica.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Full stack Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#4a5546",
    date: "Jun 2021 - Present",
    points: [
      "Developing and maintaining web applications, mostly Ecommerce Sites, using JavaScript, NodeJS, React.js and other related technologies such as Sanity, MongoDB and PostgreSQL as Databases.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I needed a website to start my business here in Portugal, Luis made it possible.",
    name: "Ricardo Ufre",
    designation: "CEO",
    company: "Dulzia Braga",
    image: ricardo,
  },
  {
    testimonial:
      "I strongly appreciated Luis commitment on reaching team's target. Very passionated Software engineer with strong technical skills.",
    name: "Lucca Pompetti",
    designation: "Project Manager",
    company: "Fameccanica Group",
    image: lucca,
  },
  {
    testimonial:
      "After Luis designed our website, our sales increased by 50%. We can't thank them enough!",
    name: "Rafael Paredes",
    designation: "CEO",
    company: "Planeta Acuarela",
    image: rafael,
  },
];

const projects = [
  {
    name: "Dulzia Braga",
    description:
      "Ecommerce website that allows users to search for products, provided with Stripe payment platform and Sanity Database, enabling the client to add, edit, modify their own products. Made for small online stores.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
      {
        name: "mui",
        color: "violet-text-gradient",
      },
    ],
    image: dulzia,
    source_code_link: "https://github.com/DANIELASARAI/ecommerce_dulziaBraga",
    site_link: "https://www.dulziabraga.com/",
    location: "Braga, Portugal",
  },
  {
    name: "Planeta Acuarela",
    description:
      "Web application that enables users to personalise articles such as t-shirts, cups, pillows; filter and buy through Mercado Pago Chile. Admin dashboard to manage orders, products and clients.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "styled",
        color: "pink-text-gradient",
      },
    ],
    image: acuarela,
    site_link: "https://www.planetacuarela.com/",
    source_code_link: "https://github.com/DANIELASARAI/planetaAcuarela",
    location: "Santiago, Chile",
  },
  {
    name: "DaniSoft App",
    description:
      "Application for small technical businesses to manage clients by creating issue tickets, assign employees, edit and delete them. Also comes with a dashboard to handle the users themselves.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "violet-text-gradient",
      },
    ],
    image: danisoft,
    site_link: "https://danisoft.onrender.com/",
    source_code_link: "https://github.com/DANIELASARAI/daniSoft",
    location: "Braga, Portugal",
  },
];

export { services, technologies, experiences, testimonials, projects };
