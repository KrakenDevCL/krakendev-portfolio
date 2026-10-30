import { Header } from '@/components/sections/header';
import { PortfolioHero } from '@/components/portfolio-hero';
import { PortfolioAbout } from '@/components/portfolio-about';
import { PortfolioProjects } from '@/components/portfolio-projects';
import { PortfolioBlog } from '@/components/portfolio-blog';
import { Footer } from '@/components/sections/footer';
import { PortfolioCV, PortfolioEducation, PortfolioCertifications } from '@/components/portfolio-background';
import { Contact } from '@/components/sections/contact';
import { PortfolioExperience } from '@/components/portfolio-experience';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a href="#main-content" className="skip-link">Saltar al contenido</a>
      <Header />
      <main id="main-content" className="flex-1">
        <PortfolioHero />
        <PortfolioProjects />
        <PortfolioAbout />
        <PortfolioExperience />
        <PortfolioCV />
        <PortfolioEducation />
        <PortfolioCertifications />
        <PortfolioBlog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
