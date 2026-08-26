import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/utils";

export function EmptyCollection({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-xl px-6 py-24 text-center">
      <p className="font-serif text-3xl italic text-ink md:text-4xl">{title}</p>
      <p className="mt-6 font-sans text-sm leading-7 text-mute">
        Эта часть вселенной ещё раскрывается. Напишите нам — мы покажем,
        что уже живёт за кадром.
      </p>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block border-b border-gold/70 pb-1 font-sans text-[12px] uppercase tracking-nav text-ink transition-colors hover:text-forest"
      >
        {INSTAGRAM_HANDLE}
      </a>
    </div>
  );
}
