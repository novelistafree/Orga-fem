import React, { useState } from 'react';
import { ORGASM_TYPES } from '../data/bookContent';
import { OrgasmTypeItem } from '../types';
import { useHotmart } from '../context/HotmartContext';
import { Sparkles, Eye, ArrowRight, Activity, Flame, ShieldAlert, HeartHandshake } from 'lucide-react';

export const OrgasmTypesExplorer: React.FC = () => {
  const { redirectToCheckout } = useHotmart();
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedType, setSelectedType] = useState<OrgasmTypeItem>(ORGASM_TYPES[0]);

  const categories = ['Todos', 'Físico / Genital', 'Profundo / Interno', 'Energético / Tántrico', 'Mental / No Convencional'];

  const filteredTypes = activeCategory === 'Todos' 
    ? ORGASM_TYPES 
    : ORGASM_TYPES.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-[#0e0714] relative" id="tipos-orgasmos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-950/80 border border-pink-500/40 text-pink-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Capítulos 10 y 11 del Libro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-serif-title">
            Los 14 Tipos de Orgasmos Femeninos
          </h2>
          <p className="text-pink-100/80 text-sm sm:text-base leading-relaxed">
            La mayoría de las personas sólo conoce uno o dos. En este libro, Héctor D.M.S. clasifica y desglosa meticulosamente cada experiencia con su base anatómica, estudios de fMRI y técnicas para alcanzarlos.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-lg shadow-pink-600/30 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-pink-200/80 border border-pink-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Layout: Grid of cards + Detailed Spotlight View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Grid of Orgasm Badges */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[560px] overflow-y-auto pr-1 custom-scrollbar">
            {filteredTypes.map(item => {
              const isSelected = selectedType.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedType(item)}
                  className={`text-left p-4 rounded-xl transition-all border ${
                    isSelected
                      ? 'bg-pink-900/40 border-pink-400 shadow-lg shadow-pink-900/30 translate-x-1'
                      : 'bg-white/[0.03] hover:bg-white/[0.07] border-pink-500/20 text-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-black/40 text-pink-300">
                      {item.category}
                    </span>
                    <span className={`text-[11px] font-semibold flex items-center gap-1 ${
                      item.intensity === 'Trascendental' || item.intensity === 'Transformadora'
                        ? 'text-amber-300'
                        : 'text-pink-300'
                    }`}>
                      <Flame className="w-3 h-3" />
                      {item.intensity}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-serif-title mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Spotlight Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-gradient-to-br from-[#1c0c2a] via-[#160822] to-[#0e0714] border border-pink-500/40 p-6 sm:p-8 shadow-2xl relative">
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-pink-500/20">
                <div>
                  <span className="inline-block text-xs font-bold text-pink-300 uppercase tracking-wider mb-1">
                    Ficha Técnica de Estudio
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-title">
                    {selectedType.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="block text-[11px] text-zinc-400">Intensidad</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pink-950/80 border border-pink-500/40 text-amber-300 font-bold text-xs">
                    <Flame className="w-3.5 h-3.5" />
                    {selectedType.intensity}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-5">
                <h4 className="text-xs font-semibold text-pink-200 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-pink-400" />
                  Descripción y Sensaciones
                </h4>
                <p className="text-sm text-zinc-200 leading-relaxed">
                  {selectedType.description}
                </p>
              </div>

              {/* Anatomical Basis */}
              <div className="mb-5 p-3.5 rounded-xl bg-black/30 border border-pink-500/20">
                <h4 className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  Base Anatómica y Fisiológica
                </h4>
                <p className="text-xs text-zinc-300">
                  {selectedType.anatomicalBasis}
                </p>
              </div>

              {/* Recommended Technique */}
              <div className="mb-5">
                <h4 className="text-xs font-semibold text-pink-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-rose-400" />
                  Técnica Recomendada en el Libro
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300">
                  {selectedType.recommendedTechnique}
                </p>
              </div>

              {/* Scientific Insight */}
              <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/30 mb-6">
                <h4 className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Evidencia Científica / Autores Citados
                </h4>
                <p className="text-xs text-purple-100/90 italic">
                  "{selectedType.scientificInsight}"
                </p>
              </div>

              {/* CTA direct to Hotmart */}
              <button
                onClick={() => redirectToCheckout('premium')}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:brightness-110 text-white font-bold text-sm shadow-lg shadow-pink-600/30 flex items-center justify-center gap-2 transition-all"
              >
                <span>Aprender la Guía Completa de Este Orgasmo en el Libro</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Special Highlight: Implosivos vs Explosivos & Squirting vs Eyaculación */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#170a22] border border-pink-500/30">
            <h4 className="text-base font-bold text-white mb-2 font-serif-title flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500" />
              Orgasmos Explosivos vs. Implosivos (Capítulo 10)
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed mb-3">
              Mientras el orgasmo explosivo expulsa la energía bruscamente y suele dejar una sensación de cansancio físico, el <strong>orgasmo implosivo</strong> (enseñado en la sexología tántrica y taoísta) absorbe y distribuye la energía orgásmica hacia los órganos internos y glándulas, resultando revitalizante y prolongado.
            </p>
            <span className="text-[11px] font-semibold text-amber-300">
              → Explicado con protocolos paso a paso en las páginas 93 a 103.
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-[#170a22] border border-pink-500/30">
            <h4 className="text-base font-bold text-white mb-2 font-serif-title flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              Squirting vs. Eyaculación Femenina (Diferencias Médicas)
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed mb-3">
              A menudo confundidos, el libro aclara la diferencia con estudios de la Dra. Beverly Whipple: el <strong>squirting</strong> es un líquido claro proveniente de la vejiga con fluido parauretral, mientras que la <strong>eyaculación femenina</strong> proviene de las glándulas de Skene y contiene fosfatasa ácida prostática y PSA.
            </p>
            <span className="text-[11px] font-semibold text-amber-300">
              → Análisis médico detallado en las páginas 101 a 103.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
