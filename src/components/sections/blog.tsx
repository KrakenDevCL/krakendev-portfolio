import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Blog() {
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <section id="blog" className="container py-24 sm:py-32">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            De Mi <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Aún no hay publicaciones en el blog.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="bg-muted/50 py-24 sm:py-32">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            De Mi <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">Mis pensamientos sobre código, diseño y todo lo demás.</p>
        </div>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8">
          {blogPosts.map(post => {
            const image = PlaceHolderImages.find(p => p.id === post.image);
            return (
              <Card key={post.slug} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl md:flex-row">
                {image && (
                  <div className="relative w-full md:w-2/5 aspect-[16/10] md:aspect-auto">
                    <Link href={`/blog/${post.slug}`} className="absolute inset-0">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    </Link>
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-between md:w-3/5">
                  <CardHeader>
                    <CardDescription>{post.date}</CardDescription>
                    <CardTitle className="font-headline text-2xl">
                      <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-primary/80">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{post.summary}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="ml-auto">
                      <Link href={`/blog/${post.slug}`}>
                        Leer más
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
