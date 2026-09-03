"use client";

import { useState } from "react";
import { FadeImage } from "@/components/FadeImage";
import { cn } from "@/lib/utils";

type GalleryImage = {
  src: string;
  alt: string;
};

type ProductImageGalleryProps = {
  images: GalleryImage[];
  initialSrc: string;
  alt: string;
};

export function ProductImageGallery({
  images,
  initialSrc,
  alt,
}: ProductImageGalleryProps) {
  const [activeSrc, setActiveSrc] = useState(initialSrc);
  const activeIndex = Math.max(
    0,
    images.findIndex((image) => image.src === activeSrc),
  );
  const showImage = (index: number) => {
    setActiveSrc(images[(index + images.length) % images.length].src);
  };

  return (
    <div className="flex min-w-0 flex-col-reverse gap-4 sm:flex-row">
      <div className="flex shrink-0 gap-2 overflow-x-auto pb-1 sm:max-h-[760px] sm:w-16 sm:flex-col sm:overflow-x-visible sm:overflow-y-auto sm:pb-0">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={cn(
              "relative aspect-[3/4] w-14 shrink-0 overflow-hidden border transition-colors sm:w-full",
              image.src === activeSrc ? "border-ink" : "border-transparent hover:border-mute",
            )}
            aria-label={`Показать изображение ${index + 1}`}
            aria-pressed={image.src === activeSrc}
            onClick={() => setActiveSrc(image.src)}
          >
            <img
              src={image.src}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <div className="relative aspect-[3/4] min-w-0 flex-1">
        <FadeImage
          src={activeSrc}
          alt={alt}
          fill
          priority
          zoomOnHover
          className="h-full w-full"
        />
        {images.length > 1 ? (
          <>
            <button
              type="button"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-paper/90 text-2xl text-ink transition-colors hover:bg-paper"
              aria-label="Предыдущее изображение"
              onClick={() => showImage(activeIndex - 1)}
            >
              ←
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-paper/90 text-2xl text-ink transition-colors hover:bg-paper"
              aria-label="Следующее изображение"
              onClick={() => showImage(activeIndex + 1)}
            >
              →
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
