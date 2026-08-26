import Link from "next/link";
import { FadeImage } from "@/components/FadeImage";
import { EmptyCollection } from "@/components/EmptyCollection";
import { ProductGrid } from "@/components/ProductCard";
import { type CategoryId, categories, getProductsByCategory } from "@/data/catalog";
import { imageMeta } from "@/data/imageMeta";

type CatalogViewProps = {
  category: CategoryId;
  intro?: string;
  hero?: "kimono" | "kaftan";
};

export function CatalogView({ category, intro, hero }: CatalogViewProps) {
  const meta = categories[category];
  const items = getProductsByCategory(category);

  return (
    <main className="bg-paper">
      {hero === "kimono" ? (
        <div className="relative aspect-[21/9] min-h-[240px] w-full">
          <FadeImage
            src={imageMeta["kimono-1"].src}
            alt="Кимоно"
            fill
            sizes="100vw"
            priority
            blurDataURL={imageMeta["kimono-1"].blurDataURL}
          />
          <div className="absolute inset-0 bg-ink/20" />
          <h1 className="absolute inset-x-0 bottom-8 text-center font-sans text-sm uppercase tracking-[0.45em] text-cream md:bottom-12 md:text-base">
            {meta.title}
          </h1>
        </div>
      ) : null}

      {hero === "kaftan" ? (
        <div className="relative aspect-[21/9] min-h-[240px] w-full">
          <FadeImage
            src={imageMeta["kaftan-banner"].src}
            alt="Кафтаны и пледы"
            fill
            sizes="100vw"
            priority
            blurDataURL={imageMeta["kaftan-banner"].blurDataURL}
          />
          <div className="absolute inset-0 bg-ink/15" />
          <h1 className="absolute inset-x-0 bottom-8 text-center font-sans text-sm uppercase tracking-[0.45em] text-cream md:bottom-12 md:text-base">
            Кафтаны &amp; пледы
          </h1>
        </div>
      ) : null}

      <div className="mx-auto max-w-[1440px] px-4 py-12 md:px-8 md:py-16">
        {!hero ? (
          <header className="mb-12 text-center">
            <p className="font-sans text-[11px] uppercase tracking-nav text-mute">
              <Link href="/" className="hover:text-forest">
                Главная
              </Link>
              <span className="mx-3">/</span>
              <Link href={meta.group === "collection" ? "/collection" : "/accessories"} className="hover:text-forest">
                {meta.group === "collection" ? "Коллекция" : "Аксессуары"}
              </Link>
            </p>
            <h1 className="mt-4 font-serif text-4xl italic text-ink md:text-5xl">
              {meta.title}
            </h1>
            {intro ? (
              <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-7 text-mute">
                {intro}
              </p>
            ) : null}
          </header>
        ) : (
          <p className="mb-12 text-center font-sans text-[11px] uppercase tracking-nav text-mute">
            <Link href="/" className="hover:text-forest">
              Главная
            </Link>
            <span className="mx-3">/</span>
            <Link href="/collection" className="hover:text-forest">
              Коллекция
            </Link>
            <span className="mx-3">/</span>
            {meta.title}
          </p>
        )}

        {items.length > 0 ? (
          <ProductGrid items={items} />
        ) : (
          <EmptyCollection title={meta.title} />
        )}
      </div>
    </main>
  );
}
