import { motion } from "framer-motion";
import {
  Lock,
  MousePointerClick,
  Power,
  Gauge,
  ShieldBan,
  EyeOff,
} from "lucide-react";

const FEATURES = [
  {
    icon: Lock,
    title: "Military Grade Encryption",
    desc: "Utilizing AES-256-GCM, the same standard used by governments and security agencies globally to ensure your data remains an unreadable cipher to prying eyes.",
  },
  {
    icon: MousePointerClick,
    title: "One Click Access",
    desc: "Instant connection to the fastest available server with zero configuration required.",
  },
  {
    icon: Power,
    title: "Kill Switch",
    desc: "If the VPN connection drops, your internet is instantly severed to prevent IP leaks.",
  },
  {
    icon: Gauge,
    title: "Ultra Fast Streaming",
    desc: "Optimized 10Gbps servers ensure buffer-free 4K streaming and low-ping gaming from anywhere in the world.",
  },
  {
    icon: ShieldBan,
    title: "Threat Blocking",
    desc: "Built-in malware and tracker blocker stops malicious sites before they even load.",
  },
  {
    icon: EyeOff,
    title: "Anonymous Browsing",
    desc: "Your ISP, government, and advertisers will never see your browsing history again. Your digital footprint is completely erased the moment you connect.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function CoreFeatures() {
  return (
    <section className="relative bg-ink-950 px-6 md:px-12 py-28 overflow-hidden">
      <motion.div
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[380px] w-[640px] rounded-full bg-teal-500/15 blur-[120px]"
      />
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">
            Built for Privacy
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Every layer of protection,
            <br className="hidden sm:block" /> covered.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-7 text-left overflow-hidden hover:border-teal-400/40 transition-colors"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-teal-300 to-teal-600 text-ink-950 shadow-glow-sm mb-6">
                <Icon size={22} strokeWidth={2.2} />
              </span>
              <h3 className="relative text-lg font-bold text-white mb-2.5">{title}</h3>
              <p className="relative text-sm text-white/50 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
