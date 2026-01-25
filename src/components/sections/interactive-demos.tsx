import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export function InteractiveDemos() {
  return (
    <section id="demos" className="bg-muted/50 py-24 sm:py-32">
        <div className="container">
            <div className="mb-12 text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Demos <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Interactivos</span>
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">Juega con sandboxes de código en vivo de mis proyectos.</p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Demo de Proyecto: Gestor de Tareas Ágil</CardTitle>
                    <CardDescription>A continuación se muestra una demostración interactiva incrustada desde StackBlitz.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video w-full overflow-hidden rounded-lg border">
                        <iframe
                            src="https://stackblitz.com/edit/react-ts-xuhchb?embed=1&file=App.tsx&theme=dark&view=preview"
                            className="h-full w-full"
                            title="Interactive React Demo"
                            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                        ></iframe>
                    </div>
                     <div className="mt-4 flex items-start gap-3 rounded-lg border bg-background p-4 text-sm">
                        <Lightbulb className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                        <p className="text-muted-foreground">
                            Este es un ejemplo de cómo se pueden incrustar demostraciones interactivas. Puedes mostrar una característica clave de tu aplicación aquí mismo en tu portafolio.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
