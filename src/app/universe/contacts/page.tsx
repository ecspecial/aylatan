import Link from "next/link";
import { InstagramIcon, TikTokIcon } from "@/components/Icons";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  TIKTOK_URL,
} from "@/lib/utils";

export const metadata = {
  title: "Контакты",
};

export default function ContactsPage() {
  return (
    <main className="mx-auto max-w-[640px] px-6 py-20 text-center">
      <p className="font-sans text-[11px] uppercase tracking-nav text-mute">
        <Link href="/" className="hover:text-forest">
          Главная
        </Link>
        <span className="mx-3">/</span>
        Наша вселенная
        <span className="mx-3">/</span>
        Контакты
      </p>
      <h1 className="mt-4 font-serif text-4xl italic md:text-5xl">Контакты</h1>
      <p className="mt-8 font-serif text-lg italic leading-8 text-mute">
        Напишите нам — мы рядом. Каждое послание читаем сами.
      </p>
      <div className="mt-12 flex flex-col items-center gap-6">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 font-sans text-[13px] tracking-[0.14em] transition-colors hover:text-forest"
        >
          <InstagramIcon className="h-5 w-5" />
          {INSTAGRAM_HANDLE}
        </a>
        <a
          href={TIKTOK_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 font-sans text-[13px] tracking-[0.14em] transition-colors hover:text-forest"
        >
          <TikTokIcon className="h-5 w-5" />
          {INSTAGRAM_HANDLE}
        </a>
      </div>
    </main>
  );
}
