import { motion } from "framer-motion";
import { useMemo } from "react";

const LANDMASSES = [
  { cx: 28, cy: 32, rx: 13, ry: 9 },
  { cx: 30, cy: 60, rx: 7, ry: 15 },
  { cx: 50, cy: 26, rx: 6, ry: 7 },
  { cx: 53, cy: 48, rx: 8, ry: 16 },
  { cx: 70, cy: 32, rx: 17, ry: 11 },
  { cx: 60, cy: 62, rx: 6, ry: 5 },
  { cx: 78, cy: 65, rx: 5, ry: 4 },
];

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function generateDots() {
  const rand = seededRandom(42);
  const dots = [];
  for (let i = 0; i < 260; i++) {
    const x = rand() * 100;
    const y = rand() * 100;
    const dx = x - 50;
    const dy = y - 50;
    if (dx * dx + dy * dy > 48 * 48) continue;
    const inLand = LANDMASSES.some(
      (l) => ((x - l.cx) ** 2) / (l.rx * l.rx) + ((y - l.cy) ** 2) / (l.ry * l.ry) <= 1
    );
    if (inLand) dots.push({ x, y, r: rand() * 0.5 + 0.5 });
  }
  return dots;
}

const NODES = [
  { x: 30, y: 33 },
  { x: 70, y: 30 },
  { x: 53, y: 45 },
  { x: 60, y: 62 },
];

export default function WireframeGlobe() {
  const dots = useMemo(() => generateDots(), []);

  return (
    <div className="relative mx-auto" style={{ width: 380, height: 380 }}>
      {/* outer halo rings */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute inset-0 m-auto h-full w-full rounded-full border border-teal-400/15"
      />
      <div className="absolute inset-0 m-auto h-[112%] w-[112%] -translate-x-[5.5%] -translate-y-[5.5%] rounded-full border border-teal-400/10" />
      <div className="absolute inset-0 m-auto h-[126%] w-[126%] -translate-x-[12%] -translate-y-[12%] rounded-full border border-teal-400/[0.06]" />

      <motion.div
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 m-auto h-48 w-48 rounded-full bg-teal-400/25 blur-3xl"
      />

      {/* globe sphere */}
      <div className="absolute inset-0 rounded-full overflow-hidden border border-teal-400/25 bg-[radial-gradient(circle_at_32%_28%,rgba(31,209,187,0.18),rgba(5,7,8,0.95)_70%)]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            {[20, 32, 44, 56, 68, 80].map((cy) => (
              <ellipse key={cy} cx="50" cy={cy} rx={Math.sqrt(48 * 48 - (cy - 50) ** 2)} ry={3} fill="none" stroke="#1fd1bb" strokeOpacity="0.12" strokeWidth="0.4" />
            ))}
            {[0, 30, 60, 90, 120, 150].map((rot) => (
              <ellipse
                key={rot}
                cx="50"
                cy="50"
                rx="48"
                ry="18"
                fill="none"
                stroke="#1fd1bb"
                strokeOpacity="0.1"
                strokeWidth="0.4"
                transform={`rotate(${rot} 50 50)`}
              />
            ))}
            {dots.map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r={d.r * 0.6} fill="#5eead4" opacity={0.55} />
            ))}
          </svg>
        </motion.div>

        {NODES.map((n, i) => (
          <div key={i} className="absolute" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
            <motion.span
              animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4 }}
              className="absolute -inset-1.5 rounded-full bg-teal-300/50"
            />
            <span className="block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-200 shadow-glow-sm" />
          </div>
        ))}

        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.06] via-transparent to-black/40" />
      </div>

      {/* reflection */}
      <div className="absolute left-1/2 top-[88%] h-10 w-56 -translate-x-1/2 rounded-full bg-teal-400/15 blur-2xl" />
    </div>
  );
}
