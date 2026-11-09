import React, { useState } from 'react';
import { BookOpen, Copy, Check, Download, Shield } from 'lucide-react';
import { MANIFESTO_ARTICLES } from '../data/campaignData';

export const ManifestoSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyManifesto = () => {
    const text = MANIFESTO_ARTICLES.map((a) => `${a.number} - ${a.title}\n${a.content}\n`).join('\n');
    navigator.clipboard.writeText(
      `DÉCLARATION UNIVERSELLE DES DROITS DES MICRO-ORGANISMES\nAdoptée par le Front de Libération des Micro-organismes\n\n${text}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const text = `DÉCLARATION UNIVERSELLE DES DROITS DES MICRO-ORGANISMES\nAdoptée par le Front de Libération des Micro-organismes (F.L.M.)\n\n${MANIFESTO_ARTICLES.map(
      (a) => `${a.number} - ${a.title}\n${a.content}\n`
    ).join('\n')}\nFait à Paris, pour valoir ce que de droit devant la communauté scientifique internationale.`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Declaration_Universelle_Droits_Bacteries_FLM.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="manifeste" className="py-20 sm:py-24 bg-[#080808] border-b border-red-950/40 relative w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-red-500 mb-3">
            <BookOpen className="w-4 h-4 text-red-500 shrink-0" />
            <span>TEXTE FONDATEUR</span>
            <span aria-hidden="true">·</span>
            <span>DROIT NATUREL CELLULAIRE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            La Déclaration des Droits de la Bactérie
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            Le texte juridique que les universités et les comités d'éthique refusent de promulguer.
            Sept articles non négociables pour mettre fin à trois siècles d'exploitation et de torture silencieuse.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6">
            <button
              onClick={handleCopyManifesto}
              className="w-full sm:w-auto px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded border border-neutral-700 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-green-500 shrink-0" /> : <Copy className="w-4 h-4 shrink-0" />}
              <span>{copied ? 'Texte copié dans le presse-papier' : 'Copier les 7 articles'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="w-full sm:w-auto px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded border border-neutral-700 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Download className="w-4 h-4 text-red-400 shrink-0" />
              <span>Télécharger le Manifeste (.txt)</span>
            </button>
          </div>
        </div>

        {/* The 7 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MANIFESTO_ARTICLES.map((art, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg bg-[#0d0d0d] border border-neutral-800 hover:border-red-900/50 transition-all ${
                index === 0 ? 'md:col-span-2 bg-[#120a0a] border-red-950/70' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase text-red-500 tracking-wider font-bold">
                  {art.number}
                </span>
                <Shield className="w-4 h-4 text-neutral-600" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                {art.title}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {art.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
