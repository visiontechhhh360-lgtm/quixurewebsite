import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Navbar from "./Navbar";

const STATS = [
  { value: "99.9%", label: "Service Uptime" },
  { value: "< 2m", label: "Avg. Response Time" },
  { value: "24/7/365", label: "Human Support" },
];

const PARTICLES = [
  { x: "8%", delay: 0 },
  { x: "20%", delay: 1.2 },
  { x: "35%", delay: 0.6 },
  { x: "62%", delay: 1.8 },
  { x: "78%", delay: 0.3 },
  { x: "90%", delay: 2.2 },
];

export default function SupportHero() {
  return (
    <section className="relative overflow-hidden rounded-[28px] mx-3 md:mx-6 mt-4 bg-teal-50 dark:bg-ink-900 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-100 dark:from-ink-950 dark:via-ink-900 dark:to-teal-900/40" />
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />

      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[700px] rounded-full bg-teal-500/25 blur-[120px]"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.45, 0.2], x: [0, 40, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-teal-400/20 blur-[100px]"
      />

      {/* rotating dashed rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-[18%] -translate-x-1/2 h-[460px] w-[460px] rounded-full border border-dashed border-teal-400/15"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-[18%] -translate-x-1/2 h-[560px] w-[560px] rounded-full border border-dashed border-teal-400/10"
      />

      {/* scanline sweep */}
      <motion.div
        animate={{ y: ["-10%", "110%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
        className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-teal-400/[0.07] to-transparent"
      />

      {/* rising particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          animate={{ y: ["100%", "-20%"], opacity: [0, 0.8, 0] }}
          transition={{ duration: 6 + (i % 3), repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          className="absolute bottom-0 h-1.5 w-1.5 rounded-full bg-teal-300/70"
          style={{ left: p.x }}
        />
      ))}

      <div className="relative z-10">
        <Navbar />

        <div className="flex flex-col items-center text-center px-6 md:px-12 pt-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-200 dark:border-teal-400/30 bg-teal-50 dark:bg-teal-400/10 px-3.5 py-1.5 text-xs font-mono font-semibold text-teal-700 dark:text-teal-300 mb-6"
          >
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-teal-400"
            />
            <Terminal size={13} /> SUPPORT PROTOCOL ACTIVE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-ink-950 dark:text-white max-w-2xl"
          >
            How Can We <span className="text-gradient">Help You</span>?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-lg text-base text-ink-600/70 dark:text-white/55 leading-relaxed"
          >
            Our cybersecurity experts are standing by 24/7 to ensure your
            digital bastion remains impenetrable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-xl"
          >
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-300">{value}</p>
                <p className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-wide text-ink-600/50 dark:text-white/40">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
