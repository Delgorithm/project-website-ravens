"use client";

import { useState, useEffect } from "react";
import Lenis from "lenis";
import Header from "@/components/header";
import Scene from "@/components/scene";
import SectionWorks from "@/components/ui/section-works";
import TextParallax from "@/components/text-parallax";
import HorizontalScroll from "@/components/horizontal-scroll";

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
    <main className="overflow-x-hidden">
      <div className="h-screen">
        <Header setActiveMenu={setActiveMenu} />
        <Scene activeMenu={activeMenu} />
      </div>
      <TextParallax />
      <SectionWorks />
      <HorizontalScroll />
    </main>
  );
}
