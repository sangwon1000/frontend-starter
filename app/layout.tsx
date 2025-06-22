import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Front-end Starter - Modern Next.js Starter Kit',
    description: 'A modern, beautiful Next.js 14 starter kit for building amazing web applications with style and speed. Perfect for developers who want to ship fast with beautiful, modern designs.',
    keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'Starter Kit', 'Web Development', 'Frontend'],
    authors: [{ name: 'Front-end Starter Team' }],
    creator: 'Front-end Starter Team',
    publisher: 'Front-end Starter',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://frontend-starter.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Front-end Starter - Modern Next.js Starter Kit',
        description: 'A modern, beautiful Next.js 14 starter kit for building amazing web applications with style and speed.',
        url: 'https://frontend-starter.com',
        siteName: 'Front-end Starter',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Front-end Starter - Modern Next.js Starter Kit',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Front-end Starter - Modern Next.js Starter Kit',
        description: 'A modern, beautiful Next.js 14 starter kit for building amazing web applications with style and speed.',
        images: ['/og-image.png'],
        creator: '@frontend_starter',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Layout>{children}</Layout>
            </body>
        </html>
    )
} 