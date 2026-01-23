'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Intro() {
    const imageRef1 = useRef<HTMLImageElement>(null);
    const imageRef2 = useRef<HTMLImageElement>(null);
    const imageRef3 = useRef<HTMLImageElement>(null);
    const imageRef4 = useRef<HTMLImageElement>(null);
    const divRef1 = useRef<HTMLDivElement>(null);
    const divRef2 = useRef<HTMLDivElement>(null);
    const divMainRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const colsRef = useRef<HTMLDivElement[]>([]);
    useLayoutEffect(() => {
        if (imageRef1.current && imageRef2.current && imageRef3.current && imageRef4.current && divRef1.current && divRef2.current && divMainRef.current) {
            gsap.set(divRef1.current, {
                marginLeft: -400,
                marginRight: 50,
                marginBottom: 6
            });
            // Set initial state - full screen

            gsap.set(imageRef1.current, {
                scale: 0.5,
                y: 135,
                x: -9,
                rotate: -30
            });
            gsap.set(imageRef3.current, {
                scale: 0.7,
                y: -135,
                x: 8,
                rotate: -30
            });
            gsap.set(divRef2.current, {
                opacity: 1,
                marginLeft: -400,
                marginTop: 15,
                width: 0
            });
            gsap.set(imageRef4.current, {
                opacity: 0,
                scale: 0.8
            });

            // Animate to final state - current center position
            gsap.to(imageRef2.current, {
                scale: 0.080, // Zoom out to normal size
                duration: 2, // Animation duration in seconds
                ease: "power2.out", // Smooth easing
                rotate: -30,
                delay: 0.5 // Small delay before animation starts
            });
            gsap.to(imageRef1.current, {
                scale: 1,
                y: 106,
                x: -13,
                duration: 0.5,
                ease: "power2.out",
                delay: 2.5,

            });
            gsap.to(imageRef3.current, {
                scale: 1,
                y: -108,
                x: 14,
                duration: 0.5,
                ease: "power2.out",
                delay: 2.5,

            });

            gsap.to(imageRef1.current, {
                y: 105,
                x: -10,
                delay: 3, // Run after the top animations complete (2.5 + 1 = 3.5)
                duration: 0.5,
                ease: "power2.out"
            });
            gsap.to(imageRef3.current, {
                y: -104,
                x: 6,
                delay: 3, // Run after the top animations complete (2.5 + 1 = 3.5)
                duration: 0.5,
                ease: "power2.out"
            });
            gsap.to(divRef2.current, {
                width: 200,
                delay: 3.5, // Run after the top animations complete (2.5 + 1 = 3.5)
                duration: 0.5,
            });

            gsap.to(imageRef4.current, {
                opacity: 1,
                scale: 1,
                delay: 3.5,
                duration: 0.5,
                ease: "power2.out"
            });

            gsap.to(divMainRef.current, {
                opacity: 0,
                delay: 4.5
            });

            // Animate grid columns
            if (colsRef.current.length) {
                gsap.set(gridRef.current, {
                    zIndex: 20
                });

                gsap.set(gridRef.current, {
                    opacity: 1,
                    delay: 4.5
                });

                gsap.fromTo(colsRef.current,
                    {
                        rotationY: 0,
                        opacity: 1,
                    },
                    {
                        rotationY: 180,
                        stagger: 0.05,
                        duration: 1.2,
                        ease: "power2.inOut",
                        delay: 4.5
                    }
                );
            }


        }
    }, []);

    return (
        <div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
            <div ref={divMainRef} className="w-full min-w-[1200px] min-h-screen flex flex-row items-center justify-center my-auto bg-white">
                <div ref={divRef1} className='flex flex-col items-center justify-center'>
                    <img ref={imageRef1} src="/logo/fav-top.png" alt="Branzyne logo top section" width={30} height={30} />
                    <img
                        ref={imageRef2}
                        src="/logo/fav-center.png"
                        alt="Branzyne logo center section"
                        width={800}
                        height={800}
                        className="max-w-full h-auto z-1"
                        style={{
                            transform: 'scale(8) rotate(30deg)',
                            transformOrigin: 'center center'
                        }}
                    />
                    <img ref={imageRef3} src="/logo/fav-bottom.png" alt="Branzyne logo bottom section" width={52} height={20} />
                </div>
                <div ref={divRef2} className='overflow-hidden '>
                    <img ref={imageRef4} src="/logo/fav-branyne.png" alt="Branzyne brand logo" width={200} height={100} />
                </div>
            </div>
            <div ref={gridRef} className="absolute inset-0 flex w-full h-full pointer-events-none opacity-0 z-0" style={{ perspective: '1000px' }}>
                {Array.from({ length: 26 }).map((_, i) => (
                    <div
                        key={i}
                        ref={el => { if (el) colsRef.current[i] = el; }}
                        className="h-full flex-1 relative overflow-hidden"
                        style={{ transformStyle: 'preserve-3d', transformOrigin: 'left center', backfaceVisibility: 'hidden' }}
                    >
                        <div
                            className="absolute h-full w-[100vw] flex flex-row items-center justify-center bg-white"
                            style={{ left: `calc(-1 * ${i} * 100vw / 26)` }}
                        >
                            <div className='flex flex-col items-center justify-center ' style={{ marginLeft: -400, marginRight: 50, marginBottom: 6 }}>
                                <img src="/logo/fav-top.png" alt="" width={30} height={30} style={{ transform: 'translate(-10px, 105px) scale(1) rotate(-30deg)' }} />
                                <img
                                    src="/logo/fav-center.png"
                                    alt=""
                                    width={800}
                                    height={800}
                                    className="max-w-full h-auto z-1"
                                    style={{
                                        transform: 'scale(0.08) rotate(-30deg)',
                                        transformOrigin: 'center center'
                                    }}
                                />
                                <img src="/logo/fav-bottom.png" alt="" width={52} height={20} style={{ transform: 'translate(6px, -104px) scale(1) rotate(-30deg)' }} />
                            </div>
                            <div className='overflow-hidden' style={{ width: 200, marginLeft: -400, marginTop: 15 }}>
                                <img src="/logo/fav-branyne.png" alt="" width={200} height={100} style={{ opacity: 1, transform: 'scale(1)' }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}