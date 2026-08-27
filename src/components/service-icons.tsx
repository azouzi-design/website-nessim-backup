export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className={className}>
      <circle cx="8" cy="8" r="8" className="fill-primary-green" />
      <path
        d="M4.5 8.3L6.7 10.5L11.5 5.5"
        className="stroke-background"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIconInverse({ className = "" }: { className?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className={className}>
      <circle cx="8" cy="8" r="8" className="fill-background" />
      <path
        d="M4.5 8.3L6.7 10.5L11.5 5.5"
        className="stroke-foreground"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className={className}>
      <circle cx="8" cy="8" r="8" className="fill-primary-red" />
      <path
        d="M5.5 5.5L10.5 10.5M10.5 5.5L5.5 10.5"
        className="stroke-background"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
