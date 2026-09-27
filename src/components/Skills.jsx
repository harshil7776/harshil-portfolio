import { motion } from "framer-motion";

const skills = {
  "Programming": [
    "C",
    "C++",
    "Java",
    "Python",
    "JavaScript",
  ],

  "Frontend": [
    "HTML",
    "CSS",
    "React",
    "Tailwind CSS",
  ],

  "Backend": [
    "Node.js",
    "Express.js",
    "REST APIs",
  ],

  "Database": [
    "SQL",
    "MongoDB",
    "SQLite",
  ],

  "Data Analytics": [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Data Cleaning",
    "Data Visualization",
  ],

  "Tools": [
    "Git",
    "GitHub",
    "VS Code",
    "Vite",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">

      <div className="max-w-6xl mx-auto">

        <p className="text-blue-400 mb-3">
          02 — Skills
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="gradient-text">toolbox.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mt-12">

          {Object.entries(skills).map(([category, items], index) => (

            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-2xl p-6 hover:border-blue-500/30 transition"
            >

              <h3 className="text-xl font-semibold mb-5">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">

                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}