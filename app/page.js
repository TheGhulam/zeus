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
        {/* <div className="h-full w-full fixed top-0 left-0 ml-12 bg-hero-gradient bg-right bg-no-repeat bg-cover bg-blend-normal z-0"> */}
        <Canvas>
          {/* <ambientLight intensity={0.03} /> */}
          <ambientLight intensity={0.93} />
          <directionalLight position={[0, 10, 5]} intensity={1} />
          <ZeusModel
            scale={0.09}
            position={[0, -0.4, 0]}
            rotation={[0, 5, 0]}
            scrollY={scrollY}
            scrollYProgress={scrollYProgress}
          />
        </Canvas>
      </div>
      <div className="max-w-7xl relative m-auto text-white  z-2">
        <div
          // className="h-[100vh] flex items-center"
          className="h-[100vh] pt-20 "
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2, margin: "800px" }}
        >
          <div className="overflow-hidden">
            {/* <h1 className="text-8xl font-bold font-headline">
              Zeus the
              <br /> Greek God
            </h1>
            <p className="text-paragraph max-w-[307px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="14;0" /></path><path stroke-dasharray="18" stroke-dashoffset="18" d="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="18;0" /><animate attributeName="d" calcMode="linear" dur="1.5s" keyTimes="0;0.7;1" repeatCount="indefinite" values="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5;M12 4 h2 v3 h2.5 L12 11.5M12 4 h-2 v3 h-2.5 L12 11.5;M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5" /></path></g></svg>
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
              Architecture student at Bilkent University
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