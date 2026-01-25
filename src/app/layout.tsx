import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Chatbot } from '@/components/chatbot';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'KrakenDevCL | Desarrollador de Software',
  description: 'Portafolio de José Antonio Gallegos Carvallo, Desarrollador de Software (Backend & Low-Code).',
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
