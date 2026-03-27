"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" }, // ✅ FIXED
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // auto close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-xl z-50 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">

        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="text-white text-2xl font-extrabold tracking-wide"
        >
          <Link href="/">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Harsh.dev
            </span>
          </Link>
        </motion.div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold text-lg">
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
                  className="absolute left-0 -bottom-1 w-full h-[3px] bg-red-500 rounded-full"
                />
              )}
            </li>
          ))}
        </ul>

        {/* HAMBURGER BUTTON */}
        <button
          className="md:hidden text-white z-50"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl z-50"
          >
            <ul className="flex flex-col items-center gap-6 py-8 text-xl font-semibold text-white">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`${
                      pathname === link.path
                        ? "text-red-400"
                        : "hover:text-red-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}