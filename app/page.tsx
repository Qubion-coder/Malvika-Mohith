'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { EnvelopeOpener } from '@/components/envelope-opener';
import HeroSection from '@/components/sections/HeroSection';
import PersonalizedWelcome from '@/components/sections/PersonalizedWelcome';
import ParentsSection from '@/components/sections/ParentsSection';

import CeremonyDetails from '@/components/sections/CeremonyDetails';
import CountdownSection from '@/components/sections/CountdownSection';

import VenueLocation from '@/components/sections/VenueLocation';
import RSVPSection from '@/components/sections/RSVPSection';
import BlessingsSection from '@/components/sections/BlessingsSection';
import FooterSection from '@/components/sections/FooterSection';
import CreativeImageSection from '@/components/sections/CreativeImageSection';
import MusicPlayer from '@/components/MusicPlayer';

function HomeContent() {
  const [isOpened, setIsOpened] = useState(false);
  const searchParams = useSearchParams();

  const guestName = searchParams.get('to');
  const guestTitle = searchParams.get('t');
  const personalizedName = guestName ? `${guestTitle ? guestTitle + ' ' : ''}${guestName}` : '';

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('scroll-smooth');
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden bg-background">
      {/* Persistent floating music player */}
      <MusicPlayer />

      {!isOpened ? (
        <EnvelopeOpener
          onEnvelopeOpen={() => setIsOpened(true)}
          guestName={personalizedName}
        />
      ) : (
        <>
          <HeroSection />
          <PersonalizedWelcome guestName={personalizedName} />
          <ParentsSection />

          <CeremonyDetails />
          <CreativeImageSection imageSrc="/1.jpeg" overlayText="A Sacred Bond" />
          <CountdownSection />
          <CreativeImageSection imageSrc="/2.jpeg" overlayText="Forever Starts Soon" />

          <VenueLocation />
          <RSVPSection guestName={personalizedName} />
          <CreativeImageSection imageSrc="/3.jpeg" overlayText="Celebrate With Us" />
          <BlessingsSection />
          <FooterSection />
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-primary font-serif italic text-xl">Loading Invitation...</div>}>
      <HomeContent />
    </Suspense>
  );
}
