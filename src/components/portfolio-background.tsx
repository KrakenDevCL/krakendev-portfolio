import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { certifications, education } from '@/lib/data';
import { englishCertifications, englishEducation } from '@/lib/english-data';

export function PortfolioCV({ language = 'es' }: { language?: 'es' | 'en' }) {
  const en = language === 'en';
  return <section id="cv" className="border-y bg-muted/30 scroll-mt-20"><div className="container section-space flex flex-wrap items-center justify-between gap-6"><div><p className="section-kicker">06 / {en ? 'RESUME' : 'CURRÍCULUM'}</p><h2 className="mt-3 font-headline text-3xl font-bold">{en ? 'Experience, in one place.' : 'Mi trayectoria, en un solo lugar.'}</h2><p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{en ? 'Explore a single-column resume and save it as a PDF.' : 'Consulta mi experiencia y formación en un CV de una columna que puedes guardar como PDF.'}</p></div><Button asChild size="lg"><Link href={en ? '/en/cv' : '/cv'}>{en ? 'View resume' : 'Ver currículum'} ↗</Link></Button></div></section>;
}

export function PortfolioEducation({ language = 'es' }: { language?: 'es' | 'en' }) {
  const en = language === 'en';
  const entries = en ? englishEducation : education;
  return <section id="education" className="container section-space scroll-mt-20"><div className="section-heading"><div><p className="section-kicker">07 / {en ? 'EDUCATION' : 'FORMACIÓN'}</p><h2 className="section-title">{en ? 'Always' : 'Aprendizaje'}<br /><span className="text-primary">{en ? 'learning.' : 'continuo.'}</span></h2></div><p className="section-intro">{en ? 'Academic foundations and ongoing technical training.' : 'Formación académica y aprendizaje técnico continuo.'}</p></div><div className="grid gap-3 md:grid-cols-2">{entries.map(item => <article key={item.title} className="project-row items-start"><div><p className="section-kicker">{item.date}</p><h3 className="mt-3 font-headline text-xl font-bold">{item.title}</h3><p className="mt-1 text-sm font-medium">{item.institution}</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p></div></article>)}</div></section>;
}

export function PortfolioCertifications({ language = 'es' }: { language?: 'es' | 'en' }) {
  const en = language === 'en';
  const groups = en ? englishCertifications : certifications;
  return <section id="certifications" className="border-y bg-muted/30 scroll-mt-20"><div className="container section-space"><div className="section-heading"><div><p className="section-kicker">08 / {en ? 'CERTIFICATIONS' : 'CERTIFICACIONES'}</p><h2 className="section-title">{en ? 'Skills backed' : 'Conocimiento'}<br /><span className="text-primary">{en ? 'by learning.' : 'en evolución.'}</span></h2></div><p className="section-intro">{en ? 'Official certifications and professional training.' : 'Certificaciones oficiales y formación profesional.'}</p></div><div className="grid gap-3 md:grid-cols-2">{groups.map((group, index) => <details key={group.category} open={index === 0} className="rounded-xl border bg-card p-5"><summary className="cursor-pointer font-headline text-lg font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">{group.category}</summary><ul className="mt-5 space-y-4">{group.items.map(item => <li key={item.title} className="border-t pt-3 text-sm"><p className="font-medium">{item.title}</p><p className="mt-1 text-muted-foreground">{item.issuer} · {en ? item.date === 'Certificación' ? 'Certification' : item.date.replace('Ago','Aug').replace('Abr','Apr').replace('Dic','Dec').replace('Ene','Jan') : item.date}</p></li>)}</ul></details>)}</div></div></section>;
}
