'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WallOfLove from '@/components/WallOfLove'

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <main className="min-h-screen bg-white">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Hero />
            <Features />
            <Testimonials />
            <Pricing />
            <FAQ />
            <WallOfLove />
            <Footer />
        </main>
    )
} 