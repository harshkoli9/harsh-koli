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
    <section className="bg-gradient-to-b from-black via-black to-gray-900 py-28 px-6">

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-24"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        My <span className="text-red-500">Education</span>
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">

        {/* Timeline Line */}
        <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-[2px] h-full bg-red-500/20"></div>

        <div className="space-y-20">

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >

              {/* Timeline Dot */}
              <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.7)] animate-pulse"></div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl max-w-xl mx-auto hover:shadow-[0_0_50px_rgba(255,0,0,0.35)] transition ${
                  index === 0 ? "ring-2 ring-red-500/40" : ""
                }`}
              >

                {/* Header */}
                <div className="flex items-center gap-5 mb-4">

                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white/10 border border-white/10">
                    <Image
                      src={edu.logo}
                      fill
                      alt={edu.institution}
                      className="object-contain p-2"
                    />
                  </div>

                  <div>
                    <h3 className="text-white text-lg font-semibold leading-snug">
                      {edu.degree}
                    </h3>

                    <p className="text-red-400 text-sm">
                      {edu.institution}
                    </p>

                    <span className="text-xs text-red-300 bg-red-500/10 px-2 py-1 rounded-full inline-block mt-1">
                      {edu.year}
                    </span>
                  </div>

                </div>

                <p className="text-gray-300 text-sm mt-2">
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