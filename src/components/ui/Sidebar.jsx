import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { molecules } from '../../data/MoleculeData';
import { Atom, X, Home } from 'lucide-react';

export const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const { selectedMoleculeId, setSelectedMoleculeId, setCurrentPage } = useAppStore();

  return (
    <div className={`
      w-72 flex-shrink-0 bg-slate-900/95 md:bg-slate-900/60 backdrop-blur-xl border-r border-slate-800 flex flex-col h-full overflow-hidden
      fixed md:relative z-40 transition-transform duration-300 ease-in-out
      ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="p-5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400">
            <Atom size={24} />
          </div>
          <h1 className="font-bold text-xl text-slate-100 tracking-tight"><a href="/">Visualistry</a></h1>
        </div>
          <button 
          className="md:hidden p-2 -mr-2 text-slate-400 hover:text-slate-200"
          onClick={() => setMobileMenuOpen && setMobileMenuOpen(false)}
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-2 mt-2">
          VSEPR Geometries
        </div>
        {molecules.map((m) => (
          <button
            key={m.id}
            onClick={() => {
              setSelectedMoleculeId(m.id);
              if (setMobileMenuOpen) setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
              selectedMoleculeId === m.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'
                : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>
    </div>
  );
};
