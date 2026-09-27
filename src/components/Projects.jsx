import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Construction PPE Detection",
    description:
      "AI-powered construction site safety system that detects PPE compliance and identifies safety violations using computer vision.",
    technologies: [
      "Python",
      "YOLO",
      "OpenCV",
      "FastAPI",
      "React",
      "SQLite",
    ],
    github: "#",
    demo: "#",
  },

  {
    number: "02",
    title: "Jewellery E-Commerce",
    description:
      "Full-stack MERN e-commerce platform for imitation jewellery with authentication, products, categories, cart, wishlist and orders.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
    ],
    github: "#",
    demo: "#",
  },

  {
    number: "03",
    title: "Data Analytics Projects",
    description:
      "Data analysis and visualization projects focused on cleaning datasets, identifying patterns and presenting actionable insights.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Matplotlib",
    ],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">

      <div className="max-w-6xl mx-auto">

        <p className="text-blue-400 mb-3">
          03 — Projects
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Things I've <span className="gradient-text">built.</span>
        </h2>

        <div className="mt-14 space-y-6">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl p-7 md:p-10 hover:border-blue-500/30 transition"
            >

              <div className="grid md:grid-cols-[100px_1fr_auto] gap-6 items-start">

                <div className="text-blue-500 text-xl font-mono">
                  {project.number}
                </div>

                <div>

                  <h3 className="text-2xl md:text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-7 mt-4 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">

                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-2 rounded-full bg-blue-500/10 text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

                <div className="flex gap-3">

                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-white/10"
                  >
                    <Code size={18} />
                  </a>

                  <a
                    href={project.demo}
                    className="p-3 rounded-full glass hover:bg-white/10"
                  >
                    <ExternalLink size={18} />
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}