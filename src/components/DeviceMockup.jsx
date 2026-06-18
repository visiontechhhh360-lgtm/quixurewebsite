import { motion } from "framer-motion";
import { Lock, ShieldCheck } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import connectionScreen from "../assets/connection.jpeg";

export default function DeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      {/* glow */}
      <div className="absolute inset-0 -z-10 rounded-[40px] bg-teal-400/30 blur-[90px]" />

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <PhoneFrame src={connectionScreen} alt="Quixure VPN — Connected" />
      </motion.div>

      {/* floating phone */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-10 top-16 hidden sm:block w-36 rounded-[22px] border border-white/10 bg-ink-700/95 backdrop-blur-xl p-3 shadow-xl"
      >
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/15" />
        <div className="rounded-xl bg-white/5 p-3">
          <ShieldCheck size={20} className="text-teal-300 mb-1" />
          <p className="text-[10px] font-semibold text-white">Protected</p>
          <p className="text-[9px] text-white/40">256-bit encryption</p>
        </div>
      </motion.div>

      {/* floating badge */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-10 bottom-20 hidden sm:flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-700/95 backdrop-blur-xl px-3.5 py-2.5 shadow-xl"
      >
        <Lock size={14} className="text-teal-300" />
        <span className="text-[11px] font-semibold text-white">Bank-grade Security</span>
      </motion.div>
    </div>
  );
}
