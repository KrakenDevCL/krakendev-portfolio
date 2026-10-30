import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PortfolioHero({ language = 'es' }: { language?: 'es' | 'en' }) {
  const en = language === 'en';
  const base = en ? '/en' : '/';
  return <section className="portfolio-hero overflow-hidden" aria-labelledby="hero-title">
    <div className="container relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-32">
      <div className="relative z-10 max-w-2xl">
        <p className="section-kicker"><span className="kicker-dot" /> {en ? 'Applied AI · Backend engineering' : 'IA aplicada · Ingeniería backend'}</p>
        <p className="mt-7 text-lg font-medium text-foreground/80">José Antonio Gallegos Carvallo</p>
        <h1 id="hero-title" className="mt-3 font-headline text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">AI & Backend<br /><span className="hero-highlight">Engineer.</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{en ? 'I design AI agents and LLM integrations and build backend solutions grounded in evidence, automation and software quality.' : 'Diseño agentes e integraciones con LLM y desarrollo soluciones backend con foco en automatización, evidencia y calidad de software.'}</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link href={`${base}#projects`}>{en ? 'Explore projects' : 'Explorar proyectos'} <ArrowRight className="ml-1 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link href={`${base}#contact`}>{en ? 'Get in touch' : 'Conversemos'}</Link></Button></div>
        <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t pt-5 text-sm text-muted-foreground"><span>{en ? 'Engineering since 2021' : 'Ingeniería desde 2021'}</span><span aria-hidden="true">/</span><span>Python · Java · RAG · OCI</span><div className="ml-auto flex items-center gap-4"><a href="https://github.com/KrakenDevCL" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary"><Github className="h-5 w-5" /></a><a href="https://www.linkedin.com/in/krakendevcl/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-5 w-5" /></a></div></div>
      </div>
      <div className="hero-art-shell relative mx-auto w-full max-w-2xl"><div className="hero-art-top"><span><i /> <i /> <i /></span><span>KRAKENDEV / AI + BACKEND</span><span>01 — 03</span></div><Image src="/hero-kraken-ai.webp" alt={en ? 'A robotic kraken and developer at a workstation' : 'Un kraken robótico y un desarrollador en su estación de trabajo'} width={1699} height={926} sizes="(max-width: 1023px) 90vw, 45vw" priority className="aspect-[1.68] w-full object-cover" /><div className="hero-art-bottom"><span>{en ? 'Building with intelligence' : 'Construyendo con inteligencia'}</span><span className="text-primary">● {en ? 'CASE STUDIES' : 'CASOS DE ESTUDIO'}</span></div></div>
    </div>
  </section>;
}
