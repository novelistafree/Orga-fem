/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HotmartProvider } from './context/HotmartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromotionalVideo } from './components/PromotionalVideo';
import { ProblemSolution } from './components/ProblemSolution';
import { AudienceSection } from './components/AudienceSection';
import { OrgasmTypesExplorer } from './components/OrgasmTypesExplorer';
import { TableOfContents } from './components/TableOfContents';
import { BenefitsSection } from './components/BenefitsSection';
import { AuthorBio } from './components/AuthorBio';
import { PricingOffers } from './components/PricingOffers';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyCtaBar } from './components/StickyCtaBar';
import { SampleReaderModal } from './components/SampleReaderModal';
import { HotmartConfigModal } from './components/HotmartConfigModal';

export default function App() {
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);

  return (
    <HotmartProvider>
      <div className="min-h-screen bg-[#0e0714] text-pink-50 selection:bg-pink-600 selection:text-white relative overflow-x-hidden">
        {/* Navigation Bar */}
        <Navbar onOpenSampleModal={() => setIsSampleModalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero Section with 3D Book Mockup, Countdown & Direct Hotmart CTA */}
          <Hero onOpenSampleModal={() => setIsSampleModalOpen(true)} />

          {/* 2. Official Promotional Video (1:30 min) with Live Narration & Hotmart CTA */}
          <PromotionalVideo />

          {/* 3. Problem vs Solution & Paradigm Shift */}
          <ProblemSolution />

          {/* 3. Target Audience: Para quién es este libro */}
          <AudienceSection />

          {/* 4. Interactive 14 Types of Orgasms Explorer (Chapters 10 & 11) */}
          <OrgasmTypesExplorer />

          {/* 5. Complete Table of Contents (13 Chapters Breakdown) */}
          <TableOfContents onOpenSampleModal={() => setIsSampleModalOpen(true)} />

          {/* 6. Medical and Health Benefits (Pelvic tone, endorphins, cortisol relief) */}
          <BenefitsSection />

          {/* 7. Author Biography (Héctor D.M.S., Silva Method, 18+ years) */}
          <AuthorBio />

          {/* 8. Pricing & Packages with Direct Checkout Buttons */}
          <PricingOffers />

          {/* 9. Testimonials & Social Proof */}
          <Testimonials />

          {/* 10. Frequently Asked Questions */}
          <FaqSection />
        </main>

        {/* Footer with Medical Disclaimer and Hotmart Policy */}
        <Footer onOpenSampleModal={() => setIsSampleModalOpen(true)} />

        {/* Sticky Buy Bar on scroll */}
        <StickyCtaBar />

        {/* Interactive Modals */}
        <SampleReaderModal
          isOpen={isSampleModalOpen}
          onClose={() => setIsSampleModalOpen(false)}
        />
        <HotmartConfigModal />
      </div>
    </HotmartProvider>
  );
}

