import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle light / dark theme"
      className={`relative grid h-10 w-10 place-items-center rounded-full border overflow-hidden transition-colors ${
        isLight
          ? "border-amber-300 bg-amber-50"
          : "border-white/10 bg-white/5 hover:bg-white/10"
      }`}
    >
      <motion.span
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.25, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`absolute inset-0 rounded-full blur-md ${isLight ? "bg-amber-300/40" : "bg-teal-400/20"}`}
      />
      <AnimatePresence mode="wait" initial={false}>
        {isLight ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Sun size={18} strokeWidth={2} className="text-amber-500" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Moon size={18} strokeWidth={2} className="text-teal-300 fill-teal-300/20" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
