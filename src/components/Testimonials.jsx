import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ITEMS = [
  {
    name: 'Alex P.',
    text: 'Finally, ice cream that fits my macros. Tastes legit and arrives colder than my freezer.',
    rating: 5,
    role: 'Marathoner'
  },
  {
    name: 'Jasmin R.',
    text: 'The portion size is perfect. No sugar crash, plenty of protein, and the mint flavor slaps.',
    rating: 5,
    role: 'Designer'
  },
  {
    name: 'Chris N.',
    text: 'Ordered during a movie night and it showed up in under 25 minutes. FedEx for the win.',
    rating: 5,
    role: 'Engineer'
  }
];

export default function Testimonials() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Customer Love</h2>
          <p className="mt-2 max-w-2xl text-white/70">Real reviews from people who wanted dessert without the detour.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {ITEMS.map((t, i) => (
          <Card key={t.name} data={t} delay={i * 0.06} />
        ))}
      </div>
    </section>
  );
}

function Card({ data, delay }) {
  const initials = data.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-white/10 to-white/0 text-sm font-semibold">
          {initials}
        </div>
        <div>
          <p className="text-sm font-medium">{data.name}</p>
          <p className="text-xs text-white/60">{data.role}</p>
        </div>
      </div>
      <p className="text-sm text-white/90">{data.text}</p>
      <div className="mt-4 flex items-center gap-1 text-amber-300">
        {Array.from({ length: data.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
    </motion.div>
  );
}
