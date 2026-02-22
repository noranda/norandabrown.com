import {
  type IconDefinition,
  faFont,
  faPalette,
  faRulerCombined,
} from '@fortawesome/free-solid-svg-icons';

export type ColorGroup = {
  colors: ColorToken[];
  name: string;
};

export type ColorToken = {
  darkValue: string;
  lightValue: string;
  name: string;
  variable: string;
};

export type DesignTokenSection = {
  description: string;
  icon: IconDefinition;
  id: string;
  name: string;
};

export type FontFamily = {
  className: string;
  name: string;
  sample: string;
  variable: string;
};

export type FontSize = {
  className: string;
  label: string;
  pixels: string;
};

export type SpacingValue = {
  label: string;
  pixels: number;
  tailwind: string;
};

export const COLOR_GROUPS: ColorGroup[] = [
  {
    colors: [
      {
        darkValue: 'oklch(0.145 0 0)',
        lightValue: 'oklch(1 0 0)',
        name: 'background',
        variable: '--background',
      },
      {
        darkValue: 'oklch(0.985 0 0)',
        lightValue: 'oklch(0.145 0 0)',
        name: 'foreground',
        variable: '--foreground',
      },
      {darkValue: 'oklch(0.205 0 0)', lightValue: 'oklch(1 0 0)', name: 'card', variable: '--card'},
      {
        darkValue: 'oklch(0.985 0 0)',
        lightValue: 'oklch(0.145 0 0)',
        name: 'card-foreground',
        variable: '--card-foreground',
      },
      {
        darkValue: 'oklch(0.205 0 0)',
        lightValue: 'oklch(1 0 0)',
        name: 'popover',
        variable: '--popover',
      },
      {
        darkValue: 'oklch(0.985 0 0)',
        lightValue: 'oklch(0.145 0 0)',
        name: 'popover-foreground',
        variable: '--popover-foreground',
      },
    ],
    name: 'Core',
  },
  {
    colors: [
      {
        darkValue: 'oklch(0.558 0.288 302.321)',
        lightValue: 'oklch(0.558 0.288 302.321)',
        name: 'brand',
        variable: '--brand',
      },
      {
        darkValue: 'oklch(0.592 0.249 0.584)',
        lightValue: 'oklch(0.592 0.249 0.584)',
        name: 'brand-accent',
        variable: '--brand-accent',
      },
      {
        darkValue: 'oklch(1 0 0)',
        lightValue: 'oklch(1 0 0)',
        name: 'brand-foreground',
        variable: '--brand-foreground',
      },
    ],
    name: 'Brand',
  },
  {
    colors: [
      {
        darkValue: 'oklch(0.704 0.191 22.216)',
        lightValue: 'oklch(0.577 0.245 27.325)',
        name: 'destructive',
        variable: '--destructive',
      },
      {
        darkValue: 'oklch(1 0 0)',
        lightValue: 'oklch(1 0 0)',
        name: 'destructive-foreground',
        variable: '--destructive-foreground',
      },
      {
        darkValue: 'oklch(0.606 0.25 292.717)',
        lightValue: 'oklch(0.606 0.25 292.717)',
        name: 'info',
        variable: '--info',
      },
      {
        darkValue: 'oklch(0.696 0.17 162.48)',
        lightValue: 'oklch(0.696 0.17 162.48)',
        name: 'success',
        variable: '--success',
      },
      {
        darkValue: 'oklch(0.775 0.152 160.032)',
        lightValue: 'oklch(0.448 0.119 151.328)',
        name: 'success-foreground',
        variable: '--success-foreground',
      },
      {
        darkValue: 'oklch(0.266 0.065 152.934 / 30%)',
        lightValue: 'oklch(0.962 0.044 166.913)',
        name: 'success-muted',
        variable: '--success-muted',
      },
      {
        darkValue: 'oklch(0.769 0.188 70.08)',
        lightValue: 'oklch(0.769 0.188 70.08)',
        name: 'warning',
        variable: '--warning',
      },
    ],
    name: 'Status',
  },
  {
    colors: [
      {
        darkValue: 'oklch(0.269 0 0)',
        lightValue: 'oklch(0.97 0 0)',
        name: 'accent',
        variable: '--accent',
      },
      {
        darkValue: 'oklch(0.985 0 0)',
        lightValue: 'oklch(0.205 0 0)',
        name: 'accent-foreground',
        variable: '--accent-foreground',
      },
      {
        darkValue: 'oklch(1 0 0 / 10%)',
        lightValue: 'oklch(0.922 0 0)',
        name: 'border',
        variable: '--border',
      },
      {
        darkValue: 'oklch(1 0 0 / 15%)',
        lightValue: 'oklch(0.922 0 0)',
        name: 'input',
        variable: '--input',
      },
      {
        darkValue: 'oklch(0.269 0 0)',
        lightValue: 'oklch(0.97 0 0)',
        name: 'muted',
        variable: '--muted',
      },
      {
        darkValue: 'oklch(0.708 0 0)',
        lightValue: 'oklch(0.556 0 0)',
        name: 'muted-foreground',
        variable: '--muted-foreground',
      },
      {
        darkValue: 'oklch(0.922 0 0)',
        lightValue: 'oklch(0.205 0 0)',
        name: 'primary',
        variable: '--primary',
      },
      {
        darkValue: 'oklch(0.205 0 0)',
        lightValue: 'oklch(0.985 0 0)',
        name: 'primary-foreground',
        variable: '--primary-foreground',
      },
      {
        darkValue: 'oklch(0.556 0 0)',
        lightValue: 'oklch(0.708 0 0)',
        name: 'ring',
        variable: '--ring',
      },
      {
        darkValue: 'oklch(0.269 0 0)',
        lightValue: 'oklch(0.97 0 0)',
        name: 'secondary',
        variable: '--secondary',
      },
      {
        darkValue: 'oklch(0.985 0 0)',
        lightValue: 'oklch(0.205 0 0)',
        name: 'secondary-foreground',
        variable: '--secondary-foreground',
      },
    ],
    name: 'Semantic',
  },
  {
    colors: [
      {
        darkValue: 'oklch(0.488 0.243 264.376)',
        lightValue: 'oklch(0.646 0.222 41.116)',
        name: 'chart-1',
        variable: '--chart-1',
      },
      {
        darkValue: 'oklch(0.696 0.17 162.48)',
        lightValue: 'oklch(0.6 0.118 184.704)',
        name: 'chart-2',
        variable: '--chart-2',
      },
      {
        darkValue: 'oklch(0.769 0.188 70.08)',
        lightValue: 'oklch(0.398 0.07 227.392)',
        name: 'chart-3',
        variable: '--chart-3',
      },
      {
        darkValue: 'oklch(0.627 0.265 303.9)',
        lightValue: 'oklch(0.828 0.189 84.429)',
        name: 'chart-4',
        variable: '--chart-4',
      },
      {
        darkValue: 'oklch(0.645 0.246 16.439)',
        lightValue: 'oklch(0.769 0.188 70.08)',
        name: 'chart-5',
        variable: '--chart-5',
      },
    ],
    name: 'Chart',
  },
  {
    colors: [
      {
        darkValue: 'oklch(0.205 0 0)',
        lightValue: 'oklch(0.985 0 0)',
        name: 'sidebar',
        variable: '--sidebar',
      },
      {
        darkValue: 'oklch(0.269 0 0)',
        lightValue: 'oklch(0.97 0 0)',
        name: 'sidebar-accent',
        variable: '--sidebar-accent',
      },
      {
        darkValue: 'oklch(0.985 0 0)',
        lightValue: 'oklch(0.205 0 0)',
        name: 'sidebar-accent-foreground',
        variable: '--sidebar-accent-foreground',
      },
      {
        darkValue: 'oklch(1 0 0 / 10%)',
        lightValue: 'oklch(0.922 0 0)',
        name: 'sidebar-border',
        variable: '--sidebar-border',
      },
      {
        darkValue: 'oklch(0.985 0 0)',
        lightValue: 'oklch(0.145 0 0)',
        name: 'sidebar-foreground',
        variable: '--sidebar-foreground',
      },
      {
        darkValue: 'oklch(0.488 0.243 264.376)',
        lightValue: 'oklch(0.205 0 0)',
        name: 'sidebar-primary',
        variable: '--sidebar-primary',
      },
      {
        darkValue: 'oklch(0.985 0 0)',
        lightValue: 'oklch(0.985 0 0)',
        name: 'sidebar-primary-foreground',
        variable: '--sidebar-primary-foreground',
      },
      {
        darkValue: 'oklch(0.556 0 0)',
        lightValue: 'oklch(0.708 0 0)',
        name: 'sidebar-ring',
        variable: '--sidebar-ring',
      },
    ],
    name: 'Sidebar',
  },
];

export const DESIGN_TOKEN_SECTIONS: DesignTokenSection[] = [
  {
    description:
      'The semantic color system - every shade adapts to light and dark mode automatically.',
    icon: faPalette,
    id: 'colors',
    name: 'Colors',
  },
  {
    description:
      'Two font families, a deliberate size scale, and enough weight options to express hierarchy.',
    icon: faFont,
    id: 'typography',
    name: 'Typography',
  },
  {
    description:
      'A consistent spacing scale built on 4px increments - the invisible grid that holds everything together.',
    icon: faRulerCombined,
    id: 'spacing',
    name: 'Spacing',
  },
];

export const FONT_FAMILIES: FontFamily[] = [
  {
    className: 'font-display',
    name: 'Playfair Display',
    sample: 'The quick brown fox jumps over the lazy dog',
    variable: '--font-display',
  },
  {
    className: 'font-sans',
    name: 'Figtree',
    sample: 'The quick brown fox jumps over the lazy dog',
    variable: '--font-sans',
  },
];

export const FONT_SIZES: FontSize[] = [
  {className: 'text-base', label: 'text-base', pixels: '16px'},
  {className: 'text-lg', label: 'text-lg', pixels: '18px'},
  {className: 'text-xl', label: 'text-xl', pixels: '20px'},
  {className: 'text-2xl', label: 'text-2xl', pixels: '24px'},
  {className: 'text-3xl', label: 'text-3xl', pixels: '30px'},
  {className: 'text-4xl', label: 'text-4xl', pixels: '36px'},
  {className: 'text-5xl', label: 'text-5xl', pixels: '48px'},
  {className: 'text-6xl', label: 'text-6xl', pixels: '60px'},
];

export const SPACING_SCALE: SpacingValue[] = [
  {label: '1', pixels: 4, tailwind: '1'},
  {label: '2', pixels: 8, tailwind: '2'},
  {label: '3', pixels: 12, tailwind: '3'},
  {label: '4', pixels: 16, tailwind: '4'},
  {label: '6', pixels: 24, tailwind: '6'},
  {label: '8', pixels: 32, tailwind: '8'},
  {label: '12', pixels: 48, tailwind: '12'},
  {label: '16', pixels: 64, tailwind: '16'},
  {label: '24', pixels: 96, tailwind: '24'},
  {label: '32', pixels: 128, tailwind: '32'},
];
