import React, { useState } from 'react';
import { PenTool, CheckCircle, Users, Share2, Sparkles } from 'lucide-react';

interface Signer {
  name: string;
  role: string;
  city: string;
  timeAgo: string;
}

const INITIAL_SIGNERS: Signer[] = [
  { name: 'Dr. Valérie T.', role: 'Biologiste cellulaire repentie', city: 'Marseille', timeAgo: 'Il y a 3 min' },
  { name: 'Alexandre G.', role: 'Étudiant en M1 biochimie', city: 'Paris', timeAgo: 'Il y a 7 min' },
  { name: 'Claire B.', role: 'Enseignante en SVT', city: 'Nantes', timeAgo: 'Il y a 14 min' },
  { name: 'Matthieu L.', role: 'Ingénieur en modélisation in silico', city: 'Lyon', timeAgo: 'Il y a 22 min' },
  { name: 'Sarah D.', role: 'Citoyenne antispéciste', city: 'Toulouse', timeAgo: 'Il y a 35 min' },
];

export const PetitionSection: React.FC = () => {
  const [signers, setSigners] = useState<Signer[]>(INITIAL_SIGNERS);
  const [totalSignatures, setTotalSignatures] = useState<number>(78419);
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [signed, setSigned] = useState<boolean>(false);

  const handleSign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newSigner: Signer = {
      name: name.trim(),
      role: role.trim() || 'Citoyen engagé',
      city: city.trim() || 'France',
      timeAgo: 'À l’instant',
    };

    setSigners([newSigner, ...signers]);
    setTotalSignatures((prev) => prev + 1);
    setSigned(true);
  };

  return (
    <section id="petition" className="py-20 sm:py-24 bg-[#080808] border-b border-red-950/40 relative w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-500 mb-3">
            <PenTool className="w-4 h-4 text-red-500 shrink-0" />
            <span>MOBILISATION CITOYENNE</span>
            <span aria-hidden="true">·</span>
            <span>ACTION LÉGISLATIVE IMMÉDIATE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            Exigez un Moratoire Immédiat sur l'Autoclavage Sauvage
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            Adressez une sommation légale au Ministère de l'Enseignement Supérieur et de la Recherche
            pour imposer le remplacement des cultures in vivo par les modèles algorithmiques in silico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full max-w-full">
          {/* Petition Form (col-span-7) */}
          <div className="lg:col-span-7 bg-[#0d0d0d] border border-neutral-800 rounded-xl p-6 sm:p-8 w-full min-w-0">
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-mono uppercase mb-2">
                <span className="text-neutral-400">Progression vers le seuil parlementaire</span>
                <span className="text-red-400 font-bold tabular-nums">
                  {totalSignatures.toLocaleString('fr-FR')} / 100 000 signatures
                </span>
              </div>
              <div className="w-full h-3 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                <div
                  className="h-full bg-gradient-to-r from-red-700 to-red-500 rounded-full transition-all duration-700"
                  style={{ width: `${Math.min(100, (totalSignatures / 100000) * 100)}%` }}
                />
              </div>
            </div>

            {signed ? (
              <div className="p-6 bg-red-950/20 border border-red-900/50 rounded-lg text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white uppercase">
                  Signature enregistrée dans les registres du F.L.M.
                </h3>
                <p className="text-xs text-neutral-300 mt-2">
                  Merci, {name}. Votre voix a été transmise aux parlementaires pour la prochaine séance
                  de la commission d'éthique de la recherche biologique.
                </p>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Arrêtez le massacre des bactéries',
                        text: 'J’ai signé la pétition pour interdire la torture d’Escherichia coli en laboratoire.',
                        url: window.location.href,
                      });
                    }
                  }}
                  className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-xs uppercase font-mono font-bold inline-flex items-center gap-2 cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Partager cette pétition</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSign} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Pr. Julien Renard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black border border-neutral-800 rounded px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                      Profession / Statut
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Étudiant en biologie, Chercheur, Citoyen"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-black border border-neutral-800 rounded px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                      Ville / Département
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Paris (75)"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-black border border-neutral-800 rounded px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="text-xs text-neutral-400 p-3 bg-neutral-950 rounded border border-neutral-900">
                  En signant, vous exigez l’obligation légale d’évaluation par un comité éthique
                  avant tout protocole de lyse ou d’autoclavage de souches bactériennes.
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  Signer le manifeste solennel
                </button>
              </form>
            )}
          </div>

          {/* Live Recent Signatures Stream (col-span-5) */}
          <div className="lg:col-span-5 bg-[#0d0d0d] border border-neutral-800 rounded-xl p-6">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-neutral-300">
                <Users className="w-4 h-4 text-red-500" />
                <span>Signatures Récentes en Direct</span>
              </div>
              <span className="text-[10px] font-mono text-[#00ff66] bg-green-950/40 border border-green-900/40 px-2 py-0.5 rounded">
                Flux Vérifié
              </span>
            </div>

            <div className="space-y-3">
              {signers.slice(0, 5).map((signer, i) => (
                <div
                  key={i}
                  className="p-3 rounded bg-black/60 border border-neutral-800/80 flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-bold text-white">{signer.name}</div>
                    <div className="text-neutral-400 text-[11px]">{signer.role} · {signer.city}</div>
                  </div>
                  <div className="text-neutral-500 font-mono text-[10px] shrink-0">
                    {signer.timeAgo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
