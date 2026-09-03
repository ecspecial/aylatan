"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { imageMeta } from "@/data/imageMeta";
import { cn } from "@/lib/utils";

type MenuLink = { href: string; label: string };
type MenuItem = {
  label: string;
  href?: string;
  children?: MenuLink[];
};

const LEFT_MENU: MenuItem[] = [
  {
    label: "коллекция",
    href: "/collection",
    children: [
      { href: "/collection/kimono", label: "кимоно" },
      { href: "/collection/kaftans", label: "кафтаны" },
      { href: "/collection/pants", label: "брюки" },
      { href: "/collection/tops", label: "топы" },
      { href: "/collection/shorts", label: "шорты" },
    ],
  },
  {
    label: "аксессуары",
    href: "/accessories",
    children: [
      { href: "/accessories/earrings", label: "серьги" },
      { href: "/accessories/chokers", label: "чокеры" },
      { href: "/accessories/neck", label: "украшения на шею" },
    ],
  },
];

const RIGHT_MENU: MenuItem[] = [
  { label: "доставка", href: "/delivery" },
  {
    label: "наша вселенная",
    href: "/universe/story",
    children: [
      { href: "/universe/story", label: "наша история" },
      { href: "/universe/contacts", label: "контакты" },
    ],
  },
];

function DesktopNav({ items, align }: { items: MenuItem[]; align: "left" | "right" }) {
  return (
    <ul
      className={cn(
        "hidden items-center gap-8 min-[900px]:flex xl:gap-10",
        align === "right" && "justify-end",
      )}
    >
      {items.map((item) => (
        <li key={item.label} className="group relative">
          {item.href ? (
            <Link
              href={item.href}
              className="inline-flex items-center py-6 font-sans text-[11px] uppercase tracking-nav text-ink/90 transition-colors hover:text-forest"
            >
              {item.label}
            </Link>
          ) : (
            <span className="inline-flex items-center py-6 font-sans text-[11px] uppercase tracking-nav text-ink/90">
              {item.label}
            </span>
          )}
          {item.children ? (
            <div className="invisible absolute left-1/2 top-full z-40 min-w-[220px] -translate-x-1/2 pt-1 opacity-0 transition-all duration-300 ease-silk group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="border border-sand bg-cream/95 py-4 shadow-menu backdrop-blur-sm">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="block px-7 py-2.5 text-center font-sans text-[11px] uppercase tracking-nav text-ink/80 transition-colors hover:text-forest"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-sand/80 bg-sand">
      <div className="relative mx-auto h-[72px] max-w-[1440px] md:h-[88px]">
        <button
          type="button"
          className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center min-[900px]:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 h-px w-full bg-ink transition-all duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-px w-full bg-ink transition-opacity duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-full bg-ink transition-all duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>

        <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center px-4 md:px-8">
          <DesktopNav items={LEFT_MENU} align="left" />

          <Link href="/" className="justify-self-center" aria-label="AYLATAN — на главную">
            <img
              src={imageMeta.logo.src}
              alt="AYLATAN"
              width={imageMeta.logo.width}
              height={imageMeta.logo.height}
              className="h-[18px] w-auto md:h-[22px]"
            />
          </Link>

          <DesktopNav items={RIGHT_MENU} align="right" />
        </div>
      </div>

      {open ? (
        <button
          type="button"
          className="fixed inset-x-0 top-[72px] bottom-0 z-[55] bg-ink/20 min-[900px]:hidden md:top-[88px]"
          aria-label="Закрыть меню"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <aside
        className={cn(
          "fixed bottom-0 left-0 top-[72px] z-[60] w-[min(360px,90vw)] overflow-y-auto border-r border-sand bg-paper shadow-menu transition-transform duration-300 min-[900px]:hidden md:top-[88px]",
          open ? "translate-x-0" : "pointer-events-none -translate-x-full",
        )}
      >
        <nav className="flex flex-col px-8 py-10">
          {[...LEFT_MENU, ...RIGHT_MENU].map((item) => (
            <div key={item.label} className="border-b border-sand/80">
              {item.children ? (
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-5 text-left font-sans text-[12px] uppercase tracking-nav"
                  onClick={() =>
                    setExpanded((current) => (current === item.label ? null : item.label))
                  }
                >
                  {item.label}
                  <span
                    className={cn(
                      "text-gold transition-transform duration-300",
                      expanded === item.label && "rotate-45",
                    )}
                  >
                    +
                  </span>
                </button>
              ) : (
                <Link
                  href={item.href ?? "/"}
                  className="block py-5 font-sans text-[12px] uppercase tracking-nav"
                >
                  {item.label}
                </Link>
              )}
              {item.children ? (
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-silk",
                    expanded === item.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="pb-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2.5 font-sans text-[12px] uppercase tracking-nav text-mute"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </aside>
    </header>
  );
}
