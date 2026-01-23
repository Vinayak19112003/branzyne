'use client'

import React from 'react'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import TextReveal from '@/components/TextReveal'
import { Rocket, Heart, Star, LifeBuoy, Award, Users } from 'lucide-react'

const stats = [
    {
        number: '250+',
        label: 'Projects Completed',
        icon: Rocket
    },
    {
        number: '150+',
        label: 'Happy Clients',
        icon: Heart
    },
    {
        number: '5+',
        label: 'Years Experience',
        icon: Star
    },
    {
        number: '24/7',
        label: 'Support Available',
        icon: LifeBuoy
    },
    {
        number: '99%',
        label: 'Client Satisfaction',
        icon: Award
    },
    {
        number: '50+',
        label: 'Team Members',
        icon: Users
    }
]

const Stats = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                <ScrollAnimationWrapper>
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-2 sm:mb-3 lg:mb-4">Our Impact</p>
                        <TextReveal className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 sm:mb-4 lg:mb-6 leading-tight" stagger={0.05}>
                            Numbers That <span className="text-purple-500 font-medium">Speak</span> for Themselves
                        </TextReveal>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
                            Our track record speaks volumes about our commitment to excellence and client success.
                        </p>
                    </div>
                </ScrollAnimationWrapper>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 sm:p-6 lg:p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group text-center">
                                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400" />
                                </div>
                                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-400 mb-1 sm:mb-2 group-hover:text-purple-300 transition-colors">
                                    {stat.number}
                                </div>
                                <div className="text-gray-300 font-medium text-xs sm:text-sm lg:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        </ScrollAnimationWrapper>
                    ))}
                </div>

                <ScrollAnimationWrapper delay={0.5}>
                    <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
                        <div className="bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 rounded-xl p-6 sm:p-8 border border-purple-500/20">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-3 sm:mb-4">
                                Ready to Be Our Next Success Story?
                            </h3>
                            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                                Join the growing list of businesses that have transformed their digital presence with our expertise.
                            </p>
                            <button className="px-6 sm:px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                                Start Your Project
                            </button>
                        </div>
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </section>
    )
}

export default Stats
