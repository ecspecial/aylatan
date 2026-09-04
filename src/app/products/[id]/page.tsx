import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeImage } from "@/components/FadeImage";
import { ProductCard } from "@/components/ProductCard";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import {
  categories,
  getKimonoRecommendations,
  getProduct,
  getRelatedProducts,
  products,
} from "@/data/catalog";
import { imageMeta } from "@/data/imageMeta";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/utils";

type Props = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: "Изделие" };
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  const image = product.imageSrc
    ? { src: product.imageSrc, width: 3, height: 4, blurDataURL: undefined }
    : imageMeta[product.imageKey];
  const category = categories[product.category];
  const related = getRelatedProducts(product.id);
  const kimonoRecommendations = product.isGalleryProduct
    ? getKimonoRecommendations(product.id, 3)
    : [];
  const galleryImages = [
    ...(product.imageSrc
      ? [{ src: product.imageSrc, alt: product.title, type: "image" as const }]
      : []),
    ...(product.detailImages ?? []).map((src) => ({
      src,
      alt: product.title,
      type: "image" as const,
    })),
    ...(product.detailVideos ?? []).map((src) => ({
      src,
      alt: `${product.title} video`,
      type: "video" as const,
    })),
  ];

  if (product.isGalleryProduct && galleryImages.length > 0) {
    return (
      <main className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-4 py-10 md:px-8 md:py-16">
          <p className="mb-8 text-center font-sans text-[11px] uppercase tracking-nav text-mute md:text-left">
            <Link href="/" className="hover:text-forest">
              Главная
            </Link>
            <span className="mx-3">/</span>
            <Link href="/collection/kimono" className="hover:text-forest">
              Кимоно
            </Link>
            <span className="mx-3">/</span>
            {product.title}
          </p>

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:gap-12">
            <ProductImageGallery
              images={galleryImages}
              initialSrc={product.imageSrc ?? galleryImages[0].src}
              alt={product.title}
            />
            <div className="lg:pt-2">
              <p className="font-sans text-[11px] uppercase tracking-nav text-gold">
                {category.title}
              </p>
              <h1 className="font-serif text-3xl leading-snug text-ink md:text-4xl">
                {product.title}
              </h1>
              <dl className="mt-8 space-y-2 font-sans text-sm text-mute">
                <div className="flex gap-3">
                  <dt className="text-[11px] uppercase tracking-nav">Ткань</dt>
                  <dd>{product.fabric}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-[11px] uppercase tracking-nav">Длина</dt>
                  <dd>{product.length}</dd>
                </div>
              </dl>
              <p className="mt-8 whitespace-pre-line font-serif text-lg italic leading-8 text-ink/85">
                {product.description}
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex border border-ink px-8 py-3 font-sans text-[11px] uppercase tracking-nav text-ink transition-colors hover:border-forest hover:bg-forest hover:text-cream"
              >
                Заказать {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>

          {kimonoRecommendations.length > 0 ? (
            <section className="mt-20 md:mt-28">
              <h2 className="mb-10 text-center font-sans text-[12px] uppercase tracking-nav text-mute">
                Вам может понравиться
              </h2>
              <div className="grid grid-cols-2 gap-x-2 gap-y-8 sm:gap-x-3 lg:grid-cols-3">
                {kimonoRecommendations.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </main>
    );
  }

  return (
    <main className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-10 md:px-8 md:py-16">
        <p className="mb-8 text-center font-sans text-[11px] uppercase tracking-nav text-mute md:text-left">
          <Link href="/" className="hover:text-forest">
            Главная
          </Link>
          <span className="mx-3">/</span>
          <Link href={category.href} className="hover:text-forest">
            {category.title}
          </Link>
          <span className="mx-3">/</span>
          {product.title}
        </p>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="group">
            <FadeImage
              src={image.src}
              alt={product.title}
              width={image.width}
              height={image.height}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              blurDataURL={image.blurDataURL}
              zoomOnHover
              className="w-full"
              imageClassName="h-auto w-full object-cover"
            />
          </div>

          <div className="lg:pt-8">
            <p className="font-sans text-[11px] uppercase tracking-nav text-gold">
              {category.title}
            </p>
            <h1 className="mt-3 font-serif text-3xl leading-snug text-ink md:text-4xl">
              {product.title}
            </h1>
            <dl className="mt-8 space-y-2 font-sans text-sm text-mute">
              <div className="flex gap-3">
                <dt className="uppercase tracking-nav text-[11px]">Ткань</dt>
                <dd>{product.fabric}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="uppercase tracking-nav text-[11px]">Длина</dt>
                <dd>{product.length}</dd>
              </div>
            </dl>
            <p className="mt-8 max-w-lg font-serif text-lg italic leading-8 text-ink/85">
              {product.description}
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex border border-ink px-8 py-3 font-sans text-[11px] uppercase tracking-nav text-ink transition-colors hover:border-forest hover:bg-forest hover:text-cream"
            >
              Заказать {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        {related.length > 0 ? (
          <section className="mt-20 md:mt-28">
            <h2 className="mb-10 text-center font-sans text-[12px] uppercase tracking-nav text-mute">
              Вам может понравиться
            </h2>
            <div className="grid grid-cols-2 gap-x-2 gap-y-8 sm:gap-x-3 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
