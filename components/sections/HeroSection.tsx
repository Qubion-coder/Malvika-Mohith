'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cross, Heart, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/IMG_0472.JPG.jpeg)' }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,17,28,0.42)_0%,rgba(20,17,28,0.58)_55%,rgba(20,17,28,0.82)_100%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(240,218,170,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(240,218,170,0.25) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-28 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/40 bg-white/10 px-6 py-2.5 backdrop-blur-md"
        >
          <Cross className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary sm:text-xs">
            Holy Matrimony
          </span>
          <Cross className="h-4 w-4 text-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.1 }}
          className="font-serif text-5xl font-light leading-tight tracking-[0.1em] text-white sm:text-7xl md:text-8xl lg:text-9xl uppercase"
        >
          DON KAVINDU <span className="text-secondary">&amp;</span> NIKITHA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-6 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base md:text-lg lg:text-xl font-light"
        >
          Together with their families, joyfully invite you to witness their blessed Christian marriage ceremony and celebrate this beginning with love and grace.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 rounded-full border border-secondary/35 bg-black/20 px-10 py-6 backdrop-blur-sm"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Wedding Date</p>
          <p className="mt-2 font-serif text-3xl text-white sm:text-4xl">January 30, 2027</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-10 flex items-center gap-4 text-secondary/80"
        >
          <Sparkles className="h-5 w-5" />
          <Heart className="h-5 w-5 fill-primary text-primary" />
          <Sparkles className="h-5 w-5" />
        </motion.div>
      </div>
    </section>
  );
}
