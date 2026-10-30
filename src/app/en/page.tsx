import type { Metadata } from 'next';
import Link from 'next/link';
import { PortfolioHero } from '@/components/portfolio-hero';
import { PortfolioProjects } from '@/components/portfolio-projects';
import { PortfolioAbout } from '@/components/portfolio-about';
import { PortfolioExperience } from '@/components/portfolio-experience';
import { PortfolioCV, PortfolioEducation, PortfolioCertifications } from '@/components/portfolio-background';
import { PortfolioBlog } from '@/components/portfolio-blog';
import { EnglishHeader } from '@/components/english-header';
import { EnglishContact } from '@/components/english-contact';

export const metadata: Metadata = { title: 'AI & Backend Engineer', description: 'José Antonio Gallegos Carvallo: AI agents, backend engineering and enterprise integration.', alternates: { canonical: '/en', languages: { es: '/', en: '/en' } } };
export default function EnglishHome() {
  return <div lang="en" className="flex min-h-screen flex-col bg-background"><a href="#main-content" className="skip-link">Skip to content</a><EnglishHeader /><main id="main-content" className="flex-1">
    <PortfolioHero language="en" />
    <PortfolioProjects language="en" />
    <PortfolioAbout language="en" />
    <PortfolioExperience language="en" />
    <PortfolioCV language="en" />
    <PortfolioEducation language="en" />
    <PortfolioCertifications language="en" />
    <PortfolioBlog language="en" />
    <section id="contact" className="container max-w-3xl py-20"><div className="rounded-xl border bg-card p-6 sm:p-8"><h2 className="font-headline text-3xl font-bold">Get in touch</h2><p className="mt-3 text-muted-foreground">Have a project or opportunity in mind? Send a message, email <a className="underline" href="mailto:krakendev.cl@gmail.com">krakendev.cl@gmail.com</a> or connect on <a className="underline" href="https://www.linkedin.com/in/krakendevcl/">LinkedIn</a>.</p><EnglishContact /></div></section>
  </main><footer className="border-t bg-muted/50 py-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} José Antonio Gallegos Carvallo. All rights reserved.</footer></div>;
}
