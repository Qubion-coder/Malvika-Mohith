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
      <motion.div
        initial={{ scale: 1.1 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 15, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-[center_25%] sm:bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/ChatGPT%20Image%20Sep%201,%202026,%2005_31_07%20PM.png")' }}
      />





      <div className="relative z-20 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-28 text-center sm:px-8">
        {/* All text elements have been removed as requested */}
      </div>
    </section>
  );
}
