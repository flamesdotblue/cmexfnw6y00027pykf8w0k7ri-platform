import React from 'react';
import Hero from './components/Hero';
import FlavorGallery from './components/FlavorGallery';
import Testimonials from './components/Testimonials';
import OrderCTA from './components/OrderCTA';

export default function App() {
  return (
    <div className="bg-neutral-950 text-white font-inter antialiased">
      <Hero />
      <FlavorGallery />
      <Testimonials />
      <OrderCTA />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        <p>
          © {new Date().getFullYear()} FedEx Ice Cream — Mini-sized, sugar-free, high-protein treats delivered fast.
        </p>
      </footer>
    </div>
  );
}
