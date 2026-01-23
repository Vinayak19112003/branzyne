'use client'

import React from 'react'
import Link from 'next/link'
import Logo from '@/component/logo-dark'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-800 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Mobile Layout */}
                <div className="block md:hidden">
                    {/* Logo and Form Section - Full Width */}
                    <ScrollAnimationWrapper delay={0.1}>
                        <div className="mb-6">
                            <Logo />
                            <p className="text-gray-400 mt-3 mb-4 text-sm">
                                Automate Smarter, Optimize Faster, and Grow Stronger.
                            </p>
                            <div className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="email@email.com"
                                    className="w-full px-3 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors text-sm"
                                />
                                <button className="w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </ScrollAnimationWrapper>

                    {/* Links and Pages in One Row on Mobile */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <ScrollAnimationWrapper delay={0.2}>
                            <div>
                                <h3 className="text-white font-medium mb-3 text-base">Links</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                                            Portfolio
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                                            Testimonials
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </ScrollAnimationWrapper>

                        <ScrollAnimationWrapper delay={0.3}>
                            <div>
                                <h3 className="text-white font-medium mb-3 text-base">Pages</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a href="/home" className="text-gray-400 hover:text-purple-500 transition-colors">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about" className="text-gray-400 hover:text-purple-500 transition-colors">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/contact" className="text-gray-400 hover:text-purple-500 transition-colors">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </ScrollAnimationWrapper>
                    </div>

                    {/* Socials Section - Full Width with Horizontal Links */}
                    <ScrollAnimationWrapper delay={0.4}>
                        <div className="mb-6">
                            <h3 className="text-white font-medium mb-3 text-base">Socials</h3>
                            <ul className="flex flex-wrap gap-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </ScrollAnimationWrapper>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
                    <ScrollAnimationWrapper delay={0.1}>
                        <div>
                            <Logo />
                            <p className="text-gray-400 mt-4 mb-6 text-base">
                                Automate Smarter, Optimize Faster, and Grow Stronger.
                            </p>
                            <div className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="email@email.com"
                                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors text-base"
                                />
                                <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-base font-medium">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </ScrollAnimationWrapper>

                    <ScrollAnimationWrapper delay={0.2}>
                        <div>
                            <h3 className="text-white font-medium mb-4 text-lg">Links</h3>
                            <ul className="space-y-2 text-base">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                                        Testimonials
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </ScrollAnimationWrapper>

                    <ScrollAnimationWrapper delay={0.3}>
                        <div>
                            <h3 className="text-white font-medium mb-4 text-lg">Pages</h3>
                            <ul className="space-y-2 text-base">
                                <li>
                                    <Link href="/" className="text-gray-400 hover:text-purple-500 transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <a href="/about" className="text-gray-400 hover:text-purple-500 transition-colors">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-gray-400 hover:text-purple-500 transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </ScrollAnimationWrapper>

                    <ScrollAnimationWrapper delay={0.4}>
                        <div>
                            <h3 className="text-white font-medium mb-4 text-lg">Socials</h3>
                            <ul className="space-y-2 text-base">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </ScrollAnimationWrapper>
                </div>

                <div className="border-t border-gray-800 pt-6 md:pt-8 text-center">
                    <p className="text-gray-400 text-sm">© ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

