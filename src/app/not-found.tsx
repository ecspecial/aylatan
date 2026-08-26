import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-sans text-[11px] uppercase tracking-nav text-mute">404</p>
      <h1 className="mt-4 font-serif text-4xl italic text-ink">Страница не найдена</h1>
      <p className="mt-4 max-w-md font-sans text-sm leading-7 text-mute">
        Этот путь ещё не сотворён. Вернитесь в начало вселенной AYLATAN.
      </p>
      <Link
        href="/"
        className="mt-8 border-b border-gold/70 pb-1 font-sans text-[12px] uppercase tracking-nav"
      >
        На главную
      </Link>
    </main>
  );
}
