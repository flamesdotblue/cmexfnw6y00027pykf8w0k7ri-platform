import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/55 to-neutral-950/90" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 lg:pt-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Delivered in ~30 minutes via FedEx
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            FedEx Ice Cream
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300"> Guilt‑Free Indulgence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 max-w-xl text-base text-white/80 sm:text-lg"
          >
            Mini-sized, sugar-free, low-calorie, high-protein ice creams. Ridiculously tasty. Always cold. Always fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
          >
            <ValueChip icon={<Zap className="h-4 w-4 text-emerald-300" />} label="Guilt‑Free" sub="Sugar‑free & low-cal" />
            <ValueChip icon={<Shield className="h-4 w-4 text-sky-300" />} label="Packed with Protein" sub="15g per mini" />
            <ValueChip icon={<Rocket className="h-4 w-4 text-cyan-300" />} label="Delivered Fast" sub="~30 minutes" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="pointer-events-auto mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#order"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 font-medium text-neutral-900 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-300/60"
            >
              Get It Now
            </a>
            <a href="#flavors" className="text-white/80 hover:text-white">Explore Flavors</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValueChip({ icon, label, sub }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] p-3 backdrop-blur">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 ring-1 ring-inset ring-white/10">
        {icon}
      </div>
      <div className="leading-tight">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-white/70">{sub}</p>
      </div>
    </div>
  );
}
