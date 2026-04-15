'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function ShortMessageSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_50%,#fdbec6_100%)] px-4 py-14 sm:px-6 lg:px-8 md:py-16">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10px 10px, rgba(182, 196, 121, 0.35) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-3xl rounded-[2rem] border border-[#fdbec6] bg-white/70 px-6 py-8 text-center shadow-[0_18px_45px_rgba(182, 196, 121, 0.18)] backdrop-blur-md sm:px-10"
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#b6c479]/50 bg-white/75 px-4 py-1.5">
          <Heart className="h-3.5 w-3.5 text-[#b6c479] fill-[#b6c479]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b6c479]">A Short Note</span>
        </div>

        <p className="font-serif text-2xl text-[#b6c479] sm:text-3xl">
          Your presence means the world to us.
        </p>
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-[#b6c479] sm:text-base">
          Two hearts, one promise, forever.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#b6c479] sm:text-base">
          Join us as we celebrate love, faith, and a beautiful new beginning on 30/1/2027 at Paradise Inn Bolgoda.
        </p>
      </motion.div>
    </section>
  );
}

