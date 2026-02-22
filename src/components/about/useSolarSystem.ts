import {useCallback, useEffect, useRef, useState} from 'react';

import {type AboutData, type PlanetData, type Position} from '@/data/about';

import {useDragRotation} from './useDragRotation';
import {useZoomControls} from './useZoomControls';

const BREAKPOINT_MD = 768;
const BREAKPOINT_SM = 480;
const MAX_RADIUS_FACTOR = 0.92;
const SIZE_MULTIPLIER_MD = 0.85;
const SIZE_MULTIPLIER_SM = 0.7;
const STATE_SYNC_INTERVAL = 16;

type UseSolarSystemReturn = {
  centerX: number;
  centerY: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  dragHandlers: {
    onMouseDown: (e: React.MouseEvent) => void;
    onMouseMove: (e: React.MouseEvent) => void;
    onMouseUp: () => void;
    onTouchEnd: () => void;
    onTouchMove: (e: React.TouchEvent) => void;
    onTouchStart: (e: React.TouchEvent) => void;
    onWheel: (e: React.WheelEvent) => void;
  };
  hoveredPlanetId: string | null;
  isDragging: boolean;
  maxRadius: number;
  planetPositions: Map<string, Position>;
  prefersReducedMotion: boolean;
  registerPlanetRef: (id: string, el: HTMLButtonElement | null) => void;
  selectedPlanetId: string | null;
  setHoveredPlanetId: (id: string | null) => void;
  setSelectedPlanetId: (id: string | null) => void;
  sizeMultiplier: number;
  zoom: number;
};

const computePosition = (
  planet: PlanetData,
  elapsed: number,
  rotationOffset: number,
  centerX: number,
  centerY: number,
  maxRadius: number
): Position => {
  const omega = (2 * Math.PI) / planet.orbitDuration;
  const angle = planet.startAngle + elapsed * omega + rotationOffset;
  const radius = planet.orbitRadius * maxRadius;
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle),
  };
};

export const useSolarSystem = (data: AboutData): UseSolarSystemReturn => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const planetRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const positionsRef = useRef<Map<string, Position>>(new Map());
  const rotationRef = useRef(0);
  const animFrameRef = useRef(0);

  const [containerSize, setContainerSize] = useState({height: 0, width: 0});
  const [hoveredPlanetId, setHoveredPlanetId] = useState<string | null>(null);
  const [positions, setPositions] = useState<Map<string, Position>>(new Map());
  const [selectedPlanetId, setSelectedPlanetId] = useState<string | null>(null);

  const {dragHandlers: dragRotationHandlers, isDragging} = useDragRotation(rotationRef);
  const {onWheel, zoom} = useZoomControls(containerRef, rotationRef);

  // Reduced motion detection
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // ResizeObserver for responsive container sizing
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const {height, width} = entry.contentRect;
      setContainerSize({height, width});
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const centerX = containerSize.width / 2;
  const centerY = containerSize.height / 2;
  const maxRadius = Math.min(centerX, centerY) * MAX_RADIUS_FACTOR;
  const sizeMultiplier =
    containerSize.width < BREAKPOINT_SM
      ? SIZE_MULTIPLIER_SM
      : containerSize.width < BREAKPOINT_MD
        ? SIZE_MULTIPLIER_MD
        : 1;

  const registerPlanetRef = useCallback((id: string, el: HTMLButtonElement | null) => {
    if (el) planetRefs.current.set(id, el);
    else planetRefs.current.delete(id);
  }, []);

  // Animation loop
  useEffect(() => {
    if (containerSize.width === 0) return;

    const updatePositions = (elapsed: number) => {
      const newPositions = new Map<string, Position>();

      for (const planet of data.planets) {
        const pos = computePosition(
          planet,
          elapsed,
          rotationRef.current,
          centerX,
          centerY,
          maxRadius
        );
        newPositions.set(planet.id, pos);
        positionsRef.current.set(planet.id, pos);

        const el = planetRefs.current.get(planet.id);
        if (el) {
          const size = planet.size * sizeMultiplier;
          el.style.left = `${pos.x - size / 2}px`;
          el.style.top = `${pos.y - size / 2}px`;
        }
      }

      return newPositions;
    };

    if (prefersReducedMotion) {
      animFrameRef.current = requestAnimationFrame(() => {
        setPositions(updatePositions(0));
      });
      return () => cancelAnimationFrame(animFrameRef.current);
    }

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const newPositions = updatePositions(elapsed);

      if (Math.round(elapsed * 60) % STATE_SYNC_INTERVAL === 0) {
        setPositions(new Map(newPositions));
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [
    centerX,
    centerY,
    containerSize.width,
    data.planets,
    maxRadius,
    prefersReducedMotion,
    sizeMultiplier,
  ]);

  return {
    centerX,
    centerY,
    containerRef,
    dragHandlers: {
      ...dragRotationHandlers,
      onWheel,
    },
    hoveredPlanetId,
    isDragging,
    maxRadius,
    planetPositions: positions,
    prefersReducedMotion,
    registerPlanetRef,
    selectedPlanetId,
    setHoveredPlanetId,
    setSelectedPlanetId,
    sizeMultiplier,
    zoom,
  };
};
