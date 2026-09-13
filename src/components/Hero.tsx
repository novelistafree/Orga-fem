import React, { useState, useEffect } from 'react';
import { useHotmart } from '../context/HotmartContext';
import { BOOK_DETAILS } from '../data/bookContent';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Download, 
  Clock, 
  Lock, 
  BookOpen,
  Award,
  Play
} from 'lucide-react';

export const Hero: React.FC<{ onOpenSampleModal: () => void }> = ({ onOpenSampleModal }) => {
  const { redirectToCheckout } = useHotmart();

  // Urgent countdown timer for 2h 47m
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 2, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden" id="inicio">
      {/* Background glowing atmospheric circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] lg:w-[900px] h-[350px] sm:h-[500px] bg-gradient-to-br from-pink-600/20 via-purple-600/10 to-transparent blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-[240px] sm:w-[400px] h-[300px] sm:h-[400px] bg-rose-600/15 blur-[80px] sm:blur-[100px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Urgency / Launch Banner */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-pink-950/80 border border-pink-500/40 text-pink-200 text-xs sm:text-sm font-medium shadow-lg shadow-pink-950/50 backdrop-blur-md max-w-full text-center">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-amber-300 font-semibold">Oferta de Lanzamiento:</span>
            <span className="hidden xs:inline">65% Descuento expira en:</span>
            <div className="flex items-center gap-1 font-mono font-bold text-amber-200 bg-black/50 px-2 py-0.5 rounded text-xs sm:text-sm shrink-0">
              <Clock className="w-3 h-3 text-amber-400 shrink-0" />
              <span>{formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: Persuasive Direct Response Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Social proof stars */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <div className="flex text-amber-400 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-pink-200">
                4.95 / 5 • Más de 1,480 lectoras y parejas satisfechas
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 sm:mb-6 font-serif-title">
              Explora los Misterios y el Verdadero Potencial del <span className="text-pink-gradient">Orgasmo Femenino</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base md:text-lg text-pink-100/90 font-normal leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
              La obra más reveladora, documentada y completa escrita por <strong className="text-white font-semibold">Héctor D.M.S.</strong> Descubre la ciencia del clítoris tridimensional, los <span className="text-amber-300 font-semibold">14 tipos de orgasmos</span> (genitales, implosivos, respuesta sexual expandida, respiración tántrica y chakras) y el mapa definitivo para una intimidad plena y sin tabúes.
            </p>

            {/* Three key questions from the book cover */}
            <div className="p-3.5 sm:p-5 rounded-2xl bg-gradient-to-r from-pink-950/60 to-purple-950/40 border border-pink-500/30 mb-6 sm:mb-8 backdrop-blur-md text-left">
              <p className="text-xs sm:text-sm font-semibold text-pink-200 mb-2.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                <span>¿Te has preguntado alguna vez?:</span>
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <span><strong>¿Cuál es el verdadero potencial orgásmico</strong> que la anatomía femenina puede alcanzar?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <span><strong>¿Cuántos tipos de orgasmos existen realmente</strong> más allá del clitoridiano convencional?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <span><strong>¿Cuál es la función real de los orgasmos</strong> en la salud física, la oxitocina y la conexión emocional?</span>
                </li>
              </ul>
            </div>

            {/* Primary CTA Button Group */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 mb-6 sm:mb-8">
              <button
                id="hero-buy-hotmart-btn"
                onClick={() => redirectToCheckout('premium')}
                className="relative group w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:brightness-110 text-white font-bold text-sm sm:text-base md:text-lg shadow-xl shadow-pink-600/40 hover:shadow-pink-500/60 active:scale-98 transition-all flex items-center justify-center gap-2.5 sm:gap-3"
              >
                <span>Obtener Libro Ahora en Hotmart</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              <a
                href="#video-promocional"
                className="w-full sm:w-auto px-4 sm:px-5 py-3 sm:py-4 rounded-2xl bg-pink-950/50 hover:bg-pink-900/60 border border-pink-500/40 text-pink-200 hover:text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group"
              >
                <div className="w-6 h-6 rounded-full bg-pink-600/80 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                </div>
                <span>Ver Video (1:30 min)</span>
              </a>

              <button
                id="hero-sample-preview-btn"
                onClick={onOpenSampleModal}
                className="w-full sm:w-auto px-4 sm:px-5 py-3 sm:py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-pink-200 hover:text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Muestra Gratuita</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-[11px] sm:text-xs text-zinc-300/90 pt-3 border-t border-pink-500/20">
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span>Pago Seguro Hotmart</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                <span>Descarga Inmediata</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                <span>Garantía 7 Días</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-400 shrink-0" />
                <span>100% Discreto</span>
              </div>
            </div>
          </div>

          {/* Right: 3D Book Mockup & Visual Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-sm lg:max-w-md mx-auto">
              {/* Glow aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/30 via-rose-500/20 to-amber-500/20 rounded-3xl blur-2xl transform rotate-3 scale-95 -z-10" />

              {/* Book Container with subtle 3D hover */}
              <div className="relative rounded-2xl p-2.5 sm:p-3 bg-gradient-to-b from-white/15 to-white/5 border border-pink-500/30 shadow-2xl backdrop-blur-xl group transition-transform duration-500 hover:-translate-y-2">
                {/* Book Image */}
                <div className="relative overflow-hidden rounded-xl bg-[#2a0d33] aspect-square flex items-center justify-center">
                  <img
                    src="/book_cover.jpg"
                    alt="Portada del libro El ABC dario del Orgasmo Femenino por Héctor D.M.S."
                    className="w-full h-full object-cover object-center shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Overlay badge */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-black/75 backdrop-blur-md border border-amber-400/40 text-amber-300 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Edición 2025</span>
                  </div>

                  {/* Format tag */}
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 bg-pink-950/90 backdrop-blur-md border border-pink-500/40 text-pink-200 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-semibold shadow-lg">
                    195 Páginas • PDF + EPUB
                  </div>
                </div>

                {/* Micro Guarantee Card under the book */}
                <div className="mt-3 sm:mt-4 p-3 sm:p-3.5 rounded-xl bg-[#140a1e] border border-pink-500/20 flex items-center justify-between gap-2 sm:gap-3 text-left">
                  <div className="min-w-0">
                    <span className="block text-[10px] sm:text-[11px] text-pink-300 font-semibold uppercase tracking-wider truncate">
                      Garantía Total Hotmart
                    </span>
                    <span className="block text-[11px] sm:text-xs text-zinc-300 truncate">
                      7 días de prueba sin riesgo
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="block text-[10px] sm:text-xs line-through text-zinc-400 font-mono">$87 USD</span>
                    <span className="block text-sm sm:text-base md:text-lg font-black text-amber-300 font-mono">DESDE $19 USD</span>
                  </div>
                </div>

                {/* Instant Action Button */}
                <button
                  onClick={() => redirectToCheckout('premium')}
                  className="mt-2.5 sm:mt-3 w-full py-2.5 rounded-xl bg-pink-600/30 hover:bg-pink-600/50 border border-pink-500/50 text-pink-100 hover:text-white text-xs font-bold tracking-wide uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <span>Redirigir a Pasarela de Pago</span>
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
