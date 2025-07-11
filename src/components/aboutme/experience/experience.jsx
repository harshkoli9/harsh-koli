"use client";
import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    id: 1,
    company: "RCF SRN",
    role: "Project Manager",
    year: "2024 - 2025",
    description:
      "Worked as a Project manager at RCF SRN, under Gajanan Nimbre at Chembur.",
  },
  {
    id: 2,
    company: "Thal RCF",
    role: "Project Designer",
    year: "2023 - 2024",
    description:
      "Worked as a Project Designer at Thal RCF, under Prasanna Niumbre at Alibaug.",
  },
  {
    id: 3,
    company: "Bharat Bijlee Limited",
    role: "Project Developer",
    year: "2025 to Present",
    description:
      "Selected at Bharat Bijlee as a Project Developer from Campus Placement.",
  },
];

// reuse the same variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Experience = () => {
  return (
    <div className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated heading */}
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          🧠 Experience
        </motion.h2>

        {/* Animated grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          {experienceData.map((exp) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              className="group bg-red-600 rounded-2xl shadow-xl overflow-hidden p-6 transition-all duration-300 hover:bg-white hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-white group-hover:text-black mb-2 transition-colors duration-300">
                {exp.role}
              </h3>
              <p className="text-white/80 group-hover:text-black transition-colors duration-300">
                {exp.company}
              </p>
              <p className="text-white/70 group-hover:text-black transition-colors duration-300">
                {exp.year}
              </p>
              <p className="text-white mt-3 text-sm group-hover:text-black transition-colors duration-300">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
