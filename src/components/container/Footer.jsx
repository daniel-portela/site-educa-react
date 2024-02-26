import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6">Iniciar</div>
          <p className="text-sm leading-7">
            A nova maneira de aprender online transcende as fronteiras tradicionais da educação.
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Web Design
            </a>
            <a href="" className="text-sm hover:underline">
              Desenvolvimento Web
            </a>
            <a href="" className="text-sm hover:underline">
              {" "}
              Ciências
            </a>
            <a href="" className="text-sm hover:underline">
              Marketing Digital
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Política de Privacidade
            </a>
            <a href="" className="text-sm hover:underline">
              Mapa do site
            </a>
            <a href="" className="text-sm hover:underline">
              Careers
            </a>
            <a href="" className="text-sm hover:underline">
              termos e Condições
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Siga-nos</div>
          <div className="text-sm mb-4">educa@gmail.com</div>
          <div className="text-sm">959883271929</div>
          <div className="flex gap-4 mt-4">
            <a href="" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsPinterest />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
