import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { certifications } from '@/lib/data';
import { Badge } from "@/components/ui/badge";

export function Certifications() {
  return (
    <section id="certifications" className="bg-muted/50 py-24 sm:py-32">
        <div className="container">
            <div className="mb-12 text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">
                    Licencias y <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Certificaciones</span>
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">Mi compromiso con el aprendizaje y desarrollo continuo.</p>
            </div>
            <div className="mx-auto max-w-3xl">
              <Accordion type="multiple" className="w-full" defaultValue={['item-0']}>
                {certifications.map((category, index) => (
                  <AccordionItem value={`item-${index}`} key={category.category}>
                    <AccordionTrigger className="text-left font-headline text-xl md:text-2xl hover:no-underline">
                      {category.category}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-4 pt-4">
                        {category.items.map((cert) => (
                           <li key={cert.title} className="rounded-lg border bg-card p-4 transition-shadow hover:shadow-md">
                              <h4 className="font-semibold text-primary">{cert.title}</h4>
                              <div className="mt-2 flex items-center justify-between">
                                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                                <Badge variant="secondary" className="text-xs">{cert.date}</Badge>
                              </div>
                           </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
        </div>
    </section>
  )
}
