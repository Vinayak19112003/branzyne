'use client'

import React from 'react'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import TextReveal from '@/components/TextReveal'
import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars'
import { Meteors } from '@/components/ui/meteors'
import { cn } from '@/lib/utils'

const AboutHero = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-[40vh] px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden border-b border-gray-900">
            <StarsBackground
                starColor={'#fff'}
                className={cn(
                    'absolute inset-0 flex items-center justify-center rounded-xl',
                    'bg-[radial-gradient(ellipse_at_bottom,_#000_0%,_#000_100%)]',
                )}
            />
            <div className="relative h-full w-full overflow-hidden">
                <Meteors number={3} angle={70} minDuration={15} />
            </div>

            <ScrollAnimationWrapper className="max-w-7xl mx-auto text-center z-10 relative">
                <TextReveal className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6" stagger={0.1}>
                    About <span className='text-purple-500'>Us</span>
                </TextReveal>
                <ScrollAnimationWrapper delay={0.3}>
                    <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                        We are a creative agency passionate about crafting exceptional digital experiences.
                    </p>
                </ScrollAnimationWrapper>
            </ScrollAnimationWrapper>
        </section>
    )
}

export default AboutHero


