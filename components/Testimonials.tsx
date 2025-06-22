'use client'

const testimonials = [
    {
        name: 'Alex Johnson',
        role: 'Full Stack Developer',
        company: 'TechStart Inc.',
        content: 'This starter kit is incredible! I went from idea to deployed app in just one weekend. The components are beautiful and the code is so clean.',
        avatar: '/avatars/alex.jpg'
    },
    {
        name: 'Maria Rodriguez',
        role: 'Frontend Developer',
        company: 'Design Studio',
        content: 'Finally, a starter kit that doesn\'t make me want to rewrite everything. The TypeScript setup is perfect and the UI components are exactly what I needed.',
        avatar: '/avatars/maria.jpg'
    },
    {
        name: 'David Kim',
        role: 'Solo Developer',
        company: 'Indie Hacker',
        content: 'I\'ve tried many starter kits, but this one is by far the best. The documentation is clear, the code is maintainable, and it saved me weeks of setup time.',
        avatar: '/avatars/david.jpg'
    },
    {
        name: 'Emma Wilson',
        role: 'Product Manager',
        company: 'StartupXYZ',
        content: 'Our team was able to prototype and ship our MVP in record time thanks to this starter kit. The developer experience is unmatched.',
        avatar: '/avatars/emma.jpg'
    },
    {
        name: 'James Chen',
        role: 'Lead Developer',
        company: 'Digital Agency',
        content: 'The best investment we made for our development workflow. Clean, modern, and production-ready from day one.',
        avatar: '/avatars/james.jpg'
    },
    {
        name: 'Lisa Thompson',
        role: 'Freelance Developer',
        company: 'Independent',
        content: 'This starter kit has everything I need to build professional applications quickly. The community support is amazing too!',
        avatar: '/avatars/lisa.jpg'
    }
]

export default function Testimonials() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Loved by developers worldwide
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Join thousands of developers who are building faster and better with our starter kit.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"{testimonial.content}"</p>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-16 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">500+</div>
                            <div className="text-gray-600">Happy Developers</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                            <div className="text-gray-600">Projects Built</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                            <div className="text-gray-600">Average Rating</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 