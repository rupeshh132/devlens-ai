import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { api } from '@/lib/api';
import { PenaltyModal } from './PenaltyModal';

interface FocusModeContextType {
  isStrictMode: boolean;
  enterStrictMode: () => Promise<void>;
  exitStrictMode: () => void;
}

const FocusModeContext = createContext<FocusModeContextType | null>(null);

export const FocusModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isStrictMode, setIsStrictMode] = useState(false);
  const [showPenalty, setShowPenalty] = useState(false);

  const applyPenalty = useCallback(async () => {
    try {
      await api.post('/gamification/focus-break');
    } catch (error) {
      console.error("Failed to apply penalty", error);
    }
  }, []);

  const handleVisibilityChange = useCallback(() => {
    if (document.hidden && isStrictMode) {
      // User switched tabs or minimized!
      setIsStrictMode(false);
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
      setShowPenalty(true);
      applyPenalty();
    }
  }, [isStrictMode, applyPenalty]);

  const handleFullscreenChange = useCallback(() => {
    if (!document.fullscreenElement && isStrictMode) {
      // User pressed ESC to exit fullscreen
      setIsStrictMode(false);
      setShowPenalty(true);
      applyPenalty();
    }
  }, [isStrictMode, applyPenalty]);

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [handleVisibilityChange, handleFullscreenChange]);

  const enterStrictMode = async () => {
    try {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
        setIsStrictMode(true);
      }
    } catch (err) {
      console.error("Error attempting to enable fullscreen:", err);
      alert("Please allow full-screen mode to begin learning.");
    }
  };

  const exitStrictMode = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    setIsStrictMode(false);
  };

  const acknowledgePenalty = () => {
    setShowPenalty(false);
  };

  return (
    <FocusModeContext.Provider value={{ isStrictMode, enterStrictMode, exitStrictMode }}>
      {children}
      {showPenalty && <PenaltyModal onAcknowledge={acknowledgePenalty} />}
    </FocusModeContext.Provider>
  );
};

export const useFocusMode = () => {
  const context = useContext(FocusModeContext);
  if (!context) {
    throw new Error('useFocusMode must be used within a FocusModeProvider');
  }
  return context;
};
