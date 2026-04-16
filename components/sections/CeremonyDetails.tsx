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
      timeValue: '9.30 AM',
      timeSub: 'Holy wedding ceremony',
      venueLabel: 'Church Venue',
      venueValue: "CHIESA DI SAN BERNARDINO",
      venueSub: 'PIAZZA SANTO STEFANO 20122 MILANO MI',
    },
    {
      key: 'function',
      title: 'Reception',
      timeLabel: 'Reception Time',
      timeValue: '12:30 TO 17:30 PM',
      timeSub: 'Followed by the Reception',
      venueLabel: 'Reception Venue',
      venueValue: 'VILLA RESTA MARI',
      venueSub: 'PIAZZA GIUSEPPE RESTA, 9, 20009 VITTUONE MI',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white px-4 sm:px-6 lg:px-8 py-24 md:py-32"
    >
      {/* Corner Decor */}
      <div className="absolute top-0 right-0 w-40 h-40 md:w-72 md:h-72 pointer-events-none z-0 opacity-95">
        <img src="/images/44.png" alt="" className="w-full h-full object-contain object-top-right" />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-[400px] md:w-64 md:h-[600px] pointer-events-none z-0 opacity-95">
        <img src="/images/f.png" alt="" className="w-full h-full object-contain object-bottom-left" />
      </div>

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
          <div className="w-full lg:w-1/2 relative flex justify-center items-center h-[550px] sm:h-[600px] md:h-[700px] px-4 md:px-8">
            {/* Background floating Image (2.jpeg) - Positioned Top-Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -40, y: -40 }}
              animate={inView ? { opacity: 1, scale: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
              className="absolute left-[5%] top-[8%] w-[60%] md:w-[65%] h-[50%] md:h-[55%] z-0"
            >
              <div className="relative w-full h-full overflow-hidden rounded-[30px] md:rounded-[40px] border-4 md:border-8 border-white shadow-xl md:shadow-2xl">
                <Image
                  src="/images/2.jpeg"
                  alt="Celebration"
                  fill
                  className="object-cover brightness-105"
                />
              </div>
            </motion.div>

            {/* Foreground arched Image (4.jpeg) - Positioned Bottom-Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40, y: 40 }}
              animate={inView ? { opacity: 1, scale: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="absolute right-[5%] bottom-[5%] w-[70%] md:w-[75%] h-[65%] md:h-[70%] z-10"
            >
              <div className="relative w-full h-full overflow-hidden rounded-t-[100px] md:rounded-t-[200px] rounded-b-[30px] md:rounded-b-[40px] border-4 md:border-8 border-white shadow-[0_30px_70px_rgba(0,0,0,0.2)] md:shadow-[0_45px_100px_rgba(0,0,0,0.25)]">
                 <Image
                  src="/images/4.jpeg"
                  alt="Blessed Union"
                  fill
                  className="object-cover"
                  priority
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 md:bottom-10 left-0 right-0 text-center px-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 py-1.5 md:px-4 md:py-2 backdrop-blur-md mb-2 md:mb-3">
                    <Cross className="h-3.5 w-3.5 text-white" />
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.32em] text-white font-bold">Blessed Union</p>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white uppercase">
                    THUSHANI <span className="text-secondary">&amp;</span> VIMUKTHI
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Floating Heart Accent */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-[0%] top-[15%] md:right-[-5%] md:top-[15%] z-20 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full border-4 border-white bg-primary shadow-xl backdrop-blur-md"
            >
              <Heart className="h-6 w-6 text-white fill-white" />
            </motion.div>

            {/* Sparkle effects */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-4 top-10 z-20 h-2 w-2 md:h-3 md:w-3 rounded-full bg-[#fdf8f0] blur-[1px]"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute right-10 bottom-40 z-20 h-3 w-3 md:h-4 md:w-4 rounded-full bg-[#C9A227] blur-[1px]"
            />
          </div>

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

            <h2 className="mb-6 font-serif text-4xl font-light leading-tight text-foreground md:text-7xl">
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
                          <h3 className="font-serif text-3xl text-foreground font-semibold">{group.timeValue}</h3>
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
                          <h3 className="font-serif text-3xl text-foreground font-semibold">{group.venueValue}</h3>
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
                <p className="text-foreground/80 text-sm md:text-base font-medium"><span className="text-secondary font-bold">Reception:</span> Followed by the Reception at VILLA RESTA MARI FROM 12:30 TO 17:30 PM</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}