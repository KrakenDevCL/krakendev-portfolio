import { experience } from '@/lib/data';
import { englishExperience } from '@/lib/english-data';

export function PortfolioExperience({ language = 'es' }: { language?: 'es' | 'en' }) {
  const en = language === 'en';
  const entries = en ? englishExperience : experience;
  return <section id="experience" className="container section-space scroll-mt-20"><div className="section-heading"><div><p className="section-kicker">05 / {en ? 'EXPERIENCE' : 'EXPERIENCIA'}</p><h2 className="section-title">{en ? 'Built through' : 'Experiencia'}<br /><span className="text-primary">{en ? 'experience.' : 'en práctica.'}</span></h2></div><p className="section-intro">{en ? 'Enterprise systems, backend development and measurable improvements.' : 'Sistemas empresariales, desarrollo backend y mejoras medibles.'}</p></div><div className="divide-y border-y">{entries.map(item => <article key={item.company} className="grid gap-5 py-8 md:grid-cols-[.4fr_1fr] md:gap-10"><div><p className="text-sm font-semibold text-primary">{item.period}</p><p className="mt-2 text-sm text-muted-foreground">{en ? 'Remote' : 'Remoto'}</p></div><div><h3 className="font-headline text-2xl font-bold">{item.title}</h3><p className="mt-1 font-medium">{item.company}</p><p className="mt-4 leading-relaxed text-muted-foreground">{item.description}</p>{item.achievements.length > 0 && <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">{item.achievements.map(achievement => <li key={achievement}>{achievement}</li>)}</ul>}</div></article>)}</div></section>;
}
