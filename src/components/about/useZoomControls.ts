import {useCallback, useEffect, useState} from 'react';

const KEYBOARD_ROTATION_STEP = 0.2;
const KEYBOARD_ZOOM_STEP = 0.1;
const WHEEL_ZOOM_SENSITIVITY = 0.001;
const ZOOM_MAX = 2.0;
const ZOOM_MIN = 0.5;

type UseZoomControlsReturn = {
  onWheel: (e: React.WheelEvent) => void;
  zoom: number;
};

export const useZoomControls = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  rotationRef: React.RefObject<number>
): UseZoomControlsReturn => {
  const [zoom, setZoom] = useState(1);

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((prev) =>
      Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, prev + e.deltaY * -WHEEL_ZOOM_SENSITIVITY))
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement)) return;

      if (e.key === '=' || e.key === '+') {
        e.preventDefault();
        setZoom((prev) => Math.min(ZOOM_MAX, prev + KEYBOARD_ZOOM_STEP));
      } else if (e.key === '-') {
        e.preventDefault();
        setZoom((prev) => Math.max(ZOOM_MIN, prev - KEYBOARD_ZOOM_STEP));
      } else if (e.shiftKey && e.key === 'ArrowLeft') {
        e.preventDefault();
        rotationRef.current -= KEYBOARD_ROTATION_STEP;
      } else if (e.shiftKey && e.key === 'ArrowRight') {
        e.preventDefault();
        rotationRef.current += KEYBOARD_ROTATION_STEP;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [containerRef, rotationRef]);

  return {onWheel, zoom};
};
