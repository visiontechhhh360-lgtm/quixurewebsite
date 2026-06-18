import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How does Quixure ensure a strict no-logs policy?",
    a: "Our servers run entirely on RAM-only infrastructure with independently audited zero-log architecture — no connection timestamps, IP addresses, or browsing activity are ever written to disk.",
  },
  {
    q: "Can I use one subscription on multiple devices?",
    a: "Yes. A single Quixure account covers unlimited simultaneous connections across Windows, Mac, iOS, Android, iPad, Linux, and the browser extension.",
  },
  {
    q: "What happens if my connection drops suddenly?",
    a: "The built-in kill switch immediately severs your internet connection the moment the VPN tunnel drops, preventing any IP or data leaks until the secure connection is restored.",
  },
  {
    q: "Do you support port forwarding for gaming?",
    a: "Yes, port forwarding is supported on select server locations to reduce latency and improve peer-to-peer connectivity for gaming and torrenting.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative bg-white dark:bg-ink-950 px-6 md:px-12 py-28 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-4">
            FAQ
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 dark:text-white">
            Frequent Inquiries
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`rounded-2xl border overflow-hidden transition-colors ${
                  isOpen ? "border-teal-400/40 bg-teal-400/5" : "border-ink-950/10 dark:border-white/10 bg-ink-950/[0.03] dark:bg-white/5"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-ink-950 dark:text-white">{q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-ink-950/5 dark:bg-white/10 text-teal-600 dark:text-teal-300"
                  >
                    <ChevronDown size={14} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-ink-600/70 dark:text-white/55 leading-relaxed">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
