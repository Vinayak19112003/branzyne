'use client'

import React from 'react'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import TextReveal from '@/components/TextReveal'
import Carousel3D from '../scroll'
import { User } from 'lucide-react'

const teamMembers = [
    {
        name: 'Alex Johnson',
        role: 'Creative Director',
        specialty: 'Brand Strategy & Design'
    },
    {
        name: 'Sarah Chen',
        role: 'Lead Developer',
        specialty: 'Full-Stack Development'
    },
    {
        name: 'Marcus Rodriguez',
        role: 'UX Designer',
        specialty: 'User Experience Design'
    },
    {
        name: 'Emily Davis',
        role: 'Project Manager',
        specialty: 'Client Relations & Strategy'
    },
    {
        name: 'David Kim',
        role: 'Marketing Specialist',
        specialty: 'Digital Marketing & Growth'
    },
    {
        name: 'Lisa Thompson',
        role: 'Content Creator',
        specialty: 'Content Strategy & Copywriting'
    }
]

const Team = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-gray-900">
            <div className="max-w-7xl mx-auto">
                <ScrollAnimationWrapper>
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-2 sm:mb-3 lg:mb-4">Meet Our Team</p>
                        <TextReveal className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 sm:mb-4 lg:mb-6 leading-tight" stagger={0.05}>
                            The <span className="text-purple-500 font-medium">Creative</span> Minds Behind It All
                        </TextReveal>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
                            Our diverse team of passionate professionals brings together expertise, creativity, and innovation to deliver exceptional results.
                        </p>
                    </div>
                </ScrollAnimationWrapper>

                {/* Team Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
                    {teamMembers.map((member, index) => (
                        <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{member.name}</h3>
                                <p className="text-purple-400 font-medium text-sm sm:text-base mb-1 sm:mb-2">{member.role}</p>
                                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{member.specialty}</p>
                            </div>
                        </ScrollAnimationWrapper>
                    ))}
                </div>

           

               
            </div>
        </section>
    )
}

export default Team
