"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm mb-4">05 — Experience</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Industry <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent" />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <motion.div
                key={`${item.role}-${item.company}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />

                <div className="glass rounded-2xl p-8 glass-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                    <div>
                      <h3 className="font-display text-xl font-semibold">
                        {item.role}
                      </h3>
                      <p className="text-indigo-400">{item.company}</p>
                      {"location" in item && item.location && (
                        <p className="text-sm text-zinc-500 mt-1">{item.location}</p>
                      )}
                    </div>
                    <span className="text-sm font-mono text-zinc-500">
                      {item.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="text-zinc-400 leading-relaxed flex gap-3"
                      >
                        <span className="text-indigo-400 mt-1.5 shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
