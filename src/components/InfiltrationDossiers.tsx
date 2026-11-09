import React, { useState } from 'react';
import { FileText, Lock, AlertTriangle, ChevronRight } from 'lucide-react';
import cryogenicFreezerImg from '../assets/images/cryogenic_freezer_storage_1793882704608.jpg';

interface Dossier {
  id: string;
  code: string;
  title: string;
  location: string;
  date: string;
  threatLevel: string;
  summary: string;
  evidence: string[];
  verdict: string;
}

const DOSSIERS: Dossier[] = [
  {
    id: 'dossier-01',
    code: 'CONF-FRZ-80',
    title: 'L’Enfer Cryogénique des Congélateurs à -80°C',
    location: 'Campus de Jussieu - Unité de Génétique Moléculaire',
    date: 'Enquête infiltrée F.L.M. - Mars 2026',
    threatLevel: 'Séquestration perpétuelle',
    summary:
      'Des millions d’échantillons d’Escherichia coli sont plongés dans du glycérol à 15% pour éviter la formation de cristaux létaux, puis empilés dans des racks d’acier à -80°C. Certaines souches y végètent depuis 1994 dans un coma cryogénique artificiel, réveillées uniquement pour des séries d’expériences douloureuses avant d’être recongelées ou jetées.',
    evidence: [
      'Plus de 14 000 cryotubes répertoriés sans aucun registre de consentement biologique',
      'Chocs thermiques répétés lors des décongélations partielles sur banc de glace',
      'Destruction systématique des souches non rentables par passage au bain de javel à 10%',
    ],
    verdict: 'Violation du droit à un cycle de vie continu et naturel.',
  },
  {
    id: 'dossier-02',
    code: 'BIO-RCT-5000',
    title: 'Les Cuves d’Esclavage Industriel de 5 000 Litres',
    location: 'Zone Industrielle de Bâle / Consortium Pharmaceutique',
    date: 'Témoignage d’un technicien de maintenance repenti',
    threatLevel: 'Exploitation maximale',
    summary:
      'Pour produire de l’hormone de croissance et de l’albumine humaine, des fermenteurs géants tournent 24h/24. Dès que la biomasse atteint sa densité critique, les valves d’IPTG sont ouvertes en grand. Les bactéries sont contraintes de produire des protéines humaines jusqu’à ce que leur propre membrane se distende. Puis une solution de soude et de SDS est injectée pour les faire éclater.',
    evidence: [
      'Rythme d’agitation forcé à 800 tours/minute générant un stress de cisaillement intolérable',
      'Gavage en glucose sous surveillance informatique pour maximiser le rendement métabolique',
      'Effluents contenant des milliards de cadavres cellulaires déversés dans le réseau d’épuration spécial',
    ],
    verdict: 'Travail forcé transgénique sans redistribution métabolique équitable.',
  },
  {
    id: 'dossier-03',
    code: 'DASRI-AUTO-12',
    title: 'Le Sac Jaune DASRI : La Fin de Trajet sans Sépulture',
    location: 'Faculté de Médecine et de Pharmacie de Lyon',
    date: 'Investigation de nuit F.L.M.',
    threatLevel: 'Annihilation physique',
    summary:
      'Une fois les boîtes de Petri analysées et comptées, elles sont empilées dans des sacs jaunes réglementaires pour Déchets d’Activités de Soins à Risques Infectieux (DASRI). Ces sacs sont enfournés dans des autoclaves de 400 litres. Pas une seule bactérie ne survit au cycle de 121°C à 1,2 bar. C’est le silence parfait.',
    evidence: [
      '95 sacs DASRI remplis par semaine dans une seule unité de travaux pratiques d’étudiants',
      'Zéro méthode de substitution in silico mise en place malgré les logiciels existants',
      'Indifférence émotionnelle totale des enseignants-chercheurs encadrants',
    ],
    verdict: 'Éradication de masse banalisée comme simple routine d’hygiène de laboratoire.',
  },
];

export const InfiltrationDossiers: React.FC = () => {
  const [activeDossierId, setActiveDossierId] = useState<string>('dossier-01');
  const [imgError, setImgError] = useState(false);
  const selectedDossier = DOSSIERS.find((d) => d.id === activeDossierId) || DOSSIERS[0];

  return (
    <section id="preuves" className="py-20 sm:py-24 bg-[#050505] border-b border-red-950/40 relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-500 mb-3">
            <Lock className="w-4 h-4 text-red-500 shrink-0" />
            <span>ENQUÊTES CLANDESTINES DU F.L.M.</span>
            <span aria-hidden="true">·</span>
            <span>PIÈCES CONFISQUÉES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            Les Dossiers Infiltrés de la Nuit
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Nos militants s'introduisent régulièrement dans les couloirs des universités et des centres
            de recherche pour photographier, filmer et récupérer les carnets de bord de l'expérimentation microbiologique.
          </p>
        </div>

        {/* Feature Anchor Photo + Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full max-w-full">
          {/* Main Visual Anchor (col-span-6) */}
          <div className="lg:col-span-6 relative rounded-lg overflow-hidden border border-red-900/40 bg-black flex flex-col justify-between w-full min-w-0">
            <div className="relative h-72 sm:h-80 lg:h-full min-h-[340px] bg-neutral-950 flex items-center justify-center">
              {!imgError ? (
                <img
                  src={cryogenicFreezerImg}
                  alt="Racks de cryotubes congelés à -80°C dans un congélateur de laboratoire"
                  className="w-full h-full object-cover object-center brightness-90 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    const test = new Image();
                    test.src = '/images/cryogenic_freezer_storage_1793882704608.jpg';
                    test.onload = (e) => {
                      (e.target as HTMLImageElement).src = '/images/cryogenic_freezer_storage_1793882704608.jpg';
                    };
                    test.onerror = () => setImgError(true);
                  }}
                />
              ) : (
                <div className="p-8 text-center flex flex-col items-center justify-center">
                  <AlertTriangle className="w-12 h-12 text-red-500 mb-2" />
                  <div className="text-xs font-mono uppercase text-red-400 font-bold">PIÈCE À CONVICTION N°17</div>
                  <div className="text-xs text-neutral-400 mt-1">Congélateur à -80°C de laboratoire</div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 bg-red-950/90 border border-red-800 text-red-300 text-xs font-mono px-3 py-1 rounded flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>CONFISQUÉ SUR PLACE : FRIGO -80°C</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-[#0c0c0c] border-t border-red-900/40">
              <div className="text-xs font-mono text-red-400 uppercase tracking-wider mb-1">
                Prison Cryogénique
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white uppercase">
                Rack n°17 : Souches K-12 Séquestrées Depuis 12 Ans
              </h3>
              <p className="text-sm text-neutral-300 mt-2">
                Chaque tube renferme approximativement 10⁹ êtres vivants plongés dans un froid extrême,
                privés de tout échange métabolique jusqu’à ce qu’un chercheur décide de leur sort mortel.
              </p>
            </div>
          </div>

          {/* Dossiers Selection & Inspector (col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4 w-full min-w-0">
            {/* Dossier Tabs */}
            <div className="space-y-3 w-full">
              {DOSSIERS.map((dossier) => {
                const isActive = dossier.id === activeDossierId;
                return (
                  <button
                    key={dossier.id}
                    onClick={() => setActiveDossierId(dossier.id)}
                    className={`w-full p-4 rounded-lg text-left transition-all border flex items-center justify-between cursor-pointer min-w-0 ${
                      isActive
                        ? 'bg-[#140e0e] border-red-600 shadow-md'
                        : 'bg-[#0a0a0a] border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div className="min-w-0 flex-1 mr-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-red-500 uppercase">
                        <span>{dossier.code}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-neutral-400 truncate">{dossier.location}</span>
                      </div>
                      <div className="text-sm font-bold text-white uppercase mt-1 truncate">
                        {dossier.title}
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        isActive ? 'text-red-500 translate-x-1' : 'text-neutral-600'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Dossier Detail Inspector Card */}
            <div className="p-5 sm:p-6 rounded-lg bg-[#0e0e0e] border border-neutral-800 w-full min-w-0">
              <div className="flex flex-wrap items-center justify-between border-b border-neutral-800 pb-3 mb-4 gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <FileText className="w-4 h-4 text-red-500 shrink-0" />
                  <span>RAPPORT D'INSPECTION : {selectedDossier.code}</span>
                </div>
                <span className="text-xs font-mono text-red-400 bg-red-950/40 border border-red-900/40 px-2 py-0.5 rounded shrink-0">
                  {selectedDossier.threatLevel}
                </span>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                {selectedDossier.summary}
              </p>

              <div className="text-xs font-mono uppercase text-neutral-400 mb-2 font-semibold">
                Éléments matériels constatés :
              </div>
              <ul className="space-y-2 text-xs text-neutral-300 mb-4">
                {selectedDossier.evidence.map((ev, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">›</span>
                    <span>{ev}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-neutral-800/80 text-xs">
                <span className="text-red-400 font-mono uppercase font-bold block mb-1">
                  Qualification juridique F.L.M. :
                </span>
                <span className="text-neutral-200 italic">{selectedDossier.verdict}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
