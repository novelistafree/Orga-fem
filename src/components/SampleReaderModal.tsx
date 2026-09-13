import React, { useState } from 'react';
import { useHotmart } from '../context/HotmartContext';
import { X, ChevronLeft, ChevronRight, BookOpen, ShieldCheck, ArrowRight, Lock } from 'lucide-react';

interface SampleReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleReaderModal: React.FC<SampleReaderModalProps> = ({ isOpen, onClose }) => {
  const { redirectToCheckout } = useHotmart();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  if (!isOpen) return null;

  const samplePages = [
    {
      title: "Dedicatoria del Autor",
      pageNumber: "Página 3",
      content: `DEDICATORIA

A las mujeres, guardianas de misterios y creadoras de vida, cuyo cuerpo y alma danzan al ritmo de un universo lleno de sensaciones.

A los hombres y a todas las personas que, con respeto y curiosidad, buscan comprender y honrar la belleza de lo femenino, recordando que el placer es un derecho y el conocimiento, un puente.

Este libro está dedicado a ti, lector o lectora, para que encuentres en estas páginas no solo respuestas, sino también nuevas preguntas que te inspiren a explorar el infinito poder de la conexión profunda y el placer compartido.

Con admiración y compromiso,
Héctor.`
    },
    {
      title: "Introducción • 18 Años de Búsqueda",
      pageNumber: "Páginas 9 y 10",
      content: `INTRODUCCIÓN

Desde que tengo uso de razón, he sido un admirador de la naturaleza femenina, y siempre me han fascinado los misterios que rodean su sexualidad, especialmente los orgasmos femeninos.

La primera vez que vi a una mujer tener un orgasmo, tenía 21 años. Fue una experiencia que me marcó profundamente para el resto de mi vida. Ahora, con 38 años, y de haber llegado a este punto de mi vida, siento que aún me queda mucho por descubrir pero creo que ha llegado el momento de volcar en mis libros lo poquito que sé. En este libro expongo lo que he aprendido a lo largo de muchos años de estudio y experimentación personal.

No soy un profesional o experto en sexualidad humana de academia. Lo que comparto en este y en mis otros libros es producto de mi formación empírica en múltiples campos, como la hipnosis erótica, la sexualidad tántrica, la meditación y otros temas afines.

En las siguientes páginas, expondré lo que he descubierto en mi búsqueda a lo largo de estos 18 años en el mundo de la espiritualidad, la hipnosis, el control mental y las prácticas esotéricas en relación con la sexualidad femenina y su capacidad para experimentar múltiples tipos de orgasmos.

Aquí están algunas de las cosas que veremos:
• El verdadero potencial orgásmico de una mujer.
• Los diferentes tipos de orgasmos femeninos.
• Cuál es la función real de los orgasmos femeninos.
• Las múltiples formas en que las mujeres pueden alcanzar el orgasmo.
• La relación entre el orgasmo y los estados de conciencia.
• La conexión entre el orgasmo y el estado psicoemocional femenino.
• El vínculo entre el orgasmo y la espiritualidad.`
    },
    {
      title: "Capítulo 10 • Tipos de Orgasmos Femeninos",
      pageNumber: "Páginas 78 y 79",
      content: `CAPÍTULO 10: TIPOS DE ORGASMOS FEMENINOS

Explorar los diferentes tipos de orgasmos femeninos revela la impresionante capacidad del cuerpo femenino para experimentar placer de diversas formas. Este capítulo detalla los distintos tipos de orgasmos que pueden experimentar las mujeres, proporcionando una comprensión lo más precisa posible de cada uno, citando estudios científicos y prácticas específicas para alcanzarlos.

Además, se introduce cómo la hipnosis erótica puede ser una herramienta poderosa para mejorar la respuesta sexual y alcanzar estos orgasmos de manera más efectiva y rápida.

En esta sección veremos:
1. Los 3 tipos de orgasmos por ocurrencia:
   - El orgasmo común (clitoridiano)
   - Los orgasmos múltiples
   - Los orgasmos continuos o en cadena

2. Los 3 niveles de intensidad:
   - El orgasmo localizado
   - El orgasmo de cuerpo completo
   - El orgasmo del alma

3. Los diferentes tipos de orgasmos que puede alcanzar la mujer de acuerdo al punto erógeno estimulado.
4. Orgasmos implosivos y explosivos (nutrición energética interna vs. descarga física).
5. Orgasmos poco conocidos: La RSE (Respuesta Sexual Expandida), el parto orgásmico, el orgasmo sinestésico y el orgasmo de chakras.`
    },
    {
      title: "Reflexión Final del Autor",
      pageNumber: "Páginas 191 y 192",
      content: `DESPEDIDA

Quiero expresar mi más profundo agradecimiento por haber adquirido y leído mi libro. Espero que esta obra te haya inspirado a explorar tu feminidad y a descubrir tu verdadero potencial. La sexualidad femenina es un aspecto maravilloso y complejo de la existencia humana, que merece ser comprendido y celebrado en todas sus dimensiones.

La capacidad única de las mujeres para experimentar una amplia variedad de orgasmos es un regalo increíble de la naturaleza. Sería reduccionista pensar que esta capacidad fue otorgada únicamente para el placer físico o como un incentivo para la reproducción. Creo firmemente que hay una razón más profunda detrás de esta habilidad, una razón que se entrelaza con nuestra esencia espiritual.

Llevo muchos años practicando la meditación, y estas experiencias me han permitido conectar con una realidad que trasciende lo físico. La práctica sexual consciente y plena tiene el potencial de llevarnos a estados de éxtasis y conexión profunda...

Te exhorto a seguir explorando tu sexualidad con curiosidad y mente abierta. La sexualidad es un don, y aprovechar plenamente sus posibilidades puede ser una vía hacia una vida más plena y satisfecha.

Con gratitud y respeto,
Héctor D.M.S.`
    }
  ];

  const currentPage = samplePages[currentPageIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#14081e] border border-pink-500/40 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[94vh] sm:max-h-[90vh]"
        id="sample-reader-modal"
      >
        {/* Top bar */}
        <div className="p-3 sm:p-4 sm:px-6 bg-[#1a0b27] border-b border-pink-500/20 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <BookOpen className="w-4 h-4 text-pink-400 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-white font-serif-title truncate">
              Muestra Gratuita de Lectura
            </span>
            <span className="text-[10px] bg-pink-950 px-2 py-0.5 rounded text-pink-300 border border-pink-500/30 shrink-0">
              {currentPage.pageNumber}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 min-h-[38px] min-w-[38px] flex items-center justify-center"
            aria-label="Cerrar muestra"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Reader Paper Content */}
        <div className="p-4 sm:p-6 sm:p-8 overflow-y-auto flex-1 bg-[#100618] text-pink-50/90 font-serif leading-relaxed text-xs sm:text-base selection:bg-pink-500/40">
          <div className="max-w-xl mx-auto">
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6 border-b border-pink-500/20 pb-2 sm:pb-3 font-serif-title text-center">
              {currentPage.title}
            </h3>
            <div className="whitespace-pre-line text-zinc-200 space-y-3 sm:space-y-4 text-xs sm:text-[15px] font-sans leading-relaxed">
              {currentPage.content}
            </div>

            {/* Locked teaser indicator */}
            <div className="mt-6 sm:mt-8 p-3.5 sm:p-4 rounded-xl bg-pink-950/40 border border-pink-500/30 text-center">
              <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mx-auto mb-1.5 sm:mb-2" />
              <p className="text-xs sm:text-sm text-pink-200 font-semibold mb-1">
                ¿Deseas continuar leyendo los 13 capítulos completos?
              </p>
              <p className="text-[10px] sm:text-xs text-zinc-400">
                Obtén el libro completo con 195 páginas y bonos exclusivos en Hotmart.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation & CTA */}
        <div className="p-3 sm:p-4 sm:px-6 bg-[#180b24] border-t border-pink-500/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
          <div className="flex items-center justify-center gap-2">
            <button
              disabled={currentPageIndex === 0}
              onClick={() => setCurrentPageIndex(prev => prev - 1)}
              className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-xs text-zinc-300 flex items-center gap-1 transition-colors min-h-[38px]"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>
            <span className="text-xs text-zinc-400 px-2 font-mono">
              {currentPageIndex + 1} de {samplePages.length}
            </span>
            <button
              disabled={currentPageIndex === samplePages.length - 1}
              onClick={() => setCurrentPageIndex(prev => prev + 1)}
              className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-xs text-zinc-300 flex items-center gap-1 transition-colors min-h-[38px]"
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              redirectToCheckout('premium');
            }}
            className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all min-h-[40px]"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Comprar Libro en Hotmart</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
};
