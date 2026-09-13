import React from 'react';
import { useHotmart } from '../context/HotmartContext';
import { UserCheck, Heart, Sparkles, Compass, ArrowRight } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  const { redirectToCheckout } = useHotmart();

  const audiences = [
    {
      icon: <UserCheck className="w-6 h-6 text-pink-400" />,
      title: "Mujeres Conscientes",
      subtitle: "Autodescubrimiento sin culpas ni presiones",
      points: [
        "Comprender la anatomía tridimensional de tu clítoris y zonas erógenas internas.",
        "Superar la creencia limitante de que 'cuesta' alcanzar el clímax o que necesitas encajar en un molde.",
        "Aprender a activar orgasmos múltiples y la Respuesta Sexual Expandida (RSE).",
        "Sanar la relación con tu cuerpo a través del amor propio y el placer saludable."
      ]
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-400" />,
      title: "Parejas en Búsqueda de Conexión",
      subtitle: "De la rutina a la intimidad trascendental",
      points: [
        "Derribar la barrera de la incomodidad y aprender a hablar de fantasías eróticas.",
        "Integrar el método Carezza y la respiración compartida para un éxtasis prolongado.",
        "Multiplicar los niveles de oxitocina para fortalecer el apego seguro y la devoción mutua.",
        "Transformar cada encuentro íntimo en un santuario de confianza y renovación emocional."
      ]
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-400" />,
      title: "Hombres & Amantes Conscientes",
      subtitle: "La guía definitiva para comprender lo femenino",
      points: [
        "Dejar atrás la pornografía engañosa y entender la verdadera respuesta fisiológica femenina.",
        "Dominar la localización y caricias exactas para el Punto G, Punto A, Punto U y Cérvix.",
        "Comprender las diferencias reales entre squirting y eyaculación femenina sin mitos.",
        "Convertirse en el amante atento, paciente y sabio con el que cualquier mujer sueña."
      ]
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: "Buscadores del Tantra & Consciencia",
      subtitle: "El placer como portal espiritual y curativo",
      points: [
        "Aprender a circular la energía sexual (Chi/Kundalini) a través de los 7 chakras.",
        "Experimentar orgasmos implosivos revitalizantes que nutren los órganos vitales.",
        "Técnicas de hipnosis erótica y meditación orgásmica para estados alterados de consciencia.",
        "Descubrir la relación histórica entre los ritos sagrados de Eleusis y el poder de la mujer."
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#0e0714] relative" id="para-quien">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/50 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            Diseñado para Transformar tu Vida Íntima
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4 font-serif-title">
            ¿Para Quién es Este Libro?
          </h2>
          <p className="text-pink-100/80 text-sm sm:text-base leading-relaxed">
            No importa en qué etapa de tu vida o relación te encuentres: el conocimiento es el único puente que disuelve la duda y multiplica el placer genuino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {audiences.map((aud, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-pink-500/20 p-6 sm:p-8 hover:border-pink-500/40 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-black/40 border border-pink-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {aud.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-serif-title">
                    {aud.title}
                  </h3>
                  <p className="text-xs text-pink-300/80 font-medium">
                    {aud.subtitle}
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {aud.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-pink-400 mt-1 shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={() => redirectToCheckout('premium')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:brightness-110 text-white font-bold text-sm sm:text-base shadow-lg shadow-pink-600/30 transition-all"
          >
            <span>Quiero Adquirir Mi Copia en Hotmart</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
