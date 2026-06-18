import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle light / dark theme"
      className={`relative grid h-10 w-10 place-items-center rounded-full border transition-colors ${
        isLight
          ? "border-amber-300 bg-amber-50"
          : "border-white/10 bg-white/5 hover:bg-white/10"
      }`}
    >
      {isLight && (
        <motion.span
          animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.25, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-amber-300/40 blur-md"
        />
      )}
      <motion.span
        animate={{ rotate: isLight ? 0 : -10 }}
        transition={{ duration: 0.3 }}
      >
        <Lightbulb
          size={18}
          strokeWidth={2}
          className={`relative ${isLight ? "text-amber-500 fill-amber-300" : "text-white/60"}`}
        />
      </motion.span>
    </motion.button>
  );
}
