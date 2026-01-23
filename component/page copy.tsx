'use client'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Intro from '@/component/introtest'

const page = () => {
  const divMainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (divMainRef.current) {
      gsap.set(divMainRef.current, {
        x: 0,
        y: 0,
        scale: 1,
        delay: 1
      })
      gsap.to(divMainRef.current, {
        x: 2800,

        scale: 30,
        duration: 10,
        ease: 'power2.inOut'
      })
    }

  }, [])
  return (
    <div className=' overflow-hidden '>
      <Intro />

      {/* <div ref={divMainRef} className='top-0 left-0 w-full h-[80vh] z-10' style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        margin: 0,
        padding: 0,
        textAlign: 'center',
        fontSize: '10em',
        color: '#fff',
        textTransform: 'uppercase',
        textShadow: '0 5px 10px rgba(0,0,0,1)',
        mixBlendMode: 'multiply',
        boxShadow: '0 5px 10px rgba(0,0,0,1)',
        background: 'black',

        
      }}><h1 className='text-[400px] font-bold'>Welcome to our website</h1></div> */}

      <div className='w-screen h-screen bg-white text-black z-0'>
        <p className='pt-20 pl-20 z-10 text-4xl'>this is the actual website for branzyne</p>
      </div>
    </div>
  )
}

export default page