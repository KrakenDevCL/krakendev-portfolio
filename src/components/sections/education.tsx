import { education } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="bg-muted/50 py-24 sm:py-32">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Mi <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Formación</span>
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">Mi trayectoria académica y de aprendizaje continuo.</p>
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {education.map((item, index) => (
            <div key={index} className="relative mb-10">
              <div className="absolute left-4 top-1.5 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background">
                 <GraduationCap className="h-4 w-4 text-primary" />
              </div>
              <div className="ml-12">
                <p className="mb-1 text-sm font-semibold text-primary">{item.date}</p>
                <Card className="transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{item.institution}</CardTitle>
                    <CardDescription>{item.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
