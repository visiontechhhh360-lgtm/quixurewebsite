import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, RefreshCw } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import { useTheme } from "../context/ThemeContext";
import protocolScreen from "../assets/protocol.jpeg";
import protocolScreenLight from "../assets/protocollighttheme.jpeg";

const PARTICLES = [
  { x: "10%", delay: 0 },
  { x: "24%", delay: 1.4 },
  { x: "60%", delay: 0.6 },
  { x: "72%", delay: 2.1 },
  { x: "85%", delay: 0.9 },
];

export default function PrivacySection() {
  const { theme } = useTheme();
  const screen = theme === "light" ? protocolScreenLight : protocolScreen;

  return (
    <section className="relative px-6 md:px-12 py-28 bg-white dark:bg-ink-950 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-[0.04] dark:opacity-[0.06] [mask-image:radial-gradient(ellipse_50%_50%_at_70%_50%,black,transparent)]" />

      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-1/4 right-[10%] h-72 w-72 rounded-full bg-teal-400/20 blur-[100px]"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 left-[15%] h-64 w-64 rounded-full bg-teal-300/20 blur-[100px]"
      />

      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          animate={{ y: ["110%", "-10%"], opacity: [0, 0.6, 0] }}
          transition={{ duration: 7 + (i % 3), repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          className="absolute bottom-0 h-1.5 w-1.5 rounded-full bg-teal-400/60"
          style={{ left: p.x }}
        />
      ))}

      <div className="relative grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-left"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-4">
            Why Quixure
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 dark:text-white leading-tight">
            Private. Limitless.
            <br /> Safer Browsing.
          </h2>
          <p className="mt-6 max-w-md text-base text-ink-600/70 dark:text-white/50 leading-relaxed">
            Bring internet freedom to your fingertips. Encrypt your internet
            connection and access whatever you want, whenever you want — with
            zero logs and zero compromises.
          </p>
          <Link to="/downloads" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-teal-400 px-7 py-3.5 text-sm font-bold text-ink-950 shadow-glow hover:bg-teal-300 transition-colors">
            Get Quixure
            <span className="grid h-6 w-6 place-items-center rounded-full bg-ink-950 text-teal-400 transition-transform group-hover:translate-x-1">
              <ChevronRight size={14} />
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[230px]"
        >
          <div
            className="absolute -inset-6 -z-10 bg-gradient-to-br from-teal-300 via-teal-500 to-teal-700 opacity-90"
            style={{ borderRadius: "44% 56% 62% 38% / 45% 40% 60% 55%" }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-10 -z-20 rounded-full border border-dashed border-teal-300/30"
          />
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 -z-10 m-auto h-40 w-40 rounded-full bg-teal-400/30 blur-2xl"
          />

          <PhoneFrame src={screen} alt="Quixure VPN — Protocol selection" className="shadow-2xl" />

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-12 top-10 flex items-center gap-2.5 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-ink-700/95 px-4 py-3 shadow-xl"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="grid h-8 w-8 place-items-center rounded-full bg-teal-50 dark:bg-teal-400/20 text-teal-600 dark:text-teal-300"
            >
              <RefreshCw size={15} />
            </motion.span>
            <div className="text-left">
              <p className="text-xs font-bold text-ink-950 dark:text-white">Connected</p>
              <p className="text-[10px] text-ink-600/60 dark:text-white/50">AES-256 encrypted</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
