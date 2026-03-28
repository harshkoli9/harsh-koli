"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const ContactCard = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 min-h-[85vh] flex items-center px-4 sm:px-6">

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-8 p-6 sm:p-8 md:p-10">

        {/* LEFT */}
        <div className="w-full md:w-1/2">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Get in <span className="text-red-500">Touch</span>
          </h2>

          <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
            Have questions, opportunities or collaboration ideas?  
            Feel free to reach out — I’d love to connect.
          </p>

          <div className="space-y-4">

            <div className="flex items-center gap-3 text-sm sm:text-base">
              <FaEnvelope className="text-red-500" />
              <Link
                href="mailto:9harshkoli@gmail.com"
                className="text-white hover:text-red-400 transition"
              >
                9harshkoli@gmail.com
              </Link>
            </div>

            <div className="flex items-center gap-3 text-sm sm:text-base">
              <FaPhone className="text-red-500" />
              <p className="text-white">+91 8779070352</p>
            </div>

            <div className="flex items-center gap-3 text-sm sm:text-base">
              <FaMapMarkerAlt className="text-red-500" />
              <p className="text-white">Navi Mumbai, India</p>
            </div>

          </div>

          {/* SOCIAL */}
          <div className="mt-8">

            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
              Connect with me
            </h3>

            <div className="flex items-center gap-5">

              <Link
                href="https://www.linkedin.com/in/harshkoli09"
                target="_blank"
                className="text-white hover:text-blue-400 hover:scale-110 transition"
              >
                <FaLinkedin size={24} />
              </Link>

              <Link
                href="https://github.com/harshkoli9"
                target="_blank"
                className="text-white hover:text-gray-300 hover:scale-110 transition"
              >
                <FaGithub size={24} />
              </Link>

              <Link
                href="https://wa.me/918779070352"
                target="_blank"
                className="text-white hover:text-green-500 hover:scale-110 transition"
              >
                <FaWhatsapp size={24} />
              </Link>

              <Link
                href="https://www.instagram.com/_harsh_koli__"
                target="_blank"
                className="text-white hover:text-pink-500 hover:scale-110 transition"
              >
                <FaInstagram size={24} />
              </Link>

            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/contact.gif"
            alt="contact"
            width={350}
            height={350}
            className="w-56 sm:w-64 md:w-[340px] object-contain"
          />
        </div>

      </div>

    </section>
  );
};

export default ContactCard;