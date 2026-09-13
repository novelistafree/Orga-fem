import React, { createContext, useContext, useState, useEffect } from 'react';
import { DEFAULT_HOTMART_CHECKOUT_URL } from '../data/bookContent';
import confetti from 'canvas-confetti';

interface HotmartContextType {
  checkoutUrl: string;
  setCheckoutUrl: (url: string) => void;
  isConfigModalOpen: boolean;
  setIsConfigModalOpen: (open: boolean) => void;
  redirectToCheckout: (planId?: string) => void;
  isCustomUrlSet: boolean;
  resetCheckoutUrl: () => void;
}

const STORAGE_KEY = 'hotmart_book_checkout_url';

const HotmartContext = createContext<HotmartContextType | undefined>(undefined);

export const HotmartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [checkoutUrl, setCheckoutUrlState] = useState<string>(DEFAULT_HOTMART_CHECKOUT_URL);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState<boolean>(false);
  const [isCustomUrlSet, setIsCustomUrlSet] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved.trim().length > 0) {
        setCheckoutUrlState(saved);
        setIsCustomUrlSet(true);
      }
    } catch (e) {
      console.error('Error reading localStorage for Hotmart link', e);
    }
  }, []);

  const setCheckoutUrl = (url: string) => {
    const cleaned = url.trim();
    setCheckoutUrlState(cleaned);
    try {
      if (cleaned && cleaned !== DEFAULT_HOTMART_CHECKOUT_URL) {
        localStorage.setItem(STORAGE_KEY, cleaned);
        setIsCustomUrlSet(true);
      } else {
        localStorage.removeItem(STORAGE_KEY);
        setIsCustomUrlSet(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const resetCheckoutUrl = () => {
    setCheckoutUrlState(DEFAULT_HOTMART_CHECKOUT_URL);
    setIsCustomUrlSet(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
  };

  const redirectToCheckout = (planId: string = 'premium') => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#ec4899', '#d946ef', '#f43f5e', '#fb7185', '#fbbf24']
      });
    } catch (_) {}

    const targetUrl = checkoutUrl.trim() || DEFAULT_HOTMART_CHECKOUT_URL;
    
    // Add plan parameter if not present and custom query param fits
    let finalUrl = targetUrl;
    if (finalUrl.includes('hotmart.com') && !finalUrl.includes('plan=')) {
      const separator = finalUrl.includes('?') ? '&' : '?';
      finalUrl = `${finalUrl}${separator}offer=${planId === 'premium' ? 'deluxe' : 'standard'}`;
    }

    // Open in a new tab for seamless user experience
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <HotmartContext.Provider
      value={{
        checkoutUrl,
        setCheckoutUrl,
        isConfigModalOpen,
        setIsConfigModalOpen,
        redirectToCheckout,
        isCustomUrlSet,
        resetCheckoutUrl
      }}
    >
      {children}
    </HotmartContext.Provider>
  );
};

export const useHotmart = () => {
  const context = useContext(HotmartContext);
  if (!context) {
    throw new Error('useHotmart must be used within a HotmartProvider');
  }
  return context;
};
