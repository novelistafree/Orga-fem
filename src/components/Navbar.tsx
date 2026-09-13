import React, { useState, useEffect } from 'react';
import { useHotmart } from '../context/HotmartContext';
import { BookOpen, ShieldCheck, Sparkles, Settings, ArrowRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC<{ onOpenSampleModal: () => void }> = ({ onOpenSampleModal }) => {
  const { redirectToCheckout, setIsConfigModalOpen, isCustomUrlSet } = useHotmart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0e0714]/95 backdrop-blur-md border-b border-pink-500/20 py-3 shadow-xl shadow-black/40' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Title */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-pink-600 via-rose-500 to-amber-400 p-[1px] shadow-lg shadow-pink-500/20 group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full bg-[#180d24] rounded-xl flex items-center justify-center">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
              </div>
            </div>
            <div className="min-w-0">
              <span className="block text-xs sm:text-sm md:text-base font-bold text-white tracking-tight font-serif-title truncate max-w-[150px] xs:max-w-[210px] sm:max-w-none">
                El ABC dario del Orgasmo Femenino
              </span>
              <span className="hidden xs:block text-[10px] sm:text-[11px] text-pink-300/80 font-medium truncate">
                Libro Oficial • Por Héctor D.M.S.
              </span>
            </div>
          </a>

          {/* Desktop & Wide Tablet Nav Links (visible on lg+) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 text-xs xl:text-sm font-medium text-pink-100/80 shrink-0">
            <a href="#video-promocional" className="text-pink-300 hover:text-white transition-colors flex items-center gap-1.5 font-semibold">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping inline-block" />
              <span>Video Trailer</span>
            </a>
            <a href="#que-descubriras" className="hover:text-pink-300 transition-colors">
              Contenido
            </a>
            <a href="#tipos-orgasmos" className="hover:text-pink-300 transition-colors">
              14 Orgasmos
            </a>
            <a href="#beneficios" className="hover:text-pink-300 transition-colors">
              Beneficios
            </a>
            <a href="#autor" className="hover:text-pink-300 transition-colors">
              Autor
            </a>
            <a href="#precios" className="hover:text-pink-300 transition-colors">
              Precios
            </a>
            <button
              onClick={onOpenSampleModal}
              className="text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1 font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Leer Muestra</span>
            </button>
          </nav>

          {/* Actions & Hotmart Checkout */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Quick config button for the Hotmart URL */}
            <button
              onClick={() => setIsConfigModalOpen(true)}
              className="p-2 sm:px-2.5 sm:py-2 rounded-xl border border-pink-500/30 bg-pink-950/30 hover:bg-pink-900/40 text-pink-300 text-xs transition-colors flex items-center gap-1.5 min-h-[40px]"
              title="Configurar tu enlace directo de pago en Hotmart"
            >
              <Settings className="w-3.5 h-3.5" />
              <span className="hidden xl:inline text-[11px]">
                {isCustomUrlSet ? 'Link Configurado' : 'Link Hotmart'}
              </span>
            </button>

            {/* Direct Buy CTA button */}
            <button
              id="navbar-buy-button"
              onClick={() => redirectToCheckout('premium')}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 p-[1px] shadow-lg shadow-pink-600/30 hover:shadow-pink-500/50 hover:scale-[1.02] active:scale-95 transition-all min-h-[40px] flex items-center"
            >
              <div className="bg-[#180d24] group-hover:bg-transparent px-3 sm:px-4 py-2 sm:py-2.5 rounded-[11px] transition-colors flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">
                  Comprar<span className="hidden sm:inline"> en Hotmart</span>
                </span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-pink-300 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>

            {/* Mobile & Tablet menu trigger (visible below lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-pink-300 hover:text-white hover:bg-white/5 border border-pink-500/20 min-h-[40px] min-w-[40px] flex items-center justify-center transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-3 border-t border-pink-500/20 mt-3 space-y-2 bg-[#140a1d]/98 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-2xl animate-fade-in border border-pink-500/30">
            <a 
              href="#video-promocional" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 text-sm sm:text-base text-pink-300 font-bold py-2.5 px-3 rounded-xl hover:bg-pink-950/50 transition-colors"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
              <span>Video Promocional & Trailer (1:30 min)</span>
            </a>
            <a 
              href="#que-descubriras" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm sm:text-base text-pink-100 py-2.5 px-3 rounded-xl hover:bg-white/5 hover:text-pink-300 transition-colors"
            >
              Contenido del Libro (13 Capítulos)
            </a>
            <a 
              href="#tipos-orgasmos" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm sm:text-base text-pink-100 py-2.5 px-3 rounded-xl hover:bg-white/5 hover:text-pink-300 transition-colors"
            >
              Los 14 Tipos de Orgasmos
            </a>
            <a 
              href="#beneficios" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm sm:text-base text-pink-100 py-2.5 px-3 rounded-xl hover:bg-white/5 hover:text-pink-300 transition-colors"
            >
              Beneficios Médicos & Emocionales
            </a>
            <a 
              href="#autor" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm sm:text-base text-pink-100 py-2.5 px-3 rounded-xl hover:bg-white/5 hover:text-pink-300 transition-colors"
            >
              Sobre el Autor (Héctor D.M.S.)
            </a>
            <a 
              href="#precios" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm sm:text-base text-pink-100 py-2.5 px-3 rounded-xl hover:bg-white/5 hover:text-pink-300 transition-colors"
            >
              Planes y Precios Especiales
            </a>
            <a 
              href="#testimonios" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm sm:text-base text-pink-100 py-2.5 px-3 rounded-xl hover:bg-white/5 hover:text-pink-300 transition-colors"
            >
              Opiniones y Testimonios
            </a>
            <a 
              href="#preguntas-frecuentes" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm sm:text-base text-pink-100 py-2.5 px-3 rounded-xl hover:bg-white/5 hover:text-pink-300 transition-colors"
            >
              Preguntas Frecuentes
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSampleModal();
              }}
              className="w-full text-left py-2.5 px-3 rounded-xl text-amber-300 hover:bg-amber-950/30 font-semibold text-sm sm:text-base flex items-center gap-2 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Leer Muestra Gratuita (Páginas del Libro)</span>
            </button>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  redirectToCheckout('premium');
                }}
                className="w-full bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white font-bold py-3.5 rounded-xl text-center shadow-lg text-sm sm:text-base"
              >
                Comprar Ahora en Hotmart ($29 USD)
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
