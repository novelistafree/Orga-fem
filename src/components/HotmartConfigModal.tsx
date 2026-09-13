import React, { useState } from 'react';
import { useHotmart } from '../context/HotmartContext';
import { X, ExternalLink, Check, Link as LinkIcon, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';

export const HotmartConfigModal: React.FC = () => {
  const { 
    isConfigModalOpen, 
    setIsConfigModalOpen, 
    checkoutUrl, 
    setCheckoutUrl, 
    resetCheckoutUrl,
    isCustomUrlSet,
    redirectToCheckout
  } = useHotmart();

  const [inputUrl, setInputUrl] = useState(checkoutUrl);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isConfigModalOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutUrl(inputUrl);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsConfigModalOpen(false);
    }, 1200);
  };

  const handleReset = () => {
    resetCheckoutUrl();
    setInputUrl('https://pay.hotmart.com/');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#180d24] border border-pink-500/30 rounded-2xl p-5 sm:p-8 text-white shadow-2xl shadow-pink-900/50 max-h-[94vh] overflow-y-auto"
        id="hotmart-config-modal"
      >
        {/* Close button */}
        <button 
          onClick={() => setIsConfigModalOpen(false)}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-600 to-rose-400 flex items-center justify-center shadow-lg shadow-pink-600/30">
            <LinkIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-serif-title">
              Enlace de Pago Hotmart
            </h3>
            <p className="text-xs text-pink-300/80">
              Personaliza el link directo a tu checkout de Hotmart
            </p>
          </div>
        </div>

        <p className="text-sm text-zinc-300 mb-5 leading-relaxed">
          Todos los botones de compra de esta landing page redirigirán directamente al enlace que configures aquí (por ejemplo: <code className="bg-pink-950/60 text-pink-300 px-1.5 py-0.5 rounded text-xs">https://pay.hotmart.com/TU_PRODUCTO</code> o tu hotlink de afiliado/productor).
        </p>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-pink-200 uppercase tracking-wider mb-2">
              URL Directa de Pago en Hotmart:
            </label>
            <div className="relative">
              <input
                type="url"
                required
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="https://pay.hotmart.com/ABC12345XYZ"
                className="w-full bg-[#0e0714] border border-pink-500/40 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              />
            </div>
            <p className="text-[11px] text-zinc-400 mt-2 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Se guarda automáticamente en la memoria de tu navegador (LocalStorage).
            </p>
          </div>

          {isCustomUrlSet && (
            <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Actualmente tienes un link personalizado activo en todos los botones.</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              className="w-full sm:flex-1 bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:brightness-110 text-white font-semibold py-3 px-5 rounded-xl text-sm transition-all shadow-lg shadow-pink-600/30 flex items-center justify-center gap-2"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>¡Enlace Guardado!</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Guardar y Aplicar</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => redirectToCheckout()}
              className="w-full sm:w-auto px-4 py-3 rounded-xl border border-pink-500/40 hover:bg-pink-950/40 text-pink-200 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              title="Probar enlace actual en una pestaña nueva"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Probar Checkout</span>
            </button>

            {isCustomUrlSet && (
              <button
                type="button"
                onClick={handleReset}
                className="text-zinc-400 hover:text-rose-400 p-2 text-xs flex items-center gap-1 transition-colors"
                title="Restaurar enlace por defecto"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Restaurar</span>
              </button>
            )}
          </div>
        </form>

        <div className="mt-6 pt-4 border-t border-white/10 text-xs text-zinc-400">
          <p className="font-semibold text-zinc-300 mb-1">¿Dónde obtienes tu link de Hotmart?</p>
          <ol className="list-decimal list-inside space-y-1 text-zinc-400 text-[11px]">
            <li>Inicia sesión en tu cuenta de <strong className="text-zinc-200">Hotmart</strong>.</li>
            <li>Dirígete a <strong className="text-zinc-200">Productos &gt; Mis Productos</strong> y selecciona el libro.</li>
            <li>Copia tu <strong className="text-pink-300">Hotlink de Checkout Directo</strong> y pégalo aquí.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
