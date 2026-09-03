"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/Spinner";
import { imageMeta } from "@/data/imageMeta";
import { cn } from "@/lib/utils";

const SLIDES = [imageMeta["kimono-1"], imageMeta["kimono-2"]];

export function KimonoSlider() {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      SLIDES.map(
        (slide) =>
          new Promise<void>((resolve) => {
            const img = new window.Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = slide.src;
          }),
      ),
    ).then(() => {
      if (!cancelled) setReady(true);
    });

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, 6000);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, []);

  return (
    <Link
      href="/collection/kimono"
      className="group relative block overflow-hidden"
      aria-label="Кимоно"
    >
      <div
        className="relative w-full overflow-hidden bg-sand/60"
        style={{ aspectRatio: `${SLIDES[0].width} / ${SLIDES[0].height}` }}
      >
        {!ready ? (
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
            <Spinner size="md" />
          </div>
        ) : null}
        {SLIDES.map((slide, slideIndex) => (
          <div
            key={slide.src}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-silk group-hover:scale-[1.03]",
              slideIndex === index ? "opacity-100" : "opacity-0",
            )}
            style={{
              backgroundImage: `url(${slide.src})`,
              transition: "opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between bg-gradient-to-t from-ink/45 to-transparent px-5 py-6 md:px-12 md:py-10">
          <span className="font-sans text-[13px] uppercase tracking-[0.35em] text-cream md:text-sm">
            кимоно
          </span>
          <span className="font-sans text-[13px] uppercase tracking-[0.35em] text-cream md:text-sm">
            kimono
          </span>
        </div>
      </div>
    </Link>
  );
}
