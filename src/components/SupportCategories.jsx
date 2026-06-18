import { motion } from "framer-motion";
import {
  UserCog,
  CreditCard,
  Cpu,
  Wrench,
  ShieldCheck,
  Settings2,
} from "lucide-react";

const CATEGORIES = [
  {
    icon: UserCog,
    title: "Account",
    desc: "Manage your subscription, passwords, and multi-device synchronization.",
  },
  {
    icon: CreditCard,
    title: "Billing",
    desc: "Invoices, payment methods, and crypto-transaction troubleshooting.",
  },
  {
    icon: Cpu,
    title: "Technical",
    desc: "Deep dives into WireGuard, OpenVPN protocols and kill-switch configurations.",
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    desc: "Common fixes for connection drops, slow speeds, and ISP throttling.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "DNS leak protection, Double VPN setups, and Onion Over VPN guides.",
  },
  {
    icon: Settings2,
    title: "Setup",
    desc: "Step-by-step installation for routers, consoles, and exotic OS environments.",
  },
];

export default function SupportCategories() {
  return (
    <section className="relative bg-white dark:bg-ink-950 px-6 md:px-12 py-28 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-10 right-1/4 h-72 w-72 rounded-full bg-teal-500/15 blur-[120px]"
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-4">
            Knowledge Base
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 dark:text-white">
            Support Categories
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border border-ink-950/10 dark:border-white/10 bg-ink-950/[0.03] dark:bg-white/5 p-7 text-left overflow-hidden hover:border-teal-400/40 transition-colors cursor-pointer"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-teal-300 to-teal-600 text-ink-950 shadow-glow-sm mb-6">
                <Icon size={22} strokeWidth={2.2} />
              </span>
              <h3 className="relative text-lg font-bold text-ink-950 dark:text-white mb-2.5">{title}</h3>
              <p className="relative text-sm text-ink-600/70 dark:text-white/50 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
