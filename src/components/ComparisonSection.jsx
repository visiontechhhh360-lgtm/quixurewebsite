import { motion } from "framer-motion";
import {
  WifiOff,
  Eye,
  MapPinOff,
  Lock,
  ShieldCheck,
  Globe2,
  ShieldAlert,
  CheckCircle2,
  Zap,
} from "lucide-react";
import DataStream from "./DataStream";

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
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0 },
};

const itemVariantsR = {
  hidden: { opacity: 0, x: 14 },
  show: { opacity: 1, x: 0 },
};

export default function ComparisonSection() {
  return (
    <section className="relative bg-ink-950 px-6 md:px-12 py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <DataStream />
      <motion.div
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 left-1/4 h-80 w-80 rounded-full bg-orange-500/20 blur-[130px]"
      />
      <motion.div
        animate={{ opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-teal-400/25 blur-[140px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">
          The Difference Is Real
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Life before and after <span className="text-gradient">Quixure</span>
        </h2>
      </motion.div>

      <div className="relative mx-auto max-w-5xl">
        <div className="relative grid md:grid-cols-2 rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_90px_-25px_rgba(0,196,167,0.4)]">
          {/* WITHOUT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative bg-[radial-gradient(circle_at_20%_15%,rgba(120,30,30,0.35),transparent_55%),linear-gradient(135deg,#0a0e0f,#161e20_60%,#1a0a0a)] p-8 sm:p-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid opacity-[0.08]" />
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-orange-600/20 blur-3xl"
            />

            <div className="relative flex items-center gap-3 mb-9">
              <motion.span
                animate={{ boxShadow: ["0 0 0px rgba(248,113,113,0.4)", "0 0 28px rgba(248,113,113,0.7)", "0 0 0px rgba(248,113,113,0.4)"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="grid h-12 w-12 place-items-center rounded-full border-2 border-red-400/70 bg-red-500/10 text-red-400"
              >
                <ShieldAlert size={22} />
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
              className="relative flex flex-col gap-5"
            >
              {WITHOUT.map(({ icon: Icon, text }) => (
                <motion.li
                  key={text}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="flex gap-4 rounded-2xl border border-red-500/15 bg-red-500/5 p-4"
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
            className="relative bg-[radial-gradient(circle_at_80%_15%,rgba(0,196,167,0.18),transparent_55%),linear-gradient(135deg,#0a0e0f,#0f1517_60%,#0a1614)] p-8 sm:p-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid opacity-[0.08]" />
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl"
            />
            <motion.div
              animate={{ x: ["-120%", "220%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-teal-300/10 to-transparent skew-x-12"
            />

            <div className="relative flex items-center gap-3 mb-9">
              <motion.span
                animate={{ boxShadow: ["0 0 0px rgba(45,212,191,0.4)", "0 0 28px rgba(45,212,191,0.7)", "0 0 0px rgba(45,212,191,0.4)"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="grid h-12 w-12 place-items-center rounded-full border-2 border-teal-400/70 bg-teal-400/10 text-teal-300"
              >
                <CheckCircle2 size={22} />
              </motion.span>
              <h3 className="text-2xl font-bold text-white">
                With <span className="text-teal-300">Quixure</span>
              </h3>
            </div>

            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex flex-col gap-5"
            >
              {WITH.map(({ icon: Icon, text }) => (
                <motion.li
                  key={text}
                  variants={itemVariantsR}
                  whileHover={{ x: -4 }}
                  className="flex gap-4 rounded-2xl border border-teal-400/15 bg-teal-400/5 p-4"
                >
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-teal-400/15 text-teal-300">
                    <Icon size={17} />
                  </span>
                  <p className="text-sm text-white/60 leading-relaxed pt-1">{text}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* center medallion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
          className="absolute left-1/2 top-1/2 hidden md:grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-teal-300 to-teal-600 text-ink-950 shadow-glow z-10 border-4 border-ink-950"
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <Zap size={26} strokeWidth={2.4} />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
