'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
    isMenuOpen: boolean
    setIsMenuOpen: (open: boolean) => void
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold gradient-text">Front-end Starter</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">
                            Pricing
                        </a>
                        <a href="#demo" className="text-gray-700 hover:text-primary transition-colors">
                            Demo
                        </a>
                        <a href="#wall-of-love" className="text-gray-700 hover:text-primary transition-colors">
                            Wall of love
                        </a>
                        <button className="text-gray-700 hover:text-primary transition-colors">
                            Press L to see the Leaderboards
                        </button>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors font-medium">
                            GET STARTED
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-primary transition-colors"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                            <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
                                Pricing
                            </a>
                            <a href="#demo" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
                                Demo
                            </a>
                            <a href="#wall-of-love" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
                                Wall of love
                            </a>
                            <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition-colors">
                                Press L to see the Leaderboards
                            </button>
                            <button className="block w-full mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors font-medium">
                                GET STARTED
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
} 