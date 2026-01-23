"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Header from "@/component/header";
import Footer from "./_components/footer";
import Intro from "@/component/intro";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showIntro, setShowIntro] = useState(true);
  const divMainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timerId = setTimeout(() => setShowIntro(false), 8000);
    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    if (!showIntro && divMainRef.current) {
      gsap.fromTo(
        divMainRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.inOut" }
      );
    }
  }, [showIntro]);

  return (
    <div className="w-screen min-h-screen bg-black relative">
      <div
        // ref={divMainRef}
        className=" text-white "
      >
        <Header />
        {children}
      </div>
      {showIntro && (
        <div className="sticky inset-0 z-50">
          <Intro />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
