import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ArrowLeft } from 'lucide-react';

const renderContent = (content: any[]) => {
  return content.map((item, index) => {
    switch (item.type) {
      case 'paragraph':
        return <p key={index} className="mb-4 text-muted-foreground leading-relaxed">{item.text}</p>;
      case 'heading':
        return <h3 key={index} className="font-headline text-2xl font-bold mt-8 mb-4">{item.text}</h3>;
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-4 pl-4 text-muted-foreground">
            {item.items.map((li: string, i: number) => <li key={i}>{li}</li>)}
          </ul>
        );
      default:
        return null;
    }
  });
};

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Post No Encontrado',
    }
  }
 
  return {
    title: `${post.title} | Blog`,
    description: post.summary,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find(p => p.id === post.image);

  return (
    <div className="container py-24 sm:py-32">
        <div className="mb-8">
            <Button asChild variant="ghost">
                <Link href="/#blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al Blog
                </Link>
            </Button>
        </div>
        <article className="mx-auto max-w-4xl">
            <Card className="overflow-hidden">
                {image && (
                    <div className="relative w-full aspect-[16/9]">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                    />
                    </div>
                )}
                <CardHeader className="text-center p-8">
                    <CardDescription>{post.date}</CardDescription>
                    <CardTitle className="font-headline text-3xl md:text-4xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 md:px-8 py-6">
                    {renderContent(post.content)}
                </CardContent>
                <CardFooter className="flex justify-center p-6 bg-muted/50">
                    <Button asChild>
                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Ver Implementación en GitHub
                        </a>
                    </Button>
                </CardFooter>
            </Card>
        </article>
    </div>
  );
}
