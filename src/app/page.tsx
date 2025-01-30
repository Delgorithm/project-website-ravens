"use client";

import { useState, useEffect } from "react";
import Lenis from "lenis";
import Header from "@/components/header";
import Scene from "@/components/scene";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Header setActiveMenu={setActiveMenu} />
      <Scene activeMenu={activeMenu} />
    </main>
  );
}
