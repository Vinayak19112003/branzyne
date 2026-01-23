'use client'

import { ChevronDownIcon } from 'lucide-react'
import React, { useState } from 'react'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import TextReveal from '@/components/TextReveal'

const faqs = [
    {
        question: 'How can AI Automation help my business?',
        answer: 'AI Automation can streamline your operations, reduce costs, increase productivity, and enable data-driven decision making. It automates repetitive tasks, allowing your team to focus on strategic initiatives.'
    },
    {
        question: 'What services do you offer?',
        answer: 'We offer comprehensive digital marketing services including branding, website development, mobile app development, UX/UI design, digital marketing, and seller account management.'
    },
    {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary based on scope and complexity. We typically deliver projects within 4-12 weeks, depending on the specific requirements and deliverables.'
    },
    {
        question: 'Do you provide ongoing support?',
        answer: 'Yes, we offer ongoing support and maintenance services to ensure your digital solutions continue to perform optimally and adapt to your evolving business needs.'
    }
]

const FAQsSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-4xl mx-auto">
                <ScrollAnimationWrapper>
                    <div className="text-center mb-8 sm:mb-12">
                        <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">FAQs</p>
                        <TextReveal className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4 sm:mb-6" stagger={0.05}>
                            <span className="text-purple-500 font-medium">We&apos;ve Got the Answers</span> You&apos;re Looking For.
                        </TextReveal>
                        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
                            Quick answers.
                        </p>
                    </div>
                </ScrollAnimationWrapper>

                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                            <div
                                className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between text-white hover:bg-gray-800/50 transition-colors duration-200"
                                >
                                    <span className="font-medium text-sm sm:text-base pr-2">{faq.question}</span>
                                    <span className={`text-xl sm:text-2xl transition-transform duration-300 ease-in-out flex-shrink-0`}>
                                        <ChevronDownIcon/>
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        openIndex === index
                                            ? 'max-h-96 opacity-100'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-800">
                                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimationWrapper>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQsSection

