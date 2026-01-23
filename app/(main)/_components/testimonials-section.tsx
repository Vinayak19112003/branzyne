'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import TextReveal from '@/components/TextReveal'

const testimonials = [
    {
        quote: 'Branzyne transformed our digital presence completely. Their automation tools have saved us countless hours and significantly improved our efficiency.',
        name: 'James Cameron',
        title: 'CEO at Googleapps',
        avatar: '👤'
    },
    {
        quote: 'Working with Branzyne has been an exceptional experience. Their team is professional, creative, and always delivers beyond expectations.',
        name: 'Sophia Martinez',
        title: 'Operations Manager at Novel Up',
        avatar: '👤'
    },
    {
        quote: 'The results speak for themselves. Our business has grown exponentially since partnering with Branzyne. Highly recommended!',
        name: 'David Reynolds',
        title: 'CEO at Santona',
        avatar: '👤'
    },
    {
        quote: 'Branzyne\'s mobile app development exceeded our wildest dreams. The user experience is phenomenal and our customer engagement has skyrocketed.',
        name: 'Marcus Johnson',
        title: 'CTO at TechFlow Solutions',
        avatar: '👤'
    },
    {
        quote: 'Their branding and UI/UX design completely revolutionized our brand identity. We\'ve seen a 40% increase in user satisfaction since the redesign.',
        name: 'Elena Rodriguez',
        title: 'Creative Director at InnovateLabs',
        avatar: '👤'
    },
    {
        quote: 'Branzyne\'s seller account management has been a game-changer for our e-commerce business. Sales have increased by 65% in just six months.',
        name: 'Alex Chen',
        title: 'Founder at CommercePlus',
        avatar: '👤'
    }
]

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    // Check if mobile screen
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768) // md breakpoint
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => {
            window.removeEventListener('resize', checkMobile)
        }
    }, [])

    const testimonialsPerSlide = isMobile ? 1 : 3
    const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide)

    const startAutoScroll = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides)
        }, 10000) // 10 seconds
    }, [totalSlides])

    useEffect(() => {
        startAutoScroll()
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [startAutoScroll])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides)
        startAutoScroll() // Reset the timer
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
        startAutoScroll() // Reset the timer
    }

    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                <ScrollAnimationWrapper>
                    <div className="text-center mb-8 sm:mb-12 px-2 sm:px-0">
                        <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">Testimonials</p>
                        <TextReveal className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 leading-tight" stagger={0.05}>
                            <span className="text-purple-500 font-medium">Our Partners</span> find Numerous Reasons to Love us.
                        </TextReveal>
                        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
                            Real business, real results, real reviews.
                        </p>
                    </div>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper delay={0.2}>
                    <div className="relative overflow-hidden mb-8">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {Array.from({ length: totalSlides }, (_, slideIndex) => (
                                <div
                                    key={`slide-${slideIndex}`}
                                    className={`w-full flex-shrink-0 grid gap-4 sm:gap-6 lg:gap-8 pr-4 sm:pr-8 ${
                                        isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'
                                    }`}
                                >
                                    {testimonials
                                        .slice(slideIndex * testimonialsPerSlide, (slideIndex + 1) * testimonialsPerSlide)
                                        .map((testimonial, index) => (
                                            <div
                                                key={`slide-${slideIndex}-${index}`}
                                                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 lg:p-8"
                                            >
                                                <div className="flex mb-3 sm:mb-4">
                                                    {[...Array(5)].map((_, i) => (
                                                        <span key={i} className="text-yellow-400 text-lg sm:text-xl">★</span>
                                                    ))}
                                                </div>
                                                <p className="text-gray-300 mb-4 sm:mb-6 italic text-sm sm:text-base leading-relaxed">
                                                    &ldquo;{testimonial.quote}&rdquo;
                                                </p>
                                                <div className="flex items-center gap-3 sm:gap-4">
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-600/30 flex items-center justify-center text-lg sm:text-2xl flex-shrink-0">
                                                        {testimonial.avatar}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-white font-medium text-sm sm:text-base truncate">{testimonial.name}</p>
                                                        <p className="text-gray-400 text-xs sm:text-sm truncate">{testimonial.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper delay={0.4}>
                    <div className="flex items-center justify-center gap-3 sm:gap-4 px-4">
                        <button
                            onClick={prevSlide}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-700 hover:border-purple-500 flex items-center justify-center text-white transition-colors text-sm sm:text-base"
                        >
                            ←
                        </button>
                        <div className="flex gap-2">
                            {Array.from({ length: totalSlides }, (_, index) => (
                                <div
                                    key={index}
                                    className={`h-1 rounded-full transition-all ${
                                        index === currentIndex ? 'w-6 sm:w-8 bg-purple-500' : 'w-2 bg-gray-700'
                                    }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextSlide}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-700 hover:border-purple-500 flex items-center justify-center text-white transition-colors text-sm sm:text-base"
                        >
                            →
                        </button>
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </section>
    )
}

export default TestimonialsSection

