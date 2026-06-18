import { motion } from "framer-motion";
import { Lock, Clock, Send } from "lucide-react";

const POINTS = [
  { icon: Lock, label: "End-to-end encrypted messaging" },
  { icon: Clock, label: "Human response within 4 hours" },
];

export default function ContactSection() {
  return (
    <section className="relative bg-slate-50 dark:bg-ink-900 px-6 md:px-12 py-28 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <motion.div
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-teal-500/15 blur-[120px]"
      />

      <div className="relative grid lg:grid-cols-2 gap-14 items-start max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-left"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-4">
            Direct Line
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 dark:text-white leading-tight mb-6">
            Talk To Our Team
          </h2>
          <p className="max-w-md text-base text-ink-600/70 dark:text-white/50 leading-relaxed mb-9">
            Can't find what you're looking for? Submit a detailed request and
            our senior agents will investigate.
          </p>

          <div className="flex flex-col gap-4">
            {POINTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-teal-200 dark:border-teal-400/30 bg-teal-50 dark:bg-teal-400/10 text-teal-600 dark:text-teal-300">
                  <Icon size={17} />
                </span>
                <span className="text-sm font-semibold text-ink-950/80 dark:text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
          className="relative rounded-[28px] border border-ink-950/10 dark:border-white/10 bg-ink-950/[0.03] dark:bg-white/5 backdrop-blur-xl p-8 flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2 text-left">
            <label className="text-xs font-semibold uppercase tracking-wide text-ink-600/60 dark:text-white/40">
              Email *
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="rounded-xl border border-ink-950/10 dark:border-white/10 bg-ink-950/5 dark:bg-ink-950/60 px-4 py-3.5 text-sm text-ink-950 dark:text-white placeholder:text-ink-600/40 dark:placeholder:text-white/30 outline-none focus:border-teal-400/60 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2 text-left">
            <label className="text-xs font-semibold uppercase tracking-wide text-ink-600/60 dark:text-white/40">
              Subject *
            </label>
            <input
              type="text"
              required
              placeholder="Enter your subject"
              className="rounded-xl border border-ink-950/10 dark:border-white/10 bg-ink-950/5 dark:bg-ink-950/60 px-4 py-3.5 text-sm text-ink-950 dark:text-white placeholder:text-ink-600/40 dark:placeholder:text-white/30 outline-none focus:border-teal-400/60 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2 text-left">
            <label className="text-xs font-semibold uppercase tracking-wide text-ink-600/60 dark:text-white/40">
              Message *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Type here your question"
              className="resize-none rounded-xl border border-ink-950/10 dark:border-white/10 bg-ink-950/5 dark:bg-ink-950/60 px-4 py-3.5 text-sm text-ink-950 dark:text-white placeholder:text-ink-600/40 dark:placeholder:text-white/30 outline-none focus:border-teal-400/60 transition-colors"
            />
          </div>

          <button
            type="submit"
            className="group mt-2 flex items-center justify-center gap-2 rounded-full bg-teal-400 px-6 py-4 text-sm font-bold text-ink-950 shadow-glow-sm hover:bg-teal-300 transition-colors"
          >
            Send Secure Message
            <Send size={15} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
