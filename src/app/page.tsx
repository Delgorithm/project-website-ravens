"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const container = useRef(null);

  useGSAP(
    () => {
      const letters = gsap.utils.toArray(".letter");
      gsap.utils.shuffle(letters);

      gsap.fromTo(
        letters,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.03,
          ease: "power4.out",
        },
      );
    },
    { scope: container },
  );

  const splitText = (text: string) =>
    text.split("").map((char, index) => (
      <li key={index} className="letter inline-block tracking-tighter">
        {char === " " ? "\u00A0" : char}
      </li>
    ));

  return (
    <div
      ref={container}
      className="w-full h-screen text-[#E5E5E5] flex justify-center items-center"
    >
      <div className="leading-[14rem] relative w-[90%]">
        <ul className="text-[200px] font-ppEiko uppercase font-thin text-center flex justify-center">
          {splitText("Ravens")}
        </ul>

        <div className="flex gap-24 items-end">
          <ul className="text-[180px] font-ppEiko italic flex gap-2 ">{splitText("Tatouages")}</ul>
          <span className="leading-none w-[100px] h-[50px] rounded-full border-[0.5px] text-[24px] text-center content-center font-ppEiko">
            et
          </span>
        </div>

        <ul className="text-[180px] font-ppEiko font-thin text-end mr-10 flex justify-end gap-3">
          {splitText("Arts")}
        </ul>
      </div>
    </div>
  );
}
