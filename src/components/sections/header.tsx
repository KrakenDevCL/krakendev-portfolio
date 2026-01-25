import Link from 'next/link';
import { CodeXml } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  const navLinks = [
    { href: '#about', label: 'Sobre Mí' },
    { href: '#cv', label: 'CV' },
    { href: '#education', label: 'Formación' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#certifications', label: 'Certificaciones' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="KrakenDevCL Home">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">
            KrakenDevCL
          </span>
        </Link>
        
        <nav className="hidden items-center gap-6 text-sm md:flex">
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
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
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
