import { CodeXml } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container flex flex-col items-center justify-center gap-4 py-8">
        <div className="flex items-center gap-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold text-primary">
            KrakenDevCL
          </span>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} José Antonio Gallegos Carvallo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
