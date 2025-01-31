"use client";

import Image from "next/image";
import { projects } from "../data";
import { useRef } from "react";
import gsap from "gsap";

export default function SectionWorks() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);

  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId === null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) => start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);

    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` });
    gsap.set(plane3.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce !== 0 || yForce !== 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <section
      className="relative h-[200vh] w-full flex justify-center items-center overflow-hidden font-ppEiko font-thin text-white"
      onMouseMove={manageMouseMove}
    >
      <p ref={plane3} className="text-[40px] font-medium">
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit.
      </p>
      <div ref={plane1} className="absolute inset-0 filter brightness-70">
        <div className="absolute left-[18%] top-[23%]">
          <Image src={projects[0].src} alt="image" width={140} height={235} />
          <p className="flex items-center justify-between ">
            Lorem Ipsum <span>[04]</span>
          </p>
        </div>
        <div className="absolute left-[15%] top-[50%]">
          <Image src={projects[1].src} alt="image" width={140} height={195} />
          <p className="flex items-center justify-between ">
            Lorem Ipsum <span>[02]</span>
          </p>
        </div>
        <div className="absolute left-[5%] top-[70%]">
          <Image src={projects[2].src} alt="image" width={300} height={400} />
          <p className="flex items-center justify-between ">
            Lorem Ipsum <span>[06]</span>
          </p>
        </div>
      </div>

      <div ref={plane2} className="absolute inset-0 filter brightness-60">
        <div className="absolute left-[66%] top-[64%]">
          <Image src={projects[3].src} alt="image" width={300} height={400} />
          <p className="flex items-center justify-between ">
            Lorem Ipsum <span>[07]</span>
          </p>
        </div>
        <div className="absolute left-[47%] top-[88%]">
          <Image src={projects[4].src} alt="image" width={160} height={220} />
          <p className="flex items-center justify-between ">
            Lorem Ipsum <span>[01]</span>
          </p>
        </div>

        <div className="absolute left-[61%] top-[42%]">
          <Image src={projects[5].src} alt="image" width={250} height={250} />
          <p className="flex items-center justify-between">
            Lorem Ipsum <span>[03]</span>
          </p>
        </div>
      </div>

      <div ref={plane3} className="absolute inset-0 filter brightness-50">
        <div className="absolute left-[76%] top-[23%]">
          <Image src={projects[6].src} alt="image" width={200} height={200} />
          <p className="flex items-center justify-between ">
            Lorem Ipsum <span>[05]</span>
          </p>
        </div>
        <div className="absolute left-[33%] top-[32%]">
          <Image src={projects[7].src} alt="image" width={200} height={200} />
          <p className="flex items-center justify-between ">
            Lorem Ipsum <span>[09]</span>
          </p>
        </div>
      </div>
    </section>
  );
}
