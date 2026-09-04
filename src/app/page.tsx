import Link from "next/link";
import { preload } from "react-dom";
import { FadeImage } from "@/components/FadeImage";
import { HeartMark } from "@/components/Icons";
import { KimonoSlider } from "@/components/KimonoSlider";
import { ProductGrid } from "@/components/ProductCard";
import { designerManifesto, getHomeProducts } from "@/data/catalog";
import { imageMeta } from "@/data/imageMeta";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/utils";

export default function HomePage() {
  const homeProducts = getHomeProducts();

  preload(imageMeta.hero.src, { as: "image" });
  homeProducts.forEach((product) => {
    preload(product.imageSrc ?? imageMeta[product.imageKey].src, { as: "image" });
  });
  preload(imageMeta["kimono-1"].src, { as: "image" });
  preload(imageMeta["kimono-2"].src, { as: "image" });
  return (
    <main>
      <section className="relative w-full">
        <FadeImage
          src={imageMeta.hero.src}
          alt="AYLATAN — made with love"
          width={imageMeta.hero.width}
          height={imageMeta.hero.height}
          sizes="100vw"
          priority
          blurDataURL={imageMeta.hero.blurDataURL}
          className="w-full"
          imageClassName="h-auto w-full object-cover"
        />
      </section>

      <section className="mx-auto max-w-[1440px] px-3 py-10 md:px-6 md:py-14 lg:px-8">
        <ProductGrid items={homeProducts} />
      </section>

      <section>
        <KimonoSlider />
      </section>

      <section className="mt-8 md:mt-12">
        <Link
          href="/collection/kaftans"
          className="group relative block overflow-hidden"
          aria-label="Кафтаны и пледы"
        >
          <div
            className="relative w-full bg-sand/60"
            style={{
              aspectRatio: `${imageMeta["kaftan-banner"].width} / ${imageMeta["kaftan-banner"].height}`,
            }}
          >
            <FadeImage
              src={imageMeta["kaftan-banner"].src}
              alt="Кафтаны и пледы"
              fill
              sizes="100vw"
              blurDataURL={imageMeta["kaftan-banner"].blurDataURL}
              className="h-full w-full"
              imageClassName="transition-transform duration-700 ease-silk group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-ink/10 to-transparent" />
            <div className="absolute left-6 top-1/2 -translate-y-1/2 font-sans text-[28px] font-light uppercase leading-[1.35] tracking-[0.22em] text-cream [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] md:left-14 md:text-5xl lg:text-6xl">
              <span className="block">кафтаны</span>
              <span className="block">&amp;</span>
              <span className="block">пледы</span>
            </div>
          </div>
        </Link>
      </section>

      <section className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-12 md:py-24">
        <FadeImage
          src={imageMeta.designer.src}
          alt="Дизайнер AYLATAN"
          width={imageMeta.designer.width}
          height={imageMeta.designer.height}
          sizes="(max-width: 768px) 100vw, 50vw"
          blurDataURL={imageMeta.designer.blurDataURL}
          className="w-full"
          imageClassName="h-auto w-full object-cover"
        />
        <div className="mx-auto max-w-xl text-center">
          <HeartMark className="mx-auto mb-8 h-8 w-8 text-gold" />
          <div className="space-y-4 font-serif text-[18px] italic leading-8 text-ink/90 md:text-[20px] md:leading-9">
            {designerManifesto.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block border-b border-gold/70 pb-1 font-sans text-[12px] tracking-[0.16em] text-ink transition-colors hover:text-forest"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </section>
    </main>
  );
}
