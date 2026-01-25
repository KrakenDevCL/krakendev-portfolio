import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { skills, developerProfile } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const devPhoto = PlaceHolderImages.find(p => p.id === 'developer-photo');

  return (
    <section id="about" className="bg-muted/50 py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          <div className="flex justify-center lg:col-span-2">
            {devPhoto && (
              <Image
                src={devPhoto.imageUrl}
                alt={devPhoto.description}
                width={400}
                height={400}
                className="aspect-square w-full max-w-[300px] rounded-full object-cover shadow-lg lg:max-w-none"
                data-ai-hint={devPhoto.imageHint}
              />
            )}
          </div>
          <div className="space-y-8 lg:col-span-3">
            <div>
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Sobre <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mí</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">{developerProfile.bio}</p>
            </div>

            <div className="space-y-6">
                <h3 className="font-headline text-2xl font-semibold">Especializaciones</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {developerProfile.specializations.map((spec, index) => (
                    <div key={index} className="rounded-lg border bg-card p-4">
                        <h4 className="font-semibold text-primary">{spec.title}</h4>
                        <p className="mt-2 text-sm text-muted-foreground">{spec.description}</p>
                    </div>
                    ))}
                </div>
            </div>

             <div className="space-y-4">
              <h3 className="font-headline text-2xl font-semibold">Competencias Clave</h3>
              <ul className="space-y-3">
                {developerProfile.keyCompetencies.map((comp, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <span className="font-semibold">{comp.title}:</span>{' '}
                      <span className="text-muted-foreground">{comp.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="italic text-muted-foreground">{developerProfile.motivation}</p>

            <div className="space-y-3">
              <h3 className="font-headline text-2xl font-semibold">🛠 Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
