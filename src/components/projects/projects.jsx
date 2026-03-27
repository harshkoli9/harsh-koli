"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiFirebase, SiJavascript } from "react-icons/si";

const projects = [
  {
    title: "Code Share App",
    desc: "Realtime platform to share and manage code snippets efficiently.",
    details:
      "Built using Firebase for real-time database operations. Integrated CodeMirror for multi-language editing. Implemented CRUD, search, and export features.",
    icons: [<SiFirebase key="f" />, <SiJavascript key="j" />],
    live: "https://codeshare-7bef7.web.app/",
    github: "#",
  },
  {
    title: "JSON Error Solver",
    desc: "Tool to validate and auto-fix JSON errors instantly.",
    details:
      "Parser-based engine to detect and fix JSON errors.",
    icons: [<SiJavascript key="j" />],
    live: "#",
    github: "#",
  },
  {
    title: "Excel to JSON Converter",
    desc: "Convert Excel sheets into structured JSON data.",
    details:
      "Transforms Excel into clean JSON efficiently.",
    icons: [<SiJavascript key="j" />],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="bg-black min-h-screen flex flex-col justify-center py-20 px-6">

      {/* TITLE */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        My <span className="text-red-500">Projects</span>
      </motion.h2>

      {/* GRID */}
      <div className="max-w-7xl mx-auto w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -12 }}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between min-h-[320px] shadow-xl hover:shadow-[0_0_40px_rgba(255,0,0,0.4)] transition"
          >

            {/* CONTENT */}
            <div>
              <h3 className="text-white text-2xl font-semibold mb-4">
                {p.title}
              </h3>

              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                {p.desc}
              </p>

              {/* ICONS */}
              <div className="flex gap-3 text-2xl text-red-400 mb-6">
                {p.icons}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-3">

              <div className="flex gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  className="flex-1 text-center bg-red-600 py-3 rounded-xl text-white hover:bg-red-700 transition"
                >
                  View
                </a>

                <button
                  onClick={() => setActiveProject(p)}
                  className="flex-1 text-center border border-white py-3 rounded-xl text-white hover:bg-white hover:text-black transition"
                >
                  Know More
                </button>
              </div>

              <a
                href={p.github}
                target="_blank"
                className="flex items-center justify-center gap-2 border border-gray-500 py-3 rounded-xl text-gray-300 hover:bg-white hover:text-black transition"
              >
                <FaGithub /> GitHub
              </a>

            </div>

          </motion.div>
        ))}

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="bg-black border border-white/20 rounded-2xl p-8 max-w-lg w-full"
            >
              <h3 className="text-white text-2xl font-bold mb-4">
                {activeProject.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {activeProject.details}
              </p>

              <div className="flex justify-between">
                <a
                  href={activeProject.live}
                  target="_blank"
                  className="px-5 py-2 bg-red-600 rounded-lg text-white"
                >
                  View
                </a>

                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2 border border-white rounded-lg text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}