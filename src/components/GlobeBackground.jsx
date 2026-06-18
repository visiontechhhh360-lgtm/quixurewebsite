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

const NODES = [
  { x: 28, y: 33 },
  { x: 70, y: 31 },
  { x: 53, y: 46 },
  { x: 60, y: 63 },
  { x: 30, y: 61 },
];

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function generateDots() {
  const rand = seededRandom(7);
  const dots = [];
  for (let i = 0; i < 240; i++) {
    const x = rand() * 100;
    const y = rand() * 100;
    const dx = x - 50;
    const dy = y - 50;
    if (dx * dx + dy * dy > 48 * 48) continue;
    const inLand = LANDMASSES.some(
      (l) => ((x - l.cx) ** 2) / (l.rx * l.rx) + ((y - l.cy) ** 2) / (l.ry * l.ry) <= 1
    );
    if (inLand) dots.push({ x, y, r: rand() * 0.5 + 0.4 });
  }
  return dots;
}

export default function GlobeBackground({ className = "" }) {
  const dots = useMemo(() => generateDots(), []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="absolute opacity-[0.35] dark:opacity-[0.55]"
        style={{
          width: "min(120vw, 1100px)",
          aspectRatio: "1 / 1",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.div
          animate={{ opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 m-auto h-2/3 w-2/3 rounded-full bg-teal-400/30 blur-3xl"
        />

        <div className="absolute inset-0 rounded-full overflow-hidden border border-teal-400/20 bg-[radial-gradient(circle_at_32%_28%,rgba(31,209,187,0.12),transparent_70%)]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
              {[20, 32, 44, 56, 68, 80].map((cy) => (
                <ellipse
                  key={cy}
                  cx="50"
                  cy={cy}
                  rx={Math.sqrt(48 * 48 - (cy - 50) ** 2)}
                  ry={3}
                  fill="none"
                  stroke="#1fd1bb"
                  strokeOpacity="0.18"
                  strokeWidth="0.3"
                />
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
                  strokeOpacity="0.15"
                  strokeWidth="0.3"
                  transform={`rotate(${rot} 50 50)`}
                />
              ))}
              {dots.map((d, i) => (
                <circle key={i} cx={d.x} cy={d.y} r={d.r * 0.6} fill="#5eead4" opacity={0.6} />
              ))}
              {NODES.slice(1).map((n, i) => (
                <motion.path
                  key={i}
                  d={`M ${NODES[0].x} ${NODES[0].y} Q 50 ${20 + i * 8} ${n.x} ${n.y}`}
                  fill="none"
                  stroke="#4fe0cf"
                  strokeWidth="0.3"
                  strokeOpacity="0.4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.4, delay: 0.3 + i * 0.3, ease: "easeInOut" }}
                />
              ))}
            </svg>

            {NODES.map((n, i) => (
              <div key={i} className="absolute" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
                <motion.span
                  animate={{ scale: [1, 2.4, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.4 }}
                  className="absolute -inset-1 rounded-full bg-teal-300/60"
                />
                <span className="block h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-200 shadow-glow-sm" />
              </div>
            ))}
          </motion.div>

          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.05] via-transparent to-black/30" />
        </div>
      </div>
    </div>
  );
}
