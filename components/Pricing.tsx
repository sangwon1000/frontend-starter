'use client'

import { Check } from 'lucide-react'

const plans = [
    {
        name: 'Starter',
        price: '$49',
        description: 'Perfect for individual developers and small projects',
        features: [
            'Next.js 14 with TypeScript',
            'Tailwind CSS + DaisyUI',
            '30+ UI Components',
            'Authentication setup',
            'Database configuration',
            'Email templates',
            'SEO optimization',
            'Deployment guides'
        ],
        popular: false
    },
    {
        name: 'Pro',
        price: '$99',
        description: 'Everything you need for production applications',
        features: [
            'Everything in Starter',
            'Advanced components',
            'API route templates',
            'Testing setup',
            'Performance optimization',
            'Security best practices',
            'Priority support',
            'Custom branding'
        ],
        popular: true
    },
    {
        name: 'Enterprise',
        price: '$199',
        description: 'For teams and large-scale applications',
        features: [
            'Everything in Pro',
            'Team collaboration tools',
            'Advanced analytics',
            'Custom integrations',
            'White-label solution',
            'Dedicated support',
            'Training sessions',
            'Custom development'
        ],
        popular: false
    }
]

export default function Pricing() {
    return (
        <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Choose your plan
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Start building faster with our comprehensive starter kits. No hidden fees, cancel anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-lg shadow-sm border-2 p-8 relative ${plan.popular ? 'border-primary shadow-lg' : 'border-gray-200'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                                <p className="text-gray-600">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start">
                                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${plan.popular
                                        ? 'bg-primary text-white hover:bg-secondary'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                    }`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        All plans include lifetime updates and access to our community
                    </p>
                    <p className="text-sm text-gray-500">
                        Need a custom solution? <a href="#" className="text-primary hover:underline">Contact us</a>
                    </p>
                </div>
            </div>
        </section>
    )
} 