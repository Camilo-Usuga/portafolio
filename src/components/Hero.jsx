import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-red-500" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-purple-400 via-blue-500 to-green-400" />
        </div>

        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hola, soy <span className="text-red-500">Emanuel López</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            Soy un Desarrollador Full Stack 
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-red-500 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-red-500 mb-1"
              style={{ filter: "drop-shadow(0 0 10px #7b26e5)" }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;