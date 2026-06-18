import { motion } from "framer-motion";
import { useRef, useState, useCallback, useMemo } from "react";
import {
  WifiOff,
  Eye,
  MapPinOff,
  Lock,
  ShieldCheck,
  Globe2,
  ArrowLeftRight,
  XCircle,
  CheckCircle2,
  ShieldAlert,
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

const SLANT = 5;

export default function ComparisonSection() {
  const containerRef = useRef(null);
  const [percent, setPercent] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(94, Math.max(6, pct)));
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

  const clipPolygon = useMemo(
    () =>
      `polygon(0% 0%, ${percent + SLANT}% 0%, ${percent - SLANT}% 100%, 0% 100%)`,
    [percent]
  );

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
          Drag the Divider
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Life before and after <span className="text-gradient">Quixure</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="relative mx-auto max-w-5xl select-none rounded-[32px] border border-white/10 shadow-[0_0_80px_-20px_rgba(0,196,167,0.35)] overflow-hidden cursor-ew-resize touch-none"
        style={{ minHeight: 460 }}
      >
        {/* base layer: WITH (revealed on the right as you drag) */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-300 via-teal-500 to-cyan-700 p-8 sm:p-12">
          <motion.div
            animate={{ x: ["-120%", "220%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
          />
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -14, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
              className="absolute h-1 w-1 rounded-full bg-white/70"
              style={{ left: `${15 + i * 10}%`, top: `${20 + ((i * 17) % 60)}%` }}
            />
          ))}

          <div className="relative flex flex-row-reverse items-center justify-end gap-3 mb-9 ml-auto max-w-md">
            <motion.span
              animate={{ boxShadow: ["0 0 0px rgba(255,255,255,0.3)", "0 0 30px rgba(255,255,255,0.8)", "0 0 0px rgba(255,255,255,0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-white/80 bg-white/15 text-white"
            >
              <CheckCircle2 size={22} />
            </motion.span>
            <h3 className="text-2xl font-bold text-white">With Quixure</h3>
          </div>
          <ul className="relative flex flex-col gap-5 max-w-md ml-auto text-right">
            {WITH.map(({ icon: Icon, text }) => (
              <li key={text} className="flex flex-row-reverse gap-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-4">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-white/20 text-white">
                  <Icon size={17} />
                </span>
                <p className="text-sm text-white/95 leading-relaxed pt-1">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* clipped overlay: WITHOUT (covers from the left, shrinks as you drag right) */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,30,30,0.35),transparent_55%),linear-gradient(135deg,#0a0e0f,#161e20_60%,#1a0a0a)] p-8 sm:p-12 overflow-hidden"
          style={{ clipPath: clipPolygon }}
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
          <ul className="relative flex flex-col gap-5 max-w-md">
            {WITHOUT.map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-4 rounded-2xl border border-red-500/15 bg-red-500/5 p-4">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-red-500/15 text-red-400">
                  <Icon size={17} />
                </span>
                <p className="text-sm text-white/60 leading-relaxed pt-1">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* divider + handle */}
        <div
          className="absolute inset-y-0 z-10 flex items-center justify-center"
          style={{ left: `${percent}%`, transform: "translateX(-50%)" }}
        >
          <div
            className="h-full w-[3px] bg-gradient-to-b from-white/0 via-white to-white/0 shadow-[0_0_18px_4px_rgba(255,255,255,0.5)]"
            style={{ transform: `skewX(-${SLANT / 2}deg)` }}
          />
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="absolute grid h-12 w-12 place-items-center rounded-full bg-white text-ink-950 shadow-[0_0_24px_rgba(255,255,255,0.7)]"
          >
            <ArrowLeftRight size={18} />
          </motion.div>
          <span className="absolute -bottom-9 rounded-full bg-ink-950 border border-teal-400/40 px-3 py-1 text-[11px] font-bold text-teal-300 whitespace-nowrap">
            {Math.round(percent)}% Protected
          </span>
        </div>

        <span className="absolute top-4 left-4 z-10 rounded-full bg-ink-950/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white/80 backdrop-blur-sm">
          Before
        </span>
        <span className="absolute top-4 right-4 z-10 rounded-full bg-white/25 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
          After
        </span>
      </motion.div>
    </section>
  );
}
