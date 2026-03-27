"use client";

import React from "react";
import Link from "next/link";
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
    <section className="bg-gradient-to-b from-black to-gray-700 min-h-screen flex items-center justify-center px-4 py-20">

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl max-w-6xl w-full flex flex-col md:flex-row items-center gap-14 md:gap-8 p-8 sm:p-12">

        {/* LEFT */}
        <div className="w-full md:w-1/2">

          <h2 className="text-4xl font-bold text-white mb-6">
            Get in <span className="text-red-500">Touch</span>
          </h2>

          <p className="text-gray-300 mb-10 leading-relaxed">
            Have questions, opportunities or collaboration ideas?  
            Feel free to reach out — I’d love to connect.
          </p>

          <div className="space-y-6">

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              <Link
                href="mailto:9harshkoli@gmail.com"
                className="text-white hover:text-red-400 transition"
              >
                9harshkoli@gmail.com
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-red-500" />
              <p className="text-white">+91 8779070352</p>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              <p className="text-white">Navi Mumbai, India</p>
            </div>

          </div>

          {/* SOCIAL */}
          <div className="mt-12">

            <h3 className="text-lg font-semibold text-white mb-5">
              Connect with me
            </h3>

            <div className="flex items-center gap-6">

              <Link
                href="https://www.linkedin.com/in/harshkoli09"
                target="_blank"
                className="text-white hover:text-blue-400 hover:scale-110 transition"
              >
                <FaLinkedin size={28} />
              </Link>

              <Link
                href="https://github.com/harshkoli9"
                target="_blank"
                className="text-white hover:text-gray-300 hover:scale-110 transition"
              >
                <FaGithub size={28} />
              </Link>

              <Link
                href="https://wa.me/918779070352"
                target="_blank"
                className="text-white hover:text-green-500 hover:scale-110 transition"
              >
                <FaWhatsapp size={28} />
              </Link>

              <Link
                href="https://www.instagram.com/_harsh_koli__"
                target="_blank"
                className="text-white hover:text-pink-500 hover:scale-110 transition"
              >
                <FaInstagram size={28} />
              </Link>

            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/contact.gif"
            alt="contact"
            className="w-72 sm:w-80 md:w-[420px]"
          />
        </div>

      </div>

    </section>
  );
};

export default ContactCard;