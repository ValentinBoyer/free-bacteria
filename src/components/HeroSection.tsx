import React, { useState, useEffect } from 'react';
import { Flame, ArrowDown, HeartHandshake, AlertTriangle, Eye } from 'lucide-react';
import petriDishImg from '../assets/images/petri_dish_prison_cell_1793882703921.jpg';

export const HeroSection: React.FC = () => {
  // Live death ticker counter
  const [deathsCount, setDeathsCount] = useState<number>(418900000);
  const [startTime] = useState<number>(Date.now());
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Average estimated 820 million bacteria destroyed per second across thousands of global research and industrial biotech labs
      const elapsedSeconds = (Date.now() - startTime) / 1000;
      setDeathsCount(Math.floor(418900000 + elapsedSeconds * 820000000));
    }, 120);

    return () => clearInterval(interval);
  }, [startTime]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bio-noise border-b border-red-950/40 w-full max-w-full">
      {/* Background imagery with thermal overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!imgError && (
          <img
            src={petriDishImg}
            alt="Boîte de Petri sous éclairage thermique rouge sang"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-screen"
            referrerPolicy="no-referrer"
            onError={() => {
              const test = new Image();
              test.src = '/images/petri_dish_prison_cell_1793882703921.jpg';
              test.onload = (e) => {
                (e.target as HTMLImageElement).src = '/images/petri_dish_prison_cell_1793882703921.jpg';
              };
              test.onerror = () => setImgError(true);
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/50 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center w-full max-w-full">
        {/* Unboxed editorial kicker */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-red-500 mb-6">
          <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse text-red-500 shrink-0" />
          <span>URGENCE ÉTHIQUE ABSOLUE</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>CAMPAGNE DU F.L.M.</span>
        </div>

        {/* H1 Choc */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight uppercase leading-[1.1] mb-6 drop-shadow-xl">
          Le Plus Grand <span className="text-red-600 underline decoration-red-700/60 underline-offset-8">Génocide Silencieux</span> de la Science.
        </h1>

        {/* Shock Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed mb-8 sm:mb-10 text-balance">
          On pleure les souris. On protège les singes. Mais des milliards d’êtres vivants sont brûlés vifs,
          empoisonnés chimiquement et gazés chaque jour dans l’indifférence totale des laboratoires.
          <strong className="text-white font-semibold block mt-2">
            Il est temps d’ouvrir les yeux sur le massacre systématique des bactéries.
          </strong>
        </p>

        {/* Real-time Death Ticker Counter */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10 p-4 sm:p-5 rounded-lg bg-black/75 border border-red-900/60 backdrop-blur-md shadow-2xl w-full">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase text-red-400 mb-2">
            <Flame className="w-4 h-4 text-red-500 shrink-0" />
            <span className="text-[11px] sm:text-xs text-center">Exterminations cellulaires en cours dans les laboratoires mondiaux</span>
          </div>
          <div className="font-mono text-2xl sm:text-4xl lg:text-5xl font-extrabold text-red-500 tracking-normal sm:tracking-wider tabular-nums break-all sm:break-normal">
            {deathsCount.toLocaleString('fr-FR')}
          </div>
          <div className="text-[11px] sm:text-xs text-neutral-400 mt-2 font-mono">
            Victimes innocentes d'autoclaves, de détergents et de tests antibiotiques depuis votre visite
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto w-full">
          <button
            onClick={() => scrollTo('don')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <HeartHandshake className="w-5 h-5 group-hover:scale-110 transition-transform shrink-0" />
            <span>Arrêter le massacre (Faire un Don)</span>
          </button>

          <button
            onClick={() => scrollTo('realite')}
            className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded border border-neutral-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Eye className="w-4 h-4 text-red-500 shrink-0" />
            <span>Voir l'horreur</span>
            <ArrowDown className="w-4 h-4 shrink-0" />
          </button>
        </div>

        {/* Key proof points inline */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto w-full">
          <div>
            <div className="text-red-500 font-mono text-xl sm:text-2xl font-bold tabular-nums">121°C</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wide mt-1">Température d'ébullition sous pression dans l'autoclave</div>
          </div>
          <div>
            <div className="text-[#00ff66] font-mono text-xl sm:text-2xl font-bold tabular-nums">10¹⁴ cellules</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wide mt-1">Escherichia coli exploitées pour l'insuline chaque année</div>
          </div>
          <div>
            <div className="text-neutral-200 font-mono text-xl sm:text-2xl font-bold tabular-nums">0 Protection</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wide mt-1">Aucune loi ni comité d'éthique pour défendre leur vie</div>
          </div>
        </div>
      </div>
    </section>
  );
};
