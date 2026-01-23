'use client'
import Hero from './_components/hero'
import AboutSection from './_components/about-section'
import ServicesSection from './_components/services-section'
import TestimonialsSection from './_components/testimonials-section'
import BenefitsSection from './_components/benefits-section'
import FAQsSection from './_components/faqs-section'
import ContactSection from './_components/contact-section'


export default function Home() {
  return (
    <div>

      <Hero />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <BenefitsSection />
      <FAQsSection />
      <ContactSection />

    </div>
  )
}