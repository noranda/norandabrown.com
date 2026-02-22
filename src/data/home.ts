import {CASE_STUDIES, type Project} from '@/data/projects';

// ── Types ──

export type FeaturedProjectStat = {
  label: string;
  value: string;
};

export type ImpactMetric = {
  description: string;
  label: string;
  value: string;
};

export type TechStackItem = {
  emoji: string;
  label: string;
  sub: string;
};

// ── Featured Projects ──

export const FEATURED_PROJECTS: Project[] = CASE_STUDIES;

export const FEATURED_PROJECT_STATS: FeaturedProjectStat[] = [
  {label: 'Apps', value: '5'},
  {label: 'Components', value: '18+'},
];

// ── Impact Metrics ──

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    description:
      'Reduced load times from 3.2s to 1.7s through bundle optimization and code splitting',
    label: 'faster',
    value: '47%',
  },
  {
    description:
      'Achieved highest accessibility standard across all projects with automated testing',
    label: 'WCAG',
    value: 'AAA',
  },
];

// ── Tech Stack ──

export const TECH_STACK: TechStackItem[] = [
  {emoji: '♿', label: 'Accessibility', sub: 'WCAG AAA'},
  {emoji: '🎨', label: 'Design Systems', sub: 'Expert'},
  {emoji: '⚡', label: 'Next.js', sub: '4 years'},
  {emoji: '⚛️', label: 'React', sub: '8 years'},
  {emoji: '📘', label: 'TypeScript', sub: '6 years'},
];
