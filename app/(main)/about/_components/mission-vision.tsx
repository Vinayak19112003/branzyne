'use client'

import React from 'react'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import TextReveal from '@/components/TextReveal'
import { Target, Eye } from 'lucide-react'

const MissionVision = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                <ScrollAnimationWrapper>
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-2 sm:mb-3 lg:mb-4">Our Purpose</p>
                        <TextReveal className="text-2xl sm:text-3xl md:text-4xl  font-light text-white mb-3 sm:mb-4 lg:mb-6 leading-tight" stagger={0.05}>
                            Driving <span className="text-purple-500 font-medium">Innovation</span> Through Creative Excellence
                        </TextReveal>
                    </div>
                </ScrollAnimationWrapper>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {/* Mission */}
                    <ScrollAnimationWrapper delay={0.2} direction="left">
                        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 sm:p-6 lg:p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl sm:text-2xl   text-white">Our Mission</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                                To empower businesses with cutting-edge digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital landscape.
                            </p>
                        </div>
                    </ScrollAnimationWrapper>

                    {/* Vision */}
                    <ScrollAnimationWrapper delay={0.3} direction="right">
                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-4 sm:p-6 lg:p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                                    <Eye className="w-5 h-5  text-blue-400" />
                                </div>
                                <h3 className="text-xl sm:text-2xl  text-white">Our Vision</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                                To be the leading force in digital transformation, setting new standards for creativity, innovation, and client success in an ever-evolving digital world.
                            </p>
                        </div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </section>
    )
}

export default MissionVision
