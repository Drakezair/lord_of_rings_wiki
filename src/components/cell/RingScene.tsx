"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { RingModel } from "@/components/atom";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import ReactPageScroller from "react-page-scroller";
import Title from "@/components/atom/Title";

export default function RingScene() {
  return (
    <div id="canvas-container" className="w-1/2 h-80" >
      <Suspense fallback={null}>
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={0.5} />
          <directionalLight
            color="yellow"
            castShadow
            position={[2, 3, 5]}
            intensity={1}
          />
          <directionalLight
            color="orange"
            castShadow
            position={[1, 0, 0]}
            intensity={1}
          />
          <directionalLight
            color="yellow"
            castShadow
            position={[1, 1, 0]}
            intensity={1}
          />
          <directionalLight
            color="orange"
            castShadow
            position={[1, 0, 5]}
            intensity={1}
          />
          <directionalLight
            color="yellow"
            castShadow
            position={[0, 0, 5]}
            intensity={1}
          />
          <directionalLight
            color="red"
            castShadow
            position={[1, 5, 0]}
            intensity={1}
          />
          <RingModel />
        </Canvas>
      </Suspense>
    </div>
  );
}
