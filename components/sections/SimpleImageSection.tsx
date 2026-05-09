'use client';

import { motion } from 'framer-motion';

interface SimpleImageSectionProps {
  imageSrc: string;
  altText?: string;
}

export default function SimpleImageSection({ imageSrc, altText = "Couple" }: SimpleImageSectionProps) {
  return (
    <div className="w-full flex justify-center py-16 md:py-24 bg-white relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-[85%] lg:w-1/3"
      >
        <div className="relative aspect-[4/5] md:h-[450px] md:aspect-auto rounded-[3rem] overflow-hidden border-[12px] border-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)]">
          <img
            alt={altText}
            className="w-full h-full object-cover object-[center_30%]"
            src={imageSrc}
          />
        </div>
      </motion.div>
    </div>
  );
}
