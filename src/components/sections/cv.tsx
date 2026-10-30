import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

export function CV() {
  return (
    <section id="cv" className="py-24 sm:py-32">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          Mi <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Currículum</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Revisa mi experiencia, proyectos y formación en una versión actualizada que puedes guardar como PDF.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/cv">
              <Download className="mr-2 h-5 w-5" />
              Ver currículum
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
