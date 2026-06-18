import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  PlayCircle,
  ShieldHalf,
  Power,
  ChevronDown,
  Lock,
  MousePointerClick,
  ShieldBan,
} from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import locationsScreen from "../assets/servers.jpeg";

const CHIPS = [
  { icon: Power, label: "Kill switch" },
  { icon: MousePointerClick, label: "One-click connect" },
  { icon: ShieldBan, label: "Threat blocking" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function FeaturesGrid() {
  return (
    <section className="relative bg-slate-50 dark:bg-ink-900 px-6 md:px-12 py-28 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-4">
            One App, Total Protection
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 dark:text-white">
            More than just a VPN
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.1fr_1fr] gap-6">
          {/* left column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-3xl bg-gradient-to-br from-teal-400 to-teal-700 p-6 text-ink-950 shadow-glow-sm">
              <Lock size={26} className="mb-12" />
              <p className="text-lg font-bold leading-snug">
                Military grade
                <br /> encryption
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-ink-950/10 dark:border-white/10 bg-ink-950/[0.03] dark:bg-white/5 p-5">
                <PlayCircle size={22} className="text-teal-300 mb-6" />
                <p className="text-sm font-semibold text-ink-950 dark:text-white leading-snug">
                  Stream without limits
                </p>
              </div>
              <div className="rounded-2xl border border-ink-950/10 dark:border-white/10 bg-ink-950/[0.03] dark:bg-white/5 p-5">
                <ShieldHalf size={22} className="text-teal-300 mb-6" />
                <p className="text-sm font-semibold text-ink-950 dark:text-white leading-snug">
                  Secure your online activities
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {CHIPS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-ink-950/10 dark:border-white/10 bg-ink-950/[0.03] dark:bg-white/5 p-4 text-left"
                >
                  <Icon size={16} className="text-teal-300 mb-3" />
                  <p className="text-[11px] font-semibold text-ink-950 dark:text-white leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* center mockup */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 -z-10 rounded-[40px] bg-teal-400/20 blur-[80px]" />
            <PhoneFrame src={locationsScreen} alt="Quixure VPN — 30+ server locations" className="w-full max-w-[260px]" />
          </motion.div>

          {/* right column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-ink-950/10 dark:border-white/10 bg-ink-950/[0.03] dark:bg-white/5 p-5">
                <Power size={22} className="text-teal-300 mb-6" />
                <p className="text-sm font-semibold text-ink-950 dark:text-white leading-snug">
                  Auto kill switch
                </p>
              </div>
              <div className="rounded-2xl border border-ink-950/10 dark:border-white/10 bg-ink-950/[0.03] dark:bg-white/5 p-5">
                <ShieldBan size={22} className="text-teal-300 mb-6" />
                <p className="text-sm font-semibold text-ink-950 dark:text-white leading-snug">
                  Blocks malware &amp; trackers
                </p>
              </div>
            </div>

            <div className="relative flex-1 rounded-3xl bg-gradient-to-br from-ink-700 to-ink-950 border border-teal-400/20 p-6 overflow-hidden min-h-[260px]">
              <div className="absolute inset-0 bg-grid opacity-10" />
              <div className="relative flex items-center gap-2 mb-8">
                <ShieldBan size={18} className="text-teal-300" />
                <p className="text-sm font-bold text-white">Threat Blocking</p>
              </div>

              <div className="relative grid place-items-center">
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                  className="absolute h-24 w-24 rounded-full border border-teal-400/50"
                />
                <motion.span
                  animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                  className="absolute h-24 w-24 rounded-full border border-teal-400/30"
                />
                <span className="grid h-16 w-16 place-items-center rounded-full bg-teal-400/15 text-teal-300">
                  <ShieldBan size={26} />
                </span>
              </div>

              <div className="relative mt-6 flex flex-col gap-2">
                {["Malicious site", "Tracker script", "Ad network"].map((t, i) => (
                  <motion.div
                    key={t}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="flex items-center justify-between text-[11px] text-white/50"
                  >
                    <span>{t}</span>
                    <span className="text-teal-300 font-semibold">Blocked</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <Link to="/downloads" className="group flex items-center gap-2 rounded-full bg-teal-400 px-8 py-4 text-sm font-bold text-ink-950 shadow-glow hover:bg-teal-300 transition-colors">
            Get Quixure
            <ChevronDown size={16} className="-rotate-90 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
