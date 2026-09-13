import React from 'react';
import { useHotmart } from '../context/HotmartContext';
import { ShieldPlus, HeartPulse, Moon, Sparkles, Zap, Flower2, ArrowRight } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const { redirectToCheckout } = useHotmart();

  const benefits = [
    {
      icon: <HeartPulse className="w-6 h-6 text-rose-400" />,
      title: "Alivio de Dolores Menstruales y Migrañas",
      desc: "La cascada de endorfinas y oxitocina liberada durante el clímax actúa como un potente analgésico biológico natural, reduciendo espasmos uterinos y cefaleas tensionales."
    },
    {
      icon: <ShieldPlus className="w-6 h-6 text-emerald-400" />,
      title: "Fortalecimiento del Suelo Pélvico",
      desc: "Las contracciones rítmicas involuntarias tonifican los músculos pélvicos profundos, mejorando la salud reproductiva, el control vesical y la sensibilidad sensorial futura."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "Disminución Drástica del Estrés (Cortisol)",
      desc: "El orgasmo desactiva temporalmente el estrés crónico de la corteza prefrontal, equilibrando el sistema nervioso parasimpático e induciendo una profunda sensación de calma."
    },
    {
      icon: <Moon className="w-6 h-6 text-purple-400" />,
      title: "Sueño Reparador & Antidepresivo Natural",
      desc: "Como documenta la Dra. Beverly Whipple en 'The Science of Orgasm', la liberación de prolactina y dopamina propicia un sueño profundo y combate los síntomas depresivos leves."
    },
    {
      icon: <Flower2 className="w-6 h-6 text-pink-400" />,
      title: "Vínculo de Amor y Apego Seguro",
      desc: "La oxitocina ('la hormona del amor') intensifica el sentido de complicidad, devoción y cercanía en la pareja, disolviendo barreras defensivas y distancias emocionales."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      title: "Vitalidad Bioenergética (Orgasmos Implosivos)",
      desc: "A través de las técnicas tántricas y la orgasmoterapia de Wilhelm Reich, el placer se dirige hacia el interior para nutrir y revitalizar órganos vitales y glándulas endocrinas."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0e0714] via-[#160a23] to-[#0e0714] relative border-t border-pink-500/10" id="beneficios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/50 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            Ciencia Médica • Capítulos 2 y 9
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4 font-serif-title">
            Mucho Más Que Placer: El Impacto en la Salud
          </h2>
          <p className="text-pink-100/80 text-sm sm:text-base leading-relaxed">
            El orgasmo femenino no es una casualidad biológica sin propósito. Investigaciones publicadas en el <em>Journal of Women's Health</em> y universidades como Rutgers confirman sus beneficios holísticos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/[0.03] border border-pink-500/20 hover:border-pink-500/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#230f33] border border-pink-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-serif-title">
                {b.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quote from Wilhelm Reich / Beverly Whipple */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#1b0a2a] border border-pink-500/30 text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base text-pink-100 italic mb-3 font-serif">
            "La capacidad de experimentar un orgasmo pleno permite la libre circulación de la energía en el cuerpo, promoviendo la salud física y el equilibrio emocional profundo."
          </p>
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
            — Citado en Capítulo 9 (Wilhelm Reich & La Orgasmoterapia)
          </span>
          <div className="mt-6">
            <button
              onClick={() => redirectToCheckout('premium')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-lg shadow-pink-600/30 inline-flex items-center gap-2"
            >
              <span>Descargar Ebook y Guía de Salud en Hotmart</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
