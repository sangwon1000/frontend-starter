'use client'

export default function Hero() {
    return (
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Build amazing websites
                    <br />
                    <span className="gradient-text">with style,</span>
                    <br />
                    not stress
                </h1>

                {/* Description */}
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    The ultimate NextJS starter kit with everything you need to create stunning web applications. Perfect for developers who want to ship fast with beautiful, modern designs.
                </p>

                {/* CTA Button */}
                <div className="mb-8">
                    <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-secondary transition-colors font-semibold text-lg">
                        GET STARTED
                    </button>
                </div>

                {/* Discount Badge */}
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    $50 off for the first 100 customers (25 left)
                </div>

                {/* Stats */}
                <div className="mt-12">
                    <p className="text-gray-600 text-lg">
                        <span className="font-semibold text-gray-900">500+</span> developers building faster
                    </p>
                </div>

                {/* Testimonial */}
                <div className="mt-8 max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 italic mb-4">
                        "This starter kit saved me hours of setup time. The components are beautiful and the code is clean!"
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div>
                            <p className="font-medium text-gray-900">Sarah Chen</p>
                            <p className="text-sm text-gray-600">Built awesome-app.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 