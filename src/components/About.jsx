import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">

      <div className="max-w-6xl mx-auto">

        <p className="text-blue-400 mb-3">
          01 — About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Turning data & ideas into
          <span className="gradient-text"> real solutions.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 leading-8"
          >
            <p>
              I'm Harshil Thakkar, a technology enthusiast with an
              interest in data analytics, software development and
              intelligent applications.
            </p>

            <p className="mt-5">
              I enjoy working with Python, SQL, React and modern
              JavaScript technologies to transform problems into
              useful digital products.
            </p>

            <p className="mt-5">
              My goal is to continuously improve my technical skills
              while building applications that solve real-world
              problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">

            {[
              ["01+", "Projects"],
              ["05+", "Technologies"],
              ["03", "Core Areas"],
              ["∞", "Curiosity"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="glass rounded-2xl p-7"
              >
                <div className="text-3xl font-bold gradient-text">
                  {number}
                </div>

                <div className="text-gray-400 mt-2">
                  {label}
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
}