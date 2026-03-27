"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">

      {/* VIDEO (ONLY DESKTOP STRICT) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/17.mp4" type="video/mp4" />
      </video>

      {/* MOBILE BACKGROUND (🔥 NEW GRADIENT) */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-br from-black via-gray-900 to-black z-0"></div>

      {/* EXTRA GRADIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.15),transparent_70%)] z-0 md:hidden"></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between min-h-screen px-5 sm:px-10 max-w-7xl mx-auto gap-12 pt-24 md:pt-0">

        {/* LEFT */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Hello, my name is{" "}
            <span className="text-red-500 block md:inline">
              Harsh Koli
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            I am a{" "}
            <span className="text-red-400 font-semibold">
              Frontend Developer
            </span>{" "}
            specializing in React.js, Next.js and Tailwind CSS.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <a
              href="https://www.linkedin.com/in/harshkoli09"
              target="_blank"
              className="px-6 py-3 bg-red-600 rounded-full hover:bg-red-700 transition text-sm sm:text-base"
            >
              LinkedIn
            </a>

            <a
              href="/Harsh_koli.pdf"
              className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition text-sm sm:text-base"
            >
              Resume
            </a>

            <a
              href="/projects"
              className="px-6 py-3 border border-red-500 text-red-400 rounded-full hover:bg-red-600 hover:text-white transition text-sm sm:text-base"
            >
              Projects
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0"
          initial={{ opacity: 0, x: 60 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="relative">

            {/* GLOW */}
            <div className="absolute inset-0 rounded-full bg-red-500 blur-3xl opacity-20 scale-110"></div>

            {/* IMAGE */}
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-80 md:h-80 rounded-full border-4 border-red-500 shadow-[0_0_40px_rgba(255,0,0,0.6)] overflow-hidden">

              <Image
                src="/harsh_1.jpeg"
                fill
                alt="Harsh"
                className="object-cover"
                priority
              />

            </div>

          </div>
        </motion.div>

      </div>

      {/* SCROLL */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-gray-400 z-20 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll</span>
        <span className="text-lg">↓</span>
      </motion.div>

    </section>
  );
};

export default Hero;