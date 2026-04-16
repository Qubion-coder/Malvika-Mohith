'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, MapPin, Navigation, Sparkles } from 'lucide-react';

const LIVE_LOCATION_URL = 'https://www.google.com/maps/search/?api=1&query=Chiesa+di+San+Bernardino+alle+Ossa+Piazza+Santo+Stefano+Milano';
const FUNCTION_LOCATION_URL = 'https://www.google.com/maps/search/?api=1&query=Piazza+Giuseppe+Resta+9+20009+Vittuone+MI';

export default function VenueLocation() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8 md:py-32"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 55, 0], y: [0, 35, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-[12%] -top-[8%] h-[52vw] w-[52vw] rounded-full bg-gradient-to-br from-primary/20 to-secondary/15 opacity-75 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -45, 0], y: [0, -45, 0], scale: [1, 1.18, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -right-[10%] top-[34%] h-[44vw] w-[44vw] rounded-full bg-gradient-to-tl from-[#eadcff] to-[#ffdfe9] opacity-60 blur-[110px]"
        />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 11px 11px, rgba(181,124,83,0.38) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, type: 'spring', stiffness: 100 }}
          className="mb-14 text-center md:mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-white/70 px-5 py-2.5 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-secondary sm:text-sm">
              Church & Reception Venues
            </span>
          </motion.div>

          <h2 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-7xl">
            Venue <span className="relative inline-block text-primary">
              Location
              <motion.svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full"
                viewBox="0 0 100 20" preserveAspectRatio="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              >
                <motion.path
                  d="M0 10 Q 25 20, 50 10 T 100 10"
                  fill="none"
                  stroke="var(--secondary)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Church Venue */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="group relative bg-white/70 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 shadow-[0_15px_45px_rgba(0,0,0,0.05)] border-2 border-white text-center hover:shadow-xl transition-all duration-500"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-lg transform rotate-6 group-hover:rotate-12 transition-transform">
              <MapPin className="h-8 w-8 text-white" />
            </div>

            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/60 mb-2">The Ceremony</p>
            <h3 className="font-serif text-3xl text-foreground font-semibold mb-3">CHIESA DI <br />SAN BERNARDINO</h3>
            <p className="text-xs text-foreground/50 mb-8 uppercase tracking-[0.2em] leading-relaxed max-w-[240px] mx-auto">PIAZZA SANTO STEFANO <br /> 20122 MILANO MI</p>

            <a
              href={LIVE_LOCATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 bg-secondary text-white px-8 py-5 rounded-2xl text-[11px] font-bold uppercase tracking-[0.25em] shadow-[0_10px_30px_rgba(181,197,122,0.3)] hover:scale-[1.03] active:scale-95 transition-all"
            >
              Live Location
              <Navigation className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Reception Venue */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative bg-white/70 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 shadow-[0_15px_45px_rgba(0,0,0,0.05)] border-2 border-white text-center hover:shadow-xl transition-all duration-500"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:-rotate-12 transition-transform">
              <MapPin className="h-8 w-8 text-white" />
            </div>

            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 mb-2">The Celebration</p>
            <h3 className="font-serif text-3xl text-foreground font-semibold mb-3">VILLA <br />RESTA MARI</h3>
            <p className="text-xs text-foreground/50 mb-8 uppercase tracking-[0.2em] leading-relaxed max-w-[240px] mx-auto">PIAZZA GIUSEPPE RESTA, 9, <br /> 20009 VITTUONE MI</p>

            <a
              href={FUNCTION_LOCATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 bg-primary text-white px-8 py-5 rounded-2xl text-[11px] font-bold uppercase tracking-[0.25em] shadow-[0_10px_30px_rgba(255,190,198,0.3)] hover:scale-[1.03] active:scale-95 transition-all"
            >
              Live Location
              <Navigation className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
