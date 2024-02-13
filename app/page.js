"use client";

import { Inter } from "next/font/google";
import { Canvas } from "@react-three/fiber";

import ZeusModel from "@/components/ZeusModel";

import { skewRevealText } from "@/utils/gsap";
import { useLayoutEffect, useRef, useEffect } from "react";
import { useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress, scrollY } = useScroll();
  const textRef = useRef();
  const textRefTwo = useRef();
  const textRefThree = useRef();
  const textRefFour = useRef();

  useLayoutEffect(() => {
    skewRevealText(textRef);
    skewRevealText(textRefTwo);
    skewRevealText(textRefThree);
    skewRevealText(textRefFour);
  }, []);

  return (
    <main className="relative">
      <style jsx>{`
      @media (max-width: 768px) {
        .bg-hero-gradient {
          margin-left: 0;
          background-position: center;
        }
      }
      `}</style>
      <div className="h-full w-full fixed top-0 left-0 ml-64 bg-hero-gradient bg-right bg-no-repeat bg-cover bg-blend-normal z-0">
        <Canvas>
          {/* <ambientLight intensity={0.03} /> */}
          <ZeusModel
            scale={0.1}
            position={[0, -2, 0]}
            rotation={[0, 5, 0]}
            scrollY={scrollY}
            scrollYProgress={scrollYProgress}
          />
        </Canvas>
      </div>
      <div className="max-w-7xl relative m-auto text-white  z-2">
        <div
          className="h-[100vh] flex items-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2, margin: "800px" }}
        >
          <div className="overflow-hidden">
            <h1 className="text-2xl font-bold font-headline">
              Zeus the
              <br /> Greek God
            </h1>
            <p className="text-paragraph max-w-[307px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>
        <div className="h-[100vh] flex items-center">
          <div className="overflow-hidden">
            <h2
              ref={textRef}
              className="text-5xl font-bold font-headline opacity-0"
            >
              Ibad Asim
            </h2>
            <p
              className="text-paragraph max-w-[307px] opacity-0"
              ref={textRefThree}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>
        <div className="h-[100vh] flex items-center">
          <div className="overflow-hidden">
            <h2
              ref={textRefTwo}
              className="text-5xl font-bold font-headline opacity-0"
            >
              Zeus
            </h2>
            <p
              className="text-paragraph max-w-[307px] opacity-0"
              ref={textRefFour}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>
        <div className="h-[100vh] flex items-center"></div>
      </div>
    </main>
  );
}