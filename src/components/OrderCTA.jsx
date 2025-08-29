import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, Zap } from 'lucide-react';

export default function OrderCTA() {
  return (
    <section id="order" className="relative isolate mx-auto max-w-7xl px-6 py-24">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-cyan-500/10 via-emerald-500/5 to-transparent" />
      <div className="relative grid grid-cols-1 items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Simple Order</h2>
          <p className="mt-2 max-w-prose text-white/70">Pick a flavor and drop your address. We’ll get your mini pints moving instantly. Cold, fast, reliable.</p>

          <div className="mt-6 space-y-3">
            <Input label="Delivery address" placeholder="123 Main St, Apt 2" />
            <div className="grid grid-cols-2 gap-3">
              <Select label="Flavor" options={["Vanilla Sky","Double Cocoa","Mint Circuit","Strawberry Byte"]} />
              <Select label="Quantity" options={["1 pack","2 pack","4 pack"]} />
            </div>
            <button className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-emerald-300 px-5 py-3 font-medium text-neutral-900 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-emerald-300/60">
              <Zap className="h-4 w-4" />
              Get It in ~30 min
            </button>
            <p className="text-xs text-white/60">Est. delivery: 28–32 min • Powered by FedEx</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
          <h3 className="text-sm font-medium">Fast Shipping Timeline</h3>
          <p className="mt-1 text-sm text-white/70">From tap to door. A live-inspired animation of your order’s journey.</p>

          <div className="mt-6">
            <Timeline />
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({ label, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs text-white/70">{label}</span>
      <input
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur focus:border-emerald-300/40"
      />
    </label>
  );
}

function Select({ label, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs text-white/70">{label}</span>
      <div className="relative">
        <select className="w-full appearance-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none backdrop-blur focus:border-emerald-300/40">
          {options.map((o) => (
            <option key={o} value={o} className="bg-neutral-900 text-white">{o}</option>
          ))}
        </select>
        <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/></svg>
      </div>
    </label>
  );
}

function Timeline() {
  const items = [
    { icon: <Zap className="h-4 w-4" />, title: 'Order Placed', sub: 'T‑0 min' },
    { icon: <Clock className="h-4 w-4" />, title: 'Cold Packed', sub: 'T‑5 min' },
    { icon: <Truck className="h-4 w-4" />, title: 'Out for Delivery', sub: 'T‑10 min' },
    { icon: <Truck className="h-4 w-4" />, title: 'At Your Door', sub: 'T‑~30 min' }
  ];

  return (
    <div>
      <div className="relative mb-8 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="absolute left-0 top-0 h-full w-1/3 rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-300"
          animate={{ x: ['0%', '200%'] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: 'linear' }}
        />
      </div>

      <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-4">
        {items.map((it, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.07, duration: 0.4 }}
            className="group"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-emerald-200 ring-1 ring-inset ring-white/15">
                {it.icon}
              </div>
              <div>
                <p className="text-sm font-medium">{it.title}</p>
                <p className="text-xs text-white/60">{it.sub}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
