import React from 'react';
import { PRICING_PLANS } from '../data/bookContent';
import { useHotmart } from '../context/HotmartContext';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  Gift, 
  Zap, 
  HelpCircle,
  CreditCard
} from 'lucide-react';

export const PricingOffers: React.FC = () => {
  const { redirectToCheckout } = useHotmart();

  return (
    <section className="py-24 bg-gradient-to-b from-[#0e0714] via-[#170a25] to-[#0e0714] relative border-t border-pink-500/10" id="precios">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-pink-600/15 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/80 border border-pink-500/40 text-pink-300 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            <span>Pasarela Oficial de Pago Hotmart</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-serif-title">
            Elige Tu Acceso y Comienza Hoy
          </h2>
          <p className="text-pink-100/80 text-sm sm:text-base leading-relaxed">
            Descarga inmediata tras confirmar el pago. Facturación 100% discreta y garantía de satisfacción incondicional de 7 días.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch mb-16">
          {PRICING_PLANS.map((plan) => {
            const isDeluxe = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isDeluxe
                    ? 'bg-gradient-to-b from-[#250e38] to-[#160722] border-2 border-pink-500 shadow-2xl shadow-pink-900/50 scale-[1.02] lg:-translate-y-2'
                    : 'bg-[#14081e] border border-pink-500/30 hover:border-pink-500/50'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 via-rose-500 to-pink-600 text-white font-black text-[11px] uppercase tracking-wider py-1.5 px-5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-title">
                      {plan.name}
                    </h3>
                    <span className="text-[11px] font-mono text-pink-300 bg-pink-950/80 border border-pink-500/30 px-2.5 py-1 rounded-lg">
                      Pago Único
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-pink-200/80 mb-6">
                    {plan.description}
                  </p>

                  {/* Price Block */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-pink-500/20 mb-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-xs text-zinc-400 line-through font-mono">
                        ${plan.priceOriginal} {plan.currency}
                      </span>
                      <span className="text-[11px] bg-rose-950/80 text-rose-300 px-2 py-0.5 rounded font-bold">
                        Ahorras ${(plan.priceOriginal - plan.priceDiscounted)} USD
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-amber-300 font-serif-title">
                        ${plan.priceDiscounted}
                      </span>
                      <span className="text-sm font-semibold text-pink-200 font-mono">
                        {plan.currency}
                      </span>
                    </div>
                    <span className="block text-[11px] text-zinc-400 mt-1">
                      Sin cuotas mensuales • Acceso ilimitado y de por vida
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-bold text-pink-200 uppercase tracking-wider">
                      Incluye:
                    </h4>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bonuses if deluxe */}
                  {plan.bonuses && plan.bonuses.length > 0 && (
                    <div className="p-4 rounded-xl bg-pink-950/40 border border-pink-500/30 mb-8 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider">
                        <Gift className="w-4 h-4 text-amber-400" />
                        <span>Bonos Exclusivos Incluidos:</span>
                      </div>
                      <ul className="space-y-2 text-xs text-pink-100">
                        {plan.bonuses.map((bonus, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-amber-400 font-bold shrink-0">★</span>
                            <span className="leading-snug">{bonus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Buy Button */}
                <div className="pt-2">
                  <button
                    id={`buy-plan-${plan.id}-btn`}
                    onClick={() => redirectToCheckout(plan.id)}
                    className={`w-full py-4 rounded-2xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-xl ${
                      isDeluxe
                        ? 'bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:brightness-110 text-white shadow-pink-600/40 hover:scale-[1.02] active:scale-95'
                        : 'bg-white/10 hover:bg-white/20 border border-pink-500/40 text-white hover:border-pink-400'
                    }`}
                  >
                    <span>Comprar Ahora en Hotmart</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-zinc-400 text-center mt-2.5 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    <span>Redirección cifrada y segura a Hotmart Checkout</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Payment Methods Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#14081d] border border-pink-500/20 max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center mb-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Garantía Hotmart de 7 Días</h4>
              <p className="text-xs text-zinc-400">Si no estás 100% conforme, solicitas tu reembolso íntegro en un clic.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-pink-950/60 border border-pink-500/30 flex items-center justify-center mb-2">
                <Lock className="w-5 h-5 text-pink-400" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Privacidad y Discreción</h4>
              <p className="text-xs text-zinc-400">En tu extracto bancario sólo aparecerá "HOTMART", nada sobre el libro.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center mb-2">
                <CreditCard className="w-5 h-5 text-amber-400" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Múltiples Formas de Pago</h4>
              <p className="text-xs text-zinc-400">Tarjetas, PayPal, Apple Pay, Google Pay y pagos en efectivo locales.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400">
            <span>Métodos aceptados por Hotmart:</span>
            <span className="px-2.5 py-1 rounded bg-black/40 border border-white/10 font-mono text-[11px] text-zinc-300">VISA</span>
            <span className="px-2.5 py-1 rounded bg-black/40 border border-white/10 font-mono text-[11px] text-zinc-300">MASTERCARD</span>
            <span className="px-2.5 py-1 rounded bg-black/40 border border-white/10 font-mono text-[11px] text-zinc-300">AMEX</span>
            <span className="px-2.5 py-1 rounded bg-black/40 border border-white/10 font-mono text-[11px] text-zinc-300">PAYPAL</span>
            <span className="px-2.5 py-1 rounded bg-black/40 border border-white/10 font-mono text-[11px] text-zinc-300">APPLE PAY</span>
            <span className="px-2.5 py-1 rounded bg-black/40 border border-white/10 font-mono text-[11px] text-zinc-300">OXXO / EFECTIVO</span>
          </div>
        </div>

      </div>
    </section>
  );
};
