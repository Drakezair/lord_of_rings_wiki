"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GollumModel, RingModel } from "@/components/atom";

export default function RingScene() {
  return (
    <div id="canvas-container" className="w-1/2 h-80">
      <Suspense fallback={null}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <GollumModel />
        </Canvas>
      </Suspense>
    </div>
  );
}
