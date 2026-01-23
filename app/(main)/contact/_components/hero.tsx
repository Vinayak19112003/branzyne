'use client'

import React from 'react'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import TextReveal from '@/components/TextReveal'
import GradientText from '@/components/GradientText'
import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars'
import { Meteors } from '@/components/ui/meteors'
import { cn } from '@/lib/utils'

const ContactHero = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-[50vh] px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
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
                <TextReveal className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6" stagger={0.1}>
                    Get in <span className='text-purple-500'>Touch</span>
                </TextReveal>
                <ScrollAnimationWrapper delay={0.3}>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We will respond to you within 1-12 hours. We&apos;ll sign an NDA if very needed. Access to dedicated consultant specialists.
                    </p>
                </ScrollAnimationWrapper>
            </ScrollAnimationWrapper>
        </section>
    )
}

export default ContactHero


