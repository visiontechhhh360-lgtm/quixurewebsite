import { motion, AnimatePresence } from "framer-motion";
import CircuitPattern from "./CircuitPattern";
import { useState } from "react";
import {
  Lock,
  Power,
  ShieldBan,
  Gauge,
  MousePointerClick,
  Server,
  EyeOff,
  FileX,
  Globe2,
} from "lucide-react";

const CATEGORIES = [
  {
    key: "security",
    label: "Security",
    items: [
      {
        icon: Lock,
        title: "Military Grade Encryption",
        desc: "AES-256-GCM, the same cipher standard used by governments and security agencies worldwide.",
        size: "lg",
      },
      {
        icon: Power,
        title: "Kill Switch",
        desc: "Instantly cuts your internet if the VPN tunnel drops, so you never leak your real IP.",
        size: "sm",
      },
      {
        icon: ShieldBan,
        title: "Threat Blocking",
        desc: "Stops malware, trackers, and malicious sites before they ever load.",
        size: "sm",
      },
    ],
  },
  {
    key: "performance",
    label: "Performance",
    items: [
      {
        icon: Gauge,
        title: "Ultra Fast Streaming",
        desc: "Optimized 10Gbps servers deliver buffer-free 4K streaming and low-ping gaming worldwide.",
        size: "lg",
      },
      {
        icon: MousePointerClick,
        title: "One Click Access",
        desc: "Connect to the fastest available server instantly — zero configuration required.",
        size: "sm",
      },
      {
        icon: Server,
        title: "Global Server Network",
        desc: "Dedicated, RAM-only server clusters across 30+ locations in 25+ countries for low latency.",
        size: "sm",
      },
    ],
  },
  {
    key: "privacy",
    label: "Privacy",
    items: [
      {
        icon: EyeOff,
        title: "Anonymous Browsing",
        desc: "Your ISP, government, and advertisers never see your history again — your footprint is erased the moment you connect.",
        size: "lg",
      },
      {
        icon: FileX,
        title: "Zero-Log Policy",
        desc: "We don't track, collect, or share your browsing activity. Ever.",
        size: "sm",
      },
      {
        icon: Globe2,
        title: "Virtual Locations",
        desc: "Switch your virtual location to unlock the open internet, borderless.",
        size: "sm",
      },
    ],
  },
];

export default function FeatureTabs() {
  const [active, setActive] = useState("security");
  const category = CATEGORIES.find((c) => c.key === active);

  return (
    <section className="relative bg-white dark:bg-ink-950 px-6 md:px-12 py-28 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <CircuitPattern />
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-20 right-1/4 h-72 w-72 rounded-full bg-teal-500/15 blur-[120px]"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex justify-center mb-16 px-2">
          <div className="relative inline-flex items-center gap-1 rounded-full border border-ink-950/10 dark:border-white/10 bg-ink-950/[0.03] dark:bg-white/5 p-1.5">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className="relative z-10 rounded-full px-3 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold transition-colors"
              >
                {active === c.key && (
                  <motion.span
                    layoutId="tab-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-teal-400 shadow-glow-sm"
                  />
                )}
                <span className={`relative ${active === c.key ? "text-ink-950" : "text-ink-600/60 dark:text-white/60"}`}>
                  {c.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {category.items.map(({ icon: Icon, title, desc, size }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-3xl border border-ink-950/10 dark:border-white/10 bg-ink-950/[0.03] dark:bg-white/5 p-8 text-left overflow-hidden hover:border-teal-400/40 transition-colors ${
                  size === "lg" ? "md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[280px]" : "min-h-[200px] flex flex-col"
                }`}
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-teal-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <span
                    className={`relative grid place-items-center rounded-2xl bg-gradient-to-br from-teal-300 to-teal-600 text-ink-950 shadow-glow-sm mb-6 ${
                      size === "lg" ? "h-16 w-16" : "h-12 w-12"
                    }`}
                  >
                    <Icon size={size === "lg" ? 28 : 22} strokeWidth={2.1} />
                  </span>
                  <h3 className={`relative font-bold text-ink-950 dark:text-white mb-3 ${size === "lg" ? "text-2xl" : "text-lg"}`}>
                    {title}
                  </h3>
                  <p className={`relative text-ink-600/70 dark:text-white/50 leading-relaxed ${size === "lg" ? "text-base max-w-md" : "text-sm"}`}>
                    {desc}
                  </p>
                </div>

                {size === "lg" && (
                  <div className="relative mt-8 flex items-end gap-1.5 h-14">
                    {[35, 60, 45, 80, 55, 95, 40, 70, 50, 85, 30, 65].map((h, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ height: 4 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.6, delay: idx * 0.04 }}
                        className="flex-1 rounded-full bg-gradient-to-t from-teal-600 to-teal-300"
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
