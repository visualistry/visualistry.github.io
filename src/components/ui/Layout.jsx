import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { MetadataPanel } from './MetadataPanel';
import { ControlsToolbar } from './ControlsToolbar';
import { MoleculeCanvas } from '../3d/MoleculeCanvas';
import { Menu } from 'lucide-react';

export const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="flex h-dvh w-full bg-slate-950 overflow-hidden text-slate-200 font-sans relative">
      {/* Mobile Top Bar */}
      <div className="md:hidden absolute top-4 left-4 z-20">
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 bg-slate-900/80 backdrop-blur border border-slate-700/50 rounded-xl shadow-lg text-slate-200 hover:bg-slate-800 transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="flex-1 relative h-full flex flex-col">
        <MoleculeCanvas />
        <ControlsToolbar />
      </div>
      <MetadataPanel />
      
      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};
