import Link from "next/link";
import { InstagramIcon, TikTokIcon } from "@/components/Icons";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  TIKTOK_URL,
} from "@/lib/utils";

const FOOTER_LINKS = [
  { href: "/universe/contacts", label: "Контакты" },
  { href: "/collection", label: "Коллекция" },
  { href: "/delivery", label: "Доставка" },
];

export function Footer() {
  return (
    <footer className="border-t border-sand bg-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 py-14 md:flex-row md:items-start md:justify-between md:px-12 md:py-16">
        <nav className="flex flex-col gap-4">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[12px] uppercase tracking-nav text-ink/85 transition-colors hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-5 md:items-end">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 text-ink/85 transition-colors hover:text-forest"
          >
            <InstagramIcon className="h-5 w-5" />
            <span className="font-sans text-[12px] tracking-[0.12em]">
              {INSTAGRAM_HANDLE}
            </span>
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 text-ink/85 transition-colors hover:text-forest"
          >
            <TikTokIcon className="h-5 w-5" />
            <span className="font-sans text-[12px] tracking-[0.12em]">
              {INSTAGRAM_HANDLE}
            </span>
          </a>
        </div>
      </div>
      <div className="border-t border-sand/80 py-5 text-center">
        <p className="font-sans text-[10px] uppercase tracking-nav text-mute">
          Made with love.....
        </p>
      </div>
    </footer>
  );
}
