'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock3, MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function CeremonyDetails() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const detailGroups = [
    {
      key: 'pool-party',
      title: 'Pool Party',
      imagePath: '/images/icon_pool_party.jpg',
      timeLabel: 'Date & Time',
      timeValue: 'Dec 11, 1:30 PM',
      timeSub: 'Tropical Vibes',
      venueLabel: 'Venue',
      venueValue: 'POOL AREA, CITRUS WASKADUWA',
      venueSub: 'Sri Lanka',
    },
    {
      key: 'cocktail',
      title: 'Cocktail Engagement',
      imagePath: '/images/icon_cocktail.jpg',
      timeLabel: 'Date & Time',
      timeValue: 'Dec 11, 8:00 PM',
      timeSub: 'Evening Celebration',
      venueLabel: 'Venue',
      venueValue: 'GRAND BALLROOM, MANDARIN',
      venueSub: 'Sri Lanka',
    },
    {
      key: 'pheras',
      title: 'Pheras',
      imagePath: '/images/icon_pheras.jpg',
      timeLabel: 'Date & Time',
      timeValue: 'Dec 12, 3:30 PM',
      timeSub: 'Beachfront Ceremony',
      venueLabel: 'Venue',
      venueValue: 'MANDARIN SHORE HALL / BEACH',
      venueSub: 'Sri Lanka',
    },
    {
      key: 'reception',
      title: 'Wedding Reception',
      imagePath: '/images/icon_reception.jpg',
      timeLabel: 'Date & Time',
      timeValue: 'Dec 12, 8:00 PM',
      timeSub: 'Outdoor Celebration',
      venueLabel: 'Venue',
      venueValue: 'CITRUS WASKADUWA',
      venueSub: 'Sri Lanka',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#F5F1E7] px-4 sm:px-6 lg:px-8 py-24 md:py-32"
    >
      {/* Full Section Background Image with Sand Beige Overlay for Tropical Green & Ocean Blue Feel */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img src="/ChatGPT%20Image%20Sep%201,%202026,%2004_46_12%20PM.png" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#F5F1E7]/85 backdrop-blur-[2px]"></div>
      </div>

      {/* Subtle Ornaments */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-0 top-0 h-full w-full opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(circle at 20px 20px, #D4AF37 1px, transparent 1px)`, backgroundSize: '36px 36px' }} />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#1E485B]/5 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[40rem] w-[40rem] rounded-full bg-[#9E1B1B]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2 backdrop-blur-sm shadow-sm">
              <Sparkles className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
                The Sacred Celebration
              </span>
            </div>

            <h2 className="mb-6 font-serif text-5xl font-light leading-tight text-[#1E485B] md:text-7xl">
              Wedding <span className="italic text-[#9E1B1B]">Ceremony</span>
            </h2>

            <p className="mb-16 text-lg leading-relaxed text-[#1E485B]/80 max-w-2xl px-4">
              With immense joy in our hearts, we invite you to share our happiness as we exchange our vows. Join us for a beautiful celebration of faith, love, and lifelong commitment.
            </p>

            {/* Grid of Events */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full text-left px-4">
              {detailGroups.map((group, index) => {
                return (
                  <motion.div
                    key={group.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                    className="group relative overflow-hidden rounded-[2.5rem] border border-[#D4AF37]/20 bg-white/95 shadow-[0_10px_40px_rgba(30,72,91,0.06)] hover:shadow-[0_15px_50px_rgba(212,175,55,0.15)] hover:-translate-y-1 backdrop-blur-md transition-all duration-500"
                  >
                    {/* Top Accent Gradient (Gold) */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F7E7CE] to-[#D4AF37]" />

                    <div className="p-8 md:p-10 flex flex-col h-full">
                      {/* Event Header with Custom Icon */}
                      <div className="flex items-center gap-5 mb-8">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white border border-[#D4AF37]/30 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-500 overflow-hidden">
                          <img src={group.imagePath} alt={group.title} className="w-full h-full object-cover mix-blend-multiply" />
                        </div>
                        <div>
                          <h3 className="font-serif text-3xl text-[#1E485B] font-medium tracking-wide">{group.title}</h3>
                        </div>
                      </div>

                      {/* Event Details: Time & Venue */}
                      <div className="flex flex-col gap-6 flex-grow">
                        {/* Time */}
                        <div className="flex items-start gap-4">
                          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#9E1B1B]/5 border border-[#9E1B1B]/10">
                            <Clock3 className="h-4 w-4 text-[#9E1B1B]" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-1">{group.timeLabel}</p>
                            <p className="font-serif text-xl text-[#1E485B] font-medium">{group.timeValue}</p>
                            <p className="text-sm text-[#2C503D] italic mt-0.5">{group.timeSub}</p>
                          </div>
                        </div>

                        {/* Venue */}
                        <div className="flex items-start gap-4">
                          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2C503D]/5 border border-[#2C503D]/10">
                            <MapPin className="h-4 w-4 text-[#2C503D]" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-1">{group.venueLabel}</p>
                            <p className="font-serif text-xl text-[#1E485B] font-medium leading-tight">{group.venueValue}</p>
                            <p className="text-sm text-[#2C503D] italic mt-1">{group.venueSub}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Guest Notes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 w-full max-w-3xl mx-auto overflow-hidden rounded-[2rem] border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/5 via-white/40 to-[#D4AF37]/5 p-8 shadow-sm backdrop-blur-md relative text-center"
            >
              <div className="absolute right-0 top-0 opacity-15 pointer-events-none mix-blend-multiply">
                <img
                  src="/Screenshot 2026-05-08 031308.png"
                  alt="Monogram"
                  className="w-40 h-40 -mt-10 -mr-10 object-contain"
                />
              </div>

              <div className="flex flex-col items-center justify-center space-y-2">
                <h4 className="text-sm md:text-base font-serif italic text-[#1E485B]/90">
                  With love and best wishes from
                </h4>
                <p className="font-serif text-2xl md:text-3xl text-[#1E485B]">
                  Siddharth ji <span className="text-[#D4AF37] mx-1">•</span> Payal
                </p>
                <div className="flex items-center justify-center gap-4 w-full py-1">
                  <span className="w-12 h-[1px] bg-[#D4AF37]/40"></span> 
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
                    Our little ones
                  </span>
                  <span className="w-12 h-[1px] bg-[#D4AF37]/40"></span> 
                </div>
                <p className="font-serif text-xl md:text-2xl text-[#9E1B1B]">
                  Khyati &amp; Yuvraaj
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}