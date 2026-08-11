import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import { useAppStore } from '../../store/useAppStore';

const Bond = ({ start, end, type }) => {
  const { position, rotation, length } = useMemo(() => {
    const vStart = new THREE.Vector3(...start);
    const vEnd = new THREE.Vector3(...end);
    const distance = vStart.distanceTo(vEnd);
    const position = vStart.clone().lerp(vEnd, 0.5);
    
    const quaternion = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    const direction = vEnd.clone().sub(vStart).normalize();
    quaternion.setFromUnitVectors(up, direction);
    
    const euler = new THREE.Euler().setFromQuaternion(quaternion);
    
    return {
      position: [position.x, position.y, position.z],
      rotation: [euler.x, euler.y, euler.z],
      length: distance,
    };
  }, [start, end]);

  // Distinct coloring for axial vs equatorial bonds
  const color = type === 'axial' ? '#fb923c' : '#94a3b8';

  return (
    <mesh position={position} rotation={rotation}>
      <cylinderGeometry args={[0.06, 0.06, length, 12]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
    </mesh>
  );
};

const LonePair = ({ position }) => {
  const rotation = useMemo(() => {
    // If the lone pair is at the origin, no rotation needed
    if (position[0] === 0 && position[1] === 0 && position[2] === 0) return [0, 0, 0];
    
    const quaternion = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0); // Default direction of the lobe
    const dir = new THREE.Vector3(...position).normalize();
    quaternion.setFromUnitVectors(up, dir);
    const euler = new THREE.Euler().setFromQuaternion(quaternion);
    return [euler.x, euler.y, euler.z];
  }, [position]);

  return (
    <group position={position} rotation={rotation}>
      <mesh scale={[1, 1.6, 1]}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshPhysicalMaterial 
          color="#fef08a" 
          transparent={true} 
          opacity={0.6} 
          roughness={0.2}
          transmission={0.5}
        />
      </mesh>
    </group>
  );
};

export const AtomBondMesh = ({ molecule }) => {
  const { showLonePairs, showLabels } = useAppStore();

  if (!molecule) return null;

  return (
    <group>
      {/* Atoms */}
      {molecule.atoms.map((atom) => (
        <group key={atom.id} position={atom.position}>
          <mesh>
            <sphereGeometry args={[atom.type === 'central' ? 0.5 : 0.4, 32, 32]} />
            <meshStandardMaterial color={atom.color} roughness={0.4} metalness={0.2} />
          </mesh>
          {showLabels && (
            <Html center position={[0, atom.type === 'central' ? 0.7 : 0.6, 0]} style={{ pointerEvents: 'none' }}>
              <div className="bg-slate-900/80 backdrop-blur-sm text-white px-2 py-0.5 rounded text-xs font-mono border border-slate-700 whitespace-nowrap">
                {atom.label}
              </div>
            </Html>
          )}
        </group>
      ))}

      {/* Bonds */}
      {molecule.bonds.map((bond, idx) => {
        const sourceAtom = molecule.atoms.find(a => a.id === bond.source);
        const targetAtom = molecule.atoms.find(a => a.id === bond.target);
        if (!sourceAtom || !targetAtom) return null;

        return (
          <Bond 
            key={`bond-${idx}`} 
            start={sourceAtom.position} 
            end={targetAtom.position} 
            type={bond.type} 
          />
        );
      })}

      {/* Lone Pairs */}
      {showLonePairs && molecule.lonePairs.map((lp, idx) => (
        <LonePair 
          key={lp.id || `lp-${idx}`} 
          position={lp.position} 
        />
      ))}
    </group>
  );
};
