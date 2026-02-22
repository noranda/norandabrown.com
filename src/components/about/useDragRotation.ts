import {useCallback, useRef, useState} from 'react';

const DRAG_SENSITIVITY = 0.005;

type DragHandlers = {
  onMouseDown: (e: React.MouseEvent) => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseUp: () => void;
  onTouchEnd: () => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchStart: (e: React.TouchEvent) => void;
};

type UseDragRotationReturn = {
  dragHandlers: DragHandlers;
  isDragging: boolean;
};

export const useDragRotation = (rotationRef: React.RefObject<number>): UseDragRotationReturn => {
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const dragStartRotationRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest('button')) return;
      isDraggingRef.current = true;
      dragStartXRef.current = e.clientX;
      dragStartRotationRef.current = rotationRef.current;
      setIsDragging(true);
    },
    [rotationRef]
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - dragStartXRef.current;
      rotationRef.current = dragStartRotationRef.current + deltaX * DRAG_SENSITIVITY;
    },
    [rotationRef]
  );

  const onMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    setIsDragging(false);
  }, []);

  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if ((e.target as HTMLElement).closest('button')) return;
      isDraggingRef.current = true;
      dragStartXRef.current = e.touches[0].clientX;
      dragStartYRef.current = e.touches[0].clientY;
      dragStartRotationRef.current = rotationRef.current;
      setIsDragging(true);
    },
    [rotationRef]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.touches[0].clientX - dragStartXRef.current;
      const deltaY = e.touches[0].clientY - dragStartYRef.current;
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
        rotationRef.current = dragStartRotationRef.current + deltaX * DRAG_SENSITIVITY;
      }
    },
    [rotationRef]
  );

  const onTouchEnd = useCallback(() => {
    isDraggingRef.current = false;
    setIsDragging(false);
  }, []);

  return {
    dragHandlers: {
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
    },
    isDragging,
  };
};
