"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {

  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", img: "/react.webp" },
        { name: "JavaScript", img: "/javascript.webp" },
        { name: "Tailwind", img: "/tailwind.webp" },
        { name: "HTML", img: "/html.webp" },
        { name: "CSS", img: "/css.webp" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", img: "/git.webp" },
        { name: "Postman", img: "/postman.webp" },
        { name: "ChatGPT", img: "/chatgpt.webp" },
        { name: "Gemini", img: "/gemini.webp" },
        { name: "Claude", img: "/claude.webp" },
        { name: "Excel", img: "/excel.webp" },
      ],
    },
    {
      title: "Data",
      skills: [
        { name: "SQL", img: "/sql.webp" },
        { name: "Python", img: "/python.webp" },
        { name: "Data Analysis", img: "/da.webp" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >

      {/* TITLE */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white mb-12 md:mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My <span className="text-red-500">Skills</span>
      </motion.h2>

      <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">

        {categories.map((category, i) => (
          <div key={i}>

            {/* CATEGORY TITLE */}
            <motion.h3
              className="text-lg sm:text-xl md:text-2xl font-semibold text-red-400 mb-5"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {category.title}
            </motion.h3>

            {/* GRID */}
            <div
              className="
                grid 
                grid-cols-2 
                sm:grid-cols-3 
                md:grid-cols-4 
                lg:grid-cols-5 
                xl:grid-cols-6
                gap-4 sm:gap-5 md:gap-6
              "
            >

              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="
                    min-h-[120px]
                    bg-white/5 
                    backdrop-blur-md 
                    border border-white/10 
                    rounded-xl 
                    p-4 sm:p-5 
                    flex flex-col items-center justify-center 
                    text-white 
                    transition duration-300 
                    hover:shadow-[0_0_25px_rgba(255,0,0,0.4)]
                  "
                >
                  {/* ICON */}
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-2 sm:mb-3">
                    <Image
                      src={skill.img}
                      alt={skill.name}
                      fill
                      className="object-contain p-1"
                      loading="lazy"
                    />
                  </div>

                  {/* NAME */}
                  <p className="text-[11px] sm:text-xs md:text-sm font-medium text-center leading-tight">
                    {skill.name}
                  </p>
                </motion.div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}