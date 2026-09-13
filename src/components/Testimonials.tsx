import React from 'react';
import { TESTIMONIALS } from '../data/bookContent';
import { Star, CheckCircle2, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#0e0714] relative border-t border-pink-500/10" id="testimonios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/50 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            Opiniones de la Comunidad
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4 font-serif-title">
            Lo que Dicen Quienes Ya lo Han Leído
          </h2>
          <p className="text-pink-100/80 text-sm sm:text-base leading-relaxed">
            Historias reales de mujeres, parejas y terapeutas que encontraron en esta obra respuestas claras, respeto y una nueva dimensión de placer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-pink-500/20 hover:border-pink-500/40 transition-all flex flex-col justify-between relative"
            >
              <div>
                {/* Stars and verified tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {t.verifiedPurchase && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3" />
                      Compra Verificada Hotmart
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-[15px] text-pink-100/90 leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-pink-500/20 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-serif-title">
                    {t.name}
                  </h4>
                  <span className="text-xs text-pink-300/80">
                    {t.role} • {t.location}
                  </span>
                </div>
                <Quote className="w-6 h-6 text-pink-500/30" />
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Review Badge */}
        <div className="mt-12 p-5 rounded-2xl bg-[#160822] border border-pink-500/30 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-black text-amber-300 font-serif-title">4.95</div>
            <div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-zinc-300">Puntuación promedio de satisfacción</span>
            </div>
          </div>
          <span className="text-xs text-pink-300 font-semibold">
            Calificado por más de 1,480 lectoras
          </span>
        </div>

      </div>
    </section>
  );
};
