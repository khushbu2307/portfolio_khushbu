
import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

const RotatingShape = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  const geometry = useMemo(() => new THREE.TorusKnotGeometry(1, 0.3, 128, 16), []);

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial color="#A78BFA" roughness={0.1} metalness={0.8} wireframe={true} />
    </mesh>
  );
};

const HeroScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <directionalLight color="#A78BFA" intensity={5} position={[-5, 5, 5]} />
      <directionalLight color="#ffffff" intensity={1} position={[5, -5, -5]} />
      <RotatingShape />
    </Canvas>
  );
};

export default HeroScene;
