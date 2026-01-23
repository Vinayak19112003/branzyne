'use client'

import React, { useState } from 'react'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import TextReveal from '@/components/TextReveal'

const ContactSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        projectDetails: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="py-16 px-4 sm:py-20 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                    <ScrollAnimationWrapper direction="left">
                        <div className="text-center lg:text-left">
                            <TextReveal className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6" stagger={0.05}>
                                Tell us about your project
                            </TextReveal>
                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                                We will respond to you within 1-12 hours. We&apos;ll sign an NDA if very needed. Access to dedicated consultant specialists.
                            </p>
                        </div>
                    </ScrollAnimationWrapper>

                    <ScrollAnimationWrapper direction="right" delay={0.2}>
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 max-w-md mx-auto lg:mx-0">
                            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                                <div>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 sm:py-4 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors text-base"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 sm:py-4 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors text-base"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <textarea
                                    name="projectDetails"
                                    placeholder="Project details"
                                    value={formData.projectDetails}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 sm:py-4 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none text-base"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors text-base sm:text-lg min-h-[48px]"
                            >
                                Submit Inquiry →
                            </button>
                        </form>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </section>
    )
}

export default ContactSection

