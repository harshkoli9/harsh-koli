"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const educationData = [
  {
    degree: "B.Tech Electronics & Telecommunication",
    institution: "Pillai College of Engineering",
    year: "2021 — 2025",
    description: "CGPI: 7.2",
    logo: "/pce.webp",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "KPC Kharghar Junior College",
    year: "2019 — 2021",
    description: "86%",
    logo: "/kpc.webp",
  },
  {
    degree: "Secondary School Certificate",
    institution: "St. Joseph High School",
    year: "2006 — 2018",
    description: "70%",
    logo: "/stjoseph.webp",
  },
];

export default function Education() {
  return (
    <section className="bg-gradient-to-b from-black via-black to-gray-900 py-12 sm:py-14 md:py-16 px-4 sm:px-6">

      {/* TITLE */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-white mb-10 md:mb-14"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        My <span className="text-red-500">Education</span>
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">

        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full bg-red-500/20"></div>

        <div className="space-y-10 md:space-y-14">

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >

              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_10px_rgba(255,0,0,0.6)]"></div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className={`
                  bg-white/5 backdrop-blur-md border border-white/10 
                  rounded-2xl p-4 sm:p-5 md:p-6 
                  shadow-xl max-w-xl mx-auto 
                  transition
                  ${index === 0 ? "ring-1 ring-red-500/30" : ""}
                `}
              >

                {/* HEADER */}
                <div className="flex items-center gap-3 sm:gap-4">

                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-white/10 border border-white/10">
                    <Image
                      src={edu.logo}
                      fill
                      alt={edu.institution}
                      sizes="(max-width: 768px) 48px, 64px"
                      className="object-contain p-1"
                    />
                  </div>

                  <div>
                    <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold leading-snug">
                      {edu.degree}
                    </h3>

                    <p className="text-red-400 text-xs sm:text-sm">
                      {edu.institution}
                    </p>

                    <span className="text-[10px] sm:text-xs text-red-300 bg-red-500/10 px-2 py-1 rounded-full inline-block mt-1">
                      {edu.year}
                    </span>
                  </div>

                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-300 text-xs sm:text-sm mt-3">
                  {edu.description}
                </p>

              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}