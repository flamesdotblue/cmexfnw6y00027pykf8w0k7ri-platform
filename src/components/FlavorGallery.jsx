import React from 'react';
import { motion } from 'framer-motion';

const FLAVORS = [
  {
    name: 'Vanilla Sky',
    cals: 90,
    protein: 15,
    accent: 'from-sky-300 to-blue-500',
    base: 'from-sky-600/40 to-blue-800/30',
    notes: 'Soft, creamy, classic.'
  },
  {
    name: 'Double Cocoa',
    cals: 100,
    protein: 16,
    accent: 'from-amber-200 to-orange-400',
    base: 'from-stone-700/40 to-neutral-900/20',
    notes: 'Rich cocoa with no sugar.'
  },
  {
    name: 'Mint Circuit',
    cals: 80,
    protein: 14,
    accent: 'from-emerald-300 to-teal-500',
    base: 'from-emerald-700/40 to-teal-900/20',
    notes: 'Cool mint & cacao nibs.'
  },
  {
    name: 'Strawberry Byte',
    cals: 85,
    protein: 15,
    accent: 'from-pink-300 to-rose-500',
    base: 'from-pink-700/40 to-rose-900/20',
    notes: 'Real berries. Bright finish.'
  }
];

export default function FlavorGallery() {
  return (
    <section id="flavors" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 flex items-baseline justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Flavor Gallery</h2>
          <p className="mt-2 max-w-2xl text-white/70">3D-inspired mini pints that look as good as they taste. Hover to tilt and discover the macros.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FLAVORS.map((f, i) => (
          <FlavorCard key={f.name} idx={i} {...f} />
        ))}
      </div>
    </section>
  );
}

function FlavorCard({ name, cals, protein, accent, base, notes, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: idx * 0.06, duration: 0.5 }}
      className="group perspective"
    >
      <motion.div
        whileHover={{ rotateX: 8, rotateY: -8, translateZ: 10 }}
        transition={{ type: 'spring', stiffness: 200, damping: 14 }}
        className="relative h-64 w-full rounded-2xl border border-white/10 bg-gradient-to-br p-0.5 [transform-style:preserve-3d]"
      >
        <div className={`absolute inset-0 -z-0 rounded-2xl bg-gradient-to-br ${base}`} />
        <div className="relative z-10 h-full w-full rounded-2xl bg-neutral-900/40 p-5 backdrop-blur">
          <div className="relative mx-auto mt-2 h-28 w-28 [transform:translateZ(35px)]">
            <div className={`absolute inset-x-0 top-0 mx-auto h-6 w-24 rounded-t-full bg-gradient-to-r ${accent} shadow-lg`} />
            <div className="absolute left-1/2 top-3 h-24 w-24 -translate-x-1/2 rounded-b-[1.25rem] bg-neutral-100 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)]" />
            <div className="absolute left-1/2 top-10 h-12 w-24 -translate-x-1/2 rounded-xl bg-white/70 backdrop-blur-sm" />
          </div>

          <div className="mt-24 space-y-1 [transform:translateZ(15px)]">
            <h3 className="font-medium">{name}</h3>
            <p className="text-xs text-white/70">{notes}</p>
            <div className="mt-2 flex items-center gap-2 text-xs text-white/80">
              <Badge>{cals} cal</Badge>
              <Badge>{protein}g protein</Badge>
              <Badge>mini size</Badge>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-md border border-white/15 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wide">
      {children}
    </span>
  );
}
