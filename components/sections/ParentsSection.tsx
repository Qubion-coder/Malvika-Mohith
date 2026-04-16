'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users } from 'lucide-react';

export default function ParentsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-secondary/10 to-transparent hidden md:block" />
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 mb-4">
            <Users className="h-4 w-4 text-secondary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">With the Blessings of Parents</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light tracking-tight">
            Our Beloved <span className="italic text-primary font-normal">Families</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-px relative">
          {/* Groom's Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center px-4 md:px-12"
          >
            <div className="mb-6 relative">
              <div className="p-3 rounded-full border-2 border-primary/20 bg-white">
                <Heart className="h-6 w-6 text-primary fill-primary/10" />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <h3 className="font-serif text-3xl text-primary uppercase tracking-wider">Don Kavindu</h3>
              <p className="text-sm italic text-foreground/50 font-medium">Son of</p>
            </div>

            <div className="space-y-1">
              <p className="font-serif text-2xl text-foreground">Achala Duminda</p>
              <p className="text-secondary/40 text-sm font-bold uppercase tracking-[0.2em]">&amp;</p>
              <p className="font-serif text-2xl text-foreground">Kumudini Priyanka</p>
            </div>
          </motion.div>

          {/* Bride's Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center text-center px-4 md:px-12"
          >
            <div className="mb-6 relative">
              <div className="p-3 rounded-full border-2 border-secondary/20 bg-white">
                <Heart className="h-6 w-6 text-secondary fill-secondary/10" />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <h3 className="font-serif text-3xl text-secondary uppercase tracking-wider">Nikitha</h3>
              <p className="text-sm italic text-foreground/50 font-medium">Daughter of</p>
            </div>

            <div className="space-y-1">
              <p className="font-serif text-2xl text-foreground">Jimmy Rickado Reimers</p>
              <p className="text-primary/40 text-sm font-bold uppercase tracking-[0.2em]">&amp;</p>
              <p className="font-serif text-2xl text-foreground">Ishwara Angela</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
