"use client";

import { motion } from "framer-motion";
import { ArrowDown, BarChart3, Brain, GraduationCap } from "lucide-react";
import { siteConfig, roles } from "@/lib/data";

const icons = [BarChart3, Brain, GraduationCap];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg noise-bg">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-zinc-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Final-year BEIT Student · Open to opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient">{siteConfig.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          {roles.map((role, i) => {
            const Icon = icons[i];
            return (
              <span
                key={role}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-zinc-300"
              >
                <Icon size={16} className="text-indigo-400" />
                {role}
              </span>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            View My Work
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full glass glass-hover font-medium"
          >
            Connect on LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" aria-label="Scroll to about">
            <ArrowDown className="w-6 h-6 text-zinc-500 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
