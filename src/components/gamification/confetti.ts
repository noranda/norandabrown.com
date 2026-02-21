import confetti from 'canvas-confetti';

const COLORS = ['#7C3AED', '#E11D48', '#F59E0B', '#10B981', '#8B5CF6', '#EC4899', '#F97316'];

export const fireBatConfetti = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const bat = confetti.shapeFromText({scalar: 3, text: '🦇'});

  // Shared flight physics — decay near 1 = constant speed glide
  const flightBase = {
    decay: 0.998,
    flat: false,
    gravity: 0.05,
    scalar: 3,
    shapes: [bat],
    startVelocity: 8,
    ticks: 800,
  };

  // Wave 1 — first scouts from each side
  confetti({...flightBase, angle: 355, drift: 1.5, origin: {x: -0.1, y: 0.3}, particleCount: 12, spread: 15});
  confetti({...flightBase, angle: 185, drift: -1.5, origin: {x: 1.1, y: 0.4}, particleCount: 12, spread: 15});

  // Wave 2 — main swarm (staggered for flock feel)
  setTimeout(() => {
    confetti({...flightBase, angle: 5, drift: 1, origin: {x: -0.1, y: 0.4}, particleCount: 20, spread: 25});
    confetti({...flightBase, angle: 350, drift: 2, origin: {x: -0.1, y: 0.6}, particleCount: 20, spread: 25});
    confetti({...flightBase, angle: 175, drift: -1, origin: {x: 1.1, y: 0.5}, particleCount: 20, spread: 25});
    confetti({...flightBase, angle: 190, drift: -2, origin: {x: 1.1, y: 0.7}, particleCount: 20, spread: 25});
  }, 200);

  // Wave 3 — stragglers
  setTimeout(() => {
    confetti({...flightBase, angle: 0, drift: 2, origin: {x: -0.1, y: 0.5}, particleCount: 15, spread: 20});
    confetti({...flightBase, angle: 180, drift: -2, origin: {x: 1.1, y: 0.5}, particleCount: 15, spread: 20});
  }, 500);

  // Wave 4 — last few racing to catch up
  setTimeout(() => {
    confetti({...flightBase, angle: 358, drift: 1.5, origin: {x: -0.1, y: 0.45}, particleCount: 10, spread: 15});
    confetti({...flightBase, angle: 182, drift: -1.5, origin: {x: 1.1, y: 0.55}, particleCount: 10, spread: 15});
  }, 750);
};

export const fireConfetti = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Left cannon
  confetti({
    angle: 60,
    colors: COLORS,
    decay: 0.92,
    gravity: 1,
    origin: {x: 0, y: 1},
    particleCount: 120,
    scalar: 1.2,
    spread: 70,
    startVelocity: 55,
    ticks: 300,
  });

  // Right cannon
  confetti({
    angle: 120,
    colors: COLORS,
    decay: 0.92,
    gravity: 1,
    origin: {x: 1, y: 1},
    particleCount: 120,
    scalar: 1.2,
    spread: 70,
    startVelocity: 55,
    ticks: 300,
  });

  // Center burst (delayed)
  setTimeout(() => {
    confetti({
      colors: COLORS,
      decay: 0.9,
      gravity: 1,
      origin: {x: 0.5, y: 0.5},
      particleCount: 80,
      scalar: 1,
      spread: 360,
      startVelocity: 40,
      ticks: 250,
    });
  }, 200);
};
