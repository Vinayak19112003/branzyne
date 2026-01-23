'use client'

import React, { useState } from 'react'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import TextReveal from '@/components/TextReveal'
import GradientText from '@/components/GradientText'
import { motion } from 'motion/react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        projectDetails: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        // Reset form after submission
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            company: '',
            projectDetails: ''
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-4xl mx-auto">
                <ScrollAnimationWrapper className="text-center mb-12">
                    <TextReveal className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6" stagger={0.05}>
                        Tell us about your <GradientText className="font-medium">project</GradientText>
                    </TextReveal>
                    <ScrollAnimationWrapper delay={0.3}>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Fill out the form below and our team will get back to you as soon as possible.
                        </p>
                    </ScrollAnimationWrapper>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper delay={0.2}>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <ScrollAnimationWrapper delay={0.4} direction="up">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileFocus={{ scale: 1.02 }}
                                >
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-4 bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 hover:border-purple-400/50 backdrop-blur-sm"
                                        required
                                    />
                                </motion.div>
                            </ScrollAnimationWrapper>
                            <ScrollAnimationWrapper delay={0.5} direction="up">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileFocus={{ scale: 1.02 }}
                                >
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-4 bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 hover:border-purple-400/50 backdrop-blur-sm"
                                        required
                                    />
                                </motion.div>
                            </ScrollAnimationWrapper>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <ScrollAnimationWrapper delay={0.6} direction="up">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileFocus={{ scale: 1.02 }}
                                >
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-4 bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 hover:border-purple-400/50 backdrop-blur-sm"
                                    />
                                </motion.div>
                            </ScrollAnimationWrapper>
                            <ScrollAnimationWrapper delay={0.7} direction="up">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileFocus={{ scale: 1.02 }}
                                >
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company name"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-4 bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 hover:border-purple-400/50 backdrop-blur-sm"
                                    />
                                </motion.div>
                            </ScrollAnimationWrapper>
                        </div>
                        <ScrollAnimationWrapper delay={0.8} direction="up">
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                whileFocus={{ scale: 1.01 }}
                            >
                                <textarea
                                    name="projectDetails"
                                    placeholder="Tell us about your project details..."
                                    value={formData.projectDetails}
                                    onChange={handleChange}
                                    rows={8}
                                    className="w-full px-4 py-4 bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 hover:border-purple-400/50 backdrop-blur-sm resize-none"
                                    required
                                />
                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper delay={0.9} direction="up">
                            <div className="flex justify-center sm:justify-start">
                                <motion.button
                                    type="submit"
                                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Submit Inquiry
                                        <motion.span
                                            className="group-hover:translate-x-1 transition-transform duration-300"
                                        >
                                            →
                                        </motion.span>
                                    </span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                        initial={false}
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />
                                </motion.button>
                            </div>
                        </ScrollAnimationWrapper>
                    </form>
                </ScrollAnimationWrapper>
            </div>
        </section>
    )
}

export default ContactForm


