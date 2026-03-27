"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experienceData = [
  {
    role: "Operations Executive – Engagement & Success",
    company: "SkillsConnect",
    year: "July 2025 — Present",
    logo: "/skillsconnect.svg",
    points: [
      "Managed end-to-end recruitment lifecycle.",
      "Handled client coordination & requirement gathering.",
      "Built real-time tracking system.",
    ],
  },
  {
    role: "Frontend Web Developer",
    company: "Nexcore Alliance",
    year: "6 Months",
    logo: "/nexcorealliance.jpeg",
    points: [
      "Built responsive UIs using React & Next.",
      "Delivered international & national projects.",
      "Mentored trainees & led communication.",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Marketiq Junction",
    year: "3 Months",
    logo: "/marketiqjunction.webp",
    points: [
      "Designed branding creatives using Figma & Canva.",
      "Conducted SEO & design bootcamps.",
    ],
  },
  {
    role: "Technical Content Creator",
    company: "ISRC",
    year: "3 Months",
    logo: "/isrc.png",
    points: [
      "Created 50+ robotics & electronics videos.",
      "Mentored students in tech learning.",
    ],
  },
  {
    role: "Social Media Head",
    company: "IEEE-PCE",
    year: "3 Years",
    logo: "/ieee.webp",
    points: [
      "Managed tech event promotions.",
      "Collaborated across committees.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="bg-gradient-to-b from-black via-black to-gray-900 py-24 px-6">

      {/* TITLE */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-20"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Professional <span className="text-red-500">Experience</span>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">

        {/* Timeline Line */}
        <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-[2px] h-full bg-red-500/30"></div>

        <div className="space-y-16">

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
                scale: 0.96,
              }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* Timeline Dot */}
              <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_12px_rgba(255,0,0,0.7)] animate-pulse"></div>

              {/* Card Wrapper */}
              <div className="ml-8 md:ml-0 md:w-1/2">

                <motion.div
                  whileHover={{ scale: 1.04, y: -6 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-[0_0_40px_rgba(255,0,0,0.35)] transition"
                >

                  {/* HEADER */}
                  <div className="flex items-start gap-4 mb-4">

                    {/* LOGO */}
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex-shrink-0">
                      <Image
                        src={exp.logo}
                        fill
                        alt={exp.company}
                        className="object-contain p-2"
                      />
                    </div>

                    {/* TEXT */}
                    <div>

                      <h3 className="text-white font-semibold text-lg leading-snug">
                        {exp.role}
                      </h3>

                      <p className="text-red-400 text-sm">
                        {exp.company}
                      </p>

                      <span className="text-xs text-red-300 bg-red-500/10 px-2 py-1 rounded-full inline-block mt-1">
                        {exp.year}
                      </span>

                    </div>

                  </div>

                  {/* POINTS */}
                  <ul className="text-gray-300 text-sm space-y-2 list-disc pl-5">
                    {exp.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>

                </motion.div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}