import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, youtube } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  live_link,
  source_code_link,
  youtube_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black p-5 rounded-2xl sm:w-[360px] w-full" // Cambiamos el color de fondo a negro
      >
        <div
          className="relative w-full h-[230px] cursor-pointer"
          onClick={() => window.open(live_link, "_blank")}
        >
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 gap-2 card-img_hover">
            <div
              onClick={() => window.open(youtube_link, "_blank")}
              className="red-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" // Cambiamos el gradiente a rojo
            >
              <img
                src={youtube}
                alt="source code"
                className="w-full h-full object-contain"
              />
            </div>

            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="red-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" // Cambiamos el gradiente a rojo
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3> {/* Cambiamos el color del texto a blanco */}
          <p className="mt-2 text-white text-[14px]">{description}</p> {/* Cambiamos el color del texto a blanco */}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-red-500`}>Mi trabajo</p> 
        <h2 className={`${styles.sectionHeadText} text-white`}>Proyectos.</h2> 
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
        >
          He participado en una amplia gama de proyectos que evidencian mis habilidades y experiencia. Cada uno de ellos se presenta de manera concisa, con enlaces a los repositorios de código y demostraciones en vivo. Estos proyectos destacan mi capacidad para abordar desafíos complejos, adaptarme a diversas tecnologías y liderar la gestión efectiva de proyectos.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
