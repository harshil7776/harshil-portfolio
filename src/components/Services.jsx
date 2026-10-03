import { motion } from "framer-motion";
import { Code, Server, BrainCircuit } from "lucide-react";

const services = [
  {
    title: "Full-Stack Development",
    description:
      "Building responsive and practical web applications using React, JavaScript, Node.js, Express and MongoDB.",
    icon: Code,
  },
  {
    title: "Backend & APIs",
    description:
      "Developing REST APIs, authentication systems, database integrations and backend services.",
    icon: Server,
  },
  {
    title: "Data & AI Solutions",
    description:
      "Working with Python, SQL, data analysis and AI-powered applications to solve practical problems.",
    icon: BrainCircuit,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-blue-400 mb-3">05 — Expertise</p>

        <h2 className="text-4xl md:text-5xl font-bold">
          What I <span className="gradient-text">build.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass rounded-2xl p-7 hover:-translate-y-2 hover:border-blue-500/30 transition duration-300"
              >
                <div className="flex items-center justify-between">
                  <Icon className="text-blue-400" size={28} aria-hidden="true" />
                  <span className="text-blue-500 text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-bold mt-8">{service.title}</h3>

                <p className="text-gray-400 leading-7 mt-4">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
