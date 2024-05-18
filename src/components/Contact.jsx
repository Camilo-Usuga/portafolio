import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import MonitorCanvas from "./canvas/Monitor";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Emanuel López",
          from_email: form.email,
          to_email: "emanuel.arango1226@gmail.com",
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Gracias por su mensaje. Nos pondremos en contacto con usted lo antes posible."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Lo sentimos, ocurrió un error. Por favor, inténtelo de nuevo más tarde.");
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="lg:w-[50%] bg-black p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>¡Hablemos!</p>
        <h3 className={styles.sectionHeadText}>Contacto.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium">Tu nombre</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cuál es tu nombre?"
              className="bg-gray-800 py-3 px-4 placeholder-gray-400 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium">Tu correo electrónico</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="¿Cuál es tu correo electrónico?"
              className="bg-gray-800 py-3 px-4 placeholder-gray-400 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium">Tu mensaje</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="¿Qué mensaje deseas enviar?"
              className="bg-gray-800 py-3 px-4 placeholder-gray-400 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-red-500 py-3 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-md"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="lg:w-[50%] h-[300px] lg:h-auto"
      >
        <MonitorCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
