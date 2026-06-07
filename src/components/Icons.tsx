import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 24): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
});

/* -------- Brand mark -------- */
export const Bolt = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p} fill="currentColor" stroke="none">
    <path d="M13.5 2 4 14h6.5L9 22l10.5-13H13l.5-7Z" />
  </svg>
);

/* -------- UI -------- */
export const Search = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m20 20-4.35-4.35" />
  </svg>
);

export const User = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </svg>
);

export const Cart = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 4h2.2l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L21.5 8H7" />
    <circle cx="10" cy="21" r="1.4" />
    <circle cx="18" cy="21" r="1.4" />
  </svg>
);

export const Menu = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M6 6 18 18M18 6 6 18" />
  </svg>
);

export const ArrowRight = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ChevronRight = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const Plus = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

/* -------- Trust / values -------- */
export const Truck = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 16V6a1 1 0 0 1 1-1h11v11" />
    <path d="M15 8h4l3 4v4h-3" />
    <circle cx="7.5" cy="17.5" r="2" />
    <circle cx="17.5" cy="17.5" r="2" />
    <path d="M9.5 17.5h6" />
  </svg>
);

export const Card = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
    <path d="M2.5 10h19M6 15h3" />
  </svg>
);

export const Headset = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 13a8 8 0 0 1 16 0v4a2 2 0 0 1-2 2h-1v-6h3" />
    <path d="M4 13v4a2 2 0 0 0 2 2h1v-6H4" />
  </svg>
);

export const Shield = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3 4 6v6c0 4.5 3.2 8.5 8 9.5 4.8-1 8-5 8-9.5V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Leaf = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M20 4c0 9-6 16-15 16-1 0-1.5-.3-1.5-1 0-9 6-15 15-15 1 0 1.5.3 1.5 1Z" />
    <path d="M4 20C9 15 13 11 19 5" />
  </svg>
);

export const Clock = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const Pin = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const Star = ({ size = 24, filled = false, ...p }: IconProps & { filled?: boolean }) => (
  <svg {...base(size)} {...p} fill={filled ? 'currentColor' : 'none'}>
    <path d="m12 3.5 2.6 5.5 6 .9-4.4 4.2 1.1 6L12 17.3 6.7 20.1l1.1-6L3.4 9.9l6-.9L12 3.5Z" />
  </svg>
);

export const Play = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p} fill="currentColor" stroke="none">
    <path d="M7 4.5v15l13-7.5L7 4.5Z" />
  </svg>
);

/* -------- Social -------- */
export const Instagram = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const Youtube = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="2" y="5" width="20" height="14" rx="3.5" />
    <path d="m10 9 6 3-6 3V9Z" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M14 8h2.5V5H14c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v7H14v-7h2.5l.5-3H14V8.5c0-.3.2-.5.5-.5Z" fill="currentColor" stroke="none" />
  </svg>
);

export const TikTok = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path
      d="M16 3v.5c0 2 1.5 3.5 3.5 3.5H20v3c-1.6 0-3-.4-4-1V15a5 5 0 1 1-5-5v3a2 2 0 1 0 2 2V3h3Z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

/* -------- Mobility marks (custom) -------- */
export const Scooter = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="5.5" cy="18" r="2.5" />
    <circle cx="18.5" cy="18" r="2.5" />
    <path d="M8 18h6l3-9h2M13 5h3l1 4" />
  </svg>
);

export const Bike = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="5.5" cy="17" r="3.5" />
    <circle cx="18.5" cy="17" r="3.5" />
    <path d="m6 17 5-8h6l-3 8M8 9h5M14 6h3l1.5 4" />
  </svg>
);

export const Skate = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 11h18l-1 3H4l-1-3Z" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="17" cy="18" r="1.6" />
  </svg>
);

export const Wheel = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
  </svg>
);

export const Helmet = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 15a8 8 0 0 1 16 0v2H4v-2Z" />
    <path d="M4 17h16M9 9V7M12 8V6M15 9V7" />
  </svg>
);
