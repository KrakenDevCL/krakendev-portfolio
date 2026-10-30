import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { developerProfile } from '@/lib/data';
import { Github, Linkedin } from 'lucide-react';

export function Hero() {
  const heroVisual = PlaceHolderImages.find(p => p.id === 'hero-visual');

  return (
    <section className="container grid items-center gap-10 py-20 md:py-32 lg:grid-cols-2">
      <div className="space-y-6 text-center lg:text-start">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">IA aplicada · Agentes · Ingeniería backend</p>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            <span className="block">AI & Backend</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Engineer
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground lg:mx-0">
            Soy {developerProfile.name}. Diseño agentes e integraciones con LLM, y desarrollo soluciones backend con foco en automatización, evidencia y calidad de software.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 lg:justify-start" aria-label="Especialidades principales">
          {['Agentes de IA & RAG', 'Python & LangGraph', 'Java & Spring Boot', 'Oracle Cloud'].map(item => <span key={item} className="rounded-full border bg-card px-3 py-1 text-sm text-muted-foreground">{item}</span>)}
        </div>
        <div className="grid grid-cols-3 gap-3 rounded-xl border bg-card/50 p-4 text-center text-xs sm:text-sm lg:text-left">
          <Link href="/#projects" className="font-medium transition-colors hover:text-primary">IA aplicada<br /><span className="font-normal text-muted-foreground">Agentes y RAG</span></Link>
          <Link href="/#experience" className="font-medium transition-colors hover:text-primary">Backend<br /><span className="font-normal text-muted-foreground">APIs y datos</span></Link>
          <Link href="/#experience" className="font-medium transition-colors hover:text-primary">Experiencia<br /><span className="font-normal text-muted-foreground">Desde 2021</span></Link>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <Button asChild size="lg">
            <Link href="#projects">Ver Mi Trabajo</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Ponte en Contacto</Link>
          </Button>
        </div>
        <div className="flex justify-center gap-4 lg:justify-start">
            <Link href="https://github.com/krakendevcl" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="ghost" size="icon">
                    <Github className="h-6 w-6" />
                </Button>
            </Link>
             <Link href="https://www.linkedin.com/in/krakendevcl/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon">
                    <Linkedin className="h-6 w-6" />
                </Button>
            </Link>
        </div>
      </div>
      <div className="flex justify-center">
        {heroVisual && (
          <Image
            src={heroVisual.imageUrl}
            alt={heroVisual.description}
            width={800}
            height={600}
            className="rounded-lg object-cover shadow-2xl"
            data-ai-hint={heroVisual.imageHint}
          />
        )}
      </div>
    </section>
  );
}
