import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Blog } from '@/components/sections/blog';
import { Footer } from '@/components/sections/footer';
import { Certifications } from '@/components/sections/certifications';
import { Education } from '@/components/sections/education';
import { Contact } from '@/components/sections/contact';
import { CV } from '@/components/sections/cv';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <CV />
        <Education />
        <Projects />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
