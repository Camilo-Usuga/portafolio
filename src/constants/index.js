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
  starbucks,
  omnifood,
  meta,
  refine,
  clone,
  dalle,
  tesla,
  shopify,
  threejs,
  omnifoodLogo,
  openai,
  three,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca de",
  },
  /*{
    id: "projects",
    title: "Proyectos",
  },*/
  {
    id: "contact",
    title: "Contáctame",
  },
];

const services = [
  {
    title: "Desarrollador Web",
    icon: web,
  },
  {
    title: "Desarrollador Frontend",
    icon: mobile,
  },
  {
    title: "Desarrollador Backend",
    icon: backend,
  },
  {
    title: "Experto en resolución de problemas técnicos",
    icon: creator,
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
  /*{
    name: "Tailwind CSS",
    icon: tailwind,
  },*/
  {
    name: "Node JS",
    icon: nodejs,
  },/*
  {
    name: "MongoDB",
    icon: mongodb,
  },*/
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Resolución de problemas técnicos",
    company_name: "",
    icon: omnifoodLogo,
    iconBg: "#fff",
    date: "Enero 2024 - Mayo 2024",
    points: [
      "Identificar y resolver una amplia gama de problemas informáticos, desde configuraciones DNS hasta errores 500 y 404, garantizando la disponibilidad y funcionalidad continua de los sistemas.",
      "Solucionar problemas relacionados con herramientas específicas como Elementor, Divi, Plugins y Themes, optimizando su rendimiento y funcionalidad.",
      "Experiencia en el diagnóstico y solución de errores en gestores de contenido como WordPress, Joomla y PrestaShop, asegurando la integridad y eficiencia de las experiencias digitales.",
      "Gestionar y resolver incidencias en entornos de alojamiento web, incluyendo configuraciones de cPanel y problemas relacionados con correos corporativos, garantizando la estabilidad y seguridad del sistema.",
      "Realizar análisis exhaustivos de errores para identificar las causas subyacentes y aplicar soluciones efectivas, minimizando el impacto en la experiencia del usuario.",
      "Proporcionar soporte técnico oportuno y de alta calidad a usuarios finales, asegurando una experiencia fluida y satisfactoria en el uso de los sistemas y aplicaciones.",
    ],
  },
  {
    title: "Desarrollador frontend",
    company_name: "Programcol",
    icon: omnifoodLogo,
    iconBg: "#FDF2EA",
    date: "Octubre 2023 - Noviembre 2023",
    points: [
      "Desarrollar y mantener aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Implementar diseño responsive y asegurar compatibilidad entre navegadores.",
      "Participar en revisiones de código y brindar retroalimentación constructiva a otros desarrolladores."
    ],
  },
  {
    title: "E-Commerce",
    company_name: "Varishop",
    icon: omnifoodLogo,
    iconBg: "#fff",
    date: "Abril 2024 - Mayo 2024",
    points: [
      "Desarrollar y mantener tiendas en línea utilizando la plataforma Shopify.",
      "Implementar diseño responsive y garantizar compatibilidad entre navegadores en las tiendas en línea.",
      "Integrar y personalizar características específicas de comercio electrónico de Shopify, como carritos de compras, pasarelas de pago y gestión de inventario.",
      "Optimizar el rendimiento de las tiendas en línea para ofrecer una experiencia de usuario fluida.",
    ],
  },
  {
    title: "Portafolio de desarrolladores web",
    company_name: "Emanuel López | Portafolio",
    icon: threejs,
    iconBg: "#fff",
    date: "Abril 2024 - Mayo 2024",
    points: [
      "Desarrollar y mantener aplicaciones web utilizando tecnologías como React.js y otras herramientas relacionadas.",
      "Garantizar un diseño adaptable y una compatibilidad óptima entre navegadores para una experiencia de usuario consistente.",
      "Participar en revisiones de código y ofrecer retroalimentación constructiva para mejorar continuamente la calidad del código y del producto final.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "KJ proved me wrong by creating a website that was as beautiful as our product.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Starbucks",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients like KJ does.",
    name: "Chris Brown",
    designation: "COO",
    company: "Omnifood",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After KJ optimized our website, our traffic increased by 50%. We can't be more grateful!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Real Estates",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real Estate Dashboard",
    description:
      "Web-based prototype that allows users to search, book, and manage properties from various real estate agents.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "refine",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: refine,
    source_code_link: "https://github.com/JagadeeshKJ/refine_mern_dashboard",
    live_link: "https://real-estate-kj.netlify.app/",
    youtube_link: "https://youtu.be/VjmmgBQXTbw",
  },
  {
    name: "DALL-E AI Gallery",
    description:
      "Web application that enables people to create images by using the amazing DALL-E AI and share them with the community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openai-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dalle,
    //source_code_link: "https://github.com/JagadeeshKJ/dall-e-ai-img-gen",
    live_link: "https://dall-e-ai-img-gen.vercel.app/",
    //youtube_link: "https://youtu.be/-dip4Nep9vk",
  },
  {
    name: "Varishop",
    description:
      "Varishop, el ecommerce en Shopify que transformará tu experiencia de compra en línea. Una muestra impecable de tienda virtual moderna y eficiente.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: omnifood,
    source_code_link:
      "https://github.com/JagadeeshKJ/css-for-beginners/tree/main/Omnifood%20Final%20Project",
    live_link: "https://omnifood-kj1.netlify.app/",
    youtube_link: "https://www.youtube.com/@jagadeeshkoyya",
  },
  // {
  //   name: "Starbucks Clone",
  //   description: "A clone of the Starbucks website built using HTML5 & CSS3.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: clone,
  //   source_code_link: "https://github.com/JagadeeshKJ/Starbucks-Clone",
  //   live_link: "https://starbucks-clone-ashy.vercel.app/",
  //   youtube_link: "https://www.youtube.com/@jagadeeshkoyya",
  // },
];

export { services, technologies, experiences, testimonials, projects };
