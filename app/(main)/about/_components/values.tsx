'use client'

import React from 'react'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import TextReveal from '@/components/TextReveal'
import { Rocket, Handshake, Diamond, Target, Star, Zap } from 'lucide-react'

const values = [
    {
        icon: Rocket,
        title: 'Innovation',
        description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.'
    },
    {
        icon: Handshake,
        title: 'Collaboration',
        description: 'We believe in the power of teamwork and work closely with our clients to achieve shared success.'
    },
    {
        icon: Diamond,
        title: 'Quality',
        description: 'We maintain the highest standards in everything we do, ensuring exceptional results every time.'
    },
    {
        icon: Target,
        title: 'Results-Driven',
        description: 'We focus on delivering measurable outcomes that drive real business growth and success.'
    },
    {
        icon: Star,
        title: 'Creativity',
        description: 'We combine artistic vision with technical expertise to create truly remarkable experiences.'
    },
    {
        icon: Zap,
        title: 'Efficiency',
        description: 'We optimize processes and leverage automation to deliver projects faster and more effectively.'
    }
]

const Values = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                <ScrollAnimationWrapper>
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-2 sm:mb-3 lg:mb-4">Our Values</p>
                        <TextReveal className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 sm:mb-4 lg:mb-6 leading-tight" stagger={0.05}>
                            What <span className="text-purple-500 font-medium">Drives</span> Us Forward
                        </TextReveal>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
                            Our core values shape everything we do and guide our relationships with clients and partners.
                        </p>
                    </div>
                </ScrollAnimationWrapper>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {values.map((value, index) => (
                        <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
                                <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <value.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400" />
                                </div>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3 lg:mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base">
                                    {value.description}
                                </p>
                            </div>
                        </ScrollAnimationWrapper>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Values
