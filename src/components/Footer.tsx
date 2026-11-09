import React from 'react';
import { ShieldAlert, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040404] text-neutral-400 py-16 border-t border-neutral-900 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-neutral-900">
          <div>
            <div className="flex items-center gap-2 text-white font-extrabold text-base tracking-wider uppercase font-display mb-2">
              <ShieldAlert className="w-5 h-5 text-red-600" />
              <span>FRONT DE LIBÉRATION DES MICRO-ORGANISMES</span>
            </div>
            <p className="text-xs text-neutral-400 max-w-lg">
              Organisation militante internationale pour l’abolition de l’expérimentation et du broyage
              d’Escherichia coli et de l’ensemble des colonies microbiennes.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded border border-neutral-800 text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors shrink-0"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Haut de page</span>
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="flex flex-wrap items-center gap-2">
            <span>Association Loi 1901 Indépendante</span>
            <span aria-hidden="true">·</span>
            <span>Refus de toute subvention pharmaceutique</span>
            <span aria-hidden="true">·</span>
            <span>Soutien à la transition in silico</span>
          </div>

          <div>
            Tous droits réservés à la biosphère unicellulaire
          </div>
        </div>

        {/* Avertissement Légal / Disclaimer Satirique */}
        <div className="mt-8 pt-6 border-t border-neutral-900/80 text-center">
          <div className="p-4 rounded-lg bg-neutral-950/80 border border-neutral-800/80 text-neutral-400 text-xs leading-relaxed max-w-4xl mx-auto">
            <span className="text-neutral-300 font-bold uppercase tracking-wider block font-mono text-[11px] mb-1.5">
              Avertissement Légal &amp; Clause de Non-Responsabilité
            </span>
            <p className="text-neutral-400">
              Ce site web a été conçu dans un but purement satirique, humoristique et parodique.
              L’ensemble des contenus, argumentaires militants, protocoles et revendications relèvent exclusivement de la fiction satirique et ne doivent en aucun cas être interprétés comme des faits réels ou des prises de position juridiques.
              Le créateur de ce site se dédouane formellement de toute responsabilité quant aux propos tenus, à leur interprétation au premier degré ou à tout dommage direct ou indirect lié à la consultation de ce site.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
