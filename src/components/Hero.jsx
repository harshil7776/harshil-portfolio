import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center px-6 pt-28 pb-20 grid-bg"
    >
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-blue-300 mb-7">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to software engineering opportunities
          </div>

          <p className="text-blue-400 mb-4 text-lg">Hello, I'm</p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
            {profile.firstName}
            <br />
            <span className="gradient-text">{profile.lastName}.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mt-6">
            {profile.role} <span className="text-blue-500">•</span>{" "}
            {profile.roleSecondary}
          </p>

          <p className="text-gray-400 max-w-xl mt-6 leading-7">
            I build responsive web applications, backend APIs and
            data-driven solutions using modern JavaScript, React, Node.js,
            Python and SQL.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-medium transition shadow-lg shadow-blue-900/20"
            >
              View My Work
            </a>

            {profile.resume && (
              <a
                href={profile.resume}
                download
                className="px-6 py-3 glass rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition"
              >
                <Download size={18} aria-hidden="true" />
                Download Resume
              </a>
            )}
          </div>

          <div className="flex gap-5 mt-8">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition"
            >
              <GithubIcon />
            </a>

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <LinkedinIcon />
              </a>
            )}

            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Mail />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex justify-center"
          aria-hidden="true"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 float-animation">
            <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border border-blue-400/20 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-16 rounded-full bg-blue-600/10 blur-2xl" />

            <div className="absolute inset-24 rounded-full glass flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold gradient-text">
                  {profile.initials}
                </div>
                <p className="text-gray-400 mt-2">{profile.role}</p>
              </div>
            </div>

            <div className="absolute top-8 right-6 glass rounded-xl px-4 py-3 text-sm text-blue-300">
              React
            </div>

            <div className="absolute bottom-10 left-2 glass rounded-xl px-4 py-3 text-sm text-blue-300">
              Node.js
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white animate-bounce"
      >
        <ArrowDown />
      </a>
    </section>
  );
}
