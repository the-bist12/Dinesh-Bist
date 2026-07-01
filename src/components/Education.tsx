"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm mb-4">02 — Education</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Learning & <span className="text-gradient">Credentials</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 glass-hover"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-1">
                  {education.degree}
                </h3>
                <p className="text-indigo-400">{education.school}</p>
                <p className="text-sm text-zinc-500 mt-1">{education.location}</p>
              </div>
            </div>
            <span className="inline-block px-3 py-1 text-sm font-mono rounded-lg bg-white/[0.04] text-zinc-400">
              {education.period}
            </span>
          </motion.div>

          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 glass-hover flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 shrink-0">
                  <Award size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-zinc-200">{cert.title}</h3>
                  <p className="text-sm text-zinc-500">{cert.issuer}</p>
                </div>
                <span className="text-sm font-mono text-zinc-500 shrink-0">
                  {cert.date}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
