import {type IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faCamera, faRocket, faShapes} from '@fortawesome/free-solid-svg-icons';

import eurekaTrackerImg from '@/assets/projects/eureka-tracker.webp';
import mandragoraManiaImg from '@/assets/projects/mandragora-mania.webp';
import xivCompleteImg from '@/assets/projects/xiv-complete.webp';

export type Project = {
  company?: string;
  coverImage?: string;
  description: string;
  icon?: IconDefinition;
  id: string;
  links?: ProjectLink[];
  role: string;
  slug: string;
  tags: string[];
  techStack: string[];
  title: string;
  type: 'case-study' | 'side-project';
  year: number | string;
};

export type ProjectLink = {
  label: string;
  url: string;
};

export const PROJECTS: Project[] = [
  // ── Case Studies ──
  {
    company: 'ezCater',
    description:
      'Built a flexible, atomic design system component library from scratch on Tailwind CSS to replace a rigid CSS-in-JS component library. Adopted by all frontend teams across multiple applications.',
    icon: faShapes,
    id: 'design-system-architecture',
    role: 'Senior Frontend Engineer',
    slug: 'design-system-architecture',
    tags: ['design-system', 'architecture', 'leadership'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Chromatic'],
    title: 'Design System Architecture',
    type: 'case-study',
    year: '2024-present',
  },
  {
    company: 'ezCater',
    description:
      'Built a visual testing strategy recognized by Chromatic as the ideal implementation. 1,000+ stories covering components, full pages with MSW handlers, and documentation.',
    icon: faCamera,
    id: 'visual-testing-strategy',
    links: [
      {
        label: 'Chromatic Case Study',
        url: 'https://www.chromatic.com/customers/ezcater',
      },
    ],
    role: 'Senior Frontend Engineer',
    slug: 'visual-testing-strategy',
    tags: ['testing', 'engineering', 'leadership'],
    techStack: ['Storybook', 'Chromatic', 'MSW', 'React Testing Library'],
    title: 'Visual Testing & Storybook Strategy',
    type: 'case-study',
    year: '2022-present',
  },
  {
    description:
      'A portfolio built with React 19, Tailwind CSS v4, and AI-assisted development. Features a gamification system, easter eggs, and meticulous accessibility.',
    icon: faRocket,
    id: 'portfolio',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/noranda/noranda-brown-portfolio',
      },
    ],
    role: 'Designer & Developer',
    slug: 'portfolio',
    tags: ['engineering', 'design', 'open-source'],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'Framer Motion'],
    title: 'This Portfolio',
    type: 'case-study',
    year: '2026-present',
  },

  // ── Side Projects ──
  {
    coverImage: eurekaTrackerImg,
    description:
      'Real-time tracker and knowledge base for FFXIV Eureka content. Used worldwide with community-provided translations. Still active years after launch.',
    id: 'eureka-tracker',
    links: [{label: 'Live Site', url: 'https://ffxiv-eureka.com'}],
    role: 'Creator',
    slug: 'eureka-tracker',
    tags: ['gaming', 'community', 'open-source'],
    techStack: ['Ember', 'Elixir', 'WebSockets'],
    title: 'Eureka Tracker',
    type: 'side-project',
    year: '2018-2026',
  },
  {
    coverImage: xivCompleteImg,
    description:
      'Completionist tracker for FFXIV, helping players track achievements, collections, and overall game completion progress.',
    id: 'xiv-complete',
    links: [{label: 'Live Site', url: 'https://xiv-complete.com'}],
    role: 'Creator',
    slug: 'xiv-complete',
    tags: ['gaming', 'full-stack'],
    techStack: ['React', 'Ruby on Rails'],
    title: 'XIV-Complete',
    type: 'side-project',
    year: '2020-2026',
  },
  {
    coverImage: mandragoraManiaImg,
    description:
      'A strategy board game with AI-powered move analysis. Built as a platform for experimenting with game AI and modern web technologies.',
    id: 'mandragora-mania',
    links: [
      {label: 'Play', url: 'https://noranda.github.io/mandragora-mania'},
      {label: 'GitHub', url: 'https://github.com/noranda/mandragora-mania'},
    ],
    role: 'Creator',
    slug: 'mandragora-mania',
    tags: ['gaming', 'ai', 'open-source'],
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    title: 'Mandragora Mania',
    type: 'side-project',
    year: 2025,
  },
];

export const CASE_STUDIES = PROJECTS.filter((p) => p.type === 'case-study');
export const SIDE_PROJECTS = PROJECTS.filter((p) => p.type === 'side-project');
