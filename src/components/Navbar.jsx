import { motion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "Features", to: "/features" },

  { label: "Pricing", to: "/pricing" },

  { label: "Support", to: "/support" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      <nav className="flex items-center justify-between px-6 md:px-10 py-5">
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 font-display text-xl font-bold text-ink-950 dark:text-white"
          >
            <img src={logo} alt="Quixure VPN" className="h-11 w-11 object-contain" />
            Quixure VPN
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-9 text-sm font-medium text-ink-600/70 dark:text-white/70">
          {LINKS.map(({ label, to }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            >
              <Link to={to} className="hover:text-ink-950 dark:hover:text-white transition-colors">
                {label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <Link to="/downloads" className="hover:text-ink-950 dark:hover:text-white transition-colors">
              Download
            </Link>
          </motion.div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/downloads"
            className="group flex items-center gap-1.5 rounded-full bg-teal-400 px-5 py-2.5 text-sm font-bold text-ink-950 shadow-glow-sm hover:bg-teal-300 transition-colors"
          >
            Get Quixure
            <ChevronRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="text-ink-950 dark:text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-ink-600/80 dark:text-white/80">
          {LINKS.map(({ label, to }) => (
            <Link key={label} to={to} className="hover:text-ink-950 dark:hover:text-white">
              {label}
            </Link>
          ))}
          <Link to="/downloads" className="hover:text-ink-950 dark:hover:text-white">
            Download
          </Link>
          <Link
            to="/downloads"
            className="rounded-full bg-teal-400 px-5 py-2.5 text-sm font-bold text-ink-950 text-center"
          >
            Get Quixure
          </Link>
        </div>
      )}
    </header>
  );
}
