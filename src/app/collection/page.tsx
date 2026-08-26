import Link from "next/link";
import { ProductGrid } from "@/components/ProductCard";
import { categories, products } from "@/data/catalog";

const COLLECTION_ITEMS = (
  Object.values(categories) as Array<(typeof categories)[keyof typeof categories]>
).filter((item) => item.group === "collection");

export const metadata = {
  title: "Коллекция",
};

export default function CollectionPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 md:py-20">
      <header className="mb-14 text-center">
        <p className="font-sans text-[11px] uppercase tracking-nav text-mute">
          <Link href="/" className="hover:text-forest">
            Главная
          </Link>
          <span className="mx-3">/</span>
          Коллекция
        </p>
        <h1 className="mt-4 font-serif text-4xl italic md:text-5xl">Коллекция</h1>
      </header>

      <nav className="mb-16 flex flex-wrap justify-center gap-x-8 gap-y-4">
        {COLLECTION_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="font-sans text-[12px] uppercase tracking-nav text-ink/80 transition-colors hover:text-forest"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <ProductGrid items={products} />
    </main>
  );
}
