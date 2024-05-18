import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full red-black-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCCIÓN</p>
        <h2 className={styles.sectionHeadText}>Visión General.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        Como desarrollador, cuento con una sólida formación y una capacidad probada para trabajar eficazmente bajo presión. Mi enfoque principal es la colaboración y el trabajo en equipo para diseñar soluciones tecnológicas que cumplan con los objetivos establecidos. Valorizo la empatía y la comunicación abierta para comprender las necesidades del equipo y trabajar en conjunto hacia metas comunes.
        <br></br><br></br>
        Mi especialización abarca desde la resolución de problemas informáticos, como configuraciones DNS y manejo de errores 500 y 404, hasta el dominio de gestores de contenido como WordPress, Joomla y PrestaShop, donde he creado y optimizado experiencias digitales de manera efectiva. Además, tengo experiencia sólida en el uso de frameworks como Laravel y React.
        <br></br><br></br>
        Otro aspecto de mi experiencia incluye el manejo de correos electrónicos, así como la configuración y gestión de gestores de correo. Además, poseo habilidades para documentar procesos, crear manuales y proporcionar capacitación personalizada según las necesidades de cada individuo en el equipo.
        <br></br><br></br>
        Además de mis habilidades técnicas, también estoy involucrado en la creación de sitios web, donde combino mis conocimientos en desarrollo con un enfoque centrado en la experiencia del usuario y el diseño atractivo.<br></br><br></br>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
