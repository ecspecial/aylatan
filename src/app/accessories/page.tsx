import Link from "next/link";
import { categories } from "@/data/catalog";

const ACCESSORY_ITEMS = (
  Object.values(categories) as Array<(typeof categories)[keyof typeof categories]>
).filter((item) => item.group === "accessories");

export const metadata = {
  title: "Аксессуары",
};

export default function AccessoriesPage() {
  return (
    <main className="mx-auto max-w-[880px] px-6 py-20 text-center">
      <p className="font-sans text-[11px] uppercase tracking-nav text-mute">
        <Link href="/" className="hover:text-forest">
          Главная
        </Link>
        <span className="mx-3">/</span>
        Аксессуары
      </p>
      <h1 className="mt-4 font-serif text-4xl italic md:text-5xl">Аксессуары</h1>
      <p className="mx-auto mt-6 max-w-lg font-sans text-sm leading-7 text-mute">
        Серьги, чокеры и украшения на шею — знаки, которые завершают силуэт.
      </p>
      <nav className="mt-12 flex flex-col items-center gap-5">
        {ACCESSORY_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="font-sans text-[12px] uppercase tracking-nav text-ink transition-colors hover:text-forest"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </main>
  );
}
