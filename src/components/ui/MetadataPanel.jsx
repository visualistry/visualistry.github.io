import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { molecules } from '../../data/MoleculeData';
import { Info, HelpCircle } from 'lucide-react';

export const MetadataPanel = () => {
  const { selectedMoleculeId } = useAppStore();
  const molecule = molecules.find((m) => m.id === selectedMoleculeId);

  if (!molecule) return null;

  return (
    <div className="w-80 bg-slate-900/60 backdrop-blur-xl border-l border-slate-800 flex flex-col h-full overflow-y-auto custom-scrollbar hidden lg:flex">
      <div className="p-5 border-b border-slate-800 flex items-center gap-2">
        <Info className="text-blue-400" size={20} />
        <h2 className="font-semibold text-slate-100">Theory Metadata</h2>
      </div>
      
      <div className="p-5 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{molecule.name}</h3>
          <p className="text-sm text-slate-400 font-mono bg-slate-800/50 inline-block px-2 py-1 rounded">Example: {molecule.example}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/30">
            <div className="text-xs text-slate-400 mb-1">VSEPR Formula</div>
            <div className="font-semibold text-slate-200">{molecule.formula}</div>
          </div>
          <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/30">
            <div className="text-xs text-slate-400 mb-1">Hybridization</div>
            <div className="font-semibold text-blue-400">{molecule.hybridization}</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
            <span className="text-sm text-slate-400">Total Pairs</span>
            <span className="text-sm font-medium text-slate-200">{molecule.electronPairs.total}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
            <span className="text-sm text-slate-400">Bond Pairs</span>
            <span className="text-sm font-medium text-slate-200">{molecule.electronPairs.bond}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
            <span className="text-sm text-slate-400">Lone Pairs</span>
            <span className="text-sm font-medium text-amber-400">{molecule.electronPairs.lone}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
            <span className="text-sm text-slate-400">Bond Angle</span>
            <span className="text-sm font-medium text-green-400">{molecule.angles}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
            <span className="text-sm text-slate-400">Ideal Geometry</span>
            <span className="text-sm font-medium text-slate-200">{molecule.idealGeometry}</span>
          </div>
        </div>

        <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-4 mt-4">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle size={16} className="text-blue-400" />
            <h4 className="text-sm font-semibold text-blue-300">Exam Tip</h4>
          </div>
          <p className="text-xs text-blue-100/70 leading-relaxed">
            {molecule.examTip}
          </p>
        </div>
      </div>
    </div>
  );
};
