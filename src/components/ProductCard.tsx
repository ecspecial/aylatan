import Link from "next/link";
import { FadeImage } from "@/components/FadeImage";
import { products, type Product } from "@/data/catalog";
import { imageMeta } from "@/data/imageMeta";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const image = imageMeta[product.imageKey];

  return (
    <article className={cn("group", className)}>
      <Link href={`/products/${product.id}`} className="block">
        <FadeImage
          src={image.src}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          blurDataURL={image.blurDataURL}
          zoomOnHover
          className="aspect-[3/4] w-full"
        />
        <h3 className="mt-3 px-1 text-center font-sans text-[11px] font-medium leading-snug tracking-[0.03em] text-ink sm:mt-4 sm:px-2 sm:text-[13px] sm:leading-relaxed">
          {product.title}
        </h3>
      </Link>
    </article>
  );
}

export function ProductGrid({ items }: { items?: Product[] }) {
  const list = items ?? products;

  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-8 sm:gap-x-3 sm:gap-y-10 lg:grid-cols-4">
      {list.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
