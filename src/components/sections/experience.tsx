import { experience } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  return (
    <section id="experience" className="container py-24 sm:py-32">
      <div className="mb-12 text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">Experiencia <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">profesional</span></h2>
        <p className="mt-2 text-lg text-muted-foreground">Desarrollo empresarial y soluciones backend.</p>
      </div>
      <div className="mx-auto grid max-w-4xl gap-6">
        {experience.map(item => (
          <article key={`${item.company}-${item.period}`} className="rounded-xl border bg-card p-6 sm:p-8">
            <p className="text-sm font-medium text-primary">{item.period}</p>
            <h3 className="mt-2 font-headline text-2xl font-bold">{item.title}</h3>
            <p className="mt-1 font-medium">{item.company} · Remoto</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{item.description}</p>
            {item.achievements.length > 0 && <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">{item.achievements.map(achievement => <li key={achievement}>{achievement}</li>)}</ul>}
            <div className="mt-6 flex flex-wrap gap-2">{item.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
