import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { useAppStore } from '../../store/useAppStore';
import { molecules } from '../../data/MoleculeData';
import { AtomBondMesh } from './AtomBondMesh';

const Scene = () => {
  const { selectedMoleculeId, autoRotate } = useAppStore();
  const molecule = molecules.find((m) => m.id === selectedMoleculeId);
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      
      <group ref={groupRef}>
        <AtomBondMesh molecule={molecule} />
      </group>

      <ContactShadows 
        position={[0, -2.5, 0]} 
        opacity={0.4} 
        scale={10} 
        blur={2} 
        far={4} 
        color="#000000" 
      />
    </>
  );
};

export const MoleculeCanvas = () => {
  return (
    <div className="w-full h-full bg-slate-900 rounded-xl overflow-hidden relative">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 45 }}
      >
        <Suspense fallback={null}>
          <Scene />
          <Environment preset="city" />
          <OrbitControls 
            makeDefault 
            enablePan={false}
            minDistance={3}
            maxDistance={10}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
