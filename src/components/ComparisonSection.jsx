import { motion } from "framer-motion";
import {
  WifiOff,
  Eye,
  MapPinOff,
  Lock,
  ShieldCheck,
  Globe2,
  Zap,
} from "lucide-react";

const WITHOUT = [
  { icon: Eye, text: "ISP tracks every website you visit and sells the data to brokers." },
  { icon: WifiOff, text: 'Public Wi-Fi exposes your private credentials to "man-in-the-middle" attacks.' },
  { icon: MapPinOff, text: "Streaming content is geofenced based on your physical location." },
];

const WITH = [
  { icon: Lock, text: "All traffic is encrypted; ISP only sees an unreadable high-entropy data stream." },
  { icon: ShieldCheck, text: "End-to-end tunnel secures your data even on compromised public hotspots." },
  { icon: Globe2, text: "Virtual location switching unlocks the global internet without borders." },
];

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0 },
};

export default function ComparisonSection() {
  return (
    <section className="relative bg-white dark:bg-ink-950 px-6 md:px-12 py-28 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-red-500/15 blur-[110px]"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-teal-400/25 blur-[110px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-4">
          The Difference Is Real
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 dark:text-white">
          Life before and after Quixure
        </h2>
      </motion.div>

      <div className="relative grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {/* WITHOUT */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[32px] p-7 sm:p-10 md:p-12 text-left overflow-hidden border border-red-500/20 bg-gradient-to-br from-ink-800 via-ink-900 to-red-950/30 shadow-[0_0_60px_-20px_rgba(239,68,68,0.35)]"
        >
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-red-500/20 blur-3xl"
          />
          <div className="relative flex items-center gap-3 mb-10">
            <motion.span
              animate={{ boxShadow: ["0 0 0px rgba(248,113,113,0.4)", "0 0 24px rgba(248,113,113,0.6)", "0 0 0px rgba(248,113,113,0.4)"] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-red-400/60 bg-red-500/10 text-red-400"
            >
              <WifiOff size={20} />
            </motion.span>
            <h3 className="text-2xl font-bold text-white">
              Without <span className="text-red-400">Quixure</span>
            </h3>
          </div>

          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col gap-6"
          >
            {WITHOUT.map(({ icon: Icon, text }) => (
              <motion.li
                key={text}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="flex gap-4 rounded-2xl border border-red-500/10 bg-red-500/5 p-4"
              >
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-red-500/15 text-red-400">
                  <Icon size={17} />
                </span>
                <p className="text-sm text-white/60 leading-relaxed pt-1">{text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* WITH */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-[32px] p-7 sm:p-10 md:p-12 text-left overflow-hidden bg-gradient-to-br from-teal-400 via-teal-500 to-teal-700 shadow-glow"
        >
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.15, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/25 blur-3xl"
          />
          <motion.div
            animate={{ x: ["-120%", "220%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12"
          />

          <div className="relative flex items-center gap-3 mb-10">
            <motion.span
              animate={{ boxShadow: ["0 0 0px rgba(255,255,255,0.3)", "0 0 26px rgba(255,255,255,0.7)", "0 0 0px rgba(255,255,255,0.3)"] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-white/70 bg-white/10 text-white"
            >
              <Zap size={20} />
            </motion.span>
            <h3 className="text-2xl font-bold text-white">With Quixure</h3>
          </div>

          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col gap-6"
          >
            {WITH.map(({ icon: Icon, text }) => (
              <motion.li
                key={text}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="flex gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
              >
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-white/20 text-white">
                  <Icon size={17} />
                </span>
                <p className="text-sm text-white/95 leading-relaxed pt-1">{text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
