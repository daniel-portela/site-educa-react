import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-Teal mb-4">
            {" "}
            seu parceiro de e-learning
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            Esta é <br /> a nova maneira <br /> tde aprender online
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            A nova maneira de aprender online transcende as fronteiras tradicionais da educação.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
              Iniciar
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Descobrir
            </button>
          </div>
        </div>
        <div className="md:w-[60%]">
          <img src={hero} alt="" />
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          Nós colaboramos com mais de{" "}
          <span className="text-Teal">
            100+ universidades e empresas líderes
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
