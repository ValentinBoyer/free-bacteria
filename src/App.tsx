import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { RealitySection } from './components/RealitySection';
import { ForensicViewer } from './components/ForensicViewer';
import { EthicalHypocrisy } from './components/EthicalHypocrisy';
import { InfiltrationDossiers } from './components/InfiltrationDossiers';
import { ManifestoSection } from './components/ManifestoSection';
import { DonationSection } from './components/DonationSection';
import { PetitionSection } from './components/PetitionSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f1f1f1] flex flex-col font-sans selection:bg-red-700 selection:text-white overflow-x-hidden w-full max-w-full">
      <Header />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <HeroSection />
        <RealitySection />
        <ForensicViewer />
        <EthicalHypocrisy />
        <InfiltrationDossiers />
        <ManifestoSection />
        <DonationSection />
        <PetitionSection />
      </main>
      <Footer />
    </div>
  );
}
