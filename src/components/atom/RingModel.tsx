"use client";

import React, { MutableRefObject, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

const RING_SIZE = 6;

export default function RingModel() {
  const { nodes, materials }: { nodes: any; materials: any } = useGLTF(
    "/models/the_one_ring.glb"
  );
  const meshRef: MutableRefObject<any> = useRef();
  const groupRef: MutableRefObject<any> = useRef();
  const timeline: MutableRefObject<any> = useRef();

  useFrame((state, delta) => {
    timeline.current = gsap.timeline();
    meshRef.current.rotation.z -= delta / 1;
    meshRef.current.rotation.y += delta / 1;

    timeline.current
      .to(meshRef.current.scale, {
        duration: 6,
        x: RING_SIZE,
        y: RING_SIZE,
        z: RING_SIZE,
        ease: "inOut",
      })
  });

  return (
    <group ref={groupRef} dispose={null}>
      <group>
        <mesh
          ref={meshRef}
          geometry={nodes.Ring_Material001_0.geometry}
          material={materials["Material.001"]}
          rotation={[0, 0, 0]}
          position={[0, 0, 0]}
          scale={1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/the_one_ring.glb");
