export const BOND_DISTANCE = 1.5;
export const AXIAL_DISTANCE = 1.8;
export const LONE_PAIR_DISTANCE = 1.2;

const degToRad = (deg) => (deg * Math.PI) / 180;

// Exact calculations for Trigonal Pyramidal 107 degree H-N-H angle
// Formula: cos(beta) = -sqrt((0.5 + cos(107)) / 1.5)
const cos107 = Math.cos(degToRad(107));
const cosBeta_NH3 = -Math.sqrt((0.5 + cos107) / 1.5);
const sinBeta_NH3 = Math.sqrt(1 - cosBeta_NH3 * cosBeta_NH3);

export const molecules = [
  {
    id: "linear_ax2",
    name: "Linear (AX₂)",
    formula: "AX₂",
    example: "BeCl₂, CO₂",
    electronPairs: { total: 2, bond: 2, lone: 0 },
    hybridization: "sp",
    idealGeometry: "Linear",
    actualShape: "Linear",
    angles: "180°",
    examTip: "No lone pairs, so bond angle is exactly 180°. The molecule is non-polar if surrounding atoms are identical.",
    atoms: [
      { id: "center", position: [0, 0, 0], type: "central", color: "#64748b", label: "A" },
      { id: "atom1", position: [BOND_DISTANCE, 0, 0], type: "peripheral", color: "#ef4444", label: "X" },
      { id: "atom2", position: [-BOND_DISTANCE, 0, 0], type: "peripheral", color: "#ef4444", label: "X" },
    ],
    bonds: [
      { source: "center", target: "atom1", type: "equatorial" },
      { source: "center", target: "atom2", type: "equatorial" },
    ],
    lonePairs: [],
  },
  {
    id: "trigonal_planar_ax3",
    name: "Trigonal Planar (AX₃)",
    formula: "AX₃",
    example: "BF₃",
    electronPairs: { total: 3, bond: 3, lone: 0 },
    hybridization: "sp²",
    idealGeometry: "Trigonal Planar",
    actualShape: "Trigonal Planar",
    angles: "120°",
    examTip: "Symmetrical shape leads to zero dipole moment. All bonds lie in the same plane.",
    atoms: [
      { id: "center", position: [0, 0, 0], type: "central", color: "#64748b", label: "A" },
      { id: "atom1", position: [0, BOND_DISTANCE, 0], type: "peripheral", color: "#3b82f6", label: "X" },
      { id: "atom2", position: [BOND_DISTANCE * Math.cos(degToRad(30)), -BOND_DISTANCE * Math.sin(degToRad(30)), 0], type: "peripheral", color: "#3b82f6", label: "X" },
      { id: "atom3", position: [-BOND_DISTANCE * Math.cos(degToRad(30)), -BOND_DISTANCE * Math.sin(degToRad(30)), 0], type: "peripheral", color: "#3b82f6", label: "X" },
    ],
    bonds: [
      { source: "center", target: "atom1", type: "equatorial" },
      { source: "center", target: "atom2", type: "equatorial" },
      { source: "center", target: "atom3", type: "equatorial" },
    ],
    lonePairs: [],
  },
  {
    id: "tetrahedral_ax4",
    name: "Tetrahedral (AX₄)",
    formula: "AX₄",
    example: "CH₄",
    electronPairs: { total: 4, bond: 4, lone: 0 },
    hybridization: "sp³",
    idealGeometry: "Tetrahedral",
    actualShape: "Tetrahedral",
    angles: "109.5°",
    examTip: "Most stable arrangement for 4 electron pairs. Highly symmetric in 3D space.",
    atoms: [
      { id: "center", position: [0, 0, 0], type: "central", color: "#64748b", label: "A" },
      { id: "atom1", position: [0, BOND_DISTANCE, 0], type: "peripheral", color: "#10b981", label: "X" }, // top
      { id: "atom2", position: [BOND_DISTANCE * Math.sin(degToRad(109.47)), BOND_DISTANCE * Math.cos(degToRad(109.47)), 0], type: "peripheral", color: "#10b981", label: "X" }, // bottom right
      { id: "atom3", position: [-BOND_DISTANCE * Math.sin(degToRad(109.47)) * Math.cos(degToRad(60)), BOND_DISTANCE * Math.cos(degToRad(109.47)), BOND_DISTANCE * Math.sin(degToRad(109.47)) * Math.sin(degToRad(60))], type: "peripheral", color: "#10b981", label: "X" },
      { id: "atom4", position: [-BOND_DISTANCE * Math.sin(degToRad(109.47)) * Math.cos(degToRad(60)), BOND_DISTANCE * Math.cos(degToRad(109.47)), -BOND_DISTANCE * Math.sin(degToRad(109.47)) * Math.sin(degToRad(60))], type: "peripheral", color: "#10b981", label: "X" },
    ],
    bonds: [
      { source: "center", target: "atom1", type: "equatorial" },
      { source: "center", target: "atom2", type: "equatorial" },
      { source: "center", target: "atom3", type: "equatorial" },
      { source: "center", target: "atom4", type: "equatorial" },
    ],
    lonePairs: [],
  },
  {
    id: "trigonal_pyramidal_ax3e",
    name: "Trigonal Pyramidal (AX₃E)",
    formula: "AX₃E",
    example: "NH₃",
    electronPairs: { total: 4, bond: 3, lone: 1 },
    hybridization: "sp³",
    idealGeometry: "Tetrahedral",
    actualShape: "Trigonal Pyramidal",
    angles: "107°",
    examTip: "Lone pair-bond pair repulsion is greater than bp-bp repulsion, squeezing the tetrahedral angle from 109.5° down to 107°.",
    atoms: [
      { id: "center", position: [0, 0, 0], type: "central", color: "#64748b", label: "A" },
      { id: "atom1", position: [BOND_DISTANCE * sinBeta_NH3, BOND_DISTANCE * cosBeta_NH3, 0], type: "peripheral", color: "#8b5cf6", label: "X" },
      { id: "atom2", position: [-BOND_DISTANCE * sinBeta_NH3 * Math.cos(degToRad(60)), BOND_DISTANCE * cosBeta_NH3, BOND_DISTANCE * sinBeta_NH3 * Math.sin(degToRad(60))], type: "peripheral", color: "#8b5cf6", label: "X" },
      { id: "atom3", position: [-BOND_DISTANCE * sinBeta_NH3 * Math.cos(degToRad(60)), BOND_DISTANCE * cosBeta_NH3, -BOND_DISTANCE * sinBeta_NH3 * Math.sin(degToRad(60))], type: "peripheral", color: "#8b5cf6", label: "X" },
    ],
    bonds: [
      { source: "center", target: "atom1", type: "equatorial" },
      { source: "center", target: "atom2", type: "equatorial" },
      { source: "center", target: "atom3", type: "equatorial" },
    ],
    lonePairs: [
      { id: "lp1", position: [0, LONE_PAIR_DISTANCE, 0] }
    ],
  },
  {
    id: "bent_ax2e2",
    name: "Bent / V-Shaped (AX₂E₂)",
    formula: "AX₂E₂",
    example: "H₂O",
    electronPairs: { total: 4, bond: 2, lone: 2 },
    hybridization: "sp³",
    idealGeometry: "Tetrahedral",
    actualShape: "Bent / V-Shaped",
    angles: "104.5°",
    examTip: "Two lone pairs exert strong repulsion, compressing the bond angle significantly down to 104.5°.",
    atoms: [
      { id: "center", position: [0, 0, 0], type: "central", color: "#64748b", label: "A" },
      { id: "atom1", position: [BOND_DISTANCE * Math.sin(degToRad(104.5/2)), -BOND_DISTANCE * Math.cos(degToRad(104.5/2)), 0], type: "peripheral", color: "#ec4899", label: "X" },
      { id: "atom2", position: [-BOND_DISTANCE * Math.sin(degToRad(104.5/2)), -BOND_DISTANCE * Math.cos(degToRad(104.5/2)), 0], type: "peripheral", color: "#ec4899", label: "X" },
    ],
    bonds: [
      { source: "center", target: "atom1", type: "equatorial" },
      { source: "center", target: "atom2", type: "equatorial" },
    ],
    lonePairs: [
      { id: "lp1", position: [0, LONE_PAIR_DISTANCE * Math.cos(degToRad(109.5/2)), LONE_PAIR_DISTANCE * Math.sin(degToRad(109.5/2))] },
      { id: "lp2", position: [0, LONE_PAIR_DISTANCE * Math.cos(degToRad(109.5/2)), -LONE_PAIR_DISTANCE * Math.sin(degToRad(109.5/2))] }
    ],
  },
  {
    id: "trigonal_bipyramidal_ax5",
    name: "Trigonal Bipyramidal (AX₅)",
    formula: "AX₅",
    example: "PCl₅",
    electronPairs: { total: 5, bond: 5, lone: 0 },
    hybridization: "sp³d",
    idealGeometry: "Trigonal Bipyramidal",
    actualShape: "Trigonal Bipyramidal",
    angles: "90°, 120°",
    examTip: "Axial bonds are longer than equatorial bonds because axial pairs suffer more repulsion (three 90° repulsions) than equatorial pairs.",
    atoms: [
      { id: "center", position: [0, 0, 0], type: "central", color: "#64748b", label: "A" },
      { id: "atom1", position: [0, AXIAL_DISTANCE, 0], type: "peripheral", color: "#f97316", label: "X_ax" }, // axial
      { id: "atom2", position: [0, -AXIAL_DISTANCE, 0], type: "peripheral", color: "#f97316", label: "X_ax" }, // axial
      { id: "atom3", position: [BOND_DISTANCE, 0, 0], type: "peripheral", color: "#06b6d4", label: "X_eq" }, // equatorial
      { id: "atom4", position: [-BOND_DISTANCE * Math.cos(degToRad(60)), 0, BOND_DISTANCE * Math.sin(degToRad(60))], type: "peripheral", color: "#06b6d4", label: "X_eq" },
      { id: "atom5", position: [-BOND_DISTANCE * Math.cos(degToRad(60)), 0, -BOND_DISTANCE * Math.sin(degToRad(60))], type: "peripheral", color: "#06b6d4", label: "X_eq" },
    ],
    bonds: [
      { source: "center", target: "atom1", type: "axial" },
      { source: "center", target: "atom2", type: "axial" },
      { source: "center", target: "atom3", type: "equatorial" },
      { source: "center", target: "atom4", type: "equatorial" },
      { source: "center", target: "atom5", type: "equatorial" },
    ],
    lonePairs: [],
  },
  {
    id: "seesaw_ax4e",
    name: "See-Saw (AX₄E)",
    formula: "AX₄E",
    example: "SF₄",
    electronPairs: { total: 5, bond: 4, lone: 1 },
    hybridization: "sp³d",
    idealGeometry: "Trigonal Bipyramidal",
    actualShape: "See-Saw",
    angles: "<90°, <120°",
    examTip: "Lone pair occupies equatorial position to minimize 90° repulsions. This distorts the rest of the molecule.",
    atoms: [
      { id: "center", position: [0, 0, 0], type: "central", color: "#64748b", label: "A" },
      { id: "atom1", position: [0, AXIAL_DISTANCE, 0], type: "peripheral", color: "#f97316", label: "X_ax" }, 
      { id: "atom2", position: [0, -AXIAL_DISTANCE, 0], type: "peripheral", color: "#f97316", label: "X_ax" },
      { id: "atom3", position: [-BOND_DISTANCE * Math.cos(degToRad(60)), 0, BOND_DISTANCE * Math.sin(degToRad(60))], type: "peripheral", color: "#06b6d4", label: "X_eq" },
      { id: "atom4", position: [-BOND_DISTANCE * Math.cos(degToRad(60)), 0, -BOND_DISTANCE * Math.sin(degToRad(60))], type: "peripheral", color: "#06b6d4", label: "X_eq" },
    ],
    bonds: [
      { source: "center", target: "atom1", type: "axial" },
      { source: "center", target: "atom2", type: "axial" },
      { source: "center", target: "atom3", type: "equatorial" },
      { source: "center", target: "atom4", type: "equatorial" },
    ],
    lonePairs: [
      { id: "lp1", position: [LONE_PAIR_DISTANCE, 0, 0] }
    ],
  },
  {
    id: "tshaped_ax3e2",
    name: "T-Shaped (AX₃E₂)",
    formula: "AX₃E₂",
    example: "ClF₃",
    electronPairs: { total: 5, bond: 3, lone: 2 },
    hybridization: "sp³d",
    idealGeometry: "Trigonal Bipyramidal",
    actualShape: "T-Shaped",
    angles: "<90°",
    examTip: "Two lone pairs occupy equatorial positions, bending the axial bonds slightly away from them.",
    atoms: [
      { id: "center", position: [0, 0, 0], type: "central", color: "#64748b", label: "A" },
      { id: "atom1", position: [0, AXIAL_DISTANCE, 0], type: "peripheral", color: "#f97316", label: "X_ax" }, 
      { id: "atom2", position: [0, -AXIAL_DISTANCE, 0], type: "peripheral", color: "#f97316", label: "X_ax" },
      { id: "atom3", position: [-BOND_DISTANCE, 0, 0], type: "peripheral", color: "#06b6d4", label: "X_eq" }, // -X axis
    ],
    bonds: [
      { source: "center", target: "atom1", type: "axial" },
      { source: "center", target: "atom2", type: "axial" },
      { source: "center", target: "atom3", type: "equatorial" },
    ],
    lonePairs: [
      // Since atom3 is at 180 degrees (-X), the lone pairs are at 60 and 300 degrees (+- 60 from +X axis)
      { id: "lp1", position: [LONE_PAIR_DISTANCE * Math.cos(degToRad(60)), 0, LONE_PAIR_DISTANCE * Math.sin(degToRad(60))] },
      { id: "lp2", position: [LONE_PAIR_DISTANCE * Math.cos(degToRad(60)), 0, -LONE_PAIR_DISTANCE * Math.sin(degToRad(60))] }
    ],
  },
  {
    id: "linear_ax2e3",
    name: "Linear (AX₂E₃)",
    formula: "AX₂E₃",
    example: "XeF₂",
    electronPairs: { total: 5, bond: 2, lone: 3 },
    hybridization: "sp³d",
    idealGeometry: "Trigonal Bipyramidal",
    actualShape: "Linear",
    angles: "180°",
    examTip: "All three lone pairs are in equatorial positions cancelling each other's repulsions, leaving the molecule perfectly linear.",
    atoms: [
      { id: "center", position: [0, 0, 0], type: "central", color: "#64748b", label: "A" },
      { id: "atom1", position: [0, AXIAL_DISTANCE, 0], type: "peripheral", color: "#f97316", label: "X_ax" }, 
      { id: "atom2", position: [0, -AXIAL_DISTANCE, 0], type: "peripheral", color: "#f97316", label: "X_ax" },
    ],
    bonds: [
      { source: "center", target: "atom1", type: "axial" },
      { source: "center", target: "atom2", type: "axial" },
    ],
    lonePairs: [
      { id: "lp1", position: [LONE_PAIR_DISTANCE, 0, 0] },
      { id: "lp2", position: [-LONE_PAIR_DISTANCE * Math.cos(degToRad(60)), 0, LONE_PAIR_DISTANCE * Math.sin(degToRad(60))] },
      { id: "lp3", position: [-LONE_PAIR_DISTANCE * Math.cos(degToRad(60)), 0, -LONE_PAIR_DISTANCE * Math.sin(degToRad(60))] }
    ],
  },
  {
    id: "octahedral_ax6",
    name: "Octahedral (AX₆)",
    formula: "AX₆",
    example: "SF₆",
    electronPairs: { total: 6, bond: 6, lone: 0 },
    hybridization: "sp³d²",
    idealGeometry: "Octahedral",
    actualShape: "Octahedral",
    angles: "90°",
    examTip: "All positions in an octahedral geometry are completely equivalent. The bond angles are all exactly 90°.",
    atoms: [
      { id: "center", position: [0, 0, 0], type: "central", color: "#64748b", label: "A" },
      { id: "atom1", position: [0, BOND_DISTANCE, 0], type: "peripheral", color: "#14b8a6", label: "X" }, // top
      { id: "atom2", position: [0, -BOND_DISTANCE, 0], type: "peripheral", color: "#14b8a6", label: "X" }, // bottom
      { id: "atom3", position: [BOND_DISTANCE, 0, 0], type: "peripheral", color: "#14b8a6", label: "X" }, // right
      { id: "atom4", position: [-BOND_DISTANCE, 0, 0], type: "peripheral", color: "#14b8a6", label: "X" }, // left
      { id: "atom5", position: [0, 0, BOND_DISTANCE], type: "peripheral", color: "#14b8a6", label: "X" }, // front
      { id: "atom6", position: [0, 0, -BOND_DISTANCE], type: "peripheral", color: "#14b8a6", label: "X" }, // back
    ],
    bonds: [
      { source: "center", target: "atom1", type: "equatorial" },
      { source: "center", target: "atom2", type: "equatorial" },
      { source: "center", target: "atom3", type: "equatorial" },
      { source: "center", target: "atom4", type: "equatorial" },
      { source: "center", target: "atom5", type: "equatorial" },
      { source: "center", target: "atom6", type: "equatorial" },
    ],
    lonePairs: [],
  },
  {
    id: "square_pyramidal_ax5e",
    name: "Square Pyramidal (AX₅E)",
    formula: "AX₅E",
    example: "BrF₅",
    electronPairs: { total: 6, bond: 5, lone: 1 },
    hybridization: "sp³d²",
    idealGeometry: "Octahedral",
    actualShape: "Square Pyramidal",
    angles: "<90°",
    examTip: "The single lone pair pushes all equatorial bonds slightly upward, making angles less than 90°.",
    atoms: [
      { id: "center", position: [0, 0, 0], type: "central", color: "#64748b", label: "A" },
      { id: "atom1", position: [0, BOND_DISTANCE, 0], type: "peripheral", color: "#a855f7", label: "X" }, 
      { id: "atom3", position: [BOND_DISTANCE, 0, 0], type: "peripheral", color: "#a855f7", label: "X" }, 
      { id: "atom4", position: [-BOND_DISTANCE, 0, 0], type: "peripheral", color: "#a855f7", label: "X" }, 
      { id: "atom5", position: [0, 0, BOND_DISTANCE], type: "peripheral", color: "#a855f7", label: "X" }, 
      { id: "atom6", position: [0, 0, -BOND_DISTANCE], type: "peripheral", color: "#a855f7", label: "X" }, 
    ],
    bonds: [
      { source: "center", target: "atom1", type: "equatorial" },
      { source: "center", target: "atom3", type: "equatorial" },
      { source: "center", target: "atom4", type: "equatorial" },
      { source: "center", target: "atom5", type: "equatorial" },
      { source: "center", target: "atom6", type: "equatorial" },
    ],
    lonePairs: [
      { id: "lp1", position: [0, -LONE_PAIR_DISTANCE, 0] }
    ],
  },
  {
    id: "square_planar_ax4e2",
    name: "Square Planar (AX₄E₂)",
    formula: "AX₄E₂",
    example: "XeF₄",
    electronPairs: { total: 6, bond: 4, lone: 2 },
    hybridization: "sp³d²",
    idealGeometry: "Octahedral",
    actualShape: "Square Planar",
    angles: "90°",
    examTip: "The two lone pairs position themselves opposite to each other (trans) to minimize repulsion, leaving the 4 bonds in a flat square.",
    atoms: [
      { id: "center", position: [0, 0, 0], type: "central", color: "#64748b", label: "A" },
      { id: "atom3", position: [BOND_DISTANCE, 0, 0], type: "peripheral", color: "#eab308", label: "X" }, 
      { id: "atom4", position: [-BOND_DISTANCE, 0, 0], type: "peripheral", color: "#eab308", label: "X" }, 
      { id: "atom5", position: [0, 0, BOND_DISTANCE], type: "peripheral", color: "#eab308", label: "X" }, 
      { id: "atom6", position: [0, 0, -BOND_DISTANCE], type: "peripheral", color: "#eab308", label: "X" }, 
    ],
    bonds: [
      { source: "center", target: "atom3", type: "equatorial" },
      { source: "center", target: "atom4", type: "equatorial" },
      { source: "center", target: "atom5", type: "equatorial" },
      { source: "center", target: "atom6", type: "equatorial" },
    ],
    lonePairs: [
      { id: "lp1", position: [0, LONE_PAIR_DISTANCE, 0] },
      { id: "lp2", position: [0, -LONE_PAIR_DISTANCE, 0] }
    ],
  },
  {
    id: "pentagonal_bipyramidal_ax7",
    name: "Pentagonal Bipyramidal (AX₇)",
    formula: "AX₇",
    example: "IF₇",
    electronPairs: { total: 7, bond: 7, lone: 0 },
    hybridization: "sp³d³",
    idealGeometry: "Pentagonal Bipyramidal",
    actualShape: "Pentagonal Bipyramidal",
    angles: "90°, 72°",
    examTip: "The five equatorial bonds are arranged in a pentagon, with two axial bonds perpendicular to them.",
    atoms: [
      { id: "center", position: [0, 0, 0], type: "central", color: "#64748b", label: "A" },
      { id: "atom1", position: [0, AXIAL_DISTANCE, 0], type: "peripheral", color: "#f43f5e", label: "X_ax" },
      { id: "atom2", position: [0, -AXIAL_DISTANCE, 0], type: "peripheral", color: "#f43f5e", label: "X_ax" },
      { id: "atom3", position: [BOND_DISTANCE, 0, 0], type: "peripheral", color: "#8b5cf6", label: "X_eq" },
      { id: "atom4", position: [BOND_DISTANCE * Math.cos(degToRad(72)), 0, BOND_DISTANCE * Math.sin(degToRad(72))], type: "peripheral", color: "#8b5cf6", label: "X_eq" },
      { id: "atom5", position: [BOND_DISTANCE * Math.cos(degToRad(144)), 0, BOND_DISTANCE * Math.sin(degToRad(144))], type: "peripheral", color: "#8b5cf6", label: "X_eq" },
      { id: "atom6", position: [BOND_DISTANCE * Math.cos(degToRad(216)), 0, BOND_DISTANCE * Math.sin(degToRad(216))], type: "peripheral", color: "#8b5cf6", label: "X_eq" },
      { id: "atom7", position: [BOND_DISTANCE * Math.cos(degToRad(288)), 0, BOND_DISTANCE * Math.sin(degToRad(288))], type: "peripheral", color: "#8b5cf6", label: "X_eq" },
    ],
    bonds: [
      { source: "center", target: "atom1", type: "axial" },
      { source: "center", target: "atom2", type: "axial" },
      { source: "center", target: "atom3", type: "equatorial" },
      { source: "center", target: "atom4", type: "equatorial" },
      { source: "center", target: "atom5", type: "equatorial" },
      { source: "center", target: "atom6", type: "equatorial" },
      { source: "center", target: "atom7", type: "equatorial" },
    ],
    lonePairs: [],
  },
];
