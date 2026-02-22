import {useState} from 'react';
import {twJoin} from 'tailwind-merge';

import norandaIllustration from '@/assets/noranda-brown-illustration.png';
import {type SunData} from '@/data/about';

type SunProps = {
  data: SunData;
  onClick: () => void;
  sizeMultiplier: number;
};

export const Sun = ({data, onClick, sizeMultiplier}: SunProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const size = data.size * sizeMultiplier;

  return (
    <button
      aria-label={`${data.label} - click for bio`}
      className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type="button"
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-full transition-colors duration-500"
        style={{
          animation: 'sun-glow 4s ease-in-out infinite alternate',
          backgroundColor: isHovered ? 'var(--warning)' : data.glowColor,
          filter: isHovered ? 'blur(24px)' : 'blur(16px)',
          height: size * 1.5,
          left: -(size * 0.25),
          top: -(size * 0.25),
          width: size * 1.5,
        }}
      />
      {/* Corona rays on hover */}
      <div
        className={twJoin(
          'absolute rounded-full transition-opacity duration-500',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          animation: 'sun-corona-spin 12s linear infinite',
          background:
            'repeating-conic-gradient(color-mix(in oklch, var(--warning) 25%, transparent) 0deg 8deg, transparent 8deg 24deg)',
          height: size * 2.2,
          left: -(size * 0.6),
          top: -(size * 0.6),
          width: size * 2.2,
        }}
      />
      <img
        alt={data.label}
        className={twJoin(
          'relative rounded-full transition-transform duration-300',
          isHovered && 'scale-110'
        )}
        src={norandaIllustration}
        style={{height: size, width: size}}
      />
    </button>
  );
};
