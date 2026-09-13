import React from 'react';
import { useHotmart } from '../context/HotmartContext';
import { ShieldCheck, Heart, Lock, BookOpen } from 'lucide-react';

export const Footer: React.FC<{ onOpenSampleModal: () => void }> = ({ onOpenSampleModal }) => {
  const { redirectToCheckout, setIsConfigModalOpen } = useHotmart();

  return (
    <footer className="bg-[#09040d] text-zinc-400 text-xs border-t border-pink-500/20 pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Col 1: Brand & Synopsis */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-pink-600/30 border border-pink-500/40 flex items-center justify-center text-pink-300">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white font-serif-title">
                El ABC dario del Orgasmo Femenino
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-md">
              La guía más completa y documentada sobre la anatomía, neuroquímica, hipnosis erótica y sabiduría tántrica del placer femenino. Escrito por Héctor D.M.S.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                Venta y Entrega Oficial en Hotmart
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-pink-300 bg-pink-950/40 border border-pink-500/30 px-2.5 py-1 rounded-full">
                <Lock className="w-3.5 h-3.5" />
                SSL 256-bit Seguro
              </span>
            </div>
          </div>

          {/* Col 2: Fast Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pink-200">
              Navegación Rápida
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#inicio" className="hover:text-pink-300 transition-colors">Inicio</a></li>
              <li><a href="#que-descubriras" className="hover:text-pink-300 transition-colors">13 Capítulos del Libro</a></li>
              <li><a href="#tipos-orgasmos" className="hover:text-pink-300 transition-colors">14 Tipos de Orgasmos</a></li>
              <li><a href="#beneficios" className="hover:text-pink-300 transition-colors">Salud y Beneficios Médicos</a></li>
              <li><a href="#autor" className="hover:text-pink-300 transition-colors">Sobre el Autor Héctor D.M.S.</a></li>
              <li><a href="#precios" className="hover:text-pink-300 transition-colors">Planes y Precios</a></li>
              <li>
                <button onClick={onOpenSampleModal} className="text-amber-300 hover:text-amber-200 transition-colors">
                  Leer Muestra Gratuita
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hotmart Producer Config & Support */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pink-200">
              Gestión de Venta Hotmart
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              ¿Eres el productor o afiliado del libro? Puedes cambiar o actualizar tu enlace directo de checkout en cualquier momento:
            </p>
            <button
              onClick={() => setIsConfigModalOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-pink-950/60 border border-pink-500/40 hover:bg-pink-900/40 text-pink-300 text-xs font-semibold transition-colors"
            >
              Configurar Enlace de Checkout
            </button>
            <div className="pt-2">
              <button
                onClick={() => redirectToCheckout('premium')}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 hover:brightness-110 text-white font-bold text-xs shadow-md transition-all"
              >
                Comprar en Hotmart ($29 USD)
              </button>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box (Directly from pages 11-12 of the book) */}
        <div className="p-4 rounded-xl bg-black/40 border border-pink-500/15 mb-8 text-[11px] leading-relaxed text-zinc-400 space-y-2">
          <p className="font-semibold text-zinc-300 uppercase tracking-wider">
            Descargo de Responsabilidad Médica y Educativa:
          </p>
          <p>
            El contenido de este libro tiene fines informativos y educativos únicamente. No constituye asesoramiento médico, psicológico, sexual ni de cualquier otra índole profesional. Las experiencias y conocimientos compartidos en este libro son producto de la formación empírica y personal del autor, y no deben ser interpretados como recomendaciones o directrices médicas oficiales. Se aconseja a los lectores que consulten a profesionales cualificados antes de realizar cambios significativos en su vida sexual o de salud.
          </p>
          <p className="text-zinc-400">
            Aviso de Hotmart: "Este producto se comercializa con el apoyo de Hotmart. La plataforma no realiza un control editorial previo de los productos vendidos, ni valora la tecnicidad y experiencia de quienes los elaboran. La existencia de un producto y su adquisición a través de la plataforma no pueden considerarse como garantía de calidad de contenido o resultado en ningún caso. Al comprarlo, el comprador declara conocer esta información."
          </p>
        </div>

        {/* Copyright & Sign */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-xs text-center sm:text-left">
          <p>© 2025 Héctor D.M.S. Todos los derechos reservados. ISBN en trámite.</p>
          <p className="flex items-center gap-1 justify-center">
            <span>Diseñado con devoción hacia el conocimiento y el placer femenino</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </p>
        </div>

      </div>
    </footer>
  );
};
