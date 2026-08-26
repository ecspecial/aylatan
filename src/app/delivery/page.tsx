import Link from "next/link";

export const metadata = {
  title: "Доставка",
};

export default function DeliveryPage() {
  return (
    <main className="mx-auto max-w-[720px] px-6 py-20">
      <p className="text-center font-sans text-[11px] uppercase tracking-nav text-mute">
        <Link href="/" className="hover:text-forest">
          Главная
        </Link>
        <span className="mx-3">/</span>
        Доставка
      </p>
      <h1 className="mt-4 text-center font-serif text-4xl italic md:text-5xl">
        Доставка
      </h1>
      <div className="mt-12 space-y-8 font-sans text-sm leading-7 text-ink/80">
        <p>
          Каждое изделие AYLATAN уходит в путь бережно — так, будто его несут в
          ладонях. Мы собираем заказ вручную и отправляем его, когда он готов
          встретить вас.
        </p>
        <p>
          Доставка возможна по России и за её пределы. Срок и стоимость зависят
          от города и выбранного способа — мы подскажем самый спокойный маршрут,
          когда вы напишете нам.
        </p>
        <p>
          Если вещь создаётся под вас, сроки могут быть чуть длиннее. Это не
          ожидание — это созревание. Мы всегда держим вас в курсе.
        </p>
        <p>
          Чтобы оформить доставку, напишите нам в Instagram — мы ответим
          лично и с любовью.
        </p>
      </div>
    </main>
  );
}
