import {type ConstellationLink, type Position} from '@/data/about';

type ConstellationLinesProps = {
  constellations: ConstellationLink[];
  hoveredPlanetId: string | null;
  planetPositions: Map<string, Position>;
};

export const ConstellationLines = ({
  constellations,
  hoveredPlanetId,
  planetPositions,
}: ConstellationLinesProps) => {
  if (!hoveredPlanetId) return null;

  const activeLines = constellations.filter(
    (c) => c.from === hoveredPlanetId || c.to === hoveredPlanetId
  );

  return (
    <g>
      {activeLines.map((link) => {
        const from = planetPositions.get(link.from);
        const to = planetPositions.get(link.to);
        if (!from || !to) return null;

        return (
          <line
            key={`${link.from}-${link.to}`}
            stroke="currentColor"
            strokeDasharray="4 4"
            strokeOpacity={0.25}
            strokeWidth={1}
            x1={from.x}
            x2={to.x}
            y1={from.y}
            y2={to.y}
          />
        );
      })}
    </g>
  );
};
