'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
        question: 'What\'s included in the starter kit?',
        answer: 'Our starter kit includes Next.js 14 with TypeScript, Tailwind CSS, DaisyUI components, authentication setup, database configuration, email templates, SEO optimization, and comprehensive deployment guides.'
    },
    {
        question: 'Do I need to know TypeScript to use this?',
        answer: 'While TypeScript knowledge is helpful, our starter kit includes detailed documentation and examples that make it easy to get started even if you\'re new to TypeScript. The code is well-commented and follows best practices.'
    },
    {
        question: 'Can I use this for commercial projects?',
        answer: 'Absolutely! You can use our starter kit for any project, including commercial applications. There are no restrictions on usage - build as many projects as you want.'
    },
    {
        question: 'Do you provide support?',
        answer: 'Yes! We provide comprehensive documentation, a community Discord server, and priority support for Pro and Enterprise customers. We\'re here to help you succeed.'
    },
    {
        question: 'How often do you update the starter kit?',
        answer: 'We regularly update our starter kit with the latest technologies and best practices. All customers receive lifetime updates, so you\'ll always have access to the newest features and improvements.'
    },
    {
        question: 'Can I customize the design and branding?',
        answer: 'Of course! The starter kit is fully customizable. You can modify colors, fonts, components, and add your own branding. We provide clear documentation on how to customize every aspect.'
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600">
                        Everything you need to know about our starter kit
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4">
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        Still have questions? We're here to help!
                    </p>
                    <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-semibold">
                        Contact Support
                    </button>
                </div>
            </div>
        </section>
    )
} 