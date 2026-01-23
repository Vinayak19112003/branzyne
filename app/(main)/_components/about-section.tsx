'use client'

import React from 'react'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import TextReveal from '@/components/TextReveal'

const AboutSection = () => {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                <ScrollAnimationWrapper>
                    <div className="text-center mb-8 sm:mb-12">
                        <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">About Us</p>
                        <TextReveal className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 leading-tight" stagger={0.05}>
                            Crafting <span className="text-purple-500 font-medium">Brands</span> That Inspire, Connect, and Grow Beyond Boundaries.
                        </TextReveal>
                        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                            We design, develop, and implement automation tools that help you work smarter, not harder.
                        </p>
                    </div>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper delay={0.2}>
                    <div className="mt-12 sm:mt-16">
                        <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Over 250+ Business built up</p>
                        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                            <div className="flex w-max animate-scroll">
                                {[...Array(4)].map((_, groupIndex) => (
                                    <React.Fragment key={groupIndex}>
                                        {[...Array(6)].map((_, i) => (
                                            <div
                                                key={`${groupIndex}-${i}`}
                                                className="w-20 h-20 sm:w-24 md:w-28 lg:w-32 sm:h-24 md:h-28 lg:h-32 rounded-lg border-2 border-purple-500/30 flex-shrink-0 flex items-center justify-center bg-gray-900/50 hover:border-purple-500/60 transition-colors mr-4 sm:mr-6 md:mr-8"
                                            >
                                                <span className="text-gray-500 text-xs sm:text-sm">Logolpsum</span>
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </section>
    )
}

export default AboutSection

