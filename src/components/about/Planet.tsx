import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {forwardRef} from 'react';
import {twJoin} from 'tailwind-merge';

import {Tooltip} from '@/components/ui/tooltip';
import {type PlanetData} from '@/data/about';

type PlanetProps = {
  isHovered: boolean;
  isSelected: boolean;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
  planet: PlanetData;
  sizeMultiplier: number;
};

export const Planet = forwardRef<HTMLButtonElement, PlanetProps>(
  ({isHovered, isSelected, onHover, onSelect, planet, sizeMultiplier}, ref) => {
    const size = planet.size * sizeMultiplier;

    return (
      <Tooltip open={isHovered}>
        <Tooltip.Trigger asChild>
          <button
            aria-label={`${planet.label} - press Enter to learn more`}
            aria-pressed={isSelected}
            className={twJoin(
              'absolute z-20 flex cursor-pointer items-center justify-center rounded-full text-white transition-transform duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              isHovered && 'scale-110'
            )}
            onClick={() => onSelect(planet.id)}
            onMouseEnter={() => onHover(planet.id)}
            onMouseLeave={() => onHover(null)}
            ref={ref}
            style={
              {
                '--planet-glow': planet.glowColor,
                animation: 'planet-glow 3s ease-in-out infinite alternate',
                backgroundColor: planet.color,
                boxShadow: isHovered
                  ? `0 0 24px 8px ${planet.glowColor}`
                  : `0 0 12px 4px ${planet.glowColor}`,
                height: size,
                width: size,
              } as React.CSSProperties
            }
            type="button"
          >
            <FontAwesomeIcon icon={planet.icon} style={{fontSize: size * 0.38}} />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          {planet.label}
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
    );
  }
);

Planet.displayName = 'Planet';
