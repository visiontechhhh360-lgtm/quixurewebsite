import { motion } from "framer-motion";

const RINGS = [120, 220, 320, 420];

export default function OrbitRings({ className = "", side = "right" }) {
  const pos = side === "right" ? { right: "-10%" } : { left: "-10%" };

  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 opacity-[0.45] dark:opacity-[0.45] pointer-events-none ${className}`}
      style={pos}
    >
      <div className="relative" style={{ width: 440, height: 440 }}>
        {RINGS.map((size, i) => (
          <motion.div
            key={size}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.4 }}
            className="absolute rounded-full border border-teal-400/40"
            style={{
              width: size,
              height: size,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
        {RINGS.slice(1).map((size, i) => (
          <motion.span
            key={`dot-${size}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 14 + i * 6, repeat: Infinity, ease: "linear" }}
            className="absolute"
            style={{ left: "50%", top: "50%", width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
          >
            <span className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-teal-300 shadow-glow-sm" />
          </motion.span>
        ))}
      </div>
    </div>
  );
}
