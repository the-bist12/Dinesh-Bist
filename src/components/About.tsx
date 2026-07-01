"use client";

import { motion } from "framer-motion";
import { siteConfig, stats, summary } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 font-mono text-sm mb-4">01 — About</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-12">
            Turning data into{" "}
            <span className="text-gradient">decisions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-zinc-400 text-lg leading-relaxed"
          >
            <p>{summary}</p>
            <p className="text-zinc-300">
              📍 {siteConfig.location}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 glass-hover group"
              >
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-2"
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
