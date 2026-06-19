import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LegalLayout({ title, updated, children }) {
  return (
    <>
      <section className="relative overflow-hidden rounded-[28px] mx-3 md:mx-6 mt-4 bg-teal-50 dark:bg-ink-900 transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-100 dark:from-ink-950 dark:via-ink-900 dark:to-ink-950" />
        <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[700px] rounded-full bg-teal-500/25 blur-[120px]"
        />

        <div className="relative z-10">
          <Navbar />

          <div className="flex flex-col items-center text-center px-6 md:px-12 pt-10 pb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl font-bold leading-[1.05] text-ink-950 dark:text-white"
            >
              {title}
            </motion.h1>
            {updated && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 text-sm text-ink-600/60 dark:text-white/45"
              >
                Updated on {updated}
              </motion.p>
            )}
          </div>
        </div>
      </section>

      <section className="relative bg-white dark:bg-ink-950 px-6 md:px-12 py-20 transition-colors duration-300">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-left [&>h2]:font-display [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-ink-950 [&>h2]:dark:text-white [&>h2]:mt-12 [&>h2]:mb-4 [&>h2:first-child]:mt-0 [&>p]:text-sm [&>p]:leading-relaxed [&>p]:text-ink-600/75 [&>p]:dark:text-white/55 [&>p]:mb-4 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-2 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:text-sm [&>ul]:text-ink-600/75 [&>ul]:dark:text-white/55"
        >
          {children}
        </motion.article>
      </section>

      <Footer />
    </>
  );
}
