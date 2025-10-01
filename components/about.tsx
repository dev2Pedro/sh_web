"use client";

import { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const features = [
  "Anos de experiência no mercado",
  "Preços justos e competitivos",
  "Atendimento rápido e profissional",
  "Compromisso com a sustentabilidade",
];

const images = [
  "/img/computadores.jpeg",
  "/img/comeias.jpeg",
  "/img/cabos.jpeg",
  "/img/ars.jpeg",
  "/img/cabos2.jpeg",
];

export function About() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();

  const onSelect = () => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  };

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Carousel */}
          <div className="relative">
            <div
              className="overflow-hidden rounded-2xl shadow-2xl"
              ref={emblaRef}
            >
              <div className="flex">
                {images.map((src, index) => (
                  <div key={index} className="flex-none w-full">
                    <Image
                      src={src}
                      alt={`Imagem ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Sobre Nós
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              Referência em reciclagem e transporte
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A <strong>Sucatinha da Hora SH</strong> é uma empresa
              especializada na compra e venda de sucatas metálicas, além de
              oferecer serviços completos de frete e transporte. Atuamos com
              transparência, agilidade e compromisso ambiental.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Trabalhamos com diversos tipos de materiais: cobre, alumínio,
              ferro, aço, eletrônicos, móveis usados e muito mais. Nossa missão
              é facilitar o processo de reciclagem e contribuir para um planeta
              mais sustentável.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-dark font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
