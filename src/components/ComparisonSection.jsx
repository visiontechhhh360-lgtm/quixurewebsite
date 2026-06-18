import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import {
  WifiOff,
  Eye,
  MapPinOff,
  Lock,
  ShieldCheck,
  Globe2,
  GripVertical,
  XCircle,
  CheckCircle2,
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

export default function ComparisonSection() {
  const containerRef = useRef(null);
  const [percent, setPercent] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(96, Math.max(4, pct)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    e.target.setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <section className="relative bg-white dark:bg-ink-950 px-6 md:px-12 py-28 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <DataStream />
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
          Drag to See the Difference
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 dark:text-white">
          Life before and after Quixure
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="relative mx-auto max-w-5xl select-none rounded-[32px] border border-ink-950/10 dark:border-white/10 shadow-2xl overflow-hidden cursor-ew-resize touch-none"
        style={{ minHeight: 440 }}
      >
        {/* base layer: WITHOUT */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink-800 via-ink-900 to-red-950/30 p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-9">
            <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-red-400/60 bg-red-500/10 text-red-400">
              <XCircle size={22} />
            </span>
            <h3 className="text-2xl font-bold text-white">
              Without <span className="text-red-400">Quixure</span>
            </h3>
          </div>
          <ul className="flex flex-col gap-6 max-w-md">
            {WITHOUT.map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-4 rounded-2xl border border-red-500/10 bg-red-500/5 p-4">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-red-500/15 text-red-400">
                  <Icon size={17} />
                </span>
                <p className="text-sm text-white/60 leading-relaxed pt-1">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* clipped overlay: WITH */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-700 p-8 sm:p-12 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
        >
          <motion.div
            animate={{ x: ["-120%", "220%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12"
          />
          <div className="flex items-center gap-3 mb-9">
            <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-white/70 bg-white/10 text-white">
              <CheckCircle2 size={22} />
            </span>
            <h3 className="text-2xl font-bold text-white">With Quixure</h3>
          </div>
          <ul className="flex flex-col gap-6 max-w-md">
            {WITH.map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-white/20 text-white">
                  <Icon size={17} />
                </span>
                <p className="text-sm text-white/95 leading-relaxed pt-1">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* handle */}
        <div
          className="absolute inset-y-0 z-10 flex items-center justify-center"
          style={{ left: `${percent}%`, transform: "translateX(-50%)" }}
        >
          <div className="h-full w-[2px] bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
          <div className="absolute grid h-11 w-11 place-items-center rounded-full bg-white text-ink-950 shadow-xl">
            <GripVertical size={18} />
          </div>
        </div>

        <span className="absolute top-4 left-4 z-10 rounded-full bg-ink-950/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white/80 backdrop-blur-sm">
          Before
        </span>
        <span className="absolute top-4 right-4 z-10 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
          After
        </span>
      </motion.div>
    </section>
  );
}
