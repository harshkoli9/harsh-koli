"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden text-white">

      {/* VIDEO (DESKTOP ONLY) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/17.mp4" type="video/mp4" />
      </video>

      {/* MOBILE BG */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-br from-black via-gray-900 to-black z-0"></div>

      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.12),transparent_70%)] z-0 md:hidden"></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between h-full px-5 sm:px-10 max-w-7xl mx-auto gap-10">

        {/* LEFT */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Hello, my name is{" "}
            <span className="text-red-500 block md:inline">
              Harsh Koli
            </span>
          </motion.h1>

          <motion.p
            className="mt-3 text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
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
            className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <a
              href="https://www.linkedin.com/in/harshkoli09"
              target="_blank"
              className="px-5 py-2.5 bg-red-600 rounded-full hover:bg-red-700 transition text-sm"
            >
              LinkedIn
            </a>

<a
  href="https://drive.google.com/file/d/1R-DnIux91cueMLEhZTUiiaXGgQW1QRlB/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-5 py-2.5 border border-white rounded-full hover:bg-white hover:text-black transition text-sm"
>
  Resume
</a>
            <a
              href="/projects"
              className="px-5 py-2.5 border border-red-500 text-red-400 rounded-full hover:bg-red-600 hover:text-white transition text-sm"
            >
              Projects
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -8, 0],
          }}
          transition={{
            duration: 1.2,
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
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full border-4 border-red-500 shadow-[0_0_30px_rgba(255,0,0,0.6)] overflow-hidden">

              <Image
                src="/harsh_1.jpeg"
                fill
                alt="Harsh"
                sizes="(max-width: 768px) 150px, 300px"
                className="object-cover"
                priority
              />

            </div>

          </div>
        </motion.div>

      </div>

      {/* SCROLL */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-400 z-20 flex flex-col items-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll</span>
        <span>↓</span>
      </motion.div>

    </section>
  );
};

export default Hero;