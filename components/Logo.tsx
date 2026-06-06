export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 90"
      width="420"
      height="90"
      className={className}
    >
      <defs>
        <linearGradient id="blue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#1E3A8A" }} />
          <stop offset="100%" style={{ stopColor: "#2563EB" }} />
        </linearGradient>
      </defs>

      {/* Speech bubble */}
      <path
        d="M10 8 Q10 4 14 4 L56 4 Q60 4 60 8 L60 42 Q60 46 56 46 L34 46 L26 56 L26 46 L14 46 Q10 46 10 42 Z"
        fill="#1E3A8A"
      />

      {/* Cart body */}
      <path
        d="M22 18 L24 14 L50 14 L46 32 L28 32 Z"
        fill="none"
        stroke="white"
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Cart handle */}
      <path d="M20 18 L22 18" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      {/* Cart wheels */}
      <circle cx="31" cy="36" r="2.5" fill="white" />
      <circle cx="43" cy="36" r="2.5" fill="white" />
      {/* Pen cross inside cart */}
      <line x1="34" y1="23" x2="40" y2="27" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="23" x2="34" y2="27" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />

      {/* Wordmark */}
      <text
        x="76"
        y="38"
        fontFamily="'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif"
        fontSize="32"
        fontWeight="800"
        letterSpacing="-1.5"
        fill="#111827"
      >
        ecom<tspan fill="url(#blue)">words</tspan>
      </text>

      {/* "lab" badge */}
      <rect x="78" y="48" width="36" height="16" rx="4" fill="#2563EB" />
      <text
        x="96"
        y="60"
        fontFamily="'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif"
        fontSize="9"
        fontWeight="700"
        letterSpacing="3"
        textAnchor="middle"
        fill="white"
      >
        LAB
      </text>

      {/* Tagline */}
      <text
        x="126"
        y="58"
        fontFamily="'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif"
        fontSize="8.5"
        letterSpacing="1.8"
        fill="#9CA3AF"
      >
        E-COMMERCE COPYWRITING
      </text>
    </svg>
  );
}
