"use client";

import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

export function Carousel({ images }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((src, index) => (
          <div key={index} className="flex-none w-full">
            <Image src={src} alt={`Slide ${index}`} width={600} height={400} />
          </div>
        ))}
      </div>
    </div>
  );
}
