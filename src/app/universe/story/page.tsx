import Link from "next/link";
import { FadeImage } from "@/components/FadeImage";
import { HeartMark } from "@/components/Icons";
import { designerManifesto } from "@/data/catalog";
import { imageMeta } from "@/data/imageMeta";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/utils";

export const metadata = {
  title: "Наша история",
};

export default function StoryPage() {
  return (
    <main className="bg-paper">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-12 md:py-24">
        <FadeImage
          src={imageMeta.designer.src}
          alt="AYLATAN"
          width={imageMeta.designer.width}
          height={imageMeta.designer.height}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          blurDataURL={imageMeta.designer.blurDataURL}
          className="w-full"
          imageClassName="h-auto w-full object-cover"
        />
        <div>
          <p className="font-sans text-[11px] uppercase tracking-nav text-mute">
            <Link href="/" className="hover:text-forest">
              Главная
            </Link>
            <span className="mx-3">/</span>
            Наша вселенная
            <span className="mx-3">/</span>
            Наша история
          </p>
          <h1 className="mt-4 font-serif text-4xl italic md:text-5xl">
            Наша история
          </h1>
          <HeartMark className="mt-8 h-8 w-8 text-gold" />
          <div className="mt-8 space-y-4 font-serif text-[18px] italic leading-8 text-ink/90">
            {designerManifesto.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block border-b border-gold/70 pb-1 font-sans text-[12px] tracking-[0.16em]"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </main>
  );
}
