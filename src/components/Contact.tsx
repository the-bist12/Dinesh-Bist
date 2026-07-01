"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { siteConfig } from "@/lib/data";

const socialLinks = [
  { icon: Github, href: siteConfig.social.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm mb-4">06 — Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Let&apos;s build something{" "}
            <span className="text-gradient">together</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Open to internships, data analyst roles, and collaborative projects.
            Reach out anytime.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 sm:p-12">
            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center justify-center gap-3 text-lg sm:text-xl font-medium text-gradient hover:opacity-80 transition-opacity break-all"
              >
                <Mail size={22} className="shrink-0" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/-/g, "")}`}
                className="flex items-center justify-center gap-3 text-lg text-zinc-300 hover:text-white transition-colors"
              >
                <Phone size={22} className="shrink-0 text-indigo-400" />
                {siteConfig.phone}
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl glass glass-hover text-zinc-400 hover:text-white transition-colors"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>

            <a
              href={`mailto:${siteConfig.email}?subject=Let's connect`}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 font-medium transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/25"
            >
              <Send size={18} />
              Send a Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
