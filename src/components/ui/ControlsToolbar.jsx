import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { Settings, Eye, Zap, Type, RotateCcw } from 'lucide-react';

export const ControlsToolbar = () => {
  const { 
    showLonePairs, toggleLonePairs,
    showLabels, toggleLabels,
    autoRotate, toggleAutoRotate
  } = useAppStore();

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-8 md:right-8 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 p-2 rounded-2xl flex items-center gap-2 shadow-2xl shadow-slate-900/50 z-10">
      
      <button 
        onClick={toggleLonePairs}
        className={`p-3 rounded-xl flex items-center justify-center transition-all duration-200 ${
          showLonePairs ? 'bg-amber-500/20 text-amber-400' : 'text-slate-400 hover:bg-slate-800'
        }`}
        title="Toggle Lone Pairs"
      >
        <Zap size={20} />
      </button>

      <button 
        onClick={toggleLabels}
        className={`p-3 rounded-xl flex items-center justify-center transition-all duration-200 ${
          showLabels ? 'bg-blue-500/20 text-blue-400' : 'text-slate-400 hover:bg-slate-800'
        }`}
        title="Toggle Labels"
      >
        <Type size={20} />
      </button>

      <button 
        onClick={toggleAutoRotate}
        className={`p-3 rounded-xl flex items-center justify-center transition-all duration-200 ${
          autoRotate ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-400 hover:bg-slate-800'
        }`}
        title="Toggle Auto-Rotate"
      >
        <RotateCcw size={20} />
      </button>
      
    </div>
  );
};
