'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Favicon() {
    const svgRef = useRef<SVGSVGElement>(null);
    const path1Ref = useRef<SVGPathElement>(null);
    const path2Ref = useRef<SVGPathElement>(null);
    const path3Ref = useRef<SVGPathElement>(null);

    useEffect(() => {
        const svg = svgRef.current;
        const path1 = path1Ref.current;

        if (!svg || !path1) return;
        gsap.set(path1, {
            x: 90,
            y: 150
        });


        gsap.to(path1, {
            x: 180,
            y: 100,
            duration: 1.5,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1
        });



    }, []);
    return (
        <svg
            ref={svgRef}
            version="1.1"
            id="svg1"
            width="200"
            height="60"
            viewBox="500 990 1700 700"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: 'pointer' }}
        >
            <defs
                id="defs1">
                <linearGradient
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-832.21149,-905.1189,-905.1189,832.21149,538.82397,1192.8948)"
                    spreadMethod="pad"
                    id="linearGradient2">
                    <stop
                        style={{ stopOpacity: 1, stopColor: "#6e2995" }}
                        offset="0"
                        id="stop1" />
                    <stop
                        style={{ stopOpacity: 1, stopColor: "#000000" }}
                        offset="1"
                        id="stop2" />
                </linearGradient>
                <linearGradient
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(140.48015,526.35596,526.35596,-140.48015,389.40863,709.711)"
                    spreadMethod="pad"
                    id="linearGradient4">
                    <stop
                        style={{ stopOpacity: 1, stopColor: "#6e2995" }}
                        offset="0"
                        id="stop3" />
                    <stop
                        style={{ stopOpacity: 1, stopColor: "#000000" }}
                        offset="1"
                        id="stop4" />
                </linearGradient>
                <linearGradient
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-55.125118,-337.86365,-337.86365,55.125118,389.31702,1272.313)"
                    spreadMethod="pad"
                    id="linearGradient6">
                    <stop
                        style={{ stopOpacity: 1, stopColor: "#6e2995" }}
                        offset="0"
                        id="stop5" />
                    <stop
                        style={{ stopOpacity: 1, stopColor: "#000000" }}
                        offset="1"
                        id="stop6" />
                </linearGradient>
            </defs>
            <g
                id="layer-MC0">
                <path
                    ref={path1Ref}
                    id="path2"
                    d="m 212.586,994.372 c -6.705,-7.852 -6.572,-20.148 0.799,-27.601 v 0 l 89.045,-51.124 265.715,153.658 c 12.207,8.482 11.436,24.616 -0.505,32.893 v 0 l -85.018,48.721 z"
                    transform="matrix(1.3333333,0,0,-1.3333333,0,2666.6667)"
                    style={{ fill: "url(#linearGradient2)", stroke: "none" }}
                />

                <path
                    ref={path2Ref}
                    id="path4"
                    d="M 301.364,881.494 300.72,777.965 c 1.167,-17.189 18.193,-25.53 32.576,-15.673 v 0 c 73.824,46.832 156.522,85.205 229.623,132.485 v 0 c 14.706,9.512 20.187,20.366 6.76,34.918 v 0 l -93.553,53.137 z"
                    transform="matrix(1.3333333,0,0,-1.3333333,0,2666.6667)"
                    style={{ fill: "url(#linearGradient4)", stroke: "none" }} />
                <path
                    ref={path1Ref}
                    id="path6"
                    d="m 300.722,1222.103 0.619,-137.408 5.789,-1.962 145.969,86.615 -123.231,70.214 c -2.882,1.624 -5.921,2.359 -8.908,2.359 v 0 c -10.288,-10e-4 -19.936,-8.721 -20.238,-19.818"
                    transform="matrix(1.3333333,0,0,-1.3333333,0,2666.6667)"
                    style={{ fill: "url(#linearGradient6)", stroke: "none" }} />

            </g>
        </svg>
    );
}