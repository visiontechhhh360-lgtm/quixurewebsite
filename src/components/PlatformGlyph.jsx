const GLYPHS = {
  desktop: (
    <>
      <rect x="6" y="8" width="52" height="34" rx="3" />
      <line x1="22" y1="50" x2="42" y2="50" />
      <line x1="32" y1="42" x2="32" y2="50" />
      <line x1="14" y1="18" x2="42" y2="18" />
      <line x1="14" y1="25" x2="36" y2="25" />
      <line x1="14" y1="32" x2="40" y2="32" />
    </>
  ),
  mobile: (
    <>
      <rect x="16" y="4" width="28" height="52" rx="6" />
      <line x1="26" y1="9" x2="34" y2="9" />
      <circle cx="30" cy="48" r="2" />
      <line x1="22" y1="20" x2="38" y2="20" />
      <line x1="22" y1="27" x2="34" y2="27" />
      <line x1="22" y1="34" x2="38" y2="34" />
    </>
  ),
  tablet: (
    <>
      <rect x="10" y="4" width="40" height="52" rx="5" />
      <circle cx="30" cy="48" r="1.8" />
      <line x1="17" y1="16" x2="43" y2="16" />
      <line x1="17" y1="23" x2="37" y2="23" />
      <line x1="17" y1="30" x2="43" y2="30" />
      <line x1="17" y1="37" x2="33" y2="37" />
    </>
  ),
  browser: (
    <>
      <rect x="4" y="10" width="52" height="40" rx="4" />
      <line x1="4" y1="20" x2="56" y2="20" />
      <circle cx="11" cy="15" r="1.4" />
      <circle cx="17" cy="15" r="1.4" />
      <circle cx="23" cy="15" r="1.4" />
      <line x1="12" y1="30" x2="48" y2="30" />
      <line x1="12" y1="37" x2="40" y2="37" />
      <line x1="12" y1="44" x2="44" y2="44" />
    </>
  ),
};

export default function PlatformGlyph({ kind, className = "" }) {
  const glyph = GLYPHS[kind] || GLYPHS.desktop;
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {glyph}
    </svg>
  );
}
