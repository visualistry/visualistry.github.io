import { create } from 'zustand';
import { molecules } from '../data/MoleculeData';

export const useAppStore = create((set) => ({
  currentPage: 'home',
  selectedMoleculeId: molecules[0].id,
  showLonePairs: true,
  showBondAngles: true,
  showLabels: true,
  autoRotate: true,
  
  setCurrentPage: (page) => set({ currentPage: page }),
  setSelectedMoleculeId: (id) => set({ selectedMoleculeId: id }),
  toggleLonePairs: () => set((state) => ({ showLonePairs: !state.showLonePairs })),
  toggleBondAngles: () => set((state) => ({ showBondAngles: !state.showBondAngles })),
  toggleLabels: () => set((state) => ({ showLabels: !state.showLabels })),
  toggleAutoRotate: () => set((state) => ({ autoRotate: !state.autoRotate })),
}));
