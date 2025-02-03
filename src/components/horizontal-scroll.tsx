"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { projects } from "./data";

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
        className="h-screen w-screen will-change-transform grid grid-cols-4 grid-rows-3 gap-2 pl-8 py-24"
      >
        <Image
          src={projects[0].src}
          className="col-start-2 w-3/4 mt-4"
          width={100}
          height={100}
          alt="img"
        />
        <Image
          src={projects[1].src}
          width={100}
          height={100}
          alt="img"
          className="row-span-2 col-start-4 w-4/6 mt-12"
        />
        <Image
          src={projects[2].src}
          width={100}
          height={100}
          alt="img"
          className="row-span-2 row-start-2 w-4/5 mt-10"
        />
        <Image
          src={projects[3].src}
          width={100}
          height={100}
          alt="img"
          className="row-span-2 col-start-3 row-start-2 w-full "
        />
      </section>

      <section
        ref={panel2Ref}
        className="h-screen w-screen will-change-transform grid grid-cols-4 grid-rows-3 gap-2 py-24"
      >
        <Image
          src={projects[4].src}
          className="row-span-3 w-full mt-24"
          width={100}
          height={100}
          alt="img"
        />
        <Image
          src={projects[5].src}
          width={100}
          height={100}
          alt="img"
          className="row-span-2 col-start-2 row-start-2 w-5/6 mt-36"
        />
        <Image
          src={projects[6].src}
          width={100}
          height={100}
          alt="img"
          className="col-start-3 row-start-1 w-1/2 mt-44"
        />
        <Image
          src={projects[7].src}
          width={100}
          height={100}
          alt="img"
          className="row-span-3 col-start-4 row-start-1 w-7/12"
        />
      </section>

      <section
        ref={panel3Ref}
        className="h-screen w-screen will-change-transform grid grid-cols-4 grid-rows-3 gap-2 pr-8 py-24"
      >
        <Image
          src={projects[8].src}
          className="row-span-2 w-3/4 mt-4"
          width={100}
          height={100}
          alt="img"
        />
        <Image
          src={projects[7].src}
          width={100}
          height={100}
          alt="img"
          className="row-span-2 col-start-2 row-start-2 w-4/6 mt-12"
        />
        <Image
          src={projects[5].src}
          width={100}
          height={100}
          alt="img"
          className="row-span-3 col-start-3 row-start-1 w-4/5 mt-10"
        />
        <Image
          src={projects[4].src}
          width={100}
          height={100}
          alt="img"
          className="row-span-2 col-start-4 row-start-1 w-full "
        />
      </section>
    </div>
  );
}
