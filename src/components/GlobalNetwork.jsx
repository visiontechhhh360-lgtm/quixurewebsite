import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const CHECKLIST = [
  "100% RAM-only servers (diskless)",
  "Unlimited bandwidth & no caps",
  "Specialized P2P & Torrenting nodes",
];

const NODES = [
  { x: "18%", y: "32%", delay: 0 },
  { x: "47%", y: "22%", delay: 0.4 },
  { x: "52%", y: "55%", delay: 0.8 },
  { x: "78%", y: "30%", delay: 1.2 },
  { x: "85%", y: "60%", delay: 1.6 },
  { x: "30%", y: "68%", delay: 2 },
];

const TERMINAL_LINES = ["> SCANNING NODES...", "> 5,231 ONLINE", "> 0.00% PACKET LOSS"];

export default function GlobalNetwork() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [online, setOnline] = useState(5231);

  useEffect(() => {
    const t = setInterval(() => {
      setVisibleLines((n) => (n < TERMINAL_LINES.length ? n + 1 : n));
    }, 600);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setOnline((n) => n + Math.floor(Math.random() * 5) - 2);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative bg-slate-50 dark:bg-ink-900 px-6 md:px-12 py-28 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />

      <div className="relative grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-left"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-4">
            Infrastructure
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 dark:text-white leading-tight">
            Global Resilience
            <br /> Network
          </h2>
          <p className="mt-6 max-w-md text-base text-ink-600/70 dark:text-white/50 leading-relaxed">
            Access content from 30+ server locations across 25+ countries
            with our high-availability network. Each point on the map
            represents a cluster of dedicated, RAM-only servers.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {CHECKLIST.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex items-center gap-3"
              >
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-teal-400/40 bg-teal-400/10 text-teal-300">
                  <CheckCircle2 size={18} />
                </span>
                <span className="text-sm font-semibold text-ink-950/80 dark:text-white/80">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/3] rounded-[28px] border border-white/10 bg-ink-900 overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-grid opacity-20" />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl"
          />

          {/* wireframe globe */}
          <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full opacity-40">
            <ellipse cx="200" cy="150" rx="140" ry="110" fill="none" stroke="#1fd1bb" strokeWidth="1" />
            <ellipse cx="200" cy="150" rx="60" ry="110" fill="none" stroke="#1fd1bb" strokeWidth="1" />
            <ellipse cx="200" cy="150" rx="100" ry="110" fill="none" stroke="#1fd1bb" strokeWidth="0.7" />
            <ellipse cx="200" cy="150" rx="140" ry="55" fill="none" stroke="#1fd1bb" strokeWidth="1" />
            <ellipse cx="200" cy="150" rx="140" ry="22" fill="none" stroke="#1fd1bb" strokeWidth="0.7" />
            <line x1="60" y1="150" x2="340" y2="150" stroke="#1fd1bb" strokeWidth="0.7" />
          </svg>

          {/* connection arcs */}
          <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
            {NODES.slice(1).map((n, i) => (
              <motion.path
                key={i}
                d={`M ${parseFloat(NODES[0].x) * 4} ${parseFloat(NODES[0].y) * 3} Q 200 ${60 + i * 20} ${parseFloat(n.x) * 4} ${parseFloat(n.y) * 3}`}
                fill="none"
                stroke="#4fe0cf"
                strokeWidth="1"
                strokeOpacity="0.35"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.3 + i * 0.2, ease: "easeInOut" }}
              />
            ))}
          </svg>

          {/* nodes */}
          {NODES.map((n, i) => (
            <div key={i} className="absolute" style={{ left: n.x, top: n.y }}>
              <motion.span
                animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: n.delay }}
                className="absolute -inset-2 rounded-full bg-teal-400/40"
              />
              <span className="block h-2 w-2 rounded-full bg-teal-300 shadow-glow-sm" />
            </div>
          ))}

          {/* terminal readout */}
          <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:w-64 rounded-xl border border-teal-400/20 bg-ink-950/80 backdrop-blur-md px-4 py-3 font-mono text-[11px] text-teal-300/90">
            {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
              <p key={i} className={i === 1 ? "text-white" : ""}>
                {i === 1 ? `> ${online.toLocaleString()} ONLINE` : line}
              </p>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-1.5 h-3 bg-teal-300 align-middle ml-0.5"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
