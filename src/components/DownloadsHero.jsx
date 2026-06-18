import { motion } from "framer-motion";
import { Apple, Laptop, Smartphone, Tablet, Terminal, Puzzle, Shield } from "lucide-react";
import Navbar from "./Navbar";

const ORBIT = [
  { Icon: Laptop, label: "Windows" },
  { Icon: Apple, label: "macOS" },
  { Icon: Smartphone, label: "iOS" },
  { Icon: Smartphone, label: "Android" },
  { Icon: Tablet, label: "iPad" },
  { Icon: Terminal, label: "Linux" },
  { Icon: Puzzle, label: "Extension" },
];

const RADIUS = 168;

export default function DownloadsHero() {
  return (
    <section className="relative overflow-hidden rounded-[28px] mx-3 md:mx-6 mt-4 pb-10 bg-ink-900">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-teal-900/40" />
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[700px] rounded-full bg-teal-500/25 blur-[120px]"
      />

      <div className="relative z-10">
        <Navbar />

        <div className="flex flex-col items-center text-center px-6 md:px-12 pt-10 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3.5 py-1.5 text-xs font-semibold text-teal-300 mb-6"
          >
            One app. Every device.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-white max-w-3xl"
          >
            Download <span className="text-gradient">Quixure</span>.
            <br />
            Anywhere you go.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-lg text-base text-white/55 leading-relaxed"
          >
            Windows, Mac, iOS, Android, iPad, Linux, or your browser — get
            protected in under a minute, on every screen you own.
          </motion.p>
        </div>

        {/* orbit graphic */}
        <div className="relative mx-auto mb-6 hidden sm:block" style={{ width: RADIUS * 2 + 96, height: RADIUS * 2 + 96 }}>
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 m-auto h-40 w-40 rounded-full bg-teal-400/20 blur-3xl"
          />

          <svg viewBox={`0 0 ${RADIUS * 2 + 96} ${RADIUS * 2 + 96}`} className="absolute inset-0 h-full w-full">
            <circle
              cx={RADIUS + 48}
              cy={RADIUS + 48}
              r={RADIUS}
              fill="none"
              stroke="#1fd1bb"
              strokeOpacity="0.25"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
          </svg>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            {ORBIT.map(({ Icon, label }, i) => {
              const angle = (i / ORBIT.length) * 2 * Math.PI - Math.PI / 2;
              const cx = RADIUS + 48 + RADIUS * Math.cos(angle);
              const cy = RADIUS + 48 + RADIUS * Math.sin(angle);
              return (
                <div
                  key={label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${cx}px`, top: `${cy}px` }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <motion.span
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                      className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-ink-800/90 backdrop-blur-xl text-teal-300 shadow-xl"
                    >
                      <Icon size={20} />
                    </motion.span>
                    <span className="rounded-full bg-ink-950/80 px-2 py-0.5 text-[10px] font-semibold text-white/70 whitespace-nowrap">
                      {label}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            animate={{ boxShadow: ["0 0 0px rgba(31,209,187,0.4)", "0 0 40px rgba(31,209,187,0.6)", "0 0 0px rgba(31,209,187,0.4)"] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-teal-300 to-teal-600 text-ink-950"
          >
            <Shield size={28} strokeWidth={2.4} />
          </motion.div>
        </div>

        {/* mobile fallback: simple icon row */}
        <div className="flex sm:hidden flex-wrap items-center justify-center gap-3 px-6 pb-10">
          {ORBIT.map(({ Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-800/80 px-3 py-1.5 text-[11px] font-semibold text-white/70"
            >
              <Icon size={13} className="text-teal-300" /> {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
