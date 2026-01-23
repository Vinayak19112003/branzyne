"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { cn } from "@/lib/utils";
import { Meteors } from "@/components/ui/meteors";
import TextReveal from "@/components/TextReveal";
import GradientText from "@/components/GradientText";

const services = [
  "Branding",
  "E-commerce",
  "Digital Marketing",
  "Website Development",
  "App Development",
  "UI/UX design",
  "Graphic Designing",
  "Video Editing",
];

const Hero = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    });

    services.forEach((_, index) => {
      tl.to(textRef.current, {
        rotationX: -90,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setCurrentIndex((index + 1) % services.length);
        },
      })
        .set(textRef.current, {
          rotationX: 90,
        })
        .to(textRef.current, {
          rotationX: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        })
        .to({}, { duration: 1.5 }); // Pause before next flip
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen max-h-screen relative px-4 sm:px-6 lg:px-8">
      <StarsBackground
        starColor={"#fff"}
        className={cn(
          "absolute inset-0 flex items-center justify-center rounded-xl",
          "bg-[radial-gradient(ellipse_at_bottom,_#000_0%,_#000_100%)]"
        )}
      />
      <div className="relative h-screen w-full overflow-hidden">
        <Meteors number={4} angle={70} minDuration={15} />
      </div>
      {/* <img src="/hero/smoke-1.png" alt="bg" className='absolute w-full h-full object-cover z-0' /> */}
      {/* <img src="/hero/smoke-1.png" alt="bg" className='absolute w-full h-full object-cover z-0' /> */}
      <img
        src="/hero/smoke-1.png"
        alt="bg"
        className="absolute w-full h-full object-cover z-0"
      />

      {/* <img src="/hero/bg-1.jpg" alt="bg" className='w-full h-full object-cover z-0' /> */}
      <div className="absolute">
        <div className="relative h-[160px] w-[160px]  md:h-[180px] md:w-[180px] lg:h-[200px] lg:w-[200px] flex items-center justify-center z-10 mb-4 md:mb-0">
          <img
            src="/hero/lens_flare_back.png"
            alt="lens flare back"
            className="absolute -top-8 -left-8 sm:-top-10 sm:-left-10 md:-top-12 md:-left-12 lg:-top-15 lg:-left-15 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]"
          />
          <img
            src="/videos/hero-transparent.gif"
            alt="hero"
            className="absolute w-[160px] h-[160px]  md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] object-cover opacity-50"
            style={{
              filter: "drop-shadow(5px 5px 40px rgba(168, 85, 247, 0.8))",
            }}
          />
          <img
            src="/hero/lens_flare_front.png"
            alt="lens flare front"
            className="absolute -top-8 -left-8 sm:-top-10 sm:-left-10 md:-top-12 md:-left-12 lg:-top-15 lg:-left-15 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]"
          />
        </div>
      </div>
      <p className="text-white  sm:ml-60 max-sm:mt-50 absolute flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4 z-10 text-center md:text-left">
        <span className="text-4xl sm:text-4xl md:text-5xl lg:text-[60px] font-light">
          Branzyne
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extralight mt-1 sm:mt-2 hidden sm:inline">
          |
        </span>
        <span
          className="inline-block overflow-hidden  min-w-[485px] max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px]"
          style={{
            perspective: "1000px",
          }}
        >
          <span
            ref={textRef}
            className="text-xl leading-8 sm:leading-20  sm:text-2xl md:text-3xl lg:text-4xl xl:text-[50px] font-extralight sm:mt-2 md:mt-3 italic inline-block whitespace-nowrap text-gray-100"
            style={{
              transformStyle: "preserve-3d",
              display: "inline-block",
            }}
          >
            {services[currentIndex]}
          </span>
        </span>
      </p>
    </div>
  );
};

export default Hero;
