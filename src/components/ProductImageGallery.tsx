"use client";

import { useEffect, useState } from "react";
import { FadeImage } from "@/components/FadeImage";
import { cn } from "@/lib/utils";

type GalleryMedia = {
  src: string;
  alt: string;
  type: "image" | "video";
};

type ProductImageGalleryProps = {
  images: GalleryMedia[];
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
  const showMedia = (index: number) => {
    setActiveSrc(images[(index + images.length) % images.length].src);
  };
  const hasThumbnails = images.length > 1;

  useEffect(() => {
    if (!hasThumbnails) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target?.closest("input, textarea, select, video, [contenteditable='true']")
      ) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showMedia(activeIndex - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showMedia(activeIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, hasThumbnails, images.length]);

  return (
    <div className="flex min-w-0 flex-col-reverse gap-4 sm:flex-row">
      {hasThumbnails ? (
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
            {image.type === "video" ? (
              <video
                src={image.src}
                className="h-full w-full object-cover"
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={image.src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            )}
          </button>
        ))}
      </div>
      ) : null}

      <div className="relative aspect-[3/4] min-w-0 flex-1">
        {images[activeIndex]?.type === "video" ? (
          <video
            key={activeSrc}
            src={activeSrc}
            className="h-full w-full object-cover"
            autoPlay
            controls
            playsInline
            preload="metadata"
          />
        ) : (
          <FadeImage
            src={activeSrc}
            alt={alt}
            fill
            priority
            zoomOnHover
            className="h-full w-full"
          />
        )}
        {hasThumbnails ? (
          <>
            <button
              type="button"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-paper/90 text-2xl text-ink transition-colors hover:bg-paper"
              aria-label="Предыдущее изображение"
              onClick={() => showMedia(activeIndex - 1)}
            >
              ←
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-paper/90 text-2xl text-ink transition-colors hover:bg-paper"
              aria-label="Следующее изображение"
              onClick={() => showMedia(activeIndex + 1)}
            >
              →
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
