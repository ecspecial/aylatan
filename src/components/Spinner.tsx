import { cn } from "@/lib/utils";

type SpinnerProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

export function Spinner({ className, size = "md" }: SpinnerProps) {
  return (
    <div
      className={cn("relative text-forest/70", sizes[size], className)}
      role="status"
      aria-label="Загрузка"
    >
      <span className="absolute inset-0 rounded-full border border-forest/15" />
      <span className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-forest/80" />
      <svg
        viewBox="0 0 64 64"
        className="absolute inset-[22%] text-gold/80"
        aria-hidden
      >
        <circle
          cx="32"
          cy="32"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="32" cy="22" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="23.3" cy="37" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="40.7" cy="37" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="sr-only">Загрузка</span>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-paper">
      <Spinner size="lg" />
      <p className="font-sans text-[11px] uppercase tracking-nav text-mute">
        AYLATAN
      </p>
    </div>
  );
}
