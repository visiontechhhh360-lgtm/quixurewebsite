import { motion } from "framer-motion";

const COLUMNS = [
  { x: "4%", delay: 0, duration: 5 },
  { x: "14%", delay: 1.4, duration: 6.5 },
  { x: "24%", delay: 0.6, duration: 5.5 },
  { x: "76%", delay: 2, duration: 6 },
  { x: "86%", delay: 0.9, duration: 5.2 },
  { x: "94%", delay: 1.8, duration: 6.8 },
];

export default function DataStream({ className = "" }) {
  return (
    <div className={`absolute inset-0 overflow-hidden opacity-[0.6] dark:opacity-[0.6] pointer-events-none ${className}`}>
      {COLUMNS.map((c, i) => (
        <motion.div
          key={i}
          animate={{ y: ["-20%", "120%"] }}
          transition={{ duration: c.duration, repeat: Infinity, delay: c.delay, ease: "linear" }}
          className="absolute flex flex-col items-center gap-3"
          style={{ left: c.x }}
        >
          {Array.from({ length: 4 }).map((_, j) => (
            <span
              key={j}
              className="h-2 w-[3px] rounded-full bg-gradient-to-b from-teal-300 to-transparent"
              style={{ opacity: 1 - j * 0.22 }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}
