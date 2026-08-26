"use client";

import { useState } from "react";
import { Spinner } from "@/components/Spinner";
import { cn } from "@/lib/utils";

type FadeImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  blurDataURL?: string;
  className?: string;
  imageClassName?: string;
  zoomOnHover?: boolean;
};

export function FadeImage({
  src,
  alt,
  width,
  height,
  fill,
  priority,
  className,
  imageClassName,
  zoomOnHover,
}: FadeImageProps) {
  const [loaded, setLoaded] = useState(false);
  const aspect =
    !fill && width && height ? { aspectRatio: `${width} / ${height}` } : undefined;

  return (
    <div
      className={cn("relative overflow-hidden bg-sand/60", className)}
      style={aspect}
    >
      {!loaded ? (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <Spinner size="md" />
        </div>
      ) : null}
      {/* Native img: already-optimized WebP, reliable load events, no optimizer stall */}
      <img
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        ref={(node) => {
          if (node?.complete && node.naturalWidth > 0) {
            queueMicrotask(() => setLoaded(true));
          }
        }}
        className={cn(
          "absolute inset-0 h-full w-full max-w-none object-cover transition-transform duration-700 ease-silk",
          zoomOnHover && "origin-center will-change-transform group-hover:scale-[1.08]",
          imageClassName,
        )}
      />
    </div>
  );
}
