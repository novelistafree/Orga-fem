import React, { useState, useEffect, useRef } from 'react';
import { useHotmart } from '../context/HotmartContext';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Check, 
  Copy, 
  Zap,
  BookOpen,
  Film,
  Flame,
  Heart,
  ExternalLink
} from 'lucide-react';

interface Scene {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  startTime: number;
  endTime: number;
  voiceover: string;
  visualDescription: string;
  keyPhrases: string[];
  ctaText?: string;
  bgGradient: string;
  accentColor: string;
}

const SCENES: Scene[] = [
  {
    id: 1,
    title: "¿Alguna vez te has preguntado por qué el placer femenino sigue rodeado de dudas y misterio?",
    subtitle: "El 70% de las mujeres ha fingido alguna vez o ha sentido que 'algo anda mal' en su anatomía.",
    tag: "01. EL GANCHO",
    startTime: 0,
    endTime: 18,
    voiceover: "¿Alguna vez te has preguntado por qué, en pleno siglo veintiuno, el placer femenino sigue envuelto en silencio, mitos y dudas? Más del setenta por ciento de las mujeres ha fingido alguna vez o ha llegado a pensar que hay algo defectuoso en su cuerpo. Pero déjame decirte algo con absoluta certeza: no hay nada roto en ti. Simplemente, nunca te dieron el mapa correcto.",
    visualDescription: "Fondo oscuro aterciopelado con reflejos rosa y magenta. Tipografía cinematográfica de alto impacto con palabras clave destacadas en dorado.",
    keyPhrases: [
      "El 70% de las mujeres ha dudado de su capacidad",
      "Siglos de mitos y silencio",
      "No hay nada roto en ti: faltaba el mapa real"
    ],
    bgGradient: "from-[#1a0525] via-[#240a33] to-[#12041c]",
    accentColor: "text-pink-400"
  },
  {
    id: 2,
    title: "El Problema Oculto: Siglos de desinformación médica y tabú cultural",
    subtitle: "Durante generaciones, la anatomía del placer fue reducida a una visión incompleta y frustrante.",
    tag: "02. EL PROBLEMA",
    startTime: 18,
    endTime: 38,
    voiceover: "Durante siglos, la educación formal y la cultura popular redujeron el placer a una sola fórmula obsoleta, ignorando por completo la verdadera arquitectura sensorial de la mujer. Nos enseñaron a buscar en el lugar equivocado, provocando frustración, culpa y una desconexión silenciosa tanto en mujeres solas como en parejas que desean amarse plenamente.",
    visualDescription: "Contraste visual entre esquemas médicos antiguos y la revelación de la neurobiología moderna. Luces pulsantes que representan conexiones neuronales.",
    keyPhrases: [
      "Fórmulas obsoletas y expectativas irreales",
      "Frustración, culpa y desconexión íntima",
      "La ciencia que nunca se enseñó en la escuela"
    ],
    bgGradient: "from-[#22072e] via-[#2d0b3d] to-[#160520]",
    accentColor: "text-amber-400"
  },
  {
    id: 3,
    title: "La Solución: «El ABC dario del Orgasmo Femenino» de Héctor D.M.S.",
    subtitle: "18 años de investigación científica, tántrica y neurológica compilados en 195 páginas.",
    tag: "03. LA SOLUCIÓN",
    startTime: 38,
    endTime: 64,
    voiceover: "Para cambiar esta realidad nace «El ABC dario del Orgasmo Femenino», la obra maestra de Héctor D.M.S. Con más de dieciocho años de rigurosa investigación científica, neurobiología y sabiduría tántrica, este libro de ciento noventa y cinco páginas es la guía definitiva. Aquí descubrirás la estructura tridimensional real del clítoris y cómo activar catorce tipos distintos de orgasmos: desde el cervical y vaginal, hasta orgasmos implosivos, energéticos y de cuerpo completo.",
    visualDescription: "Aparición del libro en 3D con destellos dorados y apertura de capítulos clave. Infografía animada de los 14 tipos de orgasmos.",
    keyPhrases: [
      "18 años de investigación condensados",
      "Anatomía 3D y neurobiología de vanguardia",
      "14 tipos distintos de orgasmos documentados paso a paso"
    ],
    bgGradient: "from-[#2b083b] via-[#3d0f52] to-[#1a0526]",
    accentColor: "text-rose-400"
  },
  {
    id: 4,
    title: "La Transformación: Placer sin culpas, salud pélvica y máxima intimidad",
    subtitle: "Equilibrio hormonal de oxitocina, alivio de dolores y una conexión de pareja inquebrantable.",
    tag: "04. LA TRANSFORMACIÓN",
    startTime: 64,
    endTime: 78,
    voiceover: "Este libro no es solo técnica: es una transformación integral. Descubrirás cómo el orgasmo eleva la oxitocina, fortalece el suelo pélvico, alivia dolores menstruales y libera tensiones acumuladas por años. Es el despertar de tu soberanía corporal, de una intimidad sin vergüenza y de un éxtasis que trasciende lo físico.",
    visualDescription: "Sensación de ligereza, libertad y empoderamiento íntimo. Iconos de salud pélvica, bienestar hormonal y complicidad en pareja.",
    keyPhrases: [
      "Suelo pélvico fuerte y alivio menstrual",
      "Inundación natural de oxitocina y dopamina",
      "Conexión de pareja íntima, profunda y libre de tabúes"
    ],
    bgGradient: "from-[#1d0628] via-[#2f0d3e] to-[#14041e]",
    accentColor: "text-emerald-400"
  },
  {
    id: 5,
    title: "Tu Acceso Inmediato y Seguro en Hotmart",
    subtitle: "Descarga digital inmediata en PDF + EPUB. Garantía incondicional de 7 días.",
    tag: "05. LLAMADO A LA ACCIÓN",
    startTime: 78,
    endTime: 90,
    voiceover: "La obra está disponible hoy mismo de forma exclusiva en la plataforma oficial de Hotmart. Recibes acceso y descarga inmediata en formatos PDF y EPUB para leer en tu móvil, tablet o Kindle. Además, cuentas con la garantía incondicional de satisfacción total por siete días y facturación cien por ciento privada y segura. Haz clic en el botón debajo de este video y comienza hoy tu viaje hacia el placer absoluto.",
    visualDescription: "Pantalla final con el sello oficial de Hotmart, candado de seguridad bancaria SSL, oferta de lanzamiento y botón brillante para comprar.",
    keyPhrases: [
      "Disponible exclusivamente en Hotmart",
      "Descarga inmediata en PDF + EPUB",
      "Garantía incondicional de 7 días y pago 100% discreto"
    ],
    ctaText: "Comprar Ahora en Hotmart ($29 USD)",
    bgGradient: "from-[#29093b] via-[#430f5b] to-[#1c0629]",
    accentColor: "text-amber-300"
  }
];

export const PromotionalVideo: React.FC = () => {
  const { redirectToCheckout } = useHotmart();
  
  // Player state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<'video' | 'script'>('video');
  const [copiedScript, setCopiedScript] = useState(false);

  const totalDuration = 90; // 1:30 minutes
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const currentSceneIndexRef = useRef<number>(0);

  // Find current active scene
  const currentSceneIndex = SCENES.findIndex(
    s => currentTime >= s.startTime && currentTime < s.endTime
  );
  const activeScene = SCENES[currentSceneIndex !== -1 ? currentSceneIndex : SCENES.length - 1];

  // Sync ref
  useEffect(() => {
    currentSceneIndexRef.current = currentSceneIndex !== -1 ? currentSceneIndex : SCENES.length - 1;
  }, [currentSceneIndex]);

  // Audio tone generator for subtle ambient chord
  const playAmbientSound = () => {
    try {
      if (!audioContextRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioContextClass();
      }
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
    } catch {
      // Audio context may be restricted before user gesture
    }
  };

  // Speech synthesis for Spanish voiceover narration
  const speakCurrentScene = (sceneIndex: number) => {
    if (!voiceEnabled || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const scene = SCENES[sceneIndex];
    if (!scene) return;

    const utterance = new SpeechSynthesisUtterance(scene.voiceover);
    utterance.lang = 'es-ES'; // Spanish
    utterance.rate = 1.0;
    utterance.pitch = 0.95;

    // Pick best available Spanish voice if available
    const voices = window.speechSynthesis.getVoices();
    const esVoice = voices.find(v => v.lang.startsWith('es-') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Lucia') || v.name.includes('Monica')));
    if (esVoice) {
      utterance.voice = esVoice;
    }

    synthRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  // Timer loop for video playback
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    let prevSceneIdx = -1;

    if (isPlaying) {
      playAmbientSound();
      
      // Trigger voice for the initial scene if just started
      const initialIdx = SCENES.findIndex(
        s => currentTime >= s.startTime && currentTime < s.endTime
      );
      if (initialIdx !== -1 && voiceEnabled) {
        speakCurrentScene(initialIdx);
        prevSceneIdx = initialIdx;
      }

      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
            return totalDuration;
          }
          const nextTime = +(prev + 0.5).toFixed(1);

          // Check if scene changed
          const nextSceneIdx = SCENES.findIndex(
            s => nextTime >= s.startTime && nextTime < s.endTime
          );
          if (nextSceneIdx !== -1 && nextSceneIdx !== prevSceneIdx) {
            prevSceneIdx = nextSceneIdx;
            if (voiceEnabled) {
              speakCurrentScene(nextSceneIdx);
            }
          }

          return nextTime;
        });
      }, 500);
    } else {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }

    return () => {
      if (interval) clearInterval(interval);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isPlaying, voiceEnabled]);

  // Handle Play/Pause
  const togglePlay = () => {
    if (currentTime >= totalDuration) {
      setCurrentTime(0);
      setIsPlaying(true);
      return;
    }
    setIsPlaying(!isPlaying);
  };

  // Handle Restart
  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(true);
    if (voiceEnabled) {
      speakCurrentScene(0);
    }
  };

  // Handle Voice Toggle
  const toggleVoice = () => {
    if (voiceEnabled) {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setVoiceEnabled(false);
    } else {
      setVoiceEnabled(true);
      if (isPlaying) {
        speakCurrentScene(currentSceneIndexRef.current);
      }
    }
  };

  // Seek time
  const handleSeek = (newTime: number) => {
    setCurrentTime(newTime);
    const targetIdx = SCENES.findIndex(
      s => newTime >= s.startTime && newTime < s.endTime
    );
    if (targetIdx !== -1 && isPlaying && voiceEnabled) {
      speakCurrentScene(targetIdx);
    }
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!videoContainerRef.current) return;
    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Copy full script to clipboard
  const handleCopyScript = () => {
    const fullScript = `
=== GUION TÉCNICO Y STORYBOARD OFICIAL (VIDEO PROMOCIONAL 1:30 MIN) ===
Título: El ABC dario del Orgasmo Femenino
Autor: Héctor D.M.S.
Plataforma de Venta: Hotmart
Duración: 1:30 min (90 seg)
Público Objetivo: Mujeres y parejas que buscan superar mitos y vivir una sexualidad plena.

${SCENES.map(s => `
[${s.tag}] (${formatTime(s.startTime)} - ${formatTime(s.endTime)})
VISUAL: ${s.visualDescription}
TEXTO EN PANTALLA:
${s.keyPhrases.map(p => `  • ${p}`).join('\n')}
VOZ EN OFF (LOCUCIÓN):
"${s.voiceover}"
${s.ctaText ? `LLAMADO A LA ACCIÓN: ${s.ctaText}\n` : ''}
--------------------------------------------------`).join('\n')}

ENLACE DE COMPRA: Oficial en Hotmart (Descarga Inmediata PDF+EPUB + Garantía de 7 días).
`.trim();

    navigator.clipboard.writeText(fullScript).then(() => {
      setCopiedScript(true);
      setTimeout(() => setCopiedScript(false), 3000);
    });
  };

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-[#0c0512] via-[#150720] to-[#0e0714] relative border-t border-pink-500/15 overflow-hidden" id="video-promocional">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[320px] sm:h-[650px] bg-pink-600/10 blur-[100px] sm:blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/80 border border-pink-500/30 text-pink-300 text-xs font-semibold mb-3 shadow-sm">
            <Film className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span>Trailer Oficial & Video Promocional (1:30 min)</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4 font-serif-title">
            Descubre en 90 Segundos el Poder de Esta Obra
          </h2>
          <p className="text-pink-100/80 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            Mira la presentación en video del libro: la problemática histórica, las respuestas científicas que ofrece y cómo acceder a tu copia digital en Hotmart.
          </p>

          {/* Toggle between Video Player and Full Script */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mt-6">
            <button
              onClick={() => setActiveTab('video')}
              className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'video'
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/40'
                  : 'bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>Ver Video Interactivo</span>
            </button>

            <button
              onClick={() => setActiveTab('script')}
              className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'script'
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/40'
                  : 'bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10'
              }`}
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span>Guion Técnico & Storyboard</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Video Player */}
        {activeTab === 'video' && (
          <div className="relative max-w-4xl mx-auto">
            
            {/* Cinematic Video Container */}
            <div 
              ref={videoContainerRef}
              className={`relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-pink-500/40 shadow-2xl shadow-pink-950/70 min-h-[460px] xs:min-h-[440px] sm:min-h-0 sm:aspect-[16/9] flex flex-col justify-between transition-all bg-gradient-to-br ${activeScene.bgGradient}`}
            >
              
              {/* Background ambient particle overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(236,72,153,0.18),transparent_70%)] pointer-events-none" />
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />

              {/* Video Top Bar */}
              <div className="relative z-20 p-3.5 sm:p-5 flex items-center justify-between text-xs text-white/90">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-pink-900/80 border border-pink-400/40 font-bold text-[9px] sm:text-[10px] tracking-wider uppercase text-pink-200 shrink-0">
                    {activeScene.tag}
                  </span>
                  <span className="hidden sm:inline-block text-xs text-zinc-300/80 font-serif-title truncate">
                    El ABC dario del Orgasmo Femenino
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/60 border border-emerald-500/40 text-[9px] sm:text-[10px] text-emerald-300 font-medium">
                    <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Oficial Hotmart</span>
                  </span>
                </div>
              </div>

              {/* Center Scene Stage (Dynamic Motion Graphics) */}
              <div className="relative z-20 px-4 sm:px-10 py-2 flex-1 flex flex-col items-center justify-center text-center">
                
                {/* Idle Play Screen Cover */}
                {!isPlaying && currentTime === 0 && (
                  <div className="absolute inset-0 z-30 bg-[#0e0616]/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-6 text-center animate-fade-in">
                    <button
                      onClick={togglePlay}
                      className="w-16 h-16 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-pink-600 via-rose-500 to-amber-400 p-[2px] shadow-2xl shadow-pink-600/60 hover:scale-110 active:scale-95 transition-all group mb-3 sm:mb-4"
                      aria-label="Reproducir Video Promocional"
                    >
                      <div className="w-full h-full bg-[#1b0827] rounded-full flex items-center justify-center group-hover:bg-transparent transition-colors">
                        <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white fill-white ml-1" />
                      </div>
                    </button>
                    <h3 className="text-lg sm:text-2xl font-bold text-white font-serif-title mb-1.5 sm:mb-2">
                      Reproducir Video Promocional (1:30 min)
                    </h3>
                    <p className="text-xs sm:text-sm text-pink-200/80 max-w-md px-2">
                      Descubre el problema que resuelve el libro, la transformación que propone y cómo adquirirlo de forma segura en Hotmart.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-4 text-[10px] sm:text-[11px] text-zinc-400">
                      <span className="flex items-center gap-1 text-emerald-400">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Voz en off en español
                      </span>
                      <span>•</span>
                      <span>Subtítulos sincronizados</span>
                      <span>•</span>
                      <span>195 Páginas</span>
                    </div>
                  </div>
                )}

                {/* Animated Scene Content */}
                <div className="w-full max-w-2xl mx-auto space-y-2.5 sm:space-y-4">
                  
                  {/* Floating visual element based on scene */}
                  {activeScene.id === 1 && (
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-pink-500/20 border border-pink-400/40 text-pink-300 mb-0.5 sm:mb-1 animate-pulse">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                    </div>
                  )}

                  {activeScene.id === 2 && (
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300 mb-0.5 sm:mb-1 animate-pulse">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                    </div>
                  )}

                  {activeScene.id === 3 && (
                    <div className="flex items-center justify-center gap-3 sm:gap-4 mb-1 sm:mb-2">
                      <div className="w-12 h-16 sm:w-16 sm:h-22 rounded-lg overflow-hidden border-2 border-pink-400/50 shadow-xl rotate-[-4deg] bg-[#220c30] shrink-0">
                        <img src="/book_cover.jpg" alt="Portada libro" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left min-w-0">
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-amber-300 bg-amber-950/60 px-1.5 sm:px-2 py-0.5 rounded border border-amber-500/40 inline-block">
                          18 Años de Investigación
                        </span>
                        <div className="text-sm sm:text-lg font-bold text-white font-serif-title truncate">
                          Héctor D.M.S.
                        </div>
                        <div className="text-[11px] sm:text-xs text-pink-300 truncate">
                          195 Páginas • 14 Orgasmos • 13 Capítulos
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScene.id === 4 && (
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 mb-0.5 sm:mb-1">
                      <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                    </div>
                  )}

                  {activeScene.id === 5 && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[11px] sm:text-xs font-semibold mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                      <span>Checkout Oficial y Garantizado en Hotmart</span>
                    </div>
                  )}

                  {/* Main Title Heading */}
                  <h3 className="text-base xs:text-lg sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug sm:leading-tight font-serif-title transition-all duration-500 drop-shadow-md px-1">
                    {activeScene.title}
                  </h3>

                  {/* Highlighted bullets */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1">
                    {activeScene.keyPhrases.map((phrase, pIdx) => (
                      <span 
                        key={pIdx} 
                        className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/50 border border-pink-500/30 text-pink-100/90 font-medium backdrop-blur-md"
                      >
                        ✓ {phrase}
                      </span>
                    ))}
                  </div>

                  {/* Call to action button inside video during final scene */}
                  {activeScene.id === 5 && (
                    <div className="pt-2 animate-bounce-subtle">
                      <button
                        onClick={() => redirectToCheckout('premium')}
                        className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:brightness-110 text-white font-bold text-xs sm:text-base shadow-xl shadow-pink-600/50 flex items-center justify-center gap-2 mx-auto active:scale-95 transition-all"
                      >
                        <span>{activeScene.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  )}

                </div>

              </div>

              {/* Subtitles Overlay Bar */}
              <div className="relative z-20 px-4 sm:px-6 py-2 sm:py-3 bg-black/75 backdrop-blur-md border-t border-pink-500/20 text-center">
                <p className="text-[11px] sm:text-sm font-medium text-pink-100 max-w-2xl mx-auto leading-relaxed sm:leading-snug italic line-clamp-2 sm:line-clamp-none">
                  "{activeScene.voiceover}"
                </p>
              </div>

              {/* Video Timeline & Controls Bar */}
              <div className="relative z-20 px-3 sm:px-6 py-2 sm:py-3 bg-[#11051b]/98 border-t border-white/10 flex flex-col gap-1.5 sm:gap-2">
                
                {/* Timeline Scrubber */}
                <div className="relative w-full h-2 bg-white/10 hover:h-3 rounded-full cursor-pointer transition-all overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-pink-600 via-rose-500 to-amber-400 rounded-full relative"
                    style={{ width: `${(currentTime / totalDuration) * 100}%` }}
                  />
                  {/* Invisible slider input for precise scrubbing */}
                  <input
                    type="range"
                    min={0}
                    max={totalDuration}
                    step={0.5}
                    value={currentTime}
                    onChange={(e) => handleSeek(parseFloat(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    aria-label="Línea de tiempo del video"
                  />
                </div>

                {/* Controls Row */}
                <div className="flex items-center justify-between gap-2 text-xs text-zinc-300">
                  
                  {/* Left Controls: Play, Restart, Time */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1 sm:p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors"
                      title={isPlaying ? "Pausar" : "Reproducir"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-white" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />}
                    </button>

                    <button
                      onClick={handleRestart}
                      className="p-1 sm:p-1.5 rounded-lg hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                      title="Reiniciar video"
                    >
                      <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>

                    <div className="font-mono text-[10px] sm:text-xs text-pink-200 shrink-0">
                      {formatTime(currentTime)} / {formatTime(totalDuration)}
                    </div>
                  </div>

                  {/* Center Chapter Tags (Visible on Tablet and Desktop) */}
                  <div className="hidden md:flex items-center gap-1 text-[10px]">
                    {SCENES.map((scene, sIdx) => {
                      const isCurrent = currentSceneIndex === sIdx;
                      return (
                        <button
                          key={scene.id}
                          onClick={() => handleSeek(scene.startTime)}
                          className={`px-2 py-0.5 rounded transition-all ${
                            isCurrent
                              ? 'bg-pink-600/80 text-white font-bold'
                              : 'text-zinc-400 hover:text-pink-200 hover:bg-white/5'
                          }`}
                        >
                          {scene.tag.split('.')[1] || scene.tag}
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Controls: Voice Toggle, Fullscreen */}
                  <div className="flex items-center gap-1 sm:gap-2">
                    <button
                      onClick={toggleVoice}
                      className={`p-1 sm:p-1.5 rounded-lg transition-colors flex items-center gap-1 text-xs ${
                        voiceEnabled 
                          ? 'text-emerald-400 hover:bg-emerald-950/40' 
                          : 'text-zinc-400 hover:bg-white/10'
                      }`}
                      title={voiceEnabled ? "Voz en off activada" : "Voz en off silenciada"}
                    >
                      {voiceEnabled ? <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                      <span className="hidden sm:inline text-[11px]">
                        {voiceEnabled ? 'Voz On' : 'Voz Off'}
                      </span>
                    </button>

                    <button
                      onClick={toggleFullscreen}
                      className="p-1 sm:p-1.5 rounded-lg hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                      title="Pantalla completa"
                    >
                      {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    </button>
                  </div>

                </div>

              </div>

            </div>

            {/* Video Footer Info Bar */}
            <div className="mt-4 p-4 rounded-2xl bg-[#14081e] border border-pink-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-zinc-300">
                <div className="w-8 h-8 rounded-lg bg-pink-600/20 border border-pink-500/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-pink-400" />
                </div>
                <div>
                  <span className="block font-bold text-white">Transacción respaldada por Hotmart</span>
                  <span className="text-zinc-400">Entrega digital inmediata en PDF + EPUB • Garantía de 7 días</span>
                </div>
              </div>

              <button
                id="video-section-buy-btn"
                onClick={() => redirectToCheckout('premium')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 hover:brightness-110 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 whitespace-nowrap transition-all active:scale-95"
              >
                <span>Adquirir el Libro en Hotmart</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}

        {/* Tab 2: Full Script & Storyboard for Video Production / Ads / Social Media */}
        {activeTab === 'script' && (
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#14081e] border border-pink-500/30 p-6 sm:p-8 animate-fade-in shadow-2xl">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-pink-500/20">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-500/30 inline-block mb-1">
                  Guion Técnico para Producción
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-title">
                  Script y Storyboard Oficial (1:30 min)
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Listo para locución profesional, grabación de Reels, TikTok, YouTube Shorts o el trailer oficial del producto en Hotmart.
                </p>
              </div>

              <button
                onClick={handleCopyScript}
                className="px-4 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all shrink-0 active:scale-95"
              >
                {copiedScript ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copiedScript ? '¡Guion Copiado!' : 'Copiar Guion Completo'}</span>
              </button>
            </div>

            {/* Script Details by Scene */}
            <div className="divide-y divide-pink-500/15">
              {SCENES.map((scene) => (
                <div key={scene.id} className="py-6 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-pink-950/80 border border-pink-500/40 text-pink-300 font-mono text-xs font-bold">
                        {scene.tag}
                      </span>
                      <h4 className="text-base font-bold text-white font-serif-title">
                        {scene.title}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-amber-300 bg-black/40 px-2 py-0.5 rounded border border-white/10">
                      {formatTime(scene.startTime)} - {formatTime(scene.endTime)} ({scene.endTime - scene.startTime} seg)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs pt-1">
                    
                    {/* Visual cues */}
                    <div className="md:col-span-5 p-3 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                      <span className="font-bold text-pink-300 uppercase tracking-wider text-[10px] block">
                        Indicaciones Visuales & Motion Graphics:
                      </span>
                      <p className="text-zinc-300 leading-relaxed">
                        {scene.visualDescription}
                      </p>
                      <div className="pt-2 border-t border-white/5">
                        <span className="font-semibold text-zinc-400 text-[10px] block mb-1">
                          Texto sobreimpreso en pantalla:
                        </span>
                        <ul className="space-y-1 text-pink-200/90">
                          {scene.keyPhrases.map((phrase, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                              <span className="text-amber-400">•</span>
                              <span>{phrase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Voiceover text */}
                    <div className="md:col-span-7 p-3.5 rounded-xl bg-[#1d0a2c] border border-pink-500/20 space-y-1.5">
                      <span className="font-bold text-amber-300 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                        <Volume2 className="w-3 h-3" />
                        <span>Locución / Voz en Off (Tono íntimo, respetuoso y seguro):</span>
                      </span>
                      <p className="text-sm text-pink-50 leading-relaxed italic bg-black/20 p-3 rounded-lg border border-pink-500/10">
                        "{scene.voiceover}"
                      </p>
                      {scene.ctaText && (
                        <div className="pt-2 text-right">
                          <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-md inline-block">
                            Llamado a la acción: {scene.ctaText}
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Ad Copy Suggestion */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-pink-950/50 to-purple-950/50 border border-pink-500/30">
              <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Copy de Anuncio Listo para Meta Ads (Instagram / Facebook) & Hotmart:</span>
              </h5>
              <p className="text-xs text-zinc-200 leading-relaxed font-mono bg-black/40 p-3 rounded-xl border border-white/10">
                ¿Sabías que existen al menos 14 tipos distintos de orgasmos documentados por la ciencia y las tradiciones tántricas? 📖✨ Deja atrás los mitos y descubre «El ABC dario del Orgasmo Femenino» por Héctor D.M.S. Un libro de 195 páginas con explicaciones anatómicas, neuroquímica y técnicas prácticas para conectar con tu placer sin culpas ni presiones. Descárgalo hoy de inmediato en Hotmart con garantía de 7 días. 👉 [Enlace en biografía / Comprar Ahora]
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
