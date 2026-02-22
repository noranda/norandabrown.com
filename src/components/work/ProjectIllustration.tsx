import {twJoin} from 'tailwind-merge';

import {ILLUSTRATION_CONFIGS} from '@/data/projectIllustrations';

// ── Pattern: Blocks (Design System Architecture) ──
// Chaos on the left → organization on the right, representing the architecture story

const BlocksPattern = () => (
  <>
    {/* ── Left side: chaos - overlapping, rotated, messy ── */}
    <div className="absolute left-[3%] top-[8%] h-14 w-20 rotate-12 rounded-lg border border-brand-accent/25 bg-brand-accent/8 dark:border-brand-accent/40 dark:bg-brand-accent/15" />
    <div className="absolute left-[8%] top-[45%] h-10 w-16 -rotate-6 rounded-md border border-brand-accent/20 dark:border-brand-accent/35" />
    <div className="absolute left-[18%] top-[15%] h-12 w-14 rotate-[18deg] rounded-lg border border-brand-accent/30 bg-brand-accent/5 dark:border-brand-accent/45 dark:bg-brand-accent/10" />
    <div className="absolute bottom-[12%] left-[5%] h-8 w-22 -rotate-[10deg] rounded-md bg-brand-accent/10 dark:bg-brand-accent/18" />
    <div className="absolute left-[22%] top-[55%] h-6 w-10 rotate-[25deg] rounded-sm border border-brand-accent/15 dark:border-brand-accent/30" />
    <div className="absolute bottom-[30%] left-[12%] h-10 w-8 -rotate-[15deg] rounded-md border border-brand-accent/20 bg-brand-accent/6 dark:border-brand-accent/35 dark:bg-brand-accent/12" />

    {/* ── Center: transition / fade line ── */}
    <div className="absolute left-[42%] top-[10%] h-[80%] w-px bg-gradient-to-b from-transparent via-brand/20 to-transparent dark:via-brand/35" />

    {/* ── Right side: order - aligned grid of uniform blocks ── */}
    <div className="absolute right-[8%] top-[12%] grid grid-cols-3 gap-2.5">
      <div className="h-8 w-12 rounded-md border border-info/25 bg-info/8 dark:border-info/40 dark:bg-info/15" />
      <div className="h-8 w-12 rounded-md border border-info/25 bg-brand/8 dark:border-info/40 dark:bg-brand/15" />
      <div className="h-8 w-12 rounded-md border border-brand/25 bg-info/8 dark:border-brand/40 dark:bg-info/15" />
      <div className="h-8 w-12 rounded-md border border-brand/25 bg-brand/8 dark:border-brand/40 dark:bg-brand/15" />
      <div className="h-8 w-12 rounded-md border border-info/25 bg-info/8 dark:border-info/40 dark:bg-info/15" />
      <div className="h-8 w-12 rounded-md border border-info/25 bg-brand/8 dark:border-info/40 dark:bg-brand/15" />
      <div className="h-8 w-12 rounded-md border border-brand/25 bg-info/8 dark:border-brand/40 dark:bg-info/15" />
      <div className="h-8 w-12 rounded-md border border-brand/25 bg-brand/8 dark:border-brand/40 dark:bg-brand/15" />
      <div className="h-8 w-12 rounded-md border border-info/25 bg-info/8 dark:border-info/40 dark:bg-info/15" />
    </div>

    {/* ── Arrow hint in center ── */}
    <div className="absolute left-[46%] top-1/2 h-px w-[6%] -translate-y-1/2 bg-brand/25 dark:bg-brand/40" />
    <div className="absolute left-[51%] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-brand/25 dark:border-brand/40" />
  </>
);

// ── Pattern: Pixels (Visual Testing & Storybook) ──
// Chromatic-style snapshot comparison: baseline vs changed with diff highlights

const SnapshotFrame = ({children, label}: {children: React.ReactNode; label: string}) => (
  <div className="flex w-[42%] flex-col gap-1.5">
    <div className="text-[9px] font-medium tracking-wider text-brand-accent/40 dark:text-brand-accent/60">
      {label}
    </div>
    <div className="rounded-md border border-brand/15 bg-card/30 p-2.5 dark:border-brand/25 dark:bg-card/10">
      {children}
    </div>
  </div>
);

const PixelsPattern = () => (
  <div className="absolute inset-0 flex items-center justify-center gap-3 px-[6%]">
    {/* Baseline snapshot */}
    <SnapshotFrame label="BASELINE">
      <div className="space-y-1.5">
        <div className="h-2.5 w-3/4 rounded-sm bg-brand/12 dark:bg-brand/20" />
        <div className="h-2 w-full rounded-sm bg-brand/8 dark:bg-brand/14" />
        <div className="h-2 w-full rounded-sm bg-brand/8 dark:bg-brand/14" />
        <div className="flex gap-1.5">
          <div className="h-5 w-1/3 rounded-sm bg-brand/10 dark:bg-brand/16" />
          <div className="h-5 w-1/3 rounded-sm bg-brand/10 dark:bg-brand/16" />
          <div className="h-5 w-1/3 rounded-sm bg-brand/10 dark:bg-brand/16" />
        </div>
        <div className="h-2 w-5/6 rounded-sm bg-brand/8 dark:bg-brand/14" />
        <div className="h-3 w-1/4 rounded-sm bg-brand/12 dark:bg-brand/20" />
      </div>
    </SnapshotFrame>

    {/* Arrow */}
    <div className="flex flex-col items-center gap-1">
      <div className="h-px w-4 bg-brand/20 dark:bg-brand/35" />
      <div className="h-1.5 w-1.5 rotate-45 border-b border-r border-brand/20 dark:border-brand/35" />
    </div>

    {/* Changed snapshot with diff highlights */}
    <SnapshotFrame label="CHANGED">
      <div className="space-y-1.5">
        <div className="h-2.5 w-3/4 rounded-sm bg-brand/12 dark:bg-brand/20" />
        <div className="h-2 w-full rounded-sm bg-brand/8 dark:bg-brand/14" />
        <div className="h-2 w-full rounded-sm bg-brand/8 dark:bg-brand/14" />
        <div className="flex gap-1.5">
          {/* Diff: first card changed */}
          <div className="h-5 w-1/3 rounded-sm border border-brand-accent/50 bg-brand-accent/15 dark:border-brand-accent/70 dark:bg-brand-accent/25" />
          <div className="h-5 w-1/3 rounded-sm bg-brand/10 dark:bg-brand/16" />
          {/* Diff: third card changed */}
          <div className="h-5 w-1/3 rounded-sm border border-brand-accent/50 bg-brand-accent/15 dark:border-brand-accent/70 dark:bg-brand-accent/25" />
        </div>
        {/* Diff: text line changed */}
        <div className="h-2 w-5/6 rounded-sm border border-brand-accent/40 bg-brand-accent/10 dark:border-brand-accent/60 dark:bg-brand-accent/20" />
        <div className="h-3 w-1/4 rounded-sm bg-brand/12 dark:bg-brand/20" />
      </div>
    </SnapshotFrame>
  </div>
);

// ── Pattern: Circuit (This Portfolio) ──
// Meta browser frame showing a miniature portfolio layout with sparkle accents

const CircuitPattern = () => (
  <div className="absolute inset-0 flex items-center justify-center px-[8%]">
    {/* Browser frame */}
    <div className="relative w-full max-w-[480px] rounded-lg border border-brand/15 bg-card/20 dark:border-brand/30 dark:bg-card/10">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 border-b border-brand/10 px-3 py-1.5 dark:border-brand/20">
        <div className="h-1.5 w-1.5 rounded-full bg-brand-accent/30 dark:bg-brand-accent/50" />
        <div className="h-1.5 w-1.5 rounded-full bg-brand-warm/30 dark:bg-brand-warm/50" />
        <div className="h-1.5 w-1.5 rounded-full bg-brand/30 dark:bg-brand/50" />
        <div className="mx-auto h-1.5 w-24 rounded-full bg-brand/8 dark:bg-brand/15" />
      </div>

      {/* Page content */}
      <div className="space-y-2 p-3">
        {/* Nav bar */}
        <div className="flex items-center justify-between">
          <div className="h-1.5 w-10 rounded-sm bg-brand/15 dark:bg-brand/25" />
          <div className="flex gap-2">
            <div className="h-1.5 w-6 rounded-sm bg-brand/10 dark:bg-brand/18" />
            <div className="h-1.5 w-6 rounded-sm bg-brand/10 dark:bg-brand/18" />
            <div className="h-1.5 w-6 rounded-sm bg-brand/10 dark:bg-brand/18" />
            <div className="h-1.5 w-6 rounded-sm bg-brand/10 dark:bg-brand/18" />
          </div>
        </div>

        {/* Hero area */}
        <div className="space-y-1">
          <div className="h-2.5 w-2/5 rounded-sm bg-brand/15 dark:bg-brand/25" />
          <div className="h-1.5 w-3/4 rounded-sm bg-brand/8 dark:bg-brand/14" />
        </div>

        {/* Card grid */}
        <div className="flex gap-1.5">
          <div className="h-6 flex-1 rounded-sm bg-brand/8 dark:bg-brand/15" />
          <div className="h-6 flex-1 rounded-sm bg-brand-warm/8 dark:bg-brand-warm/15" />
          <div className="h-6 flex-1 rounded-sm bg-brand/8 dark:bg-brand/15" />
        </div>
      </div>
    </div>

    {/* Sparkle accents - easter eggs / gamification */}
    <div
      className="absolute right-[12%] top-[15%] h-2 w-2 rounded-full bg-brand-warm/40 dark:bg-brand-warm/60"
      style={{boxShadow: '0 0 8px oklch(0.702 0.183 58.722 / 0.3)'}}
    />
    <div
      className="absolute bottom-[18%] left-[15%] h-1.5 w-1.5 rounded-full bg-brand/35 dark:bg-brand/55"
      style={{boxShadow: '0 0 6px oklch(0.558 0.288 302.321 / 0.25)'}}
    />
    <div
      className="absolute bottom-[30%] right-[18%] h-1.5 w-1.5 rounded-full bg-brand-warm/30 dark:bg-brand-warm/50"
      style={{boxShadow: '0 0 6px oklch(0.702 0.183 58.722 / 0.2)'}}
    />
  </div>
);

// ── Pattern: Constellation (Eureka Tracker) ──
// Stars with connecting lines and glow - starfield, real-time connections

const STARS = [
  {glow: true, left: '15%', size: 'h-2.5 w-2.5', top: '20%'},
  {glow: false, left: '35%', size: 'h-2 w-2', top: '35%'},
  {glow: true, left: '55%', size: 'h-3 w-3', top: '15%'},
  {glow: false, left: '75%', size: 'h-2 w-2', top: '40%'},
  {glow: true, left: '25%', size: 'h-1.5 w-1.5', top: '65%'},
  {glow: false, left: '60%', size: 'h-2 w-2', top: '60%'},
  {glow: true, left: '85%', size: 'h-2 w-2', top: '25%'},
  {glow: false, left: '45%', size: 'h-1.5 w-1.5', top: '80%'},
  {glow: false, left: '10%', size: 'h-1.5 w-1.5', top: '50%'},
];

const STAR_LINES = [
  {left: '16%', rotate: 'rotate-[12deg]', top: '22%', width: 'w-[22%]'},
  {left: '36%', rotate: '-rotate-[15deg]', top: '36%', width: 'w-[22%]'},
  {left: '56%', rotate: 'rotate-[30deg]', top: '17%', width: 'w-[22%]'},
  {left: '26%', rotate: '-rotate-[8deg]', top: '66%', width: 'w-[20%]'},
  {left: '61%', rotate: 'rotate-[20deg]', top: '61%', width: 'w-[18%]'},
];

const ConstellationPattern = () => (
  <>
    {STARS.map((star, i) => (
      <div
        className={twJoin(
          'absolute rounded-full',
          star.size,
          i % 2 === 0 ? 'bg-info/35 dark:bg-info/55' : 'bg-success/30 dark:bg-success/50'
        )}
        key={i}
        style={{
          boxShadow: star.glow ? '0 0 8px oklch(0.606 0.25 292.717 / 0.25)' : undefined,
          left: star.left,
          top: star.top,
        }}
      />
    ))}
    {STAR_LINES.map((line, i) => (
      <div
        className={twJoin(
          'absolute h-px origin-left',
          line.width,
          line.rotate,
          i % 2 === 0 ? 'bg-info/12 dark:bg-info/22' : 'bg-success/10 dark:bg-success/20'
        )}
        key={i}
        style={{left: line.left, top: line.top}}
      />
    ))}
  </>
);

// ── Pattern: Hex Grid (XIV-Complete) ──
// Hexagons in honeycomb layout - completion tracking cells

const HEX_CLIP = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
const FILLED_HEXES = new Set([0, 2, 3, 5, 7, 9, 10]);

const HexGridPattern = () => (
  <div className="absolute inset-0 flex items-center justify-center p-3">
    <div className="flex max-w-[220px] flex-wrap justify-center gap-1.5">
      {Array.from({length: 12}, (_, i) => (
        <div
          className={twJoin(
            'h-9 w-10',
            FILLED_HEXES.has(i)
              ? 'bg-warning/25 dark:bg-warning/40'
              : 'bg-brand-warm/8 dark:bg-brand-warm/15'
          )}
          key={i}
          style={{clipPath: HEX_CLIP}}
        />
      ))}
    </div>
  </div>
);

// ── Pattern: Mosaic / Game Board (Mandragora Mania) ──
// Alternating colored tiles with "placed pieces" - strategy board

const PIECES = new Set([6, 8, 12, 16, 18]);

const MosaicPattern = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="grid -rotate-6 grid-cols-5 gap-1.5">
      {Array.from({length: 25}, (_, i) => (
        <div
          className={twJoin(
            'h-7 w-7 rounded-sm',
            PIECES.has(i)
              ? 'border border-success/40 bg-success/25 dark:border-success/55 dark:bg-success/35'
              : i % 2 === 0
                ? 'bg-brand/8 dark:bg-brand/15'
                : 'bg-success/6 dark:bg-success/12'
          )}
          key={i}
        />
      ))}
    </div>
  </div>
);

// ── Pattern Map ──

const PATTERNS: Record<string, () => React.JSX.Element> = {
  blocks: BlocksPattern,
  circuit: CircuitPattern,
  constellation: ConstellationPattern,
  hexgrid: HexGridPattern,
  mosaic: MosaicPattern,
  pixels: PixelsPattern,
};

// ── Gradient Classes ──
// Tailwind can't interpolate dynamic class names, so we map each pattern to its gradient classes

const GRADIENT_CLASSES: Record<string, string> = {
  blocks: 'from-brand/5 to-info/8 dark:from-brand/12 dark:to-info/15',
  circuit: 'from-brand/5 to-brand-warm/8 dark:from-brand/12 dark:to-brand-warm/15',
  constellation: 'from-info/5 to-success/8 dark:from-info/12 dark:to-success/15',
  hexgrid: 'from-warning/5 to-brand-warm/8 dark:from-warning/12 dark:to-brand-warm/15',
  mosaic: 'from-success/5 to-brand/8 dark:from-success/12 dark:to-brand/15',
  pixels: 'from-brand-accent/5 to-brand/8 dark:from-brand-accent/12 dark:to-brand/15',
};

// ── Main Component ──

type ProjectIllustrationProps = {
  projectId: string;
  variant: 'card' | 'section';
};

export const ProjectIllustration = ({projectId, variant}: ProjectIllustrationProps) => {
  const config = ILLUSTRATION_CONFIGS[projectId];
  if (!config) return null;

  const Pattern = PATTERNS[config.pattern];
  if (!Pattern) return null;

  return (
    <div
      aria-hidden="true"
      className={twJoin(
        'relative overflow-hidden bg-gradient-to-br',
        GRADIENT_CLASSES[config.pattern],
        variant === 'card' ? 'h-32 rounded-t-3xl' : 'h-40 rounded-2xl'
      )}
    >
      <Pattern />
    </div>
  );
};
