'use client'

import React from 'react'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { motion } from 'motion/react'

const InfoSection = () => {
    const contactInfo = [
        {
            title: 'Email',
            value: 'contact@branzyne.com',
            link: 'mailto:contact@branzyne.com',
            icon: '📧'
        },
        {
            title: 'Phone',
            value: '+1 (555) 123-4567',
            link: 'tel:+15551234567',
            icon: '📞'
        },
        {
            title: 'Address',
            value: '123 Business Street, City, State 12345',
            link: '#',
            icon: '📍'
        }
    ]

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <ScrollAnimationWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {contactInfo.map((info, index) => (
                            <ScrollAnimationWrapper
                                key={index}
                                delay={index * 0.1}
                                direction="up"
                                className="group"
                            >
                                <motion.div
                                    className="text-center md:text-left p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {info.icon}
                                    </div>
                                    <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-3 font-medium">
                                        {info.title}
                                    </h3>
                                    <a
                                        href={info.link}
                                        className="text-white text-lg hover:text-purple-400 transition-colors duration-300 font-medium group-hover:translate-x-1 inline-block transition-transform"
                                    >
                                        {info.value}
                                    </a>
                                </motion.div>
                            </ScrollAnimationWrapper>
                        ))}
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </section>
    )
}

export default InfoSection


