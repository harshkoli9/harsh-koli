"use client";
import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    institution: "Pillai College of Engineering",
    degree: "B.Tech in Mechanical Engineering",
    year: "2021 to 2025",
    description: "7.2 CGPI",
  },
  {
    id: 2,
    institution: "Mahatma Education Society",
    degree: "Higher Secondary Certificate",
    year: "2019 to 2021",
    description: "81%",
  },
  {
    id: 3,
    institution: "Mahatma Education Society",
    degree: "Secondary School Certificate",
    year: "2006 to 2018",
    description: "82%",
  },
];

// container variant for stagger
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6 },
  },
};

// each card animates in
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Education = () => {
  return (
    <div className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title animation */}
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          🎓 Education
        </motion.h2>

        {/* Grid container with stagger */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={cardVariants}
              className="group bg-red-600 rounded-2xl shadow-xl overflow-hidden p-6 transition-all duration-300 hover:bg-white hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-white group-hover:text-black mb-2 transition-colors duration-300">
                {edu.degree}
              </h3>
              <p className="text-white/80 group-hover:text-black transition-colors duration-300">
                {edu.institution}
              </p>
              <p className="text-white/70 group-hover:text-black transition-colors duration-300">
                {edu.year}
              </p>
              <p className="text-white mt-3 text-sm group-hover:text-black transition-colors duration-300">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
