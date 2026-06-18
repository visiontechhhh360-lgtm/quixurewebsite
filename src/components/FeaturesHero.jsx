import { motion } from "framer-motion";
import GlobeBackground from "./GlobeBackground";
import Navbar from "./Navbar";

export default function FeaturesHero() {
  return (
    <section className="relative overflow-hidden rounded-[28px] mx-3 md:mx-6 mt-4 bg-teal-50 dark:bg-ink-900 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-100 dark:from-ink-950 dark:via-ink-900 dark:to-ink-950" />
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[700px] rounded-full bg-teal-500/25 blur-[120px]"
      />

      <GlobeBackground />
      <div className="relative z-10">
        <Navbar />

        <div className="flex flex-col items-center text-center px-6 md:px-12 pt-10 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-200 dark:border-teal-400/30 bg-teal-50 dark:bg-teal-400/10 px-3.5 py-1.5 text-xs font-semibold text-teal-700 dark:text-teal-300 mb-6"
          >
            Engineered for total privacy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-ink-950 dark:text-white max-w-2xl"
          >
            Every feature you need.
            <br />
            <span className="text-gradient">Nothing you don't.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-lg text-base text-ink-600/70 dark:text-white/55 leading-relaxed"
          >
            Security, speed, and anonymity — built into one app, not bolted
            on as an afterthought.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
