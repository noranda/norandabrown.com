import {useMemo} from 'react';

const STAR_COUNT = 120;

// Simple seeded random for deterministic star positions
const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

export const Starfield = () => {
  const stars = useMemo(
    () =>
      Array.from({length: STAR_COUNT}, (_, i) => ({
        delay: seededRandom(i + 500) * 5,
        duration: 2 + seededRandom(i + 300) * 4,
        left: seededRandom(i) * 100,
        opacity: 0.2 + seededRandom(i + 200) * 0.6,
        size: 1 + seededRandom(i + 100) * 2,
        top: seededRandom(i + 50) * 100,
      })),
    []
  );

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <div
          className="absolute rounded-full bg-foreground/60 dark:bg-white/60"
          key={i}
          style={{
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            animationIterationCount: 'infinite',
            animationName: 'star-twinkle',
            height: star.size,
            left: `${star.left}%`,
            opacity: star.opacity,
            top: `${star.top}%`,
            width: star.size,
          }}
        />
      ))}
    </div>
  );
};
