import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, EyeOff, Apple } from "lucide-react";
import WireframeGlobe from "../components/WireframeGlobe";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.55-1.84.86-3.06.86-2.36 0-4.36-1.6-5.07-3.74H.9v2.33A9 9 0 0 0 9 18z" />
      <path fill="#FBBC05" d="M3.93 10.68A5.41 5.41 0 0 1 3.64 9c0-.58.1-1.15.29-1.68V4.99H.9A9 9 0 0 0 0 9c0 1.45.35 2.83.9 4.01l3.03-2.33z" />
      <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.57-2.57A8.5 8.5 0 0 0 9 0 9 9 0 0 0 .9 4.99l3.03 2.33C4.64 5.18 6.64 3.58 9 3.58z" />
    </svg>
  );
}

export default function Account() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden rounded-[28px] mx-3 md:mx-6 mt-4 bg-ink-900">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-teal-900/40" />
        <div className="absolute inset-0 bg-grid opacity-[0.05]" />
        <motion.div
          animate={{ opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute -top-40 left-0 h-[420px] w-[420px] rounded-full bg-teal-500/15 blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-teal-400/15 blur-[120px]"
        />

        <div className="relative z-10">
          <Navbar />

          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-16 px-6 py-12 lg:flex-row lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Login to Your Account
          </h1>
          <p className="mt-4 text-base text-white/50">
            Please enter your credentials to continue.
          </p>

          <div className="mt-10 hidden lg:block">
            <WireframeGlobe />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full max-w-md rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-10 text-left"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Sign In</h2>
          <p className="text-sm text-white/45 mb-8">
            Welcome back! Please enter your details to sign in to your
            account.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-white">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="Enter your Email Address"
                className="rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-teal-400/60 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-white">
                Password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your Password"
                  className="w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3.5 pr-11 text-sm text-white placeholder:text-white/30 outline-none focus:border-teal-400/60 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-white/60 cursor-pointer">
                <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-ink-950 accent-teal-400" />
                Remember me
              </label>
              <a href="#" className="font-semibold text-teal-300 hover:text-teal-200">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="mt-1 rounded-full bg-gradient-to-r from-teal-300 to-teal-500 px-6 py-3.5 text-sm font-bold text-ink-950 shadow-glow-sm hover:from-teal-200 hover:to-teal-400 transition-colors"
            >
              Sign In
            </button>

            <a href="#" className="text-center text-sm font-semibold text-teal-300 hover:text-teal-200">
              Resend Verification Email
            </a>

            <div className="flex items-center gap-3 my-2">
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-white/30">
                Or sign in with
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <GoogleIcon /> Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Apple size={17} /> Apple
              </button>
            </div>

            <p className="text-center text-sm text-white/45 mt-2">
              Don't have an account?{" "}
              <a href="#" className="font-semibold text-teal-300 hover:text-teal-200">
                Sign Up
              </a>
            </p>
          </form>
        </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
