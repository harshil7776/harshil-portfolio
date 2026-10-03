import { motion } from "framer-motion";
import { education, profile, projects, skills } from "../data/portfolio";

const technologyCount = new Set(Object.values(skills).flat()).size;
const graduationYear = education[0].period.split("—").pop().trim();

// Derived from the data file so the numbers never go stale
const stats = [
  [String(projects.length).padStart(2, "0"), "Projects"],
  [`${technologyCount}`, "Technologies"],
  [String(Object.keys(skills).length).padStart(2, "0"), "Skill Areas"],
  [graduationYear, "IT Graduate"],
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-blue-400 mb-3">01 — About Me</p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Building ideas into
          <span className="gradient-text"> real solutions.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 leading-8"
          >
            <p>
              I'm {profile.name}, a {profile.role} focused on full-stack
              development, data-driven applications and practical problem
              solving.
            </p>

            <p className="mt-5">
              I enjoy working with React, JavaScript, Node.js, Express,
              MongoDB, SQL and Python to turn ideas into useful digital
              products.
            </p>

            <p className="mt-5">
              My projects include AI-powered safety monitoring, e-commerce
              applications and data analytics solutions. I'm continuously
              improving my engineering skills by building and learning
              through real-world projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(([number, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass rounded-2xl p-6 md:p-7 hover:-translate-y-1 transition duration-300"
              >
                <div className="text-3xl font-bold gradient-text">
                  {number}
                </div>
                <div className="text-gray-400 mt-2">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
