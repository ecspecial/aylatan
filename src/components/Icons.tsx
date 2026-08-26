export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M14.2 3c.4 2.4 1.8 4.1 4.3 4.4v2.3c-1.5 0-2.9-.5-4.1-1.4v6.5c0 3.4-2.6 5.7-5.8 5.7-3.2 0-5.6-2.4-5.6-5.6 0-3.3 2.5-5.7 5.8-5.7.4 0 .9.1 1.3.2v2.5c-.4-.2-.8-.3-1.3-.3-1.8 0-3.2 1.4-3.2 3.3 0 1.8 1.4 3.2 3.2 3.2 1.8 0 3.2-1.4 3.2-3.4V3h2.2Z" />
    </svg>
  );
}

export function HeartMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 28" className={className} aria-hidden fill="none">
      <path
        d="M16 25s-9.5-6.2-12.2-11.2C1.7 10.3 3.2 6 7.2 5.4c2.4-.4 4.5.8 5.8 2.7 1.3-1.9 3.4-3.1 5.8-2.7 4 .6 5.5 4.9 3.4 8.4C25.5 18.8 16 25 16 25Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
