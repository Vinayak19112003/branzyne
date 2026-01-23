'use client'

import React from 'react'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import TextReveal from '@/components/TextReveal'

const benefits = [
    {
        title: 'Increased Productivity',
        description: 'Gain actionable insights with AI-driven analytics to improve decision-making and strategy.'
    },
    {
        title: 'Cost Reduction',
        description: 'Automate repetitive tasks and reduce operational costs while maintaining quality standards.'
    },
    {
        title: 'Enhanced Efficiency',
        description: 'Streamline workflows and processes to achieve faster turnaround times and better results.'
    },
    {
        title: 'Scalable Solutions',
        description: 'Build systems that grow with your business, adapting to changing needs and demands.'
    },
    {
        title: 'Data-Driven Decisions',
        description: 'Leverage advanced analytics and insights to make informed strategic decisions.'
    },
    {
        title: '24/7 Automation',
        description: 'Keep your business running smoothly around the clock with intelligent automation systems.'
    }
]

const BenefitsSection = () => {
    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                <ScrollAnimationWrapper>
                    <div className="text-center mb-6 sm:mb-8 md:mb-12">
                        <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-2 sm:mb-3 md:mb-4">Why Choose Us</p>
                        <TextReveal className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-3 sm:mb-4 md:mb-6 leading-tight" stagger={0.05}>
                            <span className="text-purple-500 font-medium">The Key Benefits of AI</span> for Your Business Growth.
                        </TextReveal>
                        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-1 sm:px-2 md:px-0">
                            Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes.
                        </p>
                    </div>
                </ScrollAnimationWrapper>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => (
                        <ScrollAnimationWrapper key={index} delay={index * 0.1} direction={index % 2 === 0 ? 'up' : 'down'}>
                            <div
                                className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 hover:border-purple-500/30 transition-all duration-300 h-full min-h-[120px] sm:min-h-[140px] touch-manipulation"
                            >
                                <h3 className="text-base sm:text-lg md:text-xl font-medium text-white mb-2 sm:mb-3 md:mb-4 leading-snug">{benefit.title}</h3>
                                <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">{benefit.description}</p>
                            </div>
                        </ScrollAnimationWrapper>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BenefitsSection

