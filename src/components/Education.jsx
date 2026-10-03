import { motion } from "framer-motion";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-blue-400 mb-3">04 — Education</p>

        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="gradient-text">journey.</span>
        </h2>

        <div className="mt-12 border-l border-blue-500/30 pl-8 space-y-8">
          {education.map((item) => (
            <motion.div
              key={`${item.title}-${item.period}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="absolute -left-[41px] top-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/40"
                aria-hidden="true"
              />

              <div className="glass rounded-2xl p-7 md:p-9">
                <p className="text-blue-400 text-sm">{item.period}</p>

                <h3 className="text-2xl font-bold mt-2">{item.title}</h3>

                <p className="text-gray-300 mt-3">{item.field}</p>

                <p className="text-gray-400 mt-2">{item.result}</p>

                <div className="mt-7">
                  <p className="text-sm font-medium text-gray-300 mb-3">
                    Relevant Areas
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {item.areas.map((area) => (
                      <li
                        key={area}
                        className="px-3 py-2 rounded-lg bg-white/5 text-sm text-gray-400"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
