import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface PenaltyModalProps {
  onAcknowledge: () => void;
}

export const PenaltyModal: React.FC<PenaltyModalProps> = ({ onAcknowledge }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-red-950/90 backdrop-blur-sm">
      <div className="bg-card w-full max-w-lg rounded-2xl shadow-2xl border-2 border-red-500 p-8 text-center animate-in zoom-in duration-300">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-red-600" />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-foreground">Focus Broken!</h2>
        <p className="text-xl text-red-500 font-semibold mb-6">
          -20 Points Deducted
        </p>
        <p className="text-muted-foreground mb-8 text-lg">
          You exited strict mode or switched tabs. PrepLens is designed to build deep work habits. Stay focused!
        </p>
        <button
          onClick={onAcknowledge}
          className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-lg transition-colors shadow-lg shadow-red-600/20"
        >
          I Understand, Let Me Back In
        </button>
      </div>
    </div>
  );
};
