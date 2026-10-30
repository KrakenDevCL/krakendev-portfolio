import Link from 'next/link';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const links = [['About','/en#about'], ['Experience','/en#experience'], ['Resume','/en/cv'], ['Education','/en#education'], ['Projects','/en#projects'], ['Certifications','/en#certifications'], ['Blog','/en#blog'], ['Contact','/en#contact']];

export function EnglishHeader() {
  return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl"><div className="container flex h-16 items-center justify-between gap-2 px-4 sm:px-8"><Link href="/en" className="font-headline text-base font-bold text-primary sm:text-xl">KrakenDevCL</Link><nav aria-label="Main navigation" className="hidden items-center gap-4 text-sm xl:flex">{links.map(([label, href]) => <Link key={href} href={href} className="text-foreground/70 hover:text-foreground">{label}</Link>)}</nav><div className="flex items-center gap-2"><Link href="/" hrefLang="es" className="rounded-md border px-3 py-2 text-sm font-medium" aria-label="Versión en español">ES</Link><ThemeToggle /><Sheet><SheetTrigger asChild><Button variant="outline" size="icon" className="xl:hidden"><Menu className="h-5 w-5" /><span className="sr-only">Open navigation menu</span></Button></SheetTrigger><SheetContent side="right" lang="en"><SheetTitle>Navigation</SheetTitle><SheetDescription>Explore the portfolio</SheetDescription><nav aria-label="Mobile navigation" className="mt-6 flex flex-col gap-4">{links.map(([label, href]) => <SheetClose asChild key={href}><Link href={href} className="text-lg text-foreground/80">{label}</Link></SheetClose>)}</nav></SheetContent></Sheet></div></div></header>;
}
