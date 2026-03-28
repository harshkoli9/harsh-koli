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
    <section className="bg-gradient-to-b from-black via-black to-gray-900 py-12 sm:py-14 md:py-16 px-4 sm:px-6">

      {/* TITLE */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-white mb-10 md:mb-14"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Professional <span className="text-red-500">Experience</span>
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-6">

        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="border-l-2 border-red-500/40 pl-5"
          >

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 backdrop-blur-md hover:shadow-[0_0_25px_rgba(255,0,0,0.25)] transition">

              {/* HEADER */}
              <div className="flex items-start gap-3 sm:gap-4 mb-3">

                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/10 border border-white/10">
                  <Image
                    src={exp.logo}
                    fill
                    alt={exp.company}
                    sizes="48px"
                    className="object-contain p-1"
                  />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg">
                    {exp.role}
                  </h3>

                  <p className="text-red-400 text-xs sm:text-sm">
                    {exp.company}
                  </p>

                  <span className="text-[10px] sm:text-xs text-red-300 bg-red-500/10 px-2 py-1 rounded-full inline-block mt-1">
                    {exp.year}
                  </span>
                </div>

              </div>

              {/* POINTS */}
              <ul className="text-gray-300 text-xs sm:text-sm space-y-1 list-disc pl-5">
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}