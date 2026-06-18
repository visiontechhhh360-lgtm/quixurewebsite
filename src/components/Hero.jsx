import { motion } from "framer-motion";
import GlobeBackground from "./GlobeBackground";
import { Link } from "react-router-dom";
import { ChevronRight, Globe2 } from "lucide-react";
import Navbar from "./Navbar";
import DeviceMockup from "./DeviceMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[28px] mx-3 md:mx-6 mt-4 bg-teal-50 dark:bg-ink-900 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-100 dark:from-ink-950 dark:via-ink-900 dark:to-ink-950" />
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]" />
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[700px] rounded-full bg-teal-500/25 blur-[120px]"
      />

      <GlobeBackground />
      <div className="relative z-10">
        <Navbar />

        <div className="grid lg:grid-cols-2 gap-10 items-center px-6 md:px-12 pt-6 pb-16">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-teal-200 dark:border-teal-400/30 bg-teal-50 dark:bg-teal-400/10 px-3.5 py-1.5 text-xs font-semibold text-teal-700 dark:text-teal-300 mb-6"
            >
              <Globe2 size={13} /> 30+ Server Locations Across 25+ Countries
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-ink-950 dark:text-white"
            >
              Browse the internet
              <br />
              like it's <span className="text-gradient">borderless</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-md text-base text-ink-600/70 dark:text-white/55 leading-relaxed"
            >
              Military-grade encryption, a strict zero-log policy, and
              blazing 10Gbps servers wrapped in one app that just works.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link to="/downloads" className="group flex items-center gap-2 rounded-full bg-teal-400 px-7 py-3.5 text-sm font-bold text-ink-950 shadow-glow hover:bg-teal-300 transition-all">
                Get Quixure
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-14 flex flex-wrap items-center gap-6 text-xs font-semibold text-ink-600/50 dark:text-white/40"
            >
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> Zero-config one-click connect
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> Automatic kill switch
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> 10Gbps streaming servers
              </span>
            </motion.div>
          </div>

          <DeviceMockup />
        </div>
      </div>
    </section>
  );
}
