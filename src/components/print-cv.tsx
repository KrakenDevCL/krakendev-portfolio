'use client';
import { Button } from '@/components/ui/button';
export function PrintCV({ language = 'es' }: { language?: 'es' | 'en' }) { return <Button type="button" onClick={() => window.print()}>{language === 'en' ? 'Print or save as PDF' : 'Imprimir o guardar como PDF'}</Button>; }
