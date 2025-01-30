"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

import "./menu.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  { path: "/", label: "Home", numerotation: "[01]" },
  { path: "/travaux", label: "Travaux", numerotation: "[02]" },
  { path: "/a-propos", label: "À propos", numerotation: "[03]" },
  { path: "/informations", label: "Informations", numerotation: "[04]" },
  { path: "/prestations", label: "Prestations", numerotation: "[05]" },
  { path: "/contact", label: "Contact", numerotation: "[06]" },
];

export default function Menu() {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 150 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "circle(250% at 50% -95%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.95,
        });
    },
    { scope: container },
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-300 flex justify-between items-center ${isMenuOpen ? "z:-50 pointer-events-auto" : "z-30"}`}
      ref={container}
    >
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/" className="font-ppEiko text-[#E5E5E5]">
            Julie Ravens
          </Link>
        </div>
        <div className="menu-open font-ppEiko text-[#E5E5E5]" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/" className="font-ppEiko text-[#E5E5E5]">
              Julie Ravens
            </Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p className="text-[#E5E5E5]">Close</p>
            <div className="menu-close-icon" onClick={toggleMenu}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 cursor-pointer stroke-[0.15px] stroke-[#E5E5E5]"
              >
                <path
                  d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                  fill="#E5E5E5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="stroke-[#E5E5E5] stroke-[0.15px]"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder">
                  <Link href={link.path} className="menu-link" onClick={toggleMenu}>
                    {link.label} <span className="text-[0.20em] ">{link.numerotation}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="menu-info text-[#E5E5E5] text-lg">
          <div className="menu-info-col">
            <a href="#" className="hover:text-black transition-all ease-in-out">
              X &#8599;
            </a>
            <a href="#" className="hover:text-black transition-all ease-in-out">
              Instagram &#8599;
            </a>
            <a href="#" className="hover:text-black transition-all ease-in-out">
              Facebook &#8599;
            </a>
          </div>
          <div className="menu-info-col hover:text-black transition-all ease-in-out cursor-pointer">
            <p>ravens-arts@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
