'use client'

const testimonials = [
    {
        name: 'Alex Chen',
        role: 'Full Stack Developer',
        content: 'This starter kit is a game-changer! I built my entire SaaS in just 2 weeks. The code quality is exceptional.',
        rating: 5
    },
    {
        name: 'Sarah Johnson',
        role: 'Frontend Developer',
        content: 'Finally, a starter kit that doesn\'t make me want to rewrite everything. Clean, modern, and production-ready.',
        rating: 5
    },
    {
        name: 'Mike Rodriguez',
        role: 'Solo Developer',
        content: 'The best investment I made for my development workflow. Saved me weeks of setup time.',
        rating: 5
    },
    {
        name: 'Emma Wilson',
        role: 'Product Manager',
        content: 'Our team was able to prototype and ship our MVP in record time. The documentation is crystal clear.',
        rating: 5
    },
    {
        name: 'David Kim',
        role: 'Lead Developer',
        content: 'Incredible starter kit! The TypeScript setup is perfect and the components are exactly what I needed.',
        rating: 5
    },
    {
        name: 'Lisa Thompson',
        role: 'Freelance Developer',
        content: 'This has everything I need to build professional applications quickly. Highly recommended!',
        rating: 5
    },
    {
        name: 'James Brown',
        role: 'Startup Founder',
        content: 'Went from idea to deployed app in one weekend. The community support is amazing too!',
        rating: 5
    },
    {
        name: 'Maria Garcia',
        role: 'Backend Developer',
        content: 'Clean architecture, modern tech stack, and excellent developer experience. Worth every penny.',
        rating: 5
    }
]

export default function WallOfLove() {
    return (
        <section id="wall-of-love" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Wall of Love
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        See what developers are saying about our starter kit
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>

                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        Join hundreds of developers building amazing projects
                    </p>
                    <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-semibold">
                        Get Started Today
                    </button>
                </div>
            </div>
        </section>
    )
} 