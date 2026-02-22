import {
  faCode,
  faDice,
  faFlask,
  faMountain,
  faPalette,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import {type IconDefinition} from '@fortawesome/free-solid-svg-icons';

export type AboutData = {
  constellations: ConstellationLink[];
  planets: PlanetData[];
  sun: SunData;
  tagline: string;
};

export type ConstellationLink = {
  from: string;
  to: string;
};

export type PlanetData = {
  color: string;
  colorToken: string;
  description: string;
  glowColor: string;
  highlights: string[];
  icon: IconDefinition;
  id: string;
  label: string;
  orbitDuration: number;
  orbitRadius: number;
  size: number;
  startAngle: number;
};

export type Position = {x: number; y: number};

export type SunData = {
  bio: string;
  colorToken: string;
  glowColor: string;
  label: string;
  size: number;
};

const planetColor = (token: string) => `var(--${token})`;
const glowColor = (token: string, alpha: number) =>
  `color-mix(in oklch, var(--${token}) ${Math.round(alpha * 100)}%, transparent)`;

export const ABOUT_DATA: AboutData = {
  constellations: [
    {from: 'design-systems', to: 'frontend'},
    {from: 'frontend', to: 'visual-testing'},
    {from: 'nasa', to: 'science'},
    {from: 'science', to: 'frontend'},
    {from: 'side-quests', to: 'frontend'},
  ],
  planets: [
    {
      color: planetColor('brand-accent'),
      colorToken: 'brand-accent',
      description:
        'Built a component library from solo proof-of-concept to company-wide adoption across 5 apps. Tailwind CSS, shadcn/ui, and obsessive attention to developer experience.',
      glowColor: glowColor('brand-accent', 0.3),
      highlights: [
        'Solo PoC to 5-app adoption',
        '18+ atomic components',
        'Tailwind CSS & shadcn/ui',
        'Migration codemods',
      ],
      icon: faPalette,
      id: 'design-systems',
      label: 'Design Systems',
      orbitDuration: 75,
      orbitRadius: 0.52,
      size: 48,
      startAngle: 1.2,
    },
    {
      color: planetColor('brand'),
      colorToken: 'brand',
      description:
        '12+ years building production React and TypeScript applications. Started before hooks existed, now building with React 19, Next.js, and modern tooling.',
      glowColor: glowColor('brand', 0.3),
      highlights: [
        'React 19 & TypeScript',
        'Next.js & Vite',
        '12+ years experience',
        'Hooks day-one adopter',
      ],
      icon: faCode,
      id: 'frontend',
      label: 'Frontend Engineering',
      orbitDuration: 90,
      orbitRadius: 0.38,
      size: 52,
      startAngle: 0.3,
    },
    {
      color: planetColor('info'),
      colorToken: 'info',
      description:
        "Research intern at NASA's Jet Propulsion Laboratory, developing Matlab programs to convert spherical harmonic coefficients into topography and gravity maps for Venus volcano research.",
      glowColor: glowColor('info', 0.3),
      highlights: [
        'Jet Propulsion Laboratory',
        'Venus volcano research',
        'Spherical harmonic gravity maps',
        'Matlab data visualization',
      ],
      icon: faRocket,
      id: 'nasa',
      label: 'NASA JPL',
      orbitDuration: 100,
      orbitRadius: 0.72,
      size: 44,
      startAngle: 3.8,
    },
    {
      color: planetColor('success'),
      colorToken: 'success',
      description:
        'BA in Geosciences from Wellesley College. Studied rocks in Maine, Hawaii, and New Zealand before realizing they never throw runtime errors, which got boring.',
      glowColor: glowColor('success', 0.3),
      highlights: [
        'Wellesley College, BA Geosciences',
        'Field work: Maine, Hawaii, NZ',
        'Geology-to-code pivot',
        'Brandeis MS Computer Science',
      ],
      icon: faMountain,
      id: 'science',
      label: 'Science Origins',
      orbitDuration: 110,
      orbitRadius: 0.62,
      size: 42,
      startAngle: 2.5,
    },
    {
      color: planetColor('brand-warm'),
      colorToken: 'brand-warm',
      description:
        'FFXIV tools, a full game, and whatever side quest catches my eye. Building things for fun is how I stay sharp and explore new ideas.',
      glowColor: glowColor('brand-warm', 0.3),
      highlights: [
        'Eureka Tracker',
        'XIV-Complete',
        'Mandragora Mania',
        'Always building something',
      ],
      icon: faDice,
      id: 'side-quests',
      label: 'Gaming & Side Quests',
      orbitDuration: 55,
      orbitRadius: 0.88,
      size: 40,
      startAngle: 5.0,
    },
    {
      color: planetColor('warning'),
      colorToken: 'warning',
      description:
        'Chromatic champion with 36k+ builds and 740+ components. Drove the shift from Jest snapshot testing to Storybook/Chromatic visual testing across the org.',
      glowColor: glowColor('warning', 0.3),
      highlights: [
        '36k+ Chromatic builds',
        '740+ components',
        'Storybook champion',
        'Jest to visual testing shift',
      ],
      icon: faFlask,
      id: 'visual-testing',
      label: 'Visual Testing',
      orbitDuration: 80,
      orbitRadius: 0.48,
      size: 46,
      startAngle: 4.4,
    },
  ],
  sun: {
    bio: "I'm Noranda -- a senior frontend engineer who started her career studying rocks and Venus volcanoes at NASA, then pivoted to building UIs that people actually enjoy using. I care about design systems, visual testing, accessibility, and building tools that make other developers' lives easier. When I'm not coding, I'm gaming, renovating my house, or being supervised by two very opinionated cats.",
    colorToken: 'brand',
    glowColor: glowColor('brand', 0.4),
    label: 'Noranda Brown',
    size: 80,
  },
  tagline: 'From mapping volcanoes to mapping components.',
};
