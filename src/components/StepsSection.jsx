import { motion } from "framer-motion";
import RisingParticles from "./RisingParticles";
import { Download, PackageCheck, Power } from "lucide-react";

const STEPS = [
  {
    icon: Download,
    title: "Download",
    desc: "Grab the Quixure app for your device — Windows, Mac, mobile, or browser.",
  },
  {
    icon: PackageCheck,
    title: "Install",
    desc: "Run the installer and sign in with your Quixure account in seconds.",
  },
  {
    icon: Power,
    title: "Connect",
    desc: "Tap the power button. You're encrypted, protected, and anonymous.",
  },
];

export default function StepsSection() {
  return (
    <section className="relative bg-slate-50 dark:bg-ink-900 px-6 md:px-12 py-28 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <RisingParticles />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-4">
            Up and Running in a Minute
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 dark:text-white">
            Download. Install. Connect.
          </h2>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-14 md:gap-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ originX: 0 }}
            className="hidden md:block absolute top-9 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-teal-400/10 via-teal-400/60 to-teal-400/10"
          />

          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative mb-7">
                <motion.span
                  animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.15, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  className="absolute inset-0 rounded-full bg-teal-400/30 blur-xl"
                />
                <span className="relative grid h-[72px] w-[72px] place-items-center rounded-full border-2 border-teal-400/50 bg-ink-800 text-teal-300 shadow-glow-sm">
                  <Icon size={28} strokeWidth={2} />
                </span>
                <span className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-teal-400 text-[11px] font-bold text-ink-950">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-ink-950 dark:text-white mb-2.5">{title}</h3>
              <p className="max-w-[230px] mx-auto text-sm text-ink-600/70 dark:text-white/50 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
