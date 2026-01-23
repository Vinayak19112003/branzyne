'use client'

import React from 'react'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import TextReveal from '@/components/TextReveal'
import Carousel3D from '../scroll'
import PhoneProjection from './phoneProjection'

const milestones = [
    {
        year: '2019',
        title: 'The Beginning',
        description: 'Founded with a vision to revolutionize digital experiences through innovative design and technology.'
    },
    {
        year: '2020',
        title: 'Rapid Growth',
        description: 'Expanded our team and portfolio, delivering exceptional results for clients across multiple industries.'
    },
    {
        year: '2021',
        title: 'Innovation Focus',
        description: 'Launched cutting-edge services and embraced emerging technologies to stay ahead of the curve.'
    },
    {
        year: '2022',
        title: 'Global Reach',
        description: 'Extended our services internationally, working with clients from around the world.'
    },
    {
        year: '2023',
        title: 'Excellence Award',
        description: 'Recognized for outstanding achievements in digital innovation and client satisfaction.'
    },
    {
        year: '2024',
        title: 'Future Forward',
        description: 'Continuing to push boundaries and set new standards in the digital landscape.'
    }
]

const Story = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">
                {/* Main Story Content */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
                    <ScrollAnimationWrapper delay={0.2} direction="left">
                        <div className="space-y-4 sm:space-y-6">
                            <h3 className="text-xl sm:text-2xl lg:text-4xl  text-white mb-3 sm:mb-6">Our <span className='text-purple-500'>Story</span></h3>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                                What started as a small team with big dreams has evolved into a powerhouse of creativity and innovation. We&apos;ve grown from humble beginnings to become a trusted partner for businesses seeking digital transformation.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                                Our journey has been marked by continuous learning, adaptation to new technologies, and an unwavering commitment to delivering exceptional results for our clients.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                                Today, we stand at the forefront of digital innovation, ready to help businesses navigate the ever-changing digital landscape and achieve their goals.
                            </p>
                        </div>
                    </ScrollAnimationWrapper>

                    <ScrollAnimationWrapper delay={0.5} direction='right'>
                    <div className="flex justify-center">
                        <div className="w-full max-w-2xl">
                            <PhoneProjection/>
                        </div>
                    </div>
                </ScrollAnimationWrapper>
                </div>
                <ScrollAnimationWrapper>
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-2 sm:mb-3 lg:mb-4">Our Journey</p>
                        <TextReveal className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 sm:mb-4 lg:mb-6 leading-tight" stagger={0.05}>
                            From <span className="text-purple-500 font-medium">Vision</span> to Reality
                        </TextReveal>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
                            Discover the milestones that have shaped our journey and driven our commitment to excellence.
                        </p>
                    </div>
                </ScrollAnimationWrapper>

                {/* Timeline */}
                <ScrollAnimationWrapper delay={0.4}>
                    <div className="relative">
                        {/* Desktop Timeline Line */}
                        <div className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-purple-500/50 to-transparent"></div>

                        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                            {milestones.map((milestone, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <div key={index} className="relative">
                                        {/* Mobile Layout */}
                                        <div className="lg:hidden w-full">
                                            <ScrollAnimationWrapper delay={index * 0.1}>
                                                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                                                    <div className="flex items-center mb-3">
                                                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                                        <div className="text-purple-400 font-semibold text-base sm:text-lg">{milestone.year}</div>
                                                    </div>
                                                    <h4 className="text-white font-semibold text-lg sm:text-xl mb-2">{milestone.title}</h4>
                                                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{milestone.description}</p>
                                                </div>
                                            </ScrollAnimationWrapper>
                                        </div>

                                        {/* Desktop Layout */}
                                        <div className="hidden lg:flex items-center">
                                            {/* Left Side */}
                                            {isEven && (
                                                <>
                                                    <div className="w-1/2 pr-12 text-right">
                                                        <ScrollAnimationWrapper delay={index * 0.1} direction="left">
                                                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                                                                <div className="text-purple-400 font-semibold text-lg xl:text-xl mb-2">{milestone.year}</div>
                                                                <h4 className="text-white font-semibold text-lg xl:text-xl mb-3">{milestone.title}</h4>
                                                                <p className="text-gray-300 text-sm xl:text-base leading-relaxed">{milestone.description}</p>
                                                            </div>
                                                        </ScrollAnimationWrapper>
                                                    </div>
                                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black z-10"></div>
                                                    <div className="w-1/2"></div>
                                                </>
                                            )}

                                            {/* Right Side */}
                                            {!isEven && (
                                                <>
                                                    <div className="w-1/2"></div>
                                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black z-10"></div>
                                                    <div className="w-1/2 pl-12 text-left">
                                                        <ScrollAnimationWrapper delay={index * 0.1} direction="right">
                                                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                                                                <div className="text-purple-400 font-semibold text-lg xl:text-xl mb-2">{milestone.year}</div>
                                                                <h4 className="text-white font-semibold text-lg xl:text-xl mb-3">{milestone.title}</h4>
                                                                <p className="text-gray-300 text-sm xl:text-base leading-relaxed">{milestone.description}</p>
                                                            </div>
                                                        </ScrollAnimationWrapper>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </section>
    )
}

export default Story
