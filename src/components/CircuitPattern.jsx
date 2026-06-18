const PATHS = [
  "M0,40 L120,40 L150,70 L320,70",
  "M0,140 L80,140 L110,110 L260,110 L290,140 L400,140",
  "M380,0 L380,60 L420,100 L420,220",
  "M450,260 L320,260 L290,230 L150,230",
  "M0,220 L60,220 L90,250 L200,250 L230,280 L400,280",
];

export default function CircuitPattern({ className = "" }) {
  return (
    <div className={`absolute inset-0 opacity-[0.35] dark:opacity-[0.5] pointer-events-none ${className}`}>
      <svg viewBox="0 0 450 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        {PATHS.map((d, i) => (
          <g key={i}>
            <path d={d} fill="none" stroke="#1fd1bb" strokeOpacity="0.25" strokeWidth="1" />
            <circle r="2.5" fill="#5eead4">
              <animateMotion dur={`${6 + i * 1.5}s`} repeatCount="indefinite" path={d} />
            </circle>
          </g>
        ))}
        {PATHS.map((d, i) => {
          const coords = d.match(/[\d.]+,[\d.]+/g) || [];
          return coords.map((c, j) => {
            const [cx, cy] = c.split(",");
            return (
              <circle key={`${i}-${j}`} cx={cx} cy={cy} r="2" fill="#1fd1bb" fillOpacity="0.4" />
            );
          });
        })}
      </svg>
    </div>
  );
}
