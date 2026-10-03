import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects } from "../data/portfolio";

function ProjectActions({ project }) {
  if (!project.github && !project.demo) return null;

  const buttonClass =
    "p-3 rounded-full glass hover:bg-white/10 hover:text-blue-300 transition";

  return (
    <div className="flex gap-3">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} source code on GitHub`}
          className={buttonClass}
        >
          <GithubIcon size={18} />
        </a>
      )}

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} live demo`}
          className={buttonClass}
        >
          <ExternalLink size={18} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-blue-400 mb-3">03 — Projects</p>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Things I've <span className="gradient-text">built.</span>
          </h2>
          <p className="text-gray-400 mt-5 max-w-2xl leading-7">
            A selection of projects showing my experience across full-stack
            development, AI, computer vision and data analytics.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {projects.map((project, index) => {
            const projectLink = project.demo || project.github;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass rounded-3xl p-6 md:p-9 hover:border-blue-500/30 transition duration-300"
              >
                <div className="grid lg:grid-cols-[80px_1fr_auto] gap-6 items-start">
                  <div className="text-blue-500 text-xl font-mono">
                    {project.number}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {project.title}
                      </h3>
                      <span className="text-xs px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/10">
                        {project.type}
                      </span>
                    </div>

                    <p className="text-gray-400 leading-7 mt-4 max-w-3xl">
                      {project.description}
                    </p>

                    <div className="mt-6">
                      <p className="text-sm text-gray-300 font-medium mb-3">
                        Key Features
                      </p>

                      <ul className="grid sm:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-gray-400 flex items-center gap-2"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-blue-500"
                              aria-hidden="true"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <ul className="flex flex-wrap gap-2 mt-7">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="text-xs px-3 py-2 rounded-full bg-blue-500/10 text-blue-300"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ProjectActions project={project} />
                </div>

                <div className="mt-7 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Personal / Academic Project
                  </span>

                  {projectLink && (
                    <a
                      href={projectLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-blue-300 hover:text-blue-200 flex items-center gap-1"
                    >
                      View project
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
