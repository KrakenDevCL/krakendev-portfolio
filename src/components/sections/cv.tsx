import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { cvUrl } from '@/lib/data';

export function CV() {
  return (
    <section id="cv" className="py-24 sm:py-32">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          Mi <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Currículum</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Si estás interesado en conocer más sobre mi trayectoria, puedes descargar mi CV completo aquí.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <a href={cvUrl} target="_blank" rel="noopener noreferrer" download="CV-Jose-Gallegos.pdf">
              <Download className="mr-2 h-5 w-5" />
              Descargar CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
