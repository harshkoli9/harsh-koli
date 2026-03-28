"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-xl border-b border-white/10 z-50">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="text-white text-xl sm:text-2xl font-extrabold">
          <Link href="/">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Harsh.dev
            </span>
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-white font-medium text-base lg:text-lg">
          {navLinks.map((link) => (
            <li key={link.path} className="relative">
              <Link
                href={link.path}
                className={`transition ${
                  pathname === link.path
                    ? "text-red-400"
                    : "hover:text-red-400"
                }`}
              >
                {link.name}
              </Link>

              {pathname === link.path && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-500 rounded-full"
                />
              )}
            </li>
          ))}
        </ul>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-white text-2xl font-semibold z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition ${
                  pathname === link.path
                    ? "text-red-400"
                    : "hover:text-red-400"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* CLOSE BUTTON */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}