'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getPersonalizedIntro } from '@/lib/actions';
import { developerProfile } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const introSchema = z.object({
  developerProfile: z.string().min(50, "El perfil de desarrollador debe tener al menos 50 caracteres."),
  employerProfile: z.string().min(50, "El perfil del empleador debe tener al menos 50 caracteres."),
});

type IntroFormValues = z.infer<typeof introSchema>;

export function PersonalizedIntro() {
  const [introduction, setIntroduction] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<IntroFormValues>({
    resolver: zodResolver(introSchema),
    defaultValues: {
      developerProfile: developerProfile.developerProfileForAI,
      employerProfile: '',
    },
  });

  async function onSubmit(data: IntroFormValues) {
    setIsLoading(true);
    setIntroduction('');
    try {
      const result = await getPersonalizedIntro(data);
      if(result.introduction) {
        setIntroduction(result.introduction);
      } else {
        throw new Error("Recibí una introducción vacía.");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Ocurrió un error inesperado.";
      toast({
        variant: 'destructive',
        title: 'Falló la Generación',
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-tool" className="bg-muted/50 py-24 sm:py-32">
      <div className="container">
        <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Introducción con <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">IA</span>
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
                Genera una introducción personalizada basada en el perfil de un empleador potencial.
            </p>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="developerProfile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-headline text-lg">Mi Perfil</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Pega aquí tus habilidades y experiencia..."
                            className="min-h-[200px] resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="employerProfile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-headline text-lg">Empleador / Descripción del Trabajo</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Pega la sección 'Sobre nosotros' del empleador o la descripción del trabajo..."
                            className="min-h-[200px] resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-center">
                    <Button type="submit" disabled={isLoading} size="lg">
                        {isLoading ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Sparkles className="mr-2 h-4 w-4" />
                        )}
                        Generar Introducción
                    </Button>
                </div>
              </form>
            </Form>

            {introduction && (
              <div className="mt-8">
                <h3 className="mb-4 font-headline text-xl font-semibold text-center">Tu Introducción Personalizada:</h3>
                <div className="rounded-lg border bg-background p-6">
                    <p className="whitespace-pre-wrap">{introduction}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
