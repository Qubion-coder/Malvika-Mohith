'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock3, MapPin, Sparkles, Crown, Heart, Cross } from 'lucide-react';
import Image from 'next/image';

export default function CeremonyDetails() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const detailGroups = [
    {
      key: 'church',
      title: 'Church',
      timeLabel: 'Church Time',
      timeValue: '3:00 PM',
      timeSub: 'Holy wedding ceremony',
      venueLabel: 'Church Venue',
      venueValue: "Queen of Angels Church - Rawatawatte",
      venueSub: 'Live location available',
    },
    {
      key: 'function',
      title: 'Function',
      timeLabel: 'Function Time',
      timeValue: '6:00 PM',
      timeSub: 'Reception and celebration',
      venueLabel: 'Function Venue',
      venueValue: 'Paradise Inn Bolgoda',
      venueSub: 'Live location available',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white px-4 sm:px-6 lg:px-8 py-24 md:py-32"
    >
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-full opacity-[0.05]"
          style={{ backgroundImage: `radial-gradient(circle at 20px 20px, var(--secondary) 1px, transparent 1px)`, backgroundSize: '36px 36px' }} />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[40rem] w-[40rem] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 md:gap-16 lg:gap-24">

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative flex justify-center perspective-[1000px]"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative h-[420px] sm:h-[520px] md:h-[600px] w-full max-w-[420px] overflow-hidden rounded-[30px] md:rounded-t-[200px] md:rounded-b-[30px] border-4 border-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] bg-neutral-100"
            >
              <div className="absolute inset-4 rounded-t-[180px] rounded-b-[20px] border border-secondary/20 hidden md:block" />

              <Image
                src="/images/IMG_0459.JPG.jpeg"
                alt="Don Kavindu and Nikitha"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,190,198,0.15),transparent_48%)]" />

              <div className="relative z-10 flex h-full flex-col items-end justify-end p-8 text-right text-white">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                  <Cross className="h-3.5 w-3.5 text-white" />
                  <p className="text-[10px] uppercase tracking-[0.32em] text-white font-bold">Blessed Union</p>
                </div>
                <h3 className="mt-4 font-serif text-4xl text-white uppercase">
                  DON KAVINDU <span className="text-secondary">&amp;</span> NIKITHA
                </h3>
              </div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-10 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-primary shadow-xl backdrop-blur-md"
              >
                <div className="text-center">
                  <Heart className="mx-auto h-6 w-6 text-white fill-white" />
                </div>
              </motion.div>

              {/* Sparkle effects */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-10 top-20 h-3 w-3 rounded-full bg-[#fdf8f0] blur-[2px]"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute right-20 bottom-32 h-4 w-4 rounded-full bg-[#C9A227] blur-[2px]"
              />
            </motion.div>
          </motion.div>

          {/* Details Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-secondary/30 bg-secondary/5 px-5 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-xs uppercase tracking-[0.3em] text-secondary font-bold">
                The Sacred Celebration
              </span>
            </div>

            <h2 className="mb-8 font-serif text-5xl font-light leading-snug text-foreground md:text-7xl">
              Wedding <br />
              <span className="italic text-primary">Ceremony</span>
            </h2>

            <p className="mb-12 text-lg leading-relaxed text-foreground/70 max-w-lg">
              With immense joy in our hearts, we invite you to share our happiness as we exchange our vows before God. Join us for a sacred Christian celebration of faith, love, and lifelong commitment.
            </p>

            <div className="flex flex-col gap-5">
              {detailGroups.map((group, index) => {
                return (
                  <motion.div
                    key={group.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10, backgroundColor: 'rgba(255,190,198,0.05)' }}
                    className="group relative overflow-hidden rounded-2xl border border-secondary/20 bg-white p-5 shadow-sm transition-all cursor-default"
                  >
                    <div className="absolute left-0 top-0 w-1 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />

                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-secondary/70 font-bold">{group.title} Details</p>
                    </div>

                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/30 bg-secondary/10 shadow-inner">
                          <Clock3 className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-secondary font-bold mb-1">{group.timeLabel}</p>
                          <h3 className="font-serif text-2xl text-foreground font-semibold">{group.timeValue}</h3>
                          <p className="text-sm text-foreground/60 mt-1">{group.timeSub}</p>
                        </div>
                      </div>

                      <div className="h-px w-full bg-secondary/10" />

                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/30 bg-secondary/10 shadow-inner">
                          <MapPin className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-secondary font-bold mb-1">{group.venueLabel}</p>
                          <h3 className="font-serif text-2xl text-foreground font-semibold">{group.venueValue}</h3>
                          <p className="text-sm text-foreground/60 mt-1">{group.venueSub}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-12 overflow-hidden rounded-2xl border border-secondary/20 bg-secondary/5 p-6 shadow-sm backdrop-blur-lg relative"
            >
              <div className="absolute right-0 top-0 opacity-10">
                <Crown className="w-32 h-32 -mt-8 -mr-8 text-secondary" />
              </div>

              <h4 className="text-xs uppercase tracking-widest text-secondary mb-3 font-bold flex items-center gap-2">
                <span className="w-6 h-[1px] bg-secondary"></span> Guest Notes
              </h4>
              <div className="space-y-2">
                <p className="text-foreground/80 text-sm md:text-base font-medium"><span className="text-secondary font-bold">Dress Code:</span> Church Formal / Elegant Attire</p>
                <p className="text-foreground/80 text-sm md:text-base font-medium"><span className="text-secondary font-bold">Reception:</span> Function starts at 6:00 PM at Paradise Inn Bolgoda</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}