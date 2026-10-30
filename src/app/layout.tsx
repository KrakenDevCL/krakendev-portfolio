import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Chatbot } from '@/components/chatbot';
import { ThemeProvider } from '@/components/theme-provider';
import { JsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  metadataBase: new URL('https://krakendev-portfolio.vercel.app'),
  title: {
    default: 'KrakenDevCL | Desarrollador de Software',
    template: '%s | KrakenDevCL',
  },
  description: 'Portafolio de José Antonio Gallegos Carvallo: AI & Backend Engineer, agentes de IA, LLM, RAG e integraciones.',
  keywords: ['AI Engineer', 'Agentes de IA', 'LLM', 'RAG', 'Python', 'Backend', 'Java', 'Spring Boot', 'GeneXus', 'Chile'],
  authors: [{ name: 'José Antonio Gallegos Carvallo' }],
  creator: 'José Antonio Gallegos Carvallo',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://krakendev-portfolio.vercel.app',
    title: 'KrakenDevCL | Desarrollador de Software',
    description: 'Conoce mis proyectos y experiencia en backend, GeneXus e IA aplicada.',
    siteName: 'KrakenDevCL Portfolio',
    images: [
      {
        url: '/hero-kraken-ai.png',
        width: 1699,
        height: 926,
        alt: 'KrakenDevCL Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KrakenDevCL | Desarrollador de Software',
    description: 'Portafolio de José Antonio Gallegos Carvallo.',
    images: ['/hero-kraken-ai.png'],
  },
  verification: {
    google: '7c1f0bbbf5246e74',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
