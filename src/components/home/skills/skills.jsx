import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { title: "SolidWorks", img: "solidworks.webp" },
    { title: "Auto-Cad", img: "autocad.webp" },
    { title: "ANSYS", img: "ansys.png" },
    { title: "Mechanical tools handling", img: "mechtoolshandling.png" },
    { title: "Excel", img: "xcel.webp" },
    { title: "Word", img: "word.webp" },
    { title: "Documentation", img: "documentation.webp" },
    { title: "CATIA", img: "catia.webp" },
    { title: "Matlab", img: "matlab.webp" },
    { title: "SAP", img: "sap.webp" },
    { title: "BOM", img: "bom.webp" },
    { title: "Cricket", img: "cricket.webp" },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-600 min-h-screen py-16 flex flex-col items-center">
      <motion.h2
        className="text-5xl font-extrabold text-white mb-12 uppercase tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 md:px-8 w-full max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 text-white p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col items-center 
              transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:bg-white hover:text-black 
              backdrop-blur-lg bg-opacity-90 border border-red-700"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={skill.img}
              alt={skill.title}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-4 sm:mb-6"
              whileHover={{ scale: 1.2, rotate: 10 }}
            />
            <h3 className="text-xl sm:text-2xl font-bold">{skill.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
