"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface SlideProps {
  src: string;
  left: string;
  direction: "left" | "right";
  progress: any;
}

interface PhraseProps {
  src: string;
}

export default function TextParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={container} className="overflow-hidden">
      <Slide
        src={"/images/parallax-tatoo-01.webp"}
        direction="left"
        left="-40%"
        progress={scrollYProgress}
      />
      <Slide
        src={"/images/parallax-tatoo-02.webp"}
        direction="right"
        left="-25%"
        progress={scrollYProgress}
      />
      <Slide
        src={"/images/parallax-tatoo-03.webp"}
        direction="left"
        left="-75%"
        progress={scrollYProgress}
      />
    </div>
  );
}

const Slide = ({ src, left, direction, progress }: SlideProps) => {
  const moveDirection = direction === "left" ? -1 : 1;
  const translateX = useTransform(progress, [0, 1], [150 * moveDirection, -150 * moveDirection]);

  return (
    <motion.div style={{ x: translateX, left }} className="relative flex whitespace-nowrap">
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
};

const Phrase = ({ src }: PhraseProps) => {
  return (
    <div className="px-5 flex gap-5 items-center">
      <p className="text-[7.5vw] font-ppEiko font-thin text-[#E5E5E5]">Ravens - Tatouages</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};
