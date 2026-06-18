import { motion } from "framer-motion";
import RisingParticles from "./RisingParticles";
import PlatformGlyph from "./PlatformGlyph";
import {
  Monitor,
  Apple,
  Smartphone,
  Tablet,
  Terminal,
  Puzzle,
  Download,
} from "lucide-react";

const PLATFORMS = [
  { Icon: Monitor, name: "Windows", detail: "Windows 10 & 11", kind: "desktop" },
  { Icon: Apple, name: "macOS", detail: "Apple Silicon & Intel", kind: "desktop" },
  { Icon: Smartphone, name: "iOS", detail: "iPhone, iOS 15+", kind: "mobile" },
  { Icon: Smartphone, name: "Android", detail: "Android 8.0+", kind: "mobile" },
  { Icon: Tablet, name: "iPadOS", detail: "All iPad models", kind: "tablet" },
  { Icon: Terminal, name: "Linux", detail: "Ubuntu, Debian, Fedora", kind: "desktop" },
  { Icon: Puzzle, name: "Browser Extension", detail: "Chrome, Edge, Firefox", kind: "browser" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function PlatformGrid() {
  return (
    <section className="relative bg-white dark:bg-ink-950 px-6 md:px-12 py-28 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <RisingParticles />
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-10 right-1/4 h-72 w-72 rounded-full bg-teal-500/15 blur-[120px]"
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-4">
            All Platforms
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 dark:text-white">
            Pick your device, get protected
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORMS.map(({ Icon, name, detail, kind }, i) => (
            <motion.div
              key={name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border border-ink-950/10 dark:border-white/10 bg-ink-950/[0.03] dark:bg-white/5 p-7 text-left overflow-hidden hover:border-teal-400/40 transition-colors"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <PlatformGlyph
                kind={kind}
                className="absolute -right-3 -bottom-4 h-28 w-28 text-ink-950/[0.06] dark:text-white/[0.07] -rotate-6 group-hover:text-teal-400/20 transition-colors"
              />

              <div className="relative flex items-center justify-between mb-6">
                <motion.span
                  whileHover={{ scale: 1.1, rotate: -4 }}
                  className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-teal-300 to-teal-600 text-ink-950 shadow-glow-sm"
                >
                  <Icon size={26} strokeWidth={2.1} />
                </motion.span>
                <span className="text-[10px] font-bold uppercase tracking-wide text-teal-600 dark:text-teal-300/70">
                  Free
                </span>
              </div>

              <h3 className="relative text-lg font-bold text-ink-950 dark:text-white mb-1">{name}</h3>
              <p className="relative text-sm text-ink-600/60 dark:text-white/45 mb-6">{detail}</p>

              <button className="relative flex w-full items-center justify-center gap-2 rounded-full bg-ink-950/5 dark:bg-white/10 px-5 py-3 text-sm font-bold text-ink-950 dark:text-white group-hover:bg-teal-400 group-hover:text-ink-950 transition-colors">
                <Download size={15} />
                Download
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
