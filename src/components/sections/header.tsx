import Link from 'next/link';
import { CodeXml } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  const navLinks = [
    { href: '#about', label: 'Sobre Mí' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#cv', label: 'CV' },
    { href: '#education', label: 'Formación' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#certifications', label: 'Certificaciones' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between gap-2 px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="KrakenDevCL Home">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-headline text-base font-bold text-primary sm:text-xl">
            KrakenDevCL
          </span>
        </Link>
        
        <nav aria-label="Navegación principal" className="hidden items-center gap-5 text-sm xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/en" hrefLang="en" className="rounded-md border px-3 py-2 text-sm font-medium" aria-label="English version">EN</Link>
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="xl:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <SheetDescription className="sr-only">Secciones del portafolio</SheetDescription>
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2" aria-label="KrakenDevCL Home">
                  <CodeXml className="h-6 w-6 text-primary" />
                  <span className="font-headline text-xl font-bold text-primary">KrakenDevCL</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium text-foreground/70 transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
