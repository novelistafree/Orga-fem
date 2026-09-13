import React, { useState } from 'react';
import { FAQS } from '../data/bookContent';
import { ChevronDown, ChevronUp, HelpCircle, ShieldCheck } from 'lucide-react';
import { useHotmart } from '../context/HotmartContext';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { redirectToCheckout } = useHotmart();

  const toggle = (idx: number) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0e0714] via-[#140720] to-[#0e0714] relative border-t border-pink-500/10" id="preguntas-frecuentes">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-950/60 px-3.5 py-1.5 rounded-full border border-pink-500/30 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respuestas Claras</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4 font-serif-title">
            Preguntas Frecuentes
          </h2>
          <p className="text-pink-100/80 text-sm sm:text-base">
            Todo lo que necesitas saber sobre el libro, la entrega inmediata y la pasarela de pago segura de Hotmart.
          </p>
        </div>

        <div className="space-y-3.5 mb-12">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#1e0d30] border-pink-500/50 shadow-lg shadow-pink-950/30'
                    : 'bg-white/[0.02] hover:bg-white/[0.05] border-pink-500/20'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white font-serif-title">
                    {faq.q}
                  </span>
                  <div className="text-pink-300 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-pink-500/20 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Hotmart Purchase Guarantee reminder */}
        <div className="p-6 rounded-2xl bg-[#190926] border border-pink-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">¿Tienes alguna duda adicional?</h4>
              <p className="text-xs text-zinc-400">Recuerda que tu compra está 100% protegida por la garantía de Hotmart.</p>
            </div>
          </div>
          <button
            onClick={() => redirectToCheckout('premium')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 hover:brightness-110 text-white font-bold text-xs shadow-md transition-all whitespace-nowrap"
          >
            Ir al Pago Seguro en Hotmart
          </button>
        </div>

      </div>
    </section>
  );
};
