import React, { useState, useEffect, useRef } from 'react';
import { Microscope, Flame, Skull, Dna, Info, AlertTriangle, Play, Pause, RotateCcw } from 'lucide-react';
import { PROTOCOLS_INSPECTION, InvestigationProtocol } from '../data/campaignData';

export const ForensicViewer: React.FC = () => {
  const [selectedProtocolId, setSelectedProtocolId] = useState<string>('autoclave');
  const [stressIntensity, setStressIntensity] = useState<number>(75);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'reality' | 'euphemism'>('reality');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const currentProtocol: InvestigationProtocol =
    PROTOCOLS_INSPECTION.find((p) => p.id === selectedProtocolId) || PROTOCOLS_INSPECTION[0];

  // Canvas interactive simulation of bacterial behavior under stress
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const width = canvas.width;
    const height = canvas.height;

    // Bacteria particles state
    const numBacteria = 65;
    const bacteria = Array.from({ length: numBacteria }, () => ({
      x: Math.random() * (width - 40) + 20,
      y: Math.random() * (height - 40) + 20,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      angle: Math.random() * Math.PI * 2,
      length: 12 + Math.random() * 6,
      width: 5 + Math.random() * 2,
      health: 100,
      ruptured: false,
      flagellaPhase: Math.random() * 10,
    }));

    const render = () => {
      ctx.fillStyle = '#09090b';
      ctx.fillRect(0, 0, width, height);

      // Draw subtle Petri dish grid / circular boundary
      ctx.save();
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, Math.min(width, height) / 2 - 8, 0, Math.PI * 2);
      ctx.strokeStyle = '#27272a';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Stress gradient based on protocol
      const centerX = width / 2;
      const centerY = height / 2;

      if (selectedProtocolId === 'autoclave') {
        // Thermal heat wave
        const heatAlpha = (stressIntensity / 100) * 0.45;
        const radGrad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, width / 2);
        radGrad.addColorStop(0, `rgba(239, 68, 68, ${heatAlpha})`);
        radGrad.addColorStop(1, 'rgba(185, 28, 28, 0.05)');
        ctx.fillStyle = radGrad;
        ctx.fillRect(0, 0, width, height);
      } else if (selectedProtocolId === 'antibiogramme') {
        // Chemical disc of death
        const deathRadius = (stressIntensity / 100) * (width * 0.42);
        const radGrad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, deathRadius);
        radGrad.addColorStop(0, 'rgba(0, 255, 102, 0.35)');
        radGrad.addColorStop(0.7, 'rgba(0, 255, 102, 0.15)');
        radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(centerX, centerY, deathRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw central antibiotic pellet
        ctx.beginPath();
        ctx.arc(centerX, centerY, 14, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 8px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('KAN30', centerX, centerY);
      } else if (selectedProtocolId === 'lyse-insuline') {
        // Sonic cavitation & detergent stress lines
        ctx.strokeStyle = `rgba(245, 158, 11, ${(stressIntensity / 100) * 0.3})`;
        ctx.lineWidth = 1;
        for (let i = 0; i < 6; i++) {
          ctx.beginPath();
          const r = ((Date.now() / 30 + i * 40) % (width / 2));
          ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Update and draw bacteria
      bacteria.forEach((b) => {
        const distToCenter = Math.hypot(b.x - centerX, b.y - centerY);
        let localStress = stressIntensity;

        if (selectedProtocolId === 'antibiogramme') {
          const deathRadius = (stressIntensity / 100) * (width * 0.42);
          if (distToCenter < deathRadius) {
            localStress = 100;
            b.health = Math.max(0, b.health - 2);
          } else {
            b.health = Math.min(100, b.health + 0.5);
          }
        } else {
          b.health = Math.max(0, 100 - (localStress * 0.9));
        }

        if (localStress > 85 && Math.random() < 0.05) {
          b.ruptured = true;
        }

        // Movement
        if (isSimulating) {
          const speedMultiplier = b.health < 20 ? 0.1 : (localStress > 50 ? 1.8 : 1.0);
          b.x += b.vx * speedMultiplier;
          b.y += b.vy * speedMultiplier;

          // Wall bounce inside petri circle
          const dist = Math.hypot(b.x - centerX, b.y - centerY);
          const maxR = Math.min(width, height) / 2 - 20;
          if (dist > maxR) {
            const angleToCenter = Math.atan2(centerY - b.y, centerX - b.x);
            b.vx = Math.cos(angleToCenter) * Math.abs(b.vx);
            b.vy = Math.sin(angleToCenter) * Math.abs(b.vy);
            b.x = centerX - Math.cos(angleToCenter) * maxR;
            b.y = centerY - Math.sin(angleToCenter) * maxR;
          }

          b.angle = Math.atan2(b.vy, b.vx);
          b.flagellaPhase += 0.2;
        }

        // Draw individual bacillus
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(b.angle);

        // Color based on health & protocol
        if (b.health <= 0 || b.ruptured) {
          ctx.fillStyle = '#450a0a';
          ctx.strokeStyle = '#dc2626';
        } else if (localStress > 70) {
          ctx.fillStyle = '#ef4444';
          ctx.strokeStyle = '#fee2e2';
        } else {
          ctx.fillStyle = '#22c55e';
          ctx.strokeStyle = '#bbf7d0';
        }

        // Pill shape bacillus
        ctx.beginPath();
        const halfLen = b.length / 2;
        const rad = b.width / 2;
        ctx.arc(-halfLen + rad, 0, rad, Math.PI / 2, -Math.PI / 2);
        ctx.arc(halfLen - rad, 0, rad, -Math.PI / 2, Math.PI / 2);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.stroke();

        // Flagella (tail)
        if (b.health > 15 && !b.ruptured) {
          ctx.beginPath();
          ctx.moveTo(-halfLen, 0);
          const tailLen = 14;
          const wave = Math.sin(b.flagellaPhase) * 4;
          ctx.quadraticCurveTo(-halfLen - 7, wave, -halfLen - tailLen, -wave);
          ctx.strokeStyle = b.health < 50 ? '#f87171' : '#86efac';
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Cytoplasm rupture debris
        if (b.ruptured) {
          ctx.fillStyle = '#ef4444';
          for (let p = 0; p < 4; p++) {
            ctx.fillRect((p - 2) * 3, (p % 2 === 0 ? 4 : -4), 1.5, 1.5);
          }
        }

        ctx.restore();
      });

      ctx.restore();

      if (isSimulating) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [selectedProtocolId, stressIntensity, isSimulating]);

  return (
    <section id="scanner" className="py-20 sm:py-24 bg-[#050505] border-b border-red-950/40 relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 w-full max-w-full">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-500 mb-2">
              <Microscope className="w-4 h-4 text-red-500 shrink-0" />
              <span>DISPOSITIF SCIENTIFIQUE INDÉPENDANT</span>
              <span aria-hidden="true">·</span>
              <span>FORENSIC CELLULAIRE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              Le Scanner de l'Agonie Microscopique
            </h2>
            <p className="mt-2 text-neutral-400 max-w-2xl text-xs sm:text-base">
              Observez en direct les dégâts cellulaires infligés à <em className="text-neutral-200">Escherichia coli</em> lors
              des protocoles expérimentaux. Ajustez les curseurs pour mesurer le seuil de rupture vitale.
            </p>
          </div>

          {/* Mode Switch (Euphemism vs Reality) */}
          <div className="p-1 rounded bg-neutral-900 border border-neutral-800 flex items-center shrink-0">
            <button
              onClick={() => setViewMode('reality')}
              className={`px-3 py-1.5 text-xs font-bold uppercase rounded transition-colors cursor-pointer ${
                viewMode === 'reality'
                  ? 'bg-red-600 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Réalité de l'Agonie
            </button>
            <button
              onClick={() => setViewMode('euphemism')}
              className={`px-3 py-1.5 text-xs font-bold uppercase rounded transition-colors cursor-pointer ${
                viewMode === 'euphemism'
                  ? 'bg-neutral-700 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Langage Aseptisé Labo
            </button>
          </div>
        </div>

        {/* Protocol Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 w-full max-w-full">
          {PROTOCOLS_INSPECTION.map((proto) => {
            const isSelected = proto.id === selectedProtocolId;
            return (
              <button
                key={proto.id}
                onClick={() => setSelectedProtocolId(proto.id)}
                className={`p-4 rounded-lg text-left transition-all border min-w-0 cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 border-red-600 text-white shadow-lg'
                    : 'bg-[#0a0a0a] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-red-500 uppercase">
                    {proto.evidenceCode}
                  </span>
                  {proto.id === 'autoclave' && <Flame className="w-4 h-4 text-red-500 shrink-0" />}
                  {proto.id === 'antibiogramme' && <Skull className="w-4 h-4 text-[#00ff66] shrink-0" />}
                  {proto.id === 'lyse-insuline' && <Dna className="w-4 h-4 text-amber-500 shrink-0" />}
                </div>
                <div className="text-sm font-bold text-white uppercase truncate">{proto.title}</div>
                <div className="text-xs text-neutral-400 mt-1 line-clamp-1">{proto.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full max-w-full">
          {/* Microscope Canvas Viewport (col-span-7) */}
          <div className="lg:col-span-7 rounded-lg bg-[#0a0a0c] border border-neutral-800 p-4 sm:p-6 flex flex-col justify-between w-full min-w-0">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-mono uppercase text-neutral-300">
                  Microscope Optique Virtuel · Objectif 100x à immersion
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSimulating(!isSimulating)}
                  className="p-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono flex items-center gap-1 cursor-pointer"
                  title="Pause / Reprendre"
                >
                  {isSimulating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isSimulating ? 'Pause' : 'Activer'}</span>
                </button>
                <button
                  onClick={() => setStressIntensity(50)}
                  className="p-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono flex items-center gap-1 cursor-pointer"
                  title="Réinitialiser paramètres"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Circular Petri Canvas */}
            <div className="relative flex items-center justify-center py-2">
              <div className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden border-2 border-neutral-700 shadow-2xl relative bg-black">
                <canvas
                  ref={canvasRef}
                  width={380}
                  height={380}
                  className="w-full h-full block"
                />
                {/* Crosshair overlay */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
                  <div className="w-full h-[1px] bg-red-500" />
                  <div className="h-full w-[1px] bg-red-500 absolute" />
                </div>
              </div>
            </div>

            {/* Control Sliders */}
            <div className="mt-6 pt-4 border-t border-neutral-800/80">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                <span className="uppercase">
                  {selectedProtocolId === 'autoclave' && 'Température appliquée (°C)'}
                  {selectedProtocolId === 'antibiogramme' && 'Diffusion de la toxine Kanamycine (µg)'}
                  {selectedProtocolId === 'lyse-insuline' && 'Puissance de cavitation ultrasonique (kHz)'}
                </span>
                <span className="text-red-400 font-bold tabular-nums">
                  {selectedProtocolId === 'autoclave' && `${Math.round(20 + (stressIntensity / 100) * 101)} °C`}
                  {selectedProtocolId === 'antibiogramme' && `${Math.round((stressIntensity / 100) * 60)} µg`}
                  {selectedProtocolId === 'lyse-insuline' && `${Math.round((stressIntensity / 100) * 35)} kHz`}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={stressIntensity}
                onChange={(e) => setStressIntensity(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
                <span>Conditions physiologiques (37°C)</span>
                <span className="text-amber-500">Seuil de stress d'alarme</span>
                <span className="text-red-500 font-bold">Zone d'annihilation létale (121°C)</span>
              </div>
            </div>
          </div>

          {/* Forensic Data & Euphemism Decoder (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-6 rounded-lg bg-[#0e0e0e] border border-neutral-800 flex-1">
              <div className="text-xs font-mono text-neutral-500 uppercase mb-1">
                Origine de la pièce à conviction :
              </div>
              <div className="text-sm font-semibold text-neutral-300 mb-4">
                {currentProtocol.labLabel}
              </div>

              {viewMode === 'reality' ? (
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-red-500 font-bold mb-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    <span>L'AGONIE RÉELLE SOUS LE MICROSCOPE :</span>
                  </div>
                  <p className="text-sm text-neutral-200 leading-relaxed bg-red-950/20 p-3.5 rounded border border-red-900/40 mb-4">
                    {currentProtocol.harshReality}
                  </p>

                  <div className="text-xs font-mono uppercase text-neutral-400 mb-2">
                    Lésions biochimiques constatées :
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {currentProtocol.cellularDamage.map((damage, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-500 font-bold mt-0.5">✕</span>
                        <span>{damage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-neutral-400 font-bold mb-2">
                    <Info className="w-4 h-4 text-neutral-400" />
                    <span>VERSION ASEPTISÉE PAR LE MANUEL DE RECHERCHE :</span>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed bg-neutral-900 p-3.5 rounded border border-neutral-800 mb-4 italic">
                    {currentProtocol.euphemism}
                  </p>
                  <div className="text-xs text-neutral-400">
                    <span className="font-mono uppercase block mb-1 text-neutral-400">Pourquoi cette formulation est un piège moral :</span>
                    Les universités utilisent des termes passifs (« lyse », « autoclavage », « criblage ») pour effacer la violence active exercée contre des milliards d’individus doués de sensibilité métabolique.
                  </div>
                </div>
              )}
            </div>

            {/* Lethality Metrics Card */}
            <div className="p-5 rounded-lg bg-neutral-950 border border-red-900/40">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono uppercase text-neutral-500">Bilan d'anéantissement</div>
                  <div className="text-sm font-bold text-red-400 mt-0.5">{currentProtocol.fatalityRate}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono uppercase text-neutral-500">Indice de panique flagellaire</div>
                  <div className="text-lg font-mono font-extrabold text-red-500 tabular-nums">
                    {Math.round(stressIntensity * 0.98)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
