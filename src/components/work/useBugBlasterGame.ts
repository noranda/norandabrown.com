import {useCallback, useEffect, useRef, useState} from 'react';

import {
  ARROW_SPEED,
  BUG_SIZE,
  type Bug,
  CANVAS_HEIGHT,
  CATCH_TOLERANCE,
  GAME_DURATION_S,
  type GameState,
  HIGH_SCORE_KEY,
  MAX_BUGS,
  NET_HEIGHT,
  NET_WIDTH,
  SPAWN_INTERVAL_MS,
  getRandomFact,
} from '@/data/bugBlaster';
import {getStorageItem, setStorageItem} from '@/utils/localStorage';

export const useBugBlasterGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const factLogRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef(0);
  const bugsRef = useRef<Bug[]>([]);
  const canvasWidthRef = useRef(600);
  const escapedRef = useRef(0);
  const gameStateRef = useRef<GameState>('idle');
  const highScoreRef = useRef(getStorageItem(HIGH_SCORE_KEY, 0));
  const lastSpawnRef = useRef(0);
  const netXRef = useRef(0);
  const nextBugIdRef = useRef(0);
  const scoreRef = useRef(0);
  const startTimeRef = useRef(0);
  const usedFactIds = useRef(new Set<string>());

  const [canvasWidth, setCanvasWidth] = useState(600);
  const [escaped, setEscaped] = useState(0);
  const [facts, setFacts] = useState<string[]>([]);
  const [gameState, setGameState] = useState<GameState>('idle');
  const [highScore, setHighScore] = useState(() => getStorageItem(HIGH_SCORE_KEY, 0));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION_S);

  const updateGameState = useCallback((state: GameState) => {
    gameStateRef.current = state;
    setGameState(state);
  }, []);

  // Responsive canvas width
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const w = Math.floor(entry.contentRect.width);
      canvasWidthRef.current = w;
      setCanvasWidth(w);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const addFact = useCallback(() => {
    const fact = getRandomFact(usedFactIds.current);
    setFacts((prev) => [fact, ...prev]);
    requestAnimationFrame(() => {
      if (factLogRef.current) factLogRef.current.scrollTop = 0;
    });
  }, []);

  // Animation loop - uses refs to avoid stale closures
  useEffect(() => {
    if (gameState !== 'playing') return;

    // Read design tokens once for canvas rendering
    const styles = getComputedStyle(document.documentElement);
    const brandColor = styles.getPropertyValue('--brand').trim();
    const brandAccentColor = styles.getPropertyValue('--brand-accent').trim();
    const brandFgColor = styles.getPropertyValue('--brand-foreground').trim();
    const fontSans = styles.getPropertyValue('--font-sans').trim();

    const tick = (now: number) => {
      if (gameStateRef.current !== 'playing') return;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = canvasWidthRef.current;
      const elapsed = (now - startTimeRef.current) / 1000;
      const remaining = Math.max(0, GAME_DURATION_S - elapsed);
      setTimeLeft(Math.ceil(remaining));

      if (remaining <= 0) {
        const finalScore = scoreRef.current;
        if (finalScore > highScoreRef.current) {
          highScoreRef.current = finalScore;
          setHighScore(finalScore);
          setStorageItem(HIGH_SCORE_KEY, finalScore);
        }
        updateGameState('over');
        return;
      }

      // Spawn bugs
      if (now - lastSpawnRef.current >= SPAWN_INTERVAL_MS && bugsRef.current.length < MAX_BUGS) {
        lastSpawnRef.current = now;
        bugsRef.current.push({
          id: nextBugIdRef.current++,
          speed: 1 + Math.random() * 2,
          x: BUG_SIZE + Math.random() * (width - BUG_SIZE * 2),
          y: -BUG_SIZE,
        });
      }

      // Update bug positions and track escaped bugs
      const updated: Bug[] = [];
      for (const bug of bugsRef.current) {
        const newY = bug.y + bug.speed;
        if (newY >= CANVAS_HEIGHT + BUG_SIZE) {
          escapedRef.current += 1;
          setEscaped(escapedRef.current);
        } else {
          updated.push({...bug, y: newY});
        }
      }
      bugsRef.current = updated;

      // Check collisions
      const netX = netXRef.current;
      const netY = CANVAS_HEIGHT - NET_HEIGHT;
      const caught: number[] = [];

      for (const bug of bugsRef.current) {
        if (
          bug.x > netX - NET_WIDTH / 2 - CATCH_TOLERANCE &&
          bug.x < netX + NET_WIDTH / 2 + CATCH_TOLERANCE &&
          bug.y > netY - CATCH_TOLERANCE &&
          bug.y < netY + NET_HEIGHT
        ) {
          caught.push(bug.id);
        }
      }

      if (caught.length > 0) {
        bugsRef.current = bugsRef.current.filter((b) => !caught.includes(b.id));
        scoreRef.current += caught.length;
        setScore(scoreRef.current);
        addFact();
      }

      // Draw
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, width * dpr, CANVAS_HEIGHT * dpr);
      ctx.save();
      ctx.scale(dpr, dpr);

      // Bugs
      ctx.font = `${BUG_SIZE}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (const bug of bugsRef.current) {
        ctx.fillText('\u{1F41B}', bug.x, bug.y);
      }

      // Net
      const gradient = ctx.createLinearGradient(
        netX - NET_WIDTH / 2,
        netY,
        netX + NET_WIDTH / 2,
        netY
      );
      gradient.addColorStop(0, brandColor);
      gradient.addColorStop(1, brandAccentColor);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(netX - NET_WIDTH / 2, netY, NET_WIDTH, NET_HEIGHT, 4);
      ctx.fill();

      // Net label
      ctx.fillStyle = brandFgColor;
      ctx.font = `bold 10px ${fontSans}`;
      ctx.fillText('catch(e)', netX, netY + NET_HEIGHT / 2 + 1);

      ctx.restore();

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [addFact, gameState, updateGameState]);

  const startGame = useCallback(() => {
    bugsRef.current = [];
    escapedRef.current = 0;
    scoreRef.current = 0;
    nextBugIdRef.current = 0;
    lastSpawnRef.current = 0;
    usedFactIds.current.clear();
    setEscaped(0);
    setFacts([]);
    setScore(0);
    setTimeLeft(GAME_DURATION_S);
    startTimeRef.current = performance.now();
    updateGameState('playing');
  }, [updateGameState]);

  const stopGame = useCallback(() => {
    updateGameState('over');
  }, [updateGameState]);

  // Pointer movement
  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (gameStateRef.current !== 'playing') return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const width = canvasWidthRef.current;
    netXRef.current = Math.max(
      NET_WIDTH / 2,
      Math.min(width - NET_WIDTH / 2, e.clientX - rect.left)
    );
  }, []);

  // Keyboard controls
  useEffect(() => {
    if (gameState !== 'playing') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const width = canvasWidthRef.current;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        netXRef.current = Math.max(NET_WIDTH / 2, netXRef.current - ARROW_SPEED);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        netXRef.current = Math.min(width - NET_WIDTH / 2, netXRef.current + ARROW_SPEED);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState]);

  // Canvas DPR setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvasWidth * dpr;
    canvas.height = CANVAS_HEIGHT * dpr;
  }, [canvasWidth]);

  // Initialize net position to center
  useEffect(() => {
    netXRef.current = canvasWidth / 2;
  }, [canvasWidth]);

  return {
    canvasRef,
    containerRef,
    escaped,
    factLogRef,
    facts,
    gameState,
    handlePointerMove,
    highScore,
    score,
    startGame,
    stopGame,
    timeLeft,
  };
};
