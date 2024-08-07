'use client';
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/mask.glb -t -r public 
*/

import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    mask8001: THREE.Mesh;
    mask8001_1: THREE.Mesh;
    mask8001_2: THREE.Mesh;
  };
  materials: {
    ['defaultMat.001']: THREE.MeshStandardMaterial;
  };
};

export function Mask(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/mask.glb') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[11.828, 1.127, -29.281]}
        rotation={[1.463, -0.102, 0.754]}
      >
        <mesh
          geometry={nodes.mask8001.geometry}
          material={nodes.mask8001.material}
          scale={[0.08, 0.08, 0.08]} // Scale the first mesh
        />
        <mesh
          geometry={nodes.mask8001_1.geometry}
          material={nodes.mask8001_1.material}
          scale={[0.08, 0.08, 0.08]} // Scale the second mesh
        />
        <mesh
          geometry={nodes.mask8001_2.geometry}
          material={materials['defaultMat.001']}
          scale={[0.08, 0.08, 0.08]} // Scale the third mesh
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/mask.glb');
