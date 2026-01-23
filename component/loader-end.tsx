import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function LoaderEnd() {
    const divMainRef = useRef<HTMLDivElement>(null);
    const imageRef1 = useRef<HTMLImageElement>(null);
    const imageRef2 = useRef<HTMLImageElement>(null);
    const imageRef3 = useRef<HTMLImageElement>(null);
    useLayoutEffect(() => {
        if (imageRef1.current && imageRef2.current && imageRef3.current && divMainRef.current) {
            gsap.set(divMainRef.current, {
                // Removed hardcoded margin-top
                scale: 1.16,
            })
            gsap.set([imageRef1.current], {
                rotate: -30,
                y: 200,
                x: -400,
            })
            gsap.set([imageRef2.current], {
                rotate: -30,
                y: 0,
                x: 0,
            })
            gsap.set([imageRef3.current], {
                rotate: -30,
                y: -200,
                x: 400,
            })

            gsap.to([imageRef1.current], {
                rotate: -30,
                y: '-150vh',
                x: '100vw',
                duration: 1,
                ease: 'power2.inOut'
            })
            gsap.to([imageRef2.current], {
                rotate: -30,
                y: '-150vh',
                x: '100vw',
                duration: 1,
                delay: 0.2,
                ease: 'power2.inOut'
            })
            gsap.to([imageRef3.current], {
                rotate: -30,
                y: '-150vh',
                x: '100vw',
                duration: 1,
                delay: 0.4,
                ease: 'power2.inOut'
            })


        }
    }, [])
    return (
        <div className='fixed inset-0 w-screen h-screen overflow-hidden z-[9999]'>
            <div ref={divMainRef} className='w-full h-full flex flex-col items-center justify-center '>
                <div className='w-full flex-1' >
                    <img ref={imageRef1} src="/logo/fav-center.png" alt="Branzyne logo start" className='w-full h-full object-cover' style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.8))' }} />
                </div>
                <div className='w-full flex-1' >
                    <img ref={imageRef2} src="/logo/fav-center.png" alt="Branzyne logo start" className='w-full h-full object-cover' style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.8))' }} />
                </div>
                <div className='w-full flex-1' >
                    <img ref={imageRef3} src="/logo/fav-center.png" alt="Branzyne logo start" className='w-full h-full object-cover' style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.8))' }} />
                </div>
            </div>
        </div>
    )
}