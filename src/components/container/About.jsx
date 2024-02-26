import React from "react";
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Oferecemos os melhores cursos <br /> online{" "}
            <span className="text-Teal">para você</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
            Oferecemos uma ampla gama dos melhores cursos online, projetados para atender
            às necessidades e interesses diversos dos alunos.
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
