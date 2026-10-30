'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Loader2, Send, User, X } from 'lucide-react';
import { getChatbotResponse } from '@/lib/actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Message = {
  id: number;
  role: 'user' | 'bot';
  text: string;
  sources?: { id: string; title: string; href: string }[];
};

export function Chatbot() {
  const english = usePathname()?.startsWith('/en') ?? false;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: 1, role: 'bot', text: english ? 'Hello! I am José Antonio’s portfolio assistant. Ask me about his profile, projects or skills.' : '¡Hola! Soy el asistente virtual de José Antonio. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre su perfil, proyectos o habilidades.' }
      ]);
    }
  }, [isOpen, messages.length, english]);
  useEffect(() => { setMessages([]); }, [english]);
  
  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        viewport?.scrollTo({
            top: viewport.scrollHeight,
            behavior: 'smooth'
        });
    }
  }, [messages]);

  const ask = async (question: string) => {
    if (!question.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now(), role: 'user', text: question };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await getChatbotResponse(question, english ? 'en' : 'es');
      const botMessage: Message = { id: Date.now() + 1, role: 'bot', text: result.response, sources: result.sources };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = { id: Date.now() + 1, role: 'bot', text: english ? 'Something went wrong. Please try again.' : 'Lo siento, ocurrió un error. Por favor, intenta de nuevo.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); void ask(input); };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
        size="icon"
      >
        <Bot className="h-8 w-8" />
        <span className="sr-only">{english ? 'Open chatbot' : 'Abrir chatbot'}</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent lang={english ? 'en' : 'es'} className="flex h-[80vh] max-h-[700px] w-[90vw] max-w-lg flex-col p-0">
          <DialogHeader className="p-4 pb-2">
            <DialogTitle className="flex items-center gap-2 font-headline">
              <Bot className="h-6 w-6" /> {english ? 'Portfolio assistant' : 'Asistente Virtual'}
            </DialogTitle>
             <DialogDescription>
                {english ? 'Ask about experience, projects and technologies. Avoid sharing sensitive information.' : 'Pregúntame sobre experiencia, proyectos y tecnologías. Evita compartir información sensible.'}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-wrap gap-2 px-4 pb-2">{(english ? ['What AI projects has he built?', 'What is his experience?', 'What certifications does he have?'] : ['¿Qué proyectos de IA tiene?', '¿Cuál es su experiencia?', '¿Qué certificaciones tiene?']).map(question => <button key={question} type="button" onClick={() => void ask(question)} disabled={isLoading} className="rounded-full border px-3 py-1 text-left text-xs hover:bg-muted disabled:opacity-50">{question}</button>)}</div>
          <ScrollArea className="flex-1" ref={scrollAreaRef}>
             <div className="space-y-4 p-4">
              {messages.map(message => (
                <div key={message.id} className={cn('flex items-start gap-3', message.role === 'user' ? 'justify-end' : 'justify-start')}>
                  {message.role === 'bot' && (
                    <Avatar className="h-8 w-8">
                       <AvatarFallback><Bot size={20} /></AvatarFallback>
                    </Avatar>
                  )}
                  <div className={cn('max-w-[80%] rounded-lg px-4 py-2 text-sm', message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted')}>
                    <p>{message.text}</p>
                    {!!message.sources?.length && <div className="mt-3 border-t pt-2 text-xs"><p className="mb-1 font-semibold">{english ? 'Sections consulted' : 'Secciones consultadas'}</p><ul className="space-y-1">{message.sources.map(source => <li key={source.id}><Link href={source.href} onClick={() => setIsOpen(false)} className="underline underline-offset-4">{source.title}</Link></li>)}</ul></div>}
                  </div>
                   {message.role === 'user' && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback><User size={20} /></AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-start gap-3 justify-start">
                    <Avatar className="h-8 w-8">
                       <AvatarFallback><Bot size={20} /></AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-lg px-4 py-2 text-sm flex items-center">
                        <Loader2 className="h-5 w-5 animate-spin"/>
                    </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <DialogFooter className="border-t p-4">
            <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
              <Input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={english ? 'Type your question...' : 'Escribe tu pregunta...'}
                aria-label={english ? 'Question about the portfolio' : 'Pregunta sobre el portafolio'}
                maxLength={1000}
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
                <span className="sr-only">{english ? 'Send' : 'Enviar'}</span>
              </Button>
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
