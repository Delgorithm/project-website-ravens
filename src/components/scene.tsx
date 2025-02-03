"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./model";

export default function Scene({ activeMenu }) {
  return (
    <div className="relative h-[100vh] w-full z-0 pointer-events-none">
      <Canvas>
        <Model activeMenu={activeMenu} />
      </Canvas>
    </div>
  );
}
