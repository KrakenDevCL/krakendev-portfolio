import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, ArrowUpRight, Workflow } from 'lucide-react';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function Projects() {
  return (
    <section id="projects" className="container py-24 sm:py-32">
      <div className="mb-12 text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          Proyectos <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Destacados</span>
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">Una selección de mi trabajo reciente.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => {
          const image = PlaceHolderImages.find(p => p.id === project.image);
          return (
            <Card key={project.title} className="flex transform flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              {project.caseStudyLink && !image && (
                <div className="flex h-48 flex-col justify-between border-b bg-gradient-to-br from-primary/20 via-background to-accent/20 p-6">
                  <div className="flex items-center justify-between text-primary">
                    <Workflow className="h-9 w-9" aria-hidden="true" />
                    <Badge variant="outline">Caso de estudio · Autoría propia</Badge>
                  </div>
                  <p className="font-headline text-2xl font-bold">Requisitos → Diseño → Word</p>
                  <p className="text-sm text-muted-foreground">Evidencia, automatización y criterio humano.</p>
                </div>
              )}
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover"
                  data-ai-hint={image.imageHint}
                />
              )}
              <CardHeader>
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 bg-muted/50 p-4">
                {!project.caseStudyLink && !project.githubLink && !project.liveLink && <span className="text-sm text-muted-foreground">Proyecto de aprendizaje</span>}
                {project.caseStudyLink && (
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={project.caseStudyLink}>
                      Ver caso de estudio <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {project.githubLink && (
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`GitHub for ${project.title}`}>
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                )}
                {project.liveLink && project.liveLink !== '#' && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`Live demo for ${project.title}`}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
