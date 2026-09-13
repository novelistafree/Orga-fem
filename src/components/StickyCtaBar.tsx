import React, { useState, useEffect } from 'react';
import { useHotmart } from '../context/HotmartContext';
import { ShieldCheck, ArrowRight, X, Clock, Sparkles } from 'lucide-react';

export const StickyCtaBar: React.FC = () => {
  const { redirectToCheckout } = useHotmart();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down more than 400px
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 px-3 py-2.5 sm:px-4 sm:py-3.5 pb-safe bg-[#14071e]/95 border-t border-pink-500/40 backdrop-blur-xl shadow-2xl shadow-black/80 animate-slide-up">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2.5 sm:gap-6">
        
        {/* Book teaser */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg overflow-hidden shrink-0 border border-pink-500/30 bg-[#250e32]">
            <img 
              src="/book_cover.jpg" 
              alt="Miniatura portada" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xs sm:text-sm font-bold text-white truncate font-serif-title max-w-[130px] xs:max-w-[200px] sm:max-w-none">
                El ABC dario del Orgasmo
              </span>
              <span className="text-[10px] bg-amber-400/20 text-amber-300 font-bold px-1.5 py-0.5 rounded-full border border-amber-400/30 shrink-0">
                65% OFF
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 truncate hidden sm:block">
              195 Páginas • PDF + EPUB • Descarga Inmediata en Hotmart
            </p>
          </div>
        </div>

        {/* Pricing and Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="text-right hidden md:block">
            <span className="block text-[10px] text-zinc-400 line-through font-mono">$87 USD</span>
            <span className="block text-sm sm:text-base font-extrabold text-amber-300 font-mono">
              $29 USD
            </span>
          </div>

          <button
            id="sticky-bar-buy-btn"
            onClick={() => redirectToCheckout('premium')}
            className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-lg shadow-pink-600/30 flex items-center gap-1.5 sm:gap-2 transition-all active:scale-95 min-h-[38px]"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 hidden xs:inline shrink-0" />
            <span className="whitespace-nowrap font-bold">
              Comprar<span className="hidden sm:inline"> en Hotmart</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors shrink-0"
            title="Ocultar barra"
            aria-label="Cerrar barra flotante"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
