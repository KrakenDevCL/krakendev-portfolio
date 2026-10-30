import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PrintCV } from '@/components/print-cv';
import { developerProfile, experience, projects, skillGroups } from '@/lib/data';

export const metadata: Metadata = { title: 'Currículum | AI & Backend Engineer', description: 'Experiencia, proyectos y formación de José Antonio Gallegos Carvallo.', alternates: { canonical: '/cv' } };

export default function ResumePage() {
  return <main className="cv-page mx-auto max-w-4xl break-words px-6 py-12 sm:px-10">
    <div className="cv-actions mb-10 flex flex-wrap items-center justify-between gap-4"><Link href="/#cv" className="inline-flex items-center text-sm font-medium hover:text-primary"><ArrowLeft className="mr-2 h-4 w-4" />Volver al portafolio</Link><div className="flex gap-3"><Link href="/en/cv" hrefLang="en" className="rounded-md border px-3 py-2 text-sm">EN</Link><PrintCV /></div></div>
    <header className="pb-4"><h1 className="text-3xl font-bold">{developerProfile.name}</h1><p className="mt-2 text-base font-semibold">AI Engineer | Backend Engineer</p><p className="mt-3 text-sm leading-relaxed">Correo: <a href="mailto:krakendev.cl@gmail.com">krakendev.cl@gmail.com</a><br />LinkedIn: <a href="https://www.linkedin.com/in/krakendevcl/">https://www.linkedin.com/in/krakendevcl/</a><br />GitHub: <a href="https://github.com/KrakenDevCL">https://github.com/KrakenDevCL</a><br />Portafolio: <a href="https://krakendev-portfolio.vercel.app/">https://krakendev-portfolio.vercel.app/</a></p></header>
    <section className="mt-5"><h2 className="text-lg font-bold">Perfil profesional</h2><p className="mt-2 text-sm leading-relaxed">{developerProfile.bio}</p></section>
    <section className="mt-5"><h2 className="text-lg font-bold">Experiencia profesional</h2><div className="mt-3 space-y-4">{experience.map(item => <article key={item.company} className="cv-block"><h3 className="text-sm font-bold">{item.title}</h3><p className="text-sm">{item.company} | {item.period} | Remoto</p><p className="mt-1 text-sm leading-relaxed">{item.description}</p>{item.achievements.length > 0 && <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed">{item.achievements.map(achievement => <li key={achievement}>{achievement}</li>)}</ul>}</article>)}</div></section>
    <section className="mt-5"><h2 className="text-lg font-bold">Proyectos</h2><div className="mt-3 space-y-3">{projects.slice(0, 2).map(project => <article key={project.title} className="cv-block"><h3 className="text-sm font-bold">{project.title}</h3><p className="mt-1 text-sm leading-relaxed">{project.description}</p><p className="mt-1 text-sm">Tecnologías: {project.techStack.join(', ')}</p></article>)}</div></section>
    <section className="mt-5"><h2 className="text-lg font-bold">Habilidades técnicas</h2><div className="mt-2 space-y-1">{skillGroups.map(group => <p key={group.title} className="text-sm leading-relaxed"><strong>{group.title}:</strong> {group.skills.join(', ')}</p>)}</div></section>
    <section className="mt-5"><h2 className="text-lg font-bold">Educación</h2><ul className="mt-2 space-y-1 text-sm leading-relaxed"><li>Licenciatura en Ingeniería Informática | Duoc UC | Titulado en 2022</li><li>Diplomado en Programación en Java | Politécnico de Colombia | 2023</li><li>Programa ONE, Tech Foundation, Advanced y Builder | Alura Latam y Oracle | 2025–2026</li></ul></section>
    <section className="mt-5"><h2 className="text-lg font-bold">Certificaciones</h2><ul className="mt-2 space-y-1 text-sm leading-relaxed"><li>Oracle Cloud Infrastructure AI Foundations Associate | Oracle | 2026</li><li>Oracle Cloud Infrastructure Foundations Associate | Oracle | 2026</li><li>WorkWithPlus Core Analyst | WorkWithPlus</li></ul></section>
    <section className="mt-5"><h2 className="text-lg font-bold">Idiomas</h2><p className="mt-2 text-sm">Inglés: C2 Proficient | EF SET</p></section>
    <p className="cv-actions mt-10 border-t pt-5 text-sm text-muted-foreground">Para descargar este currículum, usa «Imprimir o guardar como PDF» y selecciona la opción de guardar como PDF en tu navegador.</p>
  </main>;
}
