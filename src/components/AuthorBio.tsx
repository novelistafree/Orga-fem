import React from 'react';
import { useHotmart } from '../context/HotmartContext';
import { Award, BookOpen, Sparkles, Heart, ArrowRight } from 'lucide-react';

export const AuthorBio: React.FC = () => {
  const { redirectToCheckout } = useHotmart();

  return (
    <section className="py-16 sm:py-20 bg-[#0e0714] relative border-t border-pink-500/10" id="autor">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-br from-[#1d0c2c] via-[#150722] to-[#0e0714] border border-pink-500/40 p-5 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Author Emblem & Visual */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-tr from-pink-600 via-rose-500 to-amber-400 p-1 shadow-2xl shadow-pink-900/50">
                  <div className="w-full h-full bg-[#160a22] rounded-[22px] flex flex-col items-center justify-center p-4">
                    <span className="text-4xl sm:text-5xl font-extrabold text-amber-300 font-serif-title tracking-wider">
                      H.D.M.
                    </span>
                    <span className="text-xs text-pink-300 mt-2 font-medium uppercase tracking-widest">
                      Héctor D.M.S.
                    </span>
                    <span className="text-[10px] text-zinc-400 mt-1">
                      18+ años de estudio
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-3 bg-gradient-to-r from-amber-500 to-rose-500 text-black px-4 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
                  Autor & Practicante
                </div>
              </div>

              <div className="space-y-2 w-full max-w-xs">
                <div className="p-2.5 rounded-xl bg-black/40 border border-pink-500/20 text-xs text-pink-200">
                  <span className="font-semibold text-white">Método Silva (2010)</span>
                  <p className="text-[11px] text-zinc-400">Control mental & visualización</p>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-pink-500/20 text-xs text-pink-200">
                  <span className="font-semibold text-white">Hipnosis Terapéutica</span>
                  <p className="text-[11px] text-zinc-400">Formación avanzada en sugestión</p>
                </div>
              </div>
            </div>

            {/* Right: Author Biography & Books */}
            <div className="lg:col-span-8 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-950/60 px-3 py-1 rounded-full border border-pink-500/30 inline-block mb-3">
                Conoce al Autor
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-serif-title">
                Héctor D.M.S.
              </h2>
              <p className="text-pink-100/90 text-sm sm:text-base leading-relaxed mb-4">
                <em>"Desde que tengo uso de razón, he sido un admirador de la naturaleza femenina y siempre me han fascinado los misterios que rodean su sexualidad..."</em>
              </p>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                Héctor es un apasionado estudioso e investigador que lleva más de 18 años sumergido en disciplinas de autoconocimiento, psicología, meditación, hipnosis erótica y sexualidad oriental (Tantra, Taoísmo y sufismo). En 2010 completó su formación en el Método Silva de Control Mental y continúa su perfeccionamiento en hipnoterapia.
              </p>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                Su enfoque parte de una convicción fundamental: <strong className="text-pink-200">el placer es un derecho inalienable y el conocimiento es el puente</strong> que permite a mujeres y parejas romper tabúes seculares y experimentar el verdadero éxtasis del cuerpo y el alma.
              </p>

              {/* Other Books */}
              <div className="p-4 rounded-2xl bg-black/30 border border-pink-500/20 mb-6">
                <h3 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  Otras Obras Publicadas por el Autor:
                </h3>
                <ul className="text-xs text-zinc-300 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-pink-400" />
                    <span><strong>Conexión Profunda:</strong> Explorando el Mundo de la Hipnosis Erótica Recreativa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-pink-400" />
                    <span><strong>Trance Urbano:</strong> Domina el arte de la hipnosis improvisada y callejera</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-pink-400" />
                    <span><strong>Hipnotantra:</strong> El lado Místico del Placer y estados alterados de conciencia</span>
                  </li>
                </ul>
              </div>

              {/* Dedication quote */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-pink-300 italic">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>"Con admiración y compromiso hacia lo femenino" — Héctor.</span>
                </div>
                <button
                  onClick={() => redirectToCheckout('premium')}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-amber-500 hover:brightness-110 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <span>Adquirir su Obra en Hotmart</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
