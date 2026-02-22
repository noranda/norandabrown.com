import {useCallback} from 'react';
import {twJoin} from 'tailwind-merge';

import {ABOUT_DATA} from '@/data/about';

import {ConstellationLines} from './ConstellationLines';
import {OrbitRing} from './OrbitRing';
import {Planet} from './Planet';
import {PlanetCard} from './PlanetCard';
import {Starfield} from './Starfield';
import {Sun} from './Sun';
import {useSolarSystem} from './useSolarSystem';

export const SolarSystem = () => {
  const {
    centerX,
    centerY,
    containerRef,
    dragHandlers,
    hoveredPlanetId,
    isDragging,
    maxRadius,
    planetPositions,
    registerPlanetRef,
    selectedPlanetId,
    setHoveredPlanetId,
    setSelectedPlanetId,
    sizeMultiplier,
    zoom,
  } = useSolarSystem(ABOUT_DATA);

  const selectedPlanet =
    selectedPlanetId && selectedPlanetId !== 'sun'
      ? (ABOUT_DATA.planets.find((p) => p.id === selectedPlanetId) ?? null)
      : null;

  const handlePlanetRef = useCallback(
    (id: string) => (el: HTMLButtonElement | null) => {
      registerPlanetRef(id, el);
    },
    [registerPlanetRef]
  );

  return (
    <div
      aria-label="About Noranda Brown - solar system visualization showing life themes as planets"
      aria-roledescription="interactive solar system"
      className={twJoin(
        'relative mx-auto aspect-square w-full max-w-[700px] select-none',
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      )}
      ref={containerRef}
      role="application"
      {...dragHandlers}
    >
      <div
        className="absolute inset-0"
        style={{transform: `scale(${zoom})`, transformOrigin: 'center'}}
      >
        <Starfield />

        {/* Orbit rings + constellation lines */}
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-foreground">
          {ABOUT_DATA.planets.map((planet) => (
            <OrbitRing
              centerX={centerX}
              centerY={centerY}
              key={planet.id}
              radius={planet.orbitRadius * maxRadius}
            />
          ))}
          <ConstellationLines
            constellations={ABOUT_DATA.constellations}
            hoveredPlanetId={hoveredPlanetId}
            planetPositions={planetPositions}
          />
        </svg>

        <Sun
          data={ABOUT_DATA.sun}
          onClick={() => setSelectedPlanetId('sun')}
          sizeMultiplier={sizeMultiplier}
        />

        {ABOUT_DATA.planets.map((planet) => (
          <Planet
            isHovered={hoveredPlanetId === planet.id}
            isSelected={selectedPlanetId === planet.id}
            key={planet.id}
            onHover={setHoveredPlanetId}
            onSelect={setSelectedPlanetId}
            planet={planet}
            ref={handlePlanetRef(planet.id)}
            sizeMultiplier={sizeMultiplier}
          />
        ))}
      </div>

      {/* Planet card dialog */}
      <PlanetCard
        onClose={() => setSelectedPlanetId(null)}
        open={!!selectedPlanetId}
        planet={selectedPlanet}
        sun={ABOUT_DATA.sun}
      />
    </div>
  );
};
