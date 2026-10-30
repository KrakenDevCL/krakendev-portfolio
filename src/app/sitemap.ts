import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://krakendev-portfolio.vercel.app'

    // Blog posts URLs
    const blogUrls = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...blogUrls,
        ...['/en', '/en/cv', '/en/projects/ai-engineering', '/en/projects/hybrid-agent', '/en/projects/krakenhub-api', '/en/blog/spring-boot-3', '/proyectos/krakenhub-api'].map(path => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 })),
        { url: `${baseUrl}/cv`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        {
            url: `${baseUrl}/proyectos/agente-hibrido`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/proyectos/ingenieria-asistida-ia`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}
