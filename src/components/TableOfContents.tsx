import React, { useState } from 'react';
import { CHAPTERS_DATA } from '../data/bookContent';
import { useHotmart } from '../context/HotmartContext';
import { BookOpen, ChevronDown, ChevronUp, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

export const TableOfContents: React.FC<{ onOpenSampleModal: () => void }> = ({ onOpenSampleModal }) => {
  const { redirectToCheckout } = useHotmart();
  const [expandedChapter, setExpandedChapter] = useState<number | null>(1);

  const toggleChapter = (id: number) => {
    setExpandedChapter(prev => prev === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0e0714] via-[#14081f] to-[#0e0714] border-t border-pink-500/10" id="que-descubriras">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-950/60 px-3.5 py-1.5 rounded-full border border-pink-500/30">
            Índice Completo • 195 Páginas de Sabiduría
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4 font-serif-title">
            Estructura y Capítulos del Libro
          </h2>
          <p className="text-pink-100/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Una obra estructurada progresivamente: desde la historia y anatomía básica hasta la neuroquímica cerebral, hipnosis erótica y los estados alterados de consciencia.
          </p>
        </div>

        {/* Chapters Accordion */}
        <div className="space-y-3.5 mb-12">
          {CHAPTERS_DATA.map((chapter) => {
            const isExpanded = expandedChapter === chapter.id;
            return (
              <div
                key={chapter.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#1e0d30] border-pink-500/50 shadow-xl shadow-pink-950/40'
                    : 'bg-white/[0.02] hover:bg-white/[0.05] border-pink-500/20'
                }`}
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-serif-title font-bold text-sm sm:text-base shrink-0 transition-colors ${
                      isExpanded
                        ? 'bg-gradient-to-tr from-pink-600 to-amber-500 text-white shadow-md'
                        : 'bg-pink-950/60 text-pink-300 border border-pink-500/30'
                    }`}>
                      {chapter.number}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white font-serif-title">
                        {chapter.title}
                      </h3>
                      <span className="text-[11px] text-pink-300/80 font-mono">
                        {chapter.pages}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-pink-300 shrink-0">
                    <span className="hidden sm:inline text-xs font-semibold">
                      {isExpanded ? 'Ocultar' : 'Ver detalle'}
                    </span>
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-pink-500/20 text-xs sm:text-sm text-zinc-300 animate-fade-in">
                    <p className="mb-4 text-pink-100/90 leading-relaxed italic">
                      "{chapter.summary}"
                    </p>

                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Puntos Clave y Aprendizajes:
                      </h4>
                      <ul className="space-y-1.5 pl-1">
                        {chapter.keyTakeaways.map((takeaway, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-zinc-200">
                            <CheckCircle className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {chapter.scientificReferences && (
                      <div className="pt-3 border-t border-pink-500/20 flex flex-wrap items-center gap-2">
                        <span className="text-[11px] text-zinc-400 font-semibold">Investigadores citados:</span>
                        {chapter.scientificReferences.map((ref, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-pink-950/70 text-pink-300 border border-pink-500/30"
                          >
                            {ref}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA banner under Table of Contents */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-pink-950/80 via-[#260e33] to-purple-950/80 border border-pink-500/40 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-serif-title">
              ¿Quieres comenzar a leer ahora mismo?
            </h3>
            <p className="text-xs sm:text-sm text-pink-200/90 max-w-xl mx-auto mb-6">
              Puedes hojear las primeras páginas gratis o acceder al libro completo con todos los capítulos y bonos exclusivos en Hotmart.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => redirectToCheckout('premium')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:brightness-110 text-white font-bold text-sm shadow-lg shadow-pink-600/30 flex items-center justify-center gap-2 transition-all"
              >
                <span>Descargar Libro Completo en Hotmart</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenSampleModal}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-pink-400/30 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <BookOpen className="w-4 h-4 text-pink-300" />
                <span>Leer Muestra de Primeras Páginas</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
