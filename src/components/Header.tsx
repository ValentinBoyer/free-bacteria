import React, { useState } from 'react';
import { ShieldAlert, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#070707]/95 backdrop-blur-md border-b border-red-950/40 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full max-w-full">
        <div className="flex items-center justify-between gap-2 sm:gap-4 xl:gap-8 h-16 w-full max-w-full">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-white font-extrabold tracking-tight text-xs sm:text-sm xl:text-base hover:text-red-500 transition-colors shrink min-w-0"
          >
            <ShieldAlert className="w-5 h-5 text-red-600 shrink-0" />
            <span className="font-display tracking-wider truncate">
              FRONT DE LIBÉRATION DES MICRO-ORGANISMES
            </span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links (active on desktop 1280px+ so iPad never overflows) */}
          <nav className="hidden xl:flex items-center gap-6 text-xs xl:text-sm font-medium text-neutral-300 shrink-0">
            <button
              onClick={() => scrollTo('realite')}
              className="hover:text-red-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              La Réalité des Labs
            </button>
            <button
              onClick={() => scrollTo('scanner')}
              className="hover:text-red-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              Scanner de l'Agonie
            </button>
            <button
              onClick={() => scrollTo('ethique')}
              className="hover:text-red-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              Hypocrisie Éthique
            </button>
            <button
              onClick={() => scrollTo('preuves')}
              className="hover:text-red-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              Preuves Infiltrées
            </button>
            <button
              onClick={() => scrollTo('manifeste')}
              className="hover:text-red-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              Déclaration des Droits
            </button>
            <button
              onClick={() => scrollTo('petition')}
              className="hover:text-red-400 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              Pétition
            </button>
          </nav>

          {/* Zone 3: 1 primary action + hamburger for tablets/mobile */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => scrollTo('don')}
              className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs uppercase tracking-wider px-3 sm:px-4 py-2 rounded transition-all shadow-md hover:shadow-red-900/40 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span className="hidden sm:inline">Arrêter le massacre</span>
              <span className="sm:hidden">Agir</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-neutral-400 hover:text-white shrink-0 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0a0a] border-b border-red-900/40 px-4 py-4 space-y-3 w-full">
          <button
            onClick={() => scrollTo('realite')}
            className="block w-full text-left text-sm font-medium text-neutral-300 hover:text-red-400 py-1.5 cursor-pointer"
          >
            La Réalité des Labs
          </button>
          <button
            onClick={() => scrollTo('scanner')}
            className="block w-full text-left text-sm font-medium text-neutral-300 hover:text-red-400 py-1.5 cursor-pointer"
          >
            Scanner de l'Agonie Microscopique
          </button>
          <button
            onClick={() => scrollTo('ethique')}
            className="block w-full text-left text-sm font-medium text-neutral-300 hover:text-red-400 py-1.5 cursor-pointer"
          >
            Hypocrisie Éthique (Tableau & Thèses)
          </button>
          <button
            onClick={() => scrollTo('preuves')}
            className="block w-full text-left text-sm font-medium text-neutral-300 hover:text-red-400 py-1.5 cursor-pointer"
          >
            Preuves & Dossiers Infiltrés
          </button>
          <button
            onClick={() => scrollTo('manifeste')}
            className="block w-full text-left text-sm font-medium text-neutral-300 hover:text-red-400 py-1.5 cursor-pointer"
          >
            Déclaration des Droits de la Bactérie
          </button>
          <button
            onClick={() => scrollTo('petition')}
            className="block w-full text-left text-sm font-medium text-neutral-300 hover:text-red-400 py-1.5 cursor-pointer"
          >
            Pétition Nationale
          </button>
        </div>
      )}
    </header>
  );
};
