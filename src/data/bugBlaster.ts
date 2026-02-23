import {BUG_BLASTER_FACTS} from '@/data/humorContent';

// --- Types ---

export type Bug = {
  id: number;
  speed: number;
  x: number;
  y: number;
};

export type GameState = 'idle' | 'over' | 'playing';

// --- Game configuration constants ---

export const ARROW_SPEED = 12;
export const BUG_SIZE = 28;
export const CANVAS_HEIGHT = 400;
export const CATCH_TOLERANCE = 8;
export const GAME_DURATION_S = 30;
export const HIGH_SCORE_KEY = 'bug-blaster-high-score';
export const MAX_BUGS = 8;
export const NET_HEIGHT = 16;
export const NET_WIDTH = 80;
export const SPAWN_INTERVAL_MS = 800;

// --- Label data ---

const ESCAPED_LABELS = [
  {label: 'All bugs contained. Ship it.', max: 0},
  {label: 'A few got away. Acceptable losses.', max: 5},
  {label: "That's a lot of escaped bugs. Filing a Jira ticket.", max: 10},
  {label: 'More bugs escaped than caught. Classic Friday deploy.', max: 20},
  {label: 'The bugs have formed a union.', max: Infinity},
];

const SCORE_LABELS = [
  {label: 'Still fewer bugs than prod.', min: 0},
  {label: 'QA would be proud. Maybe.', min: 3},
  {label: "You're basically a linter now.", min: 6},
  {label: 'Chromatic could never.', min: 10},
  {label: 'Senior Bug Exterminator.', min: 15},
  {label: "Ok you're just showing off.", min: 20},
];

// --- Pure utility functions ---

export const getEscapedLabel = (escaped: number): string => {
  for (const entry of ESCAPED_LABELS) {
    if (escaped <= entry.max) return entry.label;
  }
  return ESCAPED_LABELS[ESCAPED_LABELS.length - 1].label;
};

export const getRandomFact = (usedIds: Set<string>): string => {
  const available = BUG_BLASTER_FACTS.filter((f) => !usedIds.has(f.id));
  const pool = available.length > 0 ? available : BUG_BLASTER_FACTS;
  const fact = pool[Math.floor(Math.random() * pool.length)];
  usedIds.add(fact.id);
  return fact.fact;
};

export const getScoreLabel = (score: number): string => {
  for (let i = SCORE_LABELS.length - 1; i >= 0; i--) {
    if (score >= SCORE_LABELS[i].min) return SCORE_LABELS[i].label;
  }
  return SCORE_LABELS[0].label;
};
