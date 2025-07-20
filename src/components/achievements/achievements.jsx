"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = Array.from({ length: 12 }, (_, i) => `/k${i + 1}.jpg`);

export default function Achievements() {
  return (
    <div className="min-h-screen bg-black px-6 py-20">
      <motion.h1
        className="text-white text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Achievements 
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="rounded-2xl bg-white border-4 border-red-500 shadow-xl group cursor-pointer flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Image
              src={src}
              alt={`Achievement ${index + 1}`}
              width={1000}
              height={1000}
              className="w-auto h-auto max-w-full max-h-[450px] object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
