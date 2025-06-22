'use client'

import { Zap, Shield, Palette, Code, Rocket, Users } from 'lucide-react'

const features = [
    {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'Built with Next.js 14 and optimized for performance. Your apps will load in milliseconds.'
    },
    {
        icon: Shield,
        title: 'Production Ready',
        description: 'Includes authentication, database setup, and deployment configurations out of the box.'
    },
    {
        icon: Palette,
        title: 'Beautiful UI',
        description: 'Pre-built components with Tailwind CSS and DaisyUI for stunning, responsive designs.'
    },
    {
        icon: Code,
        title: 'Clean Code',
        description: 'TypeScript support with proper type definitions and modern development practices.'
    },
    {
        icon: Rocket,
        title: 'Quick Start',
        description: 'Get up and running in minutes with our comprehensive documentation and examples.'
    },
    {
        icon: Users,
        title: 'Community Driven',
        description: 'Join our community of developers building amazing projects together.'
    }
]

export default function Features() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Everything you need to build amazing apps
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Stop spending time on boilerplate code. Focus on what matters - building your product.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">Ready to start building?</p>
                    <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-semibold">
                        Get Started Now
                    </button>
                </div>
            </div>
        </section>
    )
} 