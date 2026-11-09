import React, { useState } from 'react';
import { Flame, Skull, Dna, AlertOctagon } from 'lucide-react';
import { CAMPAIGN_ARGUMENTS } from '../data/campaignData';
import pipetteExecutionImg from '../assets/images/pipette_execution_weapon_1793882702997.jpg';

export const RealitySection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Flame':
        return <Flame className="w-6 h-6 text-red-500" />;
      case 'Biohazard':
        return <Skull className="w-6 h-6 text-[#00ff66]" />;
      case 'Dna':
        return <Dna className="w-6 h-6 text-amber-500" />;
      default:
        return <AlertOctagon className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="realite" className="py-20 sm:py-24 bg-[#080808] border-b border-red-950/40 relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-500 mb-3">
            <span>AUDIT MÉTHODOLOGIQUE</span>
            <span aria-hidden="true">·</span>
            <span>LES 3 PILIERS DE LA BARBARIE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            La Réalité Occultée des Laboratoires
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Derrière les murs immaculés des universités et des centres pharmaceutiques, les scientifiques
            dissimulent sous un jargon aseptisé les pires sévices jamais infligés au vivant. Voici ce qui
            se passe réellement derrière leurs portes blindées.
          </p>
        </div>

        {/* Feature Visual Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16 w-full max-w-full">
          {/* Main Photo Anchor Card (col-span-5) */}
          <div className="lg:col-span-5 relative rounded-lg overflow-hidden border border-red-900/50 bg-black flex flex-col justify-between w-full min-w-0">
            <div className="relative h-72 sm:h-80 lg:h-full min-h-[320px] bg-neutral-950 flex items-center justify-center">
              {!imgError ? (
                <img
                  src={pipetteExecutionImg}
                  alt="Micropipette de laboratoire surplombant une boîte de culture comme une potence"
                  className="w-full h-full object-cover object-center brightness-90 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    // Fallback to static public path if needed
                    const img = new Image();
                    img.src = '/images/pipette_execution_weapon_1793882702997.jpg';
                    img.onload = (e) => {
                      (e.target as HTMLImageElement).src = '/images/pipette_execution_weapon_1793882702997.jpg';
                    };
                    img.onerror = () => setImgError(true);
                  }}
                />
              ) : (
                <div className="p-8 text-center flex flex-col items-center justify-center">
                  <AlertOctagon className="w-12 h-12 text-red-500 mb-2" />
                  <div className="text-xs font-mono uppercase text-red-400 font-bold">PIÈCE À CONVICTION N°08</div>
                  <div className="text-xs text-neutral-400 mt-1">Micropipette multicanal de laboratoire</div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 bg-red-950/80 border border-red-800 text-red-200 text-xs font-mono px-3 py-1 rounded">
                PIÈCE À CONVICTION N°08
              </div>
            </div>

            <div className="p-6 bg-[#0c0c0c] border-t border-red-900/40">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                Instrument d'exécution
              </div>
              <h3 className="text-lg font-bold text-white uppercase">
                La Pipette Multicanal : Le Peloton d'Exécution Moderne
              </h3>
              <p className="text-sm text-neutral-300 mt-2">
                Chaque pointe en polypropylène propulse simultanément des doses létales de sulfate de kanamycine
                sur 96 puits distincts. 96 micro-villes bactériennes rayées de la carte en 0,4 seconde.
              </p>
            </div>
          </div>

          {/* 3 Pillars Explanatory Cards (col-span-7) */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between w-full min-w-0">
            {CAMPAIGN_ARGUMENTS.map((arg, index) => (
              <div
                key={arg.id}
                className="p-6 rounded-lg bg-[#0e0e0e] border border-neutral-800 hover:border-red-900/60 transition-all group w-full min-w-0"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded bg-black border border-neutral-800 group-hover:border-red-900/50 shrink-0">
                      {getIcon(arg.iconName)}
                    </div>
                    <div>
                      <div className="text-xs font-mono text-neutral-500 uppercase">
                        Argument 0{index + 1}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
                        {arg.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-red-400 bg-red-950/40 border border-red-900/40 px-2 py-0.5 rounded shrink-0">
                    {arg.stats}
                  </span>
                </div>

                <div className="text-sm font-semibold text-neutral-200 mb-2">
                  {arg.subtitle}
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  {arg.description}
                </p>

                {/* Euphemism vs Reality comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-neutral-800/80 text-xs">
                  <div className="bg-neutral-950/70 p-2.5 rounded border border-neutral-800">
                    <span className="text-neutral-500 block font-mono uppercase mb-0.5">Leurre Académique :</span>
                    <span className="text-neutral-300 italic">{arg.labJargon}</span>
                  </div>
                  <div className="bg-red-950/20 p-2.5 rounded border border-red-900/40">
                    <span className="text-red-400 block font-mono uppercase mb-0.5">La Réalité Vécue :</span>
                    <span className="text-red-200 font-medium">{arg.militantVerdict}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investigative Quote Callout */}
        <div className="p-6 rounded-lg bg-[#0d0909] border border-red-900/40 text-neutral-300 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 w-full">
          <div className="p-4 rounded-full bg-red-950/80 border border-red-800 text-red-400 shrink-0">
            <AlertOctagon className="w-8 h-8" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-mono uppercase tracking-wider text-red-500 mb-1">
              TÉMOIGNAGE SOUS COUVERT D'ANONYMAT
            </div>
            <blockquote className="text-sm sm:text-base italic text-neutral-200">
              « Pendant ma thèse, j'ai passé au bain-marie à 42°C puis à l'autoclave plus de 20 000 boîtes de Petri.
              On nous apprenait à les considérer comme de la simple matière inerte. Mais quand vous observez la
              vitesse à laquelle leurs flagelles tentent de battre pour fuir la chaleur, vous comprenez que
              la biologie a commis une erreur morale impardonnable. »
            </blockquote>
            <div className="text-xs text-neutral-400 mt-2 font-mono">
              — Ancien chercheur post-doctoral à l'INSERM, rallié au Front de Libération des Micro-organismes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
