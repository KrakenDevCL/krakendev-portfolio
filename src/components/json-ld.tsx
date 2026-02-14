import React from 'react'
import { developerProfile } from '@/lib/data'

export function JsonLd() {
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: developerProfile.name,
        jobTitle: 'Software Developer',
        url: 'https://krakendev-portfolio.vercel.app',
        description: developerProfile.bio,
        sameAs: [
            'https://github.com/KrakenDevCL',
            // Add other social links if available in data.ts
        ],
    }

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'KrakenDevCL Portfolio',
        url: 'https://krakendev-portfolio.vercel.app',
        description: 'Portafolio de José Antonio Gallegos Carvallo, Desarrollador de Software.',
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify([personSchema, websiteSchema]),
            }}
        />
    )
}
