export default function PhoneFrame({ src, alt, className = "" }) {
  return (
    <div className={`relative aspect-[9/19.3] rounded-[42px] border-[6px] border-ink-700 bg-ink-950 shadow-2xl overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute left-1/2 top-2.5 h-1.5 w-14 -translate-x-1/2 rounded-full bg-ink-950/80" />
    </div>
  );
}
