import { motion } from "framer-motion";
import DataStream from "./DataStream";
import { useNavigate } from "react-router-dom";
import { Check, Calendar, CalendarDays } from "lucide-react";

const FEATURES = [
  "Unlimited devices, one account",
  "All global servers, unlimited bandwidth",
  "Military grade AES-256 encryption",
  "Kill switch & threat blocking",
  "Ultra fast 10Gbps streaming servers",
  "Anonymous browsing mode",
];

const PLANS = [
  {
    name: "Monthly",
    icon: Calendar,
    tagline: "Flexible, cancel anytime",
    price: 4.99,
    period: "/mo",
    billedAs: "Billed every month",
    highlight: false,
  },
  {
    name: "Yearly",
    icon: CalendarDays,
    tagline: "Best value for committed privacy",
    price: 49.99,
    period: "/yr",
    billedAs: "Billed once annually · just $4.16/mo",
    highlight: true,
  },
];

export default function PricingPlans() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-white dark:bg-ink-950 px-6 md:px-12 py-28 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <DataStream />
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-10 left-1/3 h-72 w-72 rounded-full bg-teal-500/15 blur-[120px]"
      />

      <div className="relative max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-7">
          {PLANS.map(({ name, icon: Icon, tagline, price, period, billedAs, highlight }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-[28px] p-8 text-left flex flex-col ${
                highlight
                  ? "bg-gradient-to-br from-teal-400 via-teal-500 to-teal-700 shadow-glow"
                  : "border border-ink-950/10 dark:border-white/10 bg-ink-950/[0.03] dark:bg-white/5"
              }`}
            >
              {highlight && (
                <motion.span
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ink-950 px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-teal-300 shadow-lg whitespace-nowrap"
                >
                  Save 17% · Best Value
                </motion.span>
              )}

              <span
                className={`mb-6 grid h-12 w-12 place-items-center rounded-2xl ${
                  highlight ? "bg-white/15 text-white" : "bg-gradient-to-br from-teal-300 to-teal-600 text-ink-950"
                }`}
              >
                <Icon size={22} strokeWidth={2.2} />
              </span>

              <h3 className={`text-xl font-bold mb-1.5 ${highlight ? "text-white" : "text-ink-950 dark:text-white"}`}>{name}</h3>
              <p className={`text-sm mb-7 ${highlight ? "text-teal-50/90" : "text-ink-600/70 dark:text-white/45"}`}>{tagline}</p>

              <div className="flex items-end gap-1.5 mb-1">
                <span className={`font-display text-4xl font-bold ${highlight ? "text-white" : "text-ink-950 dark:text-white"}`}>${price.toFixed(2)}</span>
                <span className={`pb-1.5 text-sm ${highlight ? "text-teal-50/80" : "text-ink-600/60 dark:text-white/40"}`}>
                  {period}
                </span>
              </div>
              <p className={`text-xs mb-8 ${highlight ? "text-teal-50/70" : "text-ink-600/50 dark:text-white/30"}`}>{billedAs}</p>

              <ul className="flex flex-col gap-3.5 mb-9 flex-1">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full ${
                        highlight ? "bg-white/20 text-white" : "bg-teal-400/15 text-teal-300"
                      }`}
                    >
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className={`text-sm ${highlight ? "text-white/90" : "text-ink-600/70 dark:text-white/60"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  navigate("/checkout", {
                    state: { name, price, period, billedAs },
                  })
                }
                className={`rounded-full px-6 py-3.5 text-sm font-bold transition-colors ${
                  highlight
                    ? "bg-ink-950 text-white hover:bg-ink-800"
                    : "bg-ink-950/5 dark:bg-white/10 text-ink-950 dark:text-white hover:bg-teal-400 hover:text-ink-950"
                }`}
              >
                Get {name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
