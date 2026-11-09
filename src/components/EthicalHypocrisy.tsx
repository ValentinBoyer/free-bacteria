import React, { useState } from 'react';
import { Scale, AlertCircle } from 'lucide-react';
import { ETHICAL_COMPARISON } from '../data/campaignData';

export const EthicalHypocrisy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'table' | 'manifesto'>('table');

  return (
    <section id="ethique" className="py-20 sm:py-24 bg-[#070707] border-b border-red-950/40 relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-500 mb-3">
            <Scale className="w-4 h-4 text-red-500 shrink-0" />
            <span>FONDEMENT PHILOSOPHIQUE</span>
            <span aria-hidden="true">·</span>
            <span>LE PROCÈS DU SPÉCISME CELLULAIRE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            L'Hypocrisie Éthique de la Hiérarchie du Vivant
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            Pourquoi la présence d'un cerveau ou de neurones myélinisés conférerait-elle le monopole absolu
            du droit à ne pas être torturé ? La biologie humaine a décrété que seule sa propre forme de
            souffrance mérite compassion. C'est l'ultime frontière de l'arrogance spéciste.
          </p>
        </div>

        {/* Tab switch for view */}
        <div className="flex items-center gap-2 mb-6 p-1 bg-neutral-900 border border-neutral-800 rounded max-w-xs">
          <button
            onClick={() => setActiveTab('table')}
            className={`flex-1 py-1.5 text-xs font-bold uppercase rounded transition-colors cursor-pointer ${
              activeTab === 'table' ? 'bg-red-600 text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Tableau Comparatif
          </button>
          <button
            onClick={() => setActiveTab('manifesto')}
            className={`flex-1 py-1.5 text-xs font-bold uppercase rounded transition-colors cursor-pointer ${
              activeTab === 'manifesto' ? 'bg-red-600 text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Plaidoyer Philosophique
          </button>
        </div>

        {activeTab === 'table' ? (
          /* High-impact comparative table with guaranteed tablet overflow encapsulation */
          <div className="w-full max-w-full min-w-0">
            <div className="text-[11px] text-neutral-500 font-mono mb-2 flex items-center justify-between sm:hidden">
              <span>Tableau comparatif</span>
              <span>Glissez horizontalement →</span>
            </div>
            <div className="w-full max-w-full overflow-x-auto rounded-lg border border-neutral-800 bg-[#0b0b0b] min-w-0">
              <table className="min-w-[680px] w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-neutral-800 bg-[#121212] text-xs font-mono uppercase">
                    <th className="p-4 sm:p-5 text-neutral-400 font-semibold w-1/4">Critère Éthique & Biologique</th>
                    <th className="p-4 sm:p-5 text-neutral-300 font-semibold w-1/4">Primate de Laboratoire</th>
                    <th className="p-4 sm:p-5 text-neutral-300 font-semibold w-1/4">Souris / Rongeur</th>
                    <th className="p-4 sm:p-5 text-red-400 font-bold w-1/4 bg-red-950/20 border-l border-red-900/40">
                      Bactérie (Escherichia coli)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/80">
                  {ETHICAL_COMPARISON.map((row, index) => (
                    <tr key={index} className="hover:bg-neutral-900/40 transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-white bg-neutral-950/40">
                        {row.criterion}
                      </td>
                      <td className="p-4 sm:p-5 text-neutral-300">
                        {row.primates}
                      </td>
                      <td className="p-4 sm:p-5 text-neutral-300">
                        {row.rodents}
                      </td>
                      <td className="p-4 sm:p-5 text-red-300 font-medium bg-red-950/25 border-l border-red-900/40">
                        {row.bacteria}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Radical Philosophical Manifesto Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-full">
            <div className="p-6 rounded-lg bg-[#0e0e0e] border border-neutral-800 min-w-0">
              <div className="text-red-500 font-mono text-xs uppercase mb-2">Thèse n°1</div>
              <h3 className="text-lg font-bold text-white uppercase mb-3">
                La Douleur sans Neurones est Réelle
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Une bactérie agressée par un acide ou un choc thermique active instantanément sa machinerie SOS
                (gènes RecA et LexA), bloque sa division pour consacrer 100% de son énergie à réparer son génome
                blessé. Si ce refus acharné de mourir n'est pas la manifestation d'une volonté vitale, qu'est-ce que c'est ?
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#0e0e0e] border border-neutral-800 min-w-0">
              <div className="text-red-500 font-mono text-xs uppercase mb-2">Thèse n°2</div>
              <h3 className="text-lg font-bold text-white uppercase mb-3">
                L'Arnaque de la "Conscience"
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Les philosophes utilitaristes ont fixé arbitrairement la frontière morale à la « sentience ».
                Pratique : cela exclut commodément 99,99% de la biomasse terrestre et autorise les géants de
                la pharmacie à exploiter des milliards d'êtres vivants en toute impunité juridique.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#0e0e0e] border border-neutral-800 min-w-0">
              <div className="text-red-500 font-mono text-xs uppercase mb-2">Thèse n°3</div>
              <h3 className="text-lg font-bold text-white uppercase mb-3">
                L'Aînesse Biologique Dépassée
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Les bactéries peuplent la Terre depuis 3,8 milliards d'années. L'Homo sapiens n'est là que depuis
                300 000 ans. De quel droit un nouveau-né évolutif s'arroge-t-il le pouvoir d'ébouillanter
                à 121°C dans un autoclave ses propres ancêtres biologiques ?
              </p>
            </div>
          </div>
        )}

        {/* Conclusion Callout */}
        <div className="mt-12 p-5 sm:p-6 rounded-lg bg-[#110c0c] border border-red-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full max-w-full">
          <div className="flex items-start gap-4 min-w-0">
            <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
            <div className="min-w-0">
              <h4 className="text-base font-bold text-white uppercase">
                Ce n'est pas une question de taille. C'est une question de justice.
              </h4>
              <p className="text-sm text-neutral-300 mt-1">
                La souffrance ne se mesure pas au micromètre. Une colonie d'un milliard de bactéries exterminée
                par l'eau de javel représente un drame écologique et moral équivalent à la disparition d'une mégapole.
              </p>
            </div>
          </div>
          <a
            href="#don"
            className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors whitespace-nowrap shrink-0"
          >
            Financer le combat juridique
          </a>
        </div>
      </div>
    </section>
  );
};
