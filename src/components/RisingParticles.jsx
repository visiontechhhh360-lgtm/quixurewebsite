import { motion } from "framer-motion";

const DEFAULT_PARTICLES = [
  { x: "6%", delay: 0 },
  { x: "18%", delay: 1.6 },
  { x: "32%", delay: 0.8 },
  { x: "48%", delay: 2.2 },
  { x: "64%", delay: 0.4 },
  { x: "78%", delay: 1.9 },
  { x: "90%", delay: 1.1 },
];

export default function RisingParticles({ className = "", count = 7 }) {
  const particles = DEFAULT_PARTICLES.slice(0, count);

  return (
    <div className={`absolute inset-0 overflow-hidden opacity-[0.65] dark:opacity-[0.65] pointer-events-none ${className}`}>
      {particles.map((p, i) => (
        <motion.span
          key={i}
          animate={{ y: ["110%", "-10%"], opacity: [0, 0.8, 0] }}
          transition={{ duration: 7 + (i % 3) * 1.4, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          className="absolute bottom-0 h-1.5 w-1.5 rounded-full bg-teal-400/70"
          style={{ left: p.x }}
        />
      ))}
    </div>
  );
}
