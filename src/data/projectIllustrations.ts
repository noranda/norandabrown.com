type IllustrationColors = {
  primary: string;
  secondary: string;
};

type IllustrationConfig = {
  colors: IllustrationColors;
  pattern: 'blocks' | 'circuit' | 'constellation' | 'hexgrid' | 'mosaic' | 'pixels';
};

export const ILLUSTRATION_CONFIGS: Record<string, IllustrationConfig> = {
  'design-system-architecture': {
    colors: {
      primary: 'var(--brand)',
      secondary: 'var(--info)',
    },
    pattern: 'blocks',
  },
  'eureka-tracker': {
    colors: {
      primary: 'var(--info)',
      secondary: 'var(--success)',
    },
    pattern: 'constellation',
  },
  'mandragora-mania': {
    colors: {
      primary: 'var(--success)',
      secondary: 'var(--brand)',
    },
    pattern: 'mosaic',
  },
  portfolio: {
    colors: {
      primary: 'var(--brand)',
      secondary: 'var(--brand-warm)',
    },
    pattern: 'circuit',
  },
  'visual-testing-strategy': {
    colors: {
      primary: 'var(--brand-accent)',
      secondary: 'var(--brand)',
    },
    pattern: 'pixels',
  },
  'xiv-complete': {
    colors: {
      primary: 'var(--warning)',
      secondary: 'var(--brand-warm)',
    },
    pattern: 'hexgrid',
  },
};
