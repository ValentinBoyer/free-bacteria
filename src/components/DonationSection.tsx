import React, { useState } from 'react';
import { ShieldCheck, Lock, HeartHandshake, CheckCircle2, Award, Printer, ArrowRight, AlertTriangle } from 'lucide-react';
import { DONATION_TIERS, DonationTier } from '../data/campaignData';

export const DonationSection: React.FC = () => {
  const [selectedTierId, setSelectedTierId] = useState<string>('tier-50');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly');
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'sepa' | 'ethical'>('card');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiry, setExpiry] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const [submittedCertificate, setSubmittedCertificate] = useState<{
    id: string;
    amount: number;
    name: string;
    frequency: string;
    date: string;
  } | null>(null);

  // Compute final amount
  const activeAmount = customAmount ? parseFloat(customAmount) || 0 : (DONATION_TIERS.find((t) => t.id === selectedTierId)?.amount || 50);

  const handleSelectTier = (tierId: string) => {
    setSelectedTierId(tierId);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (val: string) => {
    setCustomAmount(val);
    setSelectedTierId('');
  };

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeAmount <= 0) return;

    const certId = `FLM-RES-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedCertificate({
      id: certId,
      amount: activeAmount,
      name: isAnonymous ? 'Citoyen Résistant Anonyme' : (donorName || 'Citoyen Engagé'),
      frequency: frequency === 'monthly' ? 'Mensuel (Soutien Permanent)' : 'Ponctuel',
      date: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }),
    });
  };

  return (
    <section id="don" className="py-20 sm:py-24 bg-[#050505] border-b border-red-950/40 relative w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-red-500 mb-3">
            <HeartHandshake className="w-4 h-4 text-red-500 shrink-0" />
            <span>SOUTENIR LA RÉSISTANCE</span>
            <span aria-hidden="true">·</span>
            <span>INCLUSION ÉTHIQUE TOTALE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            Votre don peut stopper l'holocauste microscopique.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Nous n'avons aucune subvention gouvernementale. Les lobbys pharmaceutiques et scientifiques
            tentent de nous faire taire. Votre argent finance nos actions chocs, nos enquêtes dans les
            laboratoires universitaires et le développement de modèles informatiques pour remplacer définitivement
            l'expérimentation sur le vivant.
          </p>
        </div>

        {/* Donation Card Container */}
        <div className="max-w-4xl mx-auto rounded-xl bg-[#0b0b0b] border border-red-900/40 shadow-2xl overflow-hidden w-full max-w-full">
          {/* Frequency Selector */}
          <div className="grid grid-cols-2 bg-[#121212] border-b border-neutral-800 text-center text-xs font-mono uppercase">
            <button
              type="button"
              onClick={() => setFrequency('monthly')}
              className={`py-3.5 sm:py-4 px-2 transition-colors font-bold cursor-pointer text-[11px] sm:text-xs truncate ${
                frequency === 'monthly'
                  ? 'bg-red-950/40 text-red-400 border-b-2 border-red-500'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span className="hidden sm:inline">Don Mensuel · Soutien Continu</span>
              <span className="sm:hidden">Don Mensuel</span>
            </button>
            <button
              type="button"
              onClick={() => setFrequency('once')}
              className={`py-3.5 sm:py-4 px-2 transition-colors font-bold cursor-pointer text-[11px] sm:text-xs truncate ${
                frequency === 'once'
                  ? 'bg-red-950/40 text-red-400 border-b-2 border-red-500'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span className="hidden sm:inline">Don Ponctuel · Action d'Urgence</span>
              <span className="sm:hidden">Don Ponctuel</span>
            </button>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* Tiers Grid */}
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase mb-4">
                Sélectionnez votre palier d'impact psychologique et opérationnel :
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {DONATION_TIERS.map((tier) => {
                  const isSelected = selectedTierId === tier.id && !customAmount;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => handleSelectTier(tier.id)}
                      className={`p-5 rounded-lg text-left transition-all border cursor-pointer relative ${
                        isSelected
                          ? 'bg-[#180e0e] border-red-600 shadow-md ring-1 ring-red-500'
                          : 'bg-[#0e0e0e] border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-mono font-extrabold text-white tabular-nums">
                          {tier.amount} €
                        </span>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-red-500" />}
                      </div>
                      <div className="text-sm font-bold text-red-400 uppercase">{tier.name}</div>
                      <div className="text-xs text-neutral-300 mt-2 font-normal leading-relaxed">
                        {tier.description}
                      </div>
                      <div className="mt-3 pt-2 border-t border-neutral-800 text-[11px] text-neutral-400 font-mono">
                        Impact : {tier.impactMetrics}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Custom Amount Input */}
              <div className="mt-4 p-4 rounded-lg bg-[#0e0e0e] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-mono uppercase text-neutral-300">
                  Ou saisissez un Montant Libre de votre choix :
                </span>
                <div className="relative w-full sm:w-48">
                  <input
                    type="number"
                    min="1"
                    placeholder="Montant libre"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="w-full bg-black border border-neutral-700 rounded px-3 py-2 text-white font-mono text-sm placeholder-neutral-600 focus:outline-none focus:border-red-500"
                  />
                  <span className="absolute right-3 top-2 text-neutral-400 font-mono text-sm">€</span>
                </div>
              </div>
            </div>

            {/* Impact Statement */}
            <div className="p-4 rounded bg-red-950/20 border border-red-900/40 text-xs text-neutral-300 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-red-400 uppercase block font-mono">Engagement d'intégrité du F.L.M. :</strong>
                100% de vos dons sont alloués aux actions clandestines d'infiltration dans les laboratoires,
                aux frais de justice contre les bio-réacteurs industriels et à la subvention de simulateurs in silico libres de droit.
              </div>
            </div>

            {/* Donor & Payment Form */}
            <form onSubmit={handleSubmitDonation} className="space-y-6 pt-4 border-t border-neutral-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Prénom et Nom (ou Pseudonyme militant)
                  </label>
                  <input
                    type="text"
                    required={!isAnonymous}
                    disabled={isAnonymous}
                    placeholder={isAnonymous ? 'Don anonyme activé' : 'Ex: Alexia Morel'}
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full bg-black border border-neutral-800 rounded px-3 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-red-500 disabled:opacity-40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Adresse Email (Reçu de résistance chiffré)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contact@citoyen-conscient.fr"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full bg-black border border-neutral-800 rounded px-3 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              {/* Anonymous Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="anon"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded bg-black border-neutral-700 text-red-600 focus:ring-0 cursor-pointer"
                />
                <label htmlFor="anon" className="text-xs text-neutral-400 cursor-pointer select-none">
                  Je souhaite que mon don reste anonyme pour me protéger des pressions académiques ou pharmaceutiques.
                </label>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                  Protocole de Paiement Sécurisé :
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2 px-3 text-xs font-mono uppercase rounded border text-center transition-colors ${
                      paymentMethod === 'card'
                        ? 'bg-neutral-800 border-red-600 text-white'
                        : 'bg-black border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Carte Bancaire
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('sepa')}
                    className={`py-2 px-3 text-xs font-mono uppercase rounded border text-center transition-colors ${
                      paymentMethod === 'sepa'
                        ? 'bg-neutral-800 border-red-600 text-white'
                        : 'bg-black border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Prélèvement SEPA
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('ethical')}
                    className={`py-2 px-3 text-xs font-mono uppercase rounded border text-center transition-colors ${
                      paymentMethod === 'ethical'
                        ? 'bg-neutral-800 border-red-600 text-white'
                        : 'bg-black border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Virement Résistant
                  </button>
                </div>
              </div>

              {/* Card Inputs Mock */}
              {paymentMethod === 'card' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-black p-4 rounded border border-neutral-800 w-full min-w-0">
                  <div className="sm:col-span-2 lg:col-span-2">
                    <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                      Numéro de carte chiffré SSL
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="4532 ···· ···· 8921"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full bg-[#0a0a0a] border border-neutral-800 rounded px-2.5 py-2 text-xs font-mono text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                      Expiration
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="MM/AA"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      className="w-full bg-[#0a0a0a] border border-neutral-800 rounded px-2.5 py-2 text-xs font-mono text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
                      Cryptogramme
                    </label>
                    <input
                      type="password"
                      maxLength={4}
                      required
                      placeholder="CVC"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="w-full bg-[#0a0a0a] border border-neutral-800 rounded px-2.5 py-2 text-xs font-mono text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>
              )}

              {/* Action Button: Requested exact wording */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-extrabold text-base uppercase tracking-wider rounded transition-all shadow-xl hover:shadow-red-700/40 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <Lock className="w-5 h-5 text-red-200" />
                <span>Je refuse d'être complice, je donne ({activeAmount} €)</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-6 text-xs text-neutral-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  Chiffrement AES-256
                </span>
                <span>·</span>
                <span>Déductibilité Morale Totale</span>
                <span>·</span>
                <span>Indépendance 100% Garantie</span>
              </div>
            </form>
          </div>
        </div>

        {/* Modal: Official Certificate of Resistance */}
        {submittedCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
            <div className="max-w-lg w-full bg-[#0d0d0d] border-2 border-red-600 rounded-xl p-6 sm:p-8 shadow-2xl relative">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-950/80 border border-red-800 flex items-center justify-center text-red-500">
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-red-500 mb-1">
                  ATTESTATION OFFICIELLE DU COMBAT
                </div>
                <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight">
                  Certificat de Résistant Microscopique
                </h3>
                <p className="text-xs text-neutral-400 mt-1 font-mono">
                  Matricule d'engagement : {submittedCertificate.id}
                </p>
              </div>

              <div className="my-6 p-4 rounded bg-black border border-neutral-800 text-xs space-y-2 font-mono">
                <div className="flex justify-between">
                  <span className="text-neutral-500 uppercase">Citoyen donateur :</span>
                  <span className="text-white font-bold">{submittedCertificate.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 uppercase">Montant alloué :</span>
                  <span className="text-red-400 font-bold tabular-nums">{submittedCertificate.amount} € ({submittedCertificate.frequency})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 uppercase">Date d'enregistrement :</span>
                  <span className="text-neutral-300">{submittedCertificate.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 uppercase">Affectation :</span>
                  <span className="text-neutral-300">Infiltration labs & Transition in silico</span>
                </div>
              </div>

              <p className="text-xs text-neutral-300 italic text-center mb-6">
                « Par cet acte, vous venez d’épargner l’agonie à des millions d’êtres vivants unicellulaires.
                L’Histoire de la biologie retiendra votre refus de la barbarie. »
              </p>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex-1 py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded border border-neutral-700 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Imprimer le Reçu</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSubmittedCertificate(null)}
                  className="flex-1 py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded text-xs uppercase tracking-wider cursor-pointer"
                >
                  Continuer la Lutte
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
