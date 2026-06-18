import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Lock, ShieldCheck, CreditCard, CheckCircle2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DEFAULT_PLAN = {
  name: "Yearly",
  price: 49.99,
  period: "/yr",
  billedAs: "Billed once annually · just $4.16/mo",
};

function formatCardNumber(value) {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

function formatExpiry(value) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

export default function Checkout() {
  const { state } = useLocation();
  const plan = state || DEFAULT_PLAN;

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("processing");
    setTimeout(() => setStatus("success"), 1800);
  };

  return (
    <>
      <section className="relative overflow-hidden rounded-[28px] mx-3 md:mx-6 mt-4 bg-teal-50 dark:bg-ink-900 transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-100 dark:from-ink-950 dark:via-ink-900 dark:to-teal-900/40" />
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
        <motion.div
          animate={{ opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-0 left-1/3 h-72 w-72 rounded-full bg-teal-500/15 blur-[120px]"
        />

        <div className="relative z-10">
          <Navbar />

          <div className="px-6 md:px-12 pt-6 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-xl mx-auto mb-12"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-4">
                Secure Checkout
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 dark:text-white">
                Complete your subscription
              </h1>
            </motion.div>

            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.5fr_1fr]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-[28px] border border-ink-950/10 dark:border-white/10 bg-ink-950/[0.02] dark:bg-white/[0.04] backdrop-blur-xl p-7 md:p-9"
              >
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-16"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                        className="grid h-20 w-20 place-items-center rounded-full bg-teal-400/15 text-teal-300 mb-6"
                      >
                        <CheckCircle2 size={40} />
                      </motion.span>
                      <h2 className="text-2xl font-bold text-ink-950 dark:text-white mb-2">Payment Successful</h2>
                      <p className="text-sm text-ink-600/70 dark:text-white/50 max-w-xs">
                        Your {plan.name} plan is now active. A confirmation
                        email is on its way to {email || "your inbox"}.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      {/* live card preview */}
                      <div className="relative mb-9 aspect-[1.6/1] max-w-sm rounded-2xl bg-gradient-to-br from-teal-400 via-teal-500 to-teal-700 p-6 shadow-glow overflow-hidden">
                        <motion.div
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-3xl"
                        />
                        <div className="relative flex items-center justify-between">
                          <span className="h-8 w-11 rounded-md bg-white/20 backdrop-blur-sm" />
                          <CreditCard size={22} className="text-white/90" />
                        </div>
                        <p className="relative mt-7 font-mono text-xl tracking-widest text-white">
                          {cardNumber || "•••• •••• •••• ••••"}
                        </p>
                        <div className="relative mt-6 flex items-end justify-between">
                          <div>
                            <p className="text-[9px] uppercase tracking-wide text-teal-50/70">Card Holder</p>
                            <p className="text-sm font-semibold text-white">{cardName || "Your Name"}</p>
                          </div>
                          <div>
                            <p className="text-[9px] uppercase tracking-wide text-teal-50/70">Expires</p>
                            <p className="text-sm font-semibold text-white">{expiry || "MM/YY"}</p>
                          </div>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-sm font-semibold text-ink-950 dark:text-white">Email Address</label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="rounded-xl border border-ink-950/10 dark:border-white/10 bg-ink-950/5 dark:bg-ink-950/60 px-4 py-3.5 text-sm text-ink-950 dark:text-white placeholder:text-ink-600/40 dark:placeholder:text-white/30 outline-none focus:border-teal-400/60 transition-colors"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-sm font-semibold text-ink-950 dark:text-white">Cardholder Name</label>
                          <input
                            type="text"
                            required
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            placeholder="Name on card"
                            className="rounded-xl border border-ink-950/10 dark:border-white/10 bg-ink-950/5 dark:bg-ink-950/60 px-4 py-3.5 text-sm text-ink-950 dark:text-white placeholder:text-ink-600/40 dark:placeholder:text-white/30 outline-none focus:border-teal-400/60 transition-colors"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-sm font-semibold text-ink-950 dark:text-white">Card Number</label>
                          <div className="relative">
                            <input
                              type="text"
                              required
                              inputMode="numeric"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                              placeholder="1234 5678 9012 3456"
                              className="w-full rounded-xl border border-ink-950/10 dark:border-white/10 bg-ink-950/5 dark:bg-ink-950/60 px-4 py-3.5 pr-11 text-sm text-ink-950 dark:text-white placeholder:text-ink-600/40 dark:placeholder:text-white/30 outline-none focus:border-teal-400/60 transition-colors"
                            />
                            <CreditCard size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-600/40 dark:text-white/30" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-ink-950 dark:text-white">Expiry Date</label>
                            <input
                              type="text"
                              required
                              inputMode="numeric"
                              value={expiry}
                              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                              placeholder="MM/YY"
                              className="rounded-xl border border-ink-950/10 dark:border-white/10 bg-ink-950/5 dark:bg-ink-950/60 px-4 py-3.5 text-sm text-ink-950 dark:text-white placeholder:text-ink-600/40 dark:placeholder:text-white/30 outline-none focus:border-teal-400/60 transition-colors"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-ink-950 dark:text-white">CVV</label>
                            <input
                              type="text"
                              required
                              inputMode="numeric"
                              maxLength={4}
                              value={cvv}
                              onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                              placeholder="123"
                              className="rounded-xl border border-ink-950/10 dark:border-white/10 bg-ink-950/5 dark:bg-ink-950/60 px-4 py-3.5 text-sm text-ink-950 dark:text-white placeholder:text-ink-600/40 dark:placeholder:text-white/30 outline-none focus:border-teal-400/60 transition-colors"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={status === "processing"}
                          className="mt-2 flex items-center justify-center gap-2 rounded-full bg-teal-400 px-6 py-4 text-sm font-bold text-ink-950 shadow-glow-sm hover:bg-teal-300 transition-colors disabled:opacity-60"
                        >
                          {status === "processing" ? (
                            <>
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                className="h-4 w-4 rounded-full border-2 border-ink-950/30 border-t-ink-950"
                              />
                              Processing…
                            </>
                          ) : (
                            <>
                              <Lock size={15} /> Pay ${plan.price.toFixed(2)}
                            </>
                          )}
                        </button>

                        <p className="flex items-center justify-center gap-1.5 text-[11px] text-ink-600/50 dark:text-white/30">
                          <ShieldCheck size={12} /> 256-bit encrypted payment · PCI DSS compliant
                        </p>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-fit rounded-[28px] border border-ink-950/10 dark:border-white/10 bg-ink-950/[0.02] dark:bg-white/[0.04] backdrop-blur-xl p-7"
              >
                <h3 className="text-sm font-bold uppercase tracking-wide text-ink-600/60 dark:text-white/40 mb-6">
                  Order Summary
                </h3>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-semibold text-ink-950 dark:text-white">Quixure {plan.name}</span>
                  <span className="text-base font-bold text-ink-950 dark:text-white">${plan.price.toFixed(2)}</span>
                </div>
                <p className="text-xs text-ink-600/50 dark:text-white/40 mb-6">{plan.billedAs}</p>

                <div className="flex flex-col gap-2.5 border-t border-ink-950/10 dark:border-white/10 pt-5 mb-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-600/60 dark:text-white/50">Subtotal</span>
                    <span className="text-ink-950 dark:text-white">${plan.price.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-600/60 dark:text-white/50">Tax</span>
                    <span className="text-ink-950 dark:text-white">$0.00</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-ink-950/10 dark:border-white/10 pt-5">
                  <span className="text-base font-bold text-ink-950 dark:text-white">Total</span>
                  <span className="text-xl font-bold text-teal-300">${plan.price.toFixed(2)}</span>
                </div>

                <div className="mt-7 flex items-center gap-2 rounded-xl border border-teal-400/20 bg-teal-400/5 px-4 py-3">
                  <ShieldCheck size={16} className="text-teal-300 flex-shrink-0" />
                  <p className="text-xs text-ink-600/70 dark:text-white/60">Cancel anytime, no questions asked.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
