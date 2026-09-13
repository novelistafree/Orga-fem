import React from 'react';
import { useHotmart } from '../context/HotmartContext';
import { AlertCircle, CheckCircle, Sparkles, BookOpen, Brain, Heart, ArrowRight } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const { redirectToCheckout } = useHotmart();

  return (
    <section className="py-20 bg-gradient-to-b from-[#0e0714] via-[#150a21] to-[#0e0714] relative border-y border-pink-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-950/60 px-3.5 py-1.5 rounded-full border border-pink-500/30">
            Una Verdad Ocultada Durante Siglos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-5 font-serif-title">
            ¿Por qué la mayoría de las mujeres y parejas nunca experimentan su verdadero potencial?
          </h2>
          <p className="text-pink-100/80 text-base sm:text-lg leading-relaxed">
            Durante generaciones, la sexualidad femenina fue reducida a la reproducción o descrita desde perspectivas patriarcales limitadas. La ciencia moderna y las prácticas milenarias demuestran que el cuerpo femenino posee una capacidad de éxtasis prácticamente infinita.
          </p>
        </div>

        {/* Contrast Grid: El Problema vs La Revelación de Este Libro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Los Mitos y la Realidad Silenciada */}
          <div className="rounded-2xl bg-[#1a0c28]/70 border border-rose-900/40 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-950/80 border border-rose-500/40 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-rose-400" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif-title">
                La Frustración Habitual y los Mitos
              </h3>
            </div>

            <ul className="space-y-4 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="text-rose-400 font-bold shrink-0">✕</span>
                <span><strong>Creer que hay algo "mal" en ti:</strong> Más del 70% de las mujeres no alcanzan el orgasmo sólo con penetración tradicional porque la anatomía clitoridiana requiere un estímulo adecuado.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 font-bold shrink-0">✕</span>
                <span><strong>Mitos heredados de Freud y la era victoriana:</strong> Teorías obsoletas que asociaban el deseo femenino con la histeria o exigían patrones rígidos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 font-bold shrink-0">✕</span>
                <span><strong>Estrés y desconexión mente-cuerpo:</strong> El cortisol elevado bloquea la respuesta sensorial, transformando los encuentros íntimos en ansiedad por el desempeño.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 font-bold shrink-0">✕</span>
                <span><strong>Tabú y vergüenza al comunicar fantasías:</strong> Falta de herramientas de diálogo para expresar deseos eróticos y explorar nuevas fronteras.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Lo que descubres en "El ABC dario del Orgasmo Femenino" */}
          <div className="rounded-2xl bg-gradient-to-br from-[#260f38] to-[#1a0c28] border border-pink-500/40 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-xl shadow-pink-950/30">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-600 to-amber-500 flex items-center justify-center shadow-lg shadow-pink-600/30">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif-title">
                La Transformación con Este Libro
              </h3>
            </div>

            <ul className="space-y-4 text-sm text-pink-100/90">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>Mapeo anatómico tridimensional:</strong> Conoce las raíces internas del clítoris, los bulbos vestibulares, el Punto G, Punto A y el Cérvix con base médica.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>14 tipos de orgasmos explicados al detalle:</strong> Desde los explosivos hasta los implosivos que nutren de vitalidad los órganos internos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>El poder de la mente e hipnosis erótica:</strong> Técnicas para anclar el placer, inducir relajación profunda y despertar nuevas zonas erógenas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>Sabiduría sagrada del Tantra y Taoísmo:</strong> Cómo hacer circular la energía Kundalini a través de los 7 chakras para alcanzar el orgasmo del alma.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Core Pillars Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-white/5 border border-pink-500/20 hover:border-pink-500/40 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-pink-900/50 border border-pink-500/30 flex items-center justify-center text-pink-300">
              <Brain className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2 font-serif-title">Ciencia & Neurobiología</h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Basado en los estudios de Kinsey, Masters & Johnson, Helen O'Connell y resonancias magnéticas que desmitifican la anatomía femenina.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-pink-500/20 hover:border-pink-500/40 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-rose-900/50 border border-rose-500/30 flex items-center justify-center text-rose-300">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2 font-serif-title">Salud & Vínculo Afectivo</h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              El papel de la oxitocina, endorfinas y dopamina en el alivio del dolor menstrual, fortalecimiento del suelo pélvico y conexión de pareja.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-pink-500/20 hover:border-pink-500/40 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-amber-900/50 border border-amber-500/30 flex items-center justify-center text-amber-300">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2 font-serif-title">Tantra & Trascendencia</h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Métodos ancestrales para circular la energía sexual, respiración orgásmica y técnicas de hipnosis para explorar el éxtasis del alma.
            </p>
          </div>
        </div>

        {/* Micro CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => redirectToCheckout('premium')}
            className="inline-flex items-center gap-2 text-pink-300 hover:text-white font-semibold text-sm underline underline-offset-8 decoration-pink-500/60 hover:decoration-pink-400 transition-all"
          >
            <span>Quiero acceder a los 13 capítulos completos en Hotmart</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
