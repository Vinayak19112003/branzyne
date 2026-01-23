'use client'

import React from 'react'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import TextReveal from '@/components/TextReveal'

const services = [
    {
        category: 'Creating identity for a Brand from Scratch',
        title: 'Branding',
        description: 'We create unique brand identities that resonate with your audience and stand out in the market.',
        icon: '🎯',
        hasButton: true
    },
    {
        category: 'E-commerce',
        title: 'Seller account management',
        description: 'Comprehensive management of your seller accounts across multiple platforms for maximum efficiency.',
        icon: '🛒',
        hasButton: false
    },
    {
        category: 'Creating identity for a Brand from Scratch',
        title: 'Website development',
        description: 'Modern, responsive websites that deliver exceptional user experiences and drive conversions.',
        icon: '💻',
        hasButton: true
    },
    {
        category: 'Creating identity for a Brand from Scratch',
        title: 'Digital marketing',
        description: 'Strategic digital marketing campaigns that boost your online presence and drive growth.',
        icon: '📈',
        hasButton: true
    },
    {
        category: 'Creating identity for a Brand from Scratch',
        title: 'Mobile app development',
        description: 'Native and cross-platform mobile applications that engage users and deliver results.',
        icon: '📱',
        hasButton: true
    },
    {
        category: 'Creating identity for a Brand from Scratch',
        title: 'UX / UI designing',
        description: 'Beautiful, intuitive designs that enhance user experience and drive engagement.',
        icon: '🎨',
        hasButton: true
    }
]

const ServicesSection = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                <ScrollAnimationWrapper>
                    <div className="text-center mb-12">
                        <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">Our Services</p>
                        <TextReveal className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6" stagger={0.05}>
                            <span className="text-purple-500 font-medium">Solutions</span> That Take Your Business to the Next Level.
                        </TextReveal>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            We design, develop, and implement automation tools that help you work smarter, not harder.
                        </p>
                    </div>
                </ScrollAnimationWrapper>

                <div className="space-y-12 sm:space-y-16 mb-8 sm:mb-12">
                    {services.map((service, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <ScrollAnimationWrapper key={index} delay={index * 0.1} direction={isEven ? 'left' : 'right'}>
                                <div
                                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 sm:gap-8 lg:gap-12`}
                                >
                                    {/* Animated Image Section */}
                                    <div className="flex-1 w-full lg:w-auto">
                                        <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-4 sm:p-6 lg:p-8 h-48 sm:h-64 lg:h-80 flex items-center justify-center border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group">
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="relative z-10 text-center">
                                                <div className="text-4xl sm:text-6xl lg:text-8xl mb-2 sm:mb-4 animate-pulse">{service.icon}</div>
                                                <div className="absolute inset-0 bg-purple-500/5 rounded-lg animate-ping"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-1 w-full lg:w-auto text-center lg:text-left">
                                        <p className="text-xs sm:text-sm text-purple-400 uppercase tracking-wider mb-3 sm:mb-4">{service.category}</p>
                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4 sm:mb-6">{service.title}</h3>
                                        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">{service.description}</p>
                                        {service.hasButton && (
                                            <button className="px-6 sm:px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                                                View More
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </ScrollAnimationWrapper>
                        );
                    })}
                </div>

                <ScrollAnimationWrapper delay={0.3}>
                    <div className="text-center">
                        <button className="px-6 sm:px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors text-sm sm:text-base">
                            See All Services
                        </button>
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </section>
    )
}

export default ServicesSection

