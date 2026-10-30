import Image from 'next/image';
import { developerProfile, skillGroups } from '@/lib/data';
import { englishProfile, englishSkills } from '@/lib/english-data';

export function PortfolioAbout({ language = 'es' }: { language?: 'es' | 'en' }) {
  const en = language === 'en';
  const specializations = en ? [
    { title: 'Applied AI and agents', description: 'LLM workflows, RAG and automation using Python, LangGraph, FAISS, n8n and MCP.' },
    { title: 'Backend and enterprise systems', description: 'APIs and integrations with Java, Spring Boot and SQL, supported by enterprise modernization experience.' },
  ] : developerProfile.specializations;
  const skills = en ? englishSkills.map(group => ({ title: group.title, skills: group.items })) : skillGroups;
  const competencies = en ? [
    { title: 'AI orchestration and integration', description: 'Connecting agents and language models with tools and information sources.' },
    { title: 'Backend engineering and cloud', description: 'API design, SQL optimization and certified Oracle Cloud fundamentals.' },
    { title: 'Quality and traceability', description: 'Automated checks, verifiable evidence and human review.' },
  ] : developerProfile.keyCompetencies;
  return <section id="about" className="border-y bg-muted/30 scroll-mt-20"><div className="container section-space"><div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><div><p className="section-kicker">04 / {en ? 'ABOUT' : 'SOBRE MÍ'}</p><h2 className="section-title">{en ? 'Engineering with' : 'Ingeniería con'}<br /><span className="text-primary">{en ? 'purpose.' : 'propósito.'}</span></h2><div className="mt-8 flex items-center gap-4"><Image src="/developer-photo.jpg" alt="José Antonio Gallegos Carvallo" width={400} height={400} sizes="80px" className="h-20 w-20 rounded-full border-2 border-primary/40 object-cover" /><div><p className="font-headline font-bold">José Antonio<br />Gallegos Carvallo</p><p className="mt-1 text-xs text-muted-foreground">AI & Backend Engineer</p></div></div></div><div><p className="text-lg leading-relaxed text-muted-foreground">{en ? englishProfile : developerProfile.bio}</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{specializations.map(item => <article key={item.title} className="rounded-xl border bg-card p-5"><h3 className="font-headline text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p></article>)}</div><h3 className="mt-9 font-headline text-xl font-bold">{en ? 'Core competencies' : 'Competencias clave'}</h3><ul className="mt-4 space-y-3">{competencies.map(item => <li key={item.title} className="flex gap-3 text-sm leading-relaxed"><span className="text-primary" aria-hidden="true">↗</span><span><strong>{item.title}.</strong> <span className="text-muted-foreground">{item.description}</span></span></li>)}</ul><h3 className="mt-9 font-headline text-xl font-bold">{en ? 'Technology stack' : 'Stack tecnológico'}</h3><div className="mt-4 grid gap-5 sm:grid-cols-2">{skills.map(group => <div key={group.title}><h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{group.title}</h4><div className="mt-2 flex flex-wrap gap-2">{group.skills.map(skill => <span key={skill} className="tech-pill">{skill}</span>)}</div></div>)}</div></div></div></div></section>;
}
