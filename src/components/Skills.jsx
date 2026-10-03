import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-blue-400 mb-3">02 — Skills</p>

        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="gradient-text">toolbox.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-2xl p-6 hover:-translate-y-1 hover:border-blue-500/30 transition duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-semibold">{category}</h3>
                <span className="text-xs text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-gray-300 hover:border-blue-500/30 hover:text-blue-300 transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
