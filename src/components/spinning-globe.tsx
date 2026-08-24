const RADIUS = 352;
const DIAMETER = RADIUS * 2;
const MERIDIAN_COUNT = 24;
const LATITUDES = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170];

const meridians = Array.from({ length: MERIDIAN_COUNT }, (_, i) => (180 / MERIDIAN_COUNT) * i);

export default function SpinningGlobe({
  positionClassName = "-top-15 -mt-15",
  className = "",
}: {
  positionClassName?: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 w-[800px] h-[800px] overflow-hidden opacity-70 pointer-events-none select-none [perspective:2200px] ${positionClassName} ${className}`}
    >
      <div
        className="absolute [transform-style:preserve-3d]"
        style={{
          width: DIAMETER,
          height: DIAMETER,
          left: "50%",
          top: "50%",
          marginLeft: -RADIUS,
          marginTop: -RADIUS,
          transform: "rotateX(-18deg)",
        }}
      >
        <div className="absolute inset-0 animate-spin-horizontal [transform-style:preserve-3d]">
          {meridians.map((angle) => (
            <div
              key={`meridian-${angle}`}
              className="absolute inset-0 rounded-full border border-stroke"
              style={{ transform: `rotateY(${angle}deg)` }}
            />
          ))}
          {LATITUDES.map((phi) => {
            const radians = (phi * Math.PI) / 180;
            const diameter = DIAMETER * Math.sin(radians);
            const yOffset = RADIUS * Math.cos(radians);
            return (
              <div
                key={`latitude-${phi}`}
                className="absolute rounded-full border border-stroke"
                style={{
                  width: diameter,
                  height: diameter,
                  left: `calc(50% - ${diameter / 2}px)`,
                  top: `calc(50% - ${yOffset}px - ${diameter / 2}px)`,
                  transform: "rotateX(90deg)",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
