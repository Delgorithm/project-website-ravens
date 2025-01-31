"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HorizontalScroll() {
  const containerRef = useRef(null);
  const panel1Ref = useRef(null);
  const panel2Ref = useRef(null);
  const panel3Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !panel1Ref.current || !panel2Ref.current || !panel3Ref.current)
      return;

    const sections = [panel1Ref.current, panel2Ref.current, panel3Ref.current];

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      roundProps: "x",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current!.offsetWidth,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="h-screen flex w-[300%]">
      <section
        ref={panel1Ref}
        className="flex h-screen w-screen bg-[#A5A387] will-change-transform"
      >
        <p>01</p>
      </section>

      <section ref={panel2Ref} className="flex h-screen w-screen bg-red-400 will-change-transform">
        <p>02</p>
      </section>

      <section
        ref={panel3Ref}
        className="flex h-screen w-screen bg-[#A5A387] will-change-transform"
      >
        <p>03</p>
      </section>
    </div>
  );
}
