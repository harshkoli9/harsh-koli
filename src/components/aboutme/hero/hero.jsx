"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden text-white">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/17.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-between h-full px-6 sm:px-10 max-w-7xl mx-auto">

        {/* LEFT */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, my name is{" "}
            <span className="text-red-500 block md:inline">
              Harsh Koli
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 text-gray-300 text-base sm:text-lg max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            I am a{" "}
            <span className="text-red-400 font-semibold">
              Frontend Developer
            </span>{" "}
            specializing in React.js, Next.js and Tailwind CSS.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="mt-8 flex gap-4 justify-center md:justify-start flex-wrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <a
              href="https://www.linkedin.com/in/harshkoli09"
              target="_blank"
              className="px-6 py-2 bg-red-600 rounded-full hover:bg-red-700 transition"
            >
              LinkedIn
            </a>

            <a
              href="/Harsh_Koli.pdf"
              className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Resume
            </a>

            <a
              href="projects"
              className="px-6 py-2 border border-red-500 text-red-400 rounded-full hover:bg-red-600 hover:text-white transition"
            >
              My Projects
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -15, 0],
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
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-red-500 shadow-[0_0_40px_rgba(255,0,0,0.5)] overflow-hidden">

            <Image
              src="/harsh_1.jpeg"
              fill
              alt="Harsh"
              className="object-cover"
              priority
            />

          </div>
        </motion.div>
      </div>

      {/* SCROLL */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-300 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ↓ Scroll
      </motion.div>

    </section>
  );
};

export default Hero;