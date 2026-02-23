import {CASE_STUDIES, type Project} from '@/data/projects';

// ── Types ──

export type CareerStop = {
  company: string;
  role: string;
  year: string;
};

export type FeaturedProjectStat = {
  label: string;
  value: string;
};

export type ImpactMetric = {
  description: string;
  label: string;
  value: string;
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
    description: 'Visual regression tests run across 7 projects via Storybook and Chromatic',
    label: 'Chromatic Builds',
    value: '36k+',
  },
  {
    description: 'Covered with visual tests across the organization',
    label: 'Components Tested',
    value: '740+',
  },
  {
    description: 'Documenting components, full pages, and edge cases',
    label: 'Storybook Stories',
    value: '150+',
  },
  {
    description: 'Design system adopted from solo proof-of-concept to company-wide standard',
    label: 'Apps Adopted',
    value: '5',
  },
];

// ── Career Journey ──

export const CAREER_JOURNEY: CareerStop[] = [
  {company: 'ezCater', role: 'Senior Software Engineer', year: '2022'},
  {company: 'MITRE Corporation', role: 'UI Designer & Developer', year: '2014'},
  {company: 'Brandeis University', role: 'Web Developer', year: '2013'},
  {company: 'NASA JPL', role: 'Research Intern', year: '2012'},
];

// ── Animation Order ──
// Sequential stagger indices for home page bento grid cards.
// Order matches visual layout top-to-bottom, left-to-right.

export const ANIMATION_ORDER = {
  careerJourney: 5,
  easterEggTracker: 7,
  featuredProject: 2,
  gitHubShowcase: 6,
  hero: 0,
  impactMetrics: 3,
  project: 4,
} as const;
