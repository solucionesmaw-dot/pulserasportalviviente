'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

interface Bracelet {
  id: string;
  title: string;
  chargedBy: string;
  features: string[];
  stone: string;
  price: string;
  imageId: string;
}

const bracelets: Bracelet[] = [
  {
    id: 'proteccion',
    title: 'PROTECCIÓN ENERGÉTICA',
    chargedBy: 'Cargadas desde la 5a Dimensión por Pachita',
    features: [
      'Repele malas vibras',
      'Quita ansiedad',
      'Quita ira y estados depresivos',
      'Da fuerza espiritual',
    ],
    stone: 'Piedra volcánica y obsidiana',
    price: '$900 MXN',
    imageId: 'bracelet-black',
  },
  {
    id: 'armonia',
    title: 'ARMONÍA Y EQUILIBRIO',
    chargedBy: 'Cargadas por NUMO & NIKOL, Seres estelares médicos de 9a dimensión de Sirio A y B',
    features: [
      'Armoniza y equilibra tus 7 campos astrales en situaciones de desequilibrio físico y emocional',
    ],
    stone: 'Piedra luna',
    price: '$1200 MXN',
    imageId: 'bracelet-white',
  },
  {
    id: 'abundancia-total',
    title: 'ACTIVA ABUNDANCIA EN TODOS LOS ASPECTOS',
    chargedBy: 'Cargadas para la abundancia',
    features: ['Dinero', 'Logros personales', 'Trabajo', 'Pareja'],
    stone: 'Agatha amarilla',
    price: '$1200 MXN',
    imageId: 'bracelet-yellow',
  },
  {
    id: 'proposito',
    title: 'CONECTA CON TU PROPÓSITO DE ALMA',
    chargedBy: 'Cargadas por Ashírion, Sekmeth y Enki desde la dim 14',
    features: [
      'Alinea tu mente con tu Yo Superior',
      'Ayuda a conectarte con tu propósito de alma',
      'Concentración, firmeza, decisión',
      'Muy energizante',
    ],
    stone: 'Jade y Obsidiana',
    price: '$2700 MXN',
    imageId: 'bracelet-brown-black',
  },
  {
    id: 'abundancia-financiera',
    title: 'ABUNDANCIA FINANCIERA',
    chargedBy: 'Cargadas por la Fuente, el Creador',
    features: [
      'Ayuda a reconectar tus fibras de ADN multidimensional original con la energía del dinero',
      'Reestablece tu consciencia de abundancia personal',
      'Rompe paradigmas ancestrales de escasez',
      'Trabaja en niveles multidimensionales muy profundos',
    ],
    stone: 'Agatha naranja',
    price: '$2900 MXN',
    imageId: 'bracelet-orange',
  },
];


export default function BraceletsPage() {

  const handleReservationClick = (bracelet: Bracelet) => {
    const phoneNumber = '528181139378'; // Replace with your WhatsApp number
    const message = `Hola, estoy interesado en la pulsera "${bracelet.title}" de ${bracelet.price}. ¡Gracias!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex min-h-screen flex-col bg-background font-body text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BraceletsSection bracelets={bracelets} onReserve={handleReservationClick} />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-foreground">
            Pulseras Cósmicas
          </span>
        </a>
        <Button asChild className="transition-all duration-300 hover:shadow-md hover:shadow-accent/30">
          <a href="#pulseras">Ver Pulseras</a>
        </Button>
      </div>
    </header>
  );
}

function HeroSection() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
    return (
        <section
        id="inicio"
        className="relative flex h-[60svh] min-h-[500px] w-full items-center justify-center bg-secondary/20 text-center"
        >
        {heroImage && (
            <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
            />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl animate-fade-in-up p-4">
            <h1 className="font-headline text-5xl font-bold tracking-tight text-white md:text-7xl">
            Pulseras Energéticas Cósmicas
            </h1>
            <p className="mt-4 text-lg text-gray-200 md:text-xl">
            Elaboradas artesanalmente y cargadas con códigos de alta vibración.
            </p>
        </div>
        </section>
  );
}

function BraceletsSection({ bracelets, onReserve }: { bracelets: Bracelet[], onReserve: (bracelet: Bracelet) => void }) {
  return (
    <section id="pulseras" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {bracelets.map((bracelet) => {
            const image = PlaceHolderImages.find(img => img.id === bracelet.imageId);
            return (
                <Card key={bracelet.id} className="flex flex-col overflow-hidden rounded-lg border-2 border-border/80 bg-card shadow-lg transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20">
                    {image && (
                    <div className="relative h-64 w-full">
                        <Image
                        src={image.imageUrl}
                        alt={bracelet.title}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover"
                        />
                    </div>
                    )}
                    <CardHeader>
                    <CardTitle className="font-headline text-xl text-card-foreground">{bracelet.title}</CardTitle>
                    <CardDescription className="text-sm italic">{bracelet.chargedBy}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <ul className="space-y-2">
                            {bracelet.features.map((feature, index) => (
                            <li key={index} className="flex items-start text-sm">
                                <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                                <span>{feature}</span>
                            </li>
                            ))}
                        </ul>
                        <p className="text-sm font-semibold">
                            <span className="text-muted-foreground">Material: </span>
                            {bracelet.stone}
                        </p>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4">
                        <p className="w-full text-center text-3xl font-bold text-primary">{bracelet.price}</p>
                        <Button
                            size="lg"
                            className="w-full"
                            onClick={() => onReserve(bracelet)}
                        >
                            Pedir por WhatsApp
                        </Button>
                    </CardFooter>
                </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
    return (
        <section id="sobre-nosotros" className="bg-secondary/50 py-16 md:py-24">
            <div className="container mx-auto max-w-4xl px-4 text-center">
                <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
                    Elaboración y Carga Energética
                </h2>
                <div className="mt-6 space-y-4 text-left text-muted-foreground md:text-lg">
                    <p>
                        Nuestras pulseras son elaboradas artesanalmente sobre criterios e indicaciones de los seres cósmicos que las cargan energéticamente. Después de fabricadas, las pulseras son introducidas al portal interdimensional de Astar Katar, donde cada ser cósmico carga sus pulseras con códigos geométricos específicos de altísima vibración para la finalidad que le quiere dar.
                    </p>
                    <p>
                        El efecto energético es permanente en las piedras y no requiere de limpieza o renovación. Por su fabricación artesanal las pulseras pueden tener ligeras variaciones de tamaño y configuración de las piedras, sin embargo, la energía de activación transmitida siempre es la misma.
                    </p>
                </div>
            </div>
        </section>
    );
}


function Footer() {
    return (
      <footer className="w-full bg-card py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pulseras Cósmicas. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  }
