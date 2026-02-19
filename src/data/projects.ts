export type Project = {
  coverImage?: string;
  description: string;
  id: string;
  role: string;
  slug: string;
  tags: string[];
  techStack: string[];
  title: string;
  year: number;
};

export const PROJECTS: Project[] = [
  {
    description:
      'Journey from legacy component library to modern design system. React + Tailwind architecture with Storybook/Chromatic implementation.',
    id: 'tapas-design-system',
    role: 'Senior Frontend Engineer',
    slug: 'tapas-design-system',
    tags: ['design-system', 'engineering'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Chromatic'],
    title: 'Tapas Design System',
    year: 2024,
  },
  {
    description:
      'Pushing AI adoption across the engineering org through talks, documentation, and tooling. Built a codemod library from scratch in 2 weeks using AI.',
    id: 'ai-development-initiative',
    role: 'Senior Frontend Engineer',
    slug: 'ai-development-initiative',
    tags: ['ai', 'engineering', 'leadership'],
    techStack: ['TypeScript', 'AI Tools', 'Codemods', 'AST'],
    title: 'AI-Powered Development Initiative',
    year: 2025,
  },
  {
    description:
      'Large-scale application with complex state management, performance optimization, and design-first UX approach.',
    id: 'complex-react-app',
    role: 'Senior Frontend Engineer',
    slug: 'complex-react-app',
    tags: ['engineering', 'architecture'],
    techStack: ['React', 'TypeScript', 'Redux', 'GraphQL'],
    title: 'Complex React Application Architecture',
    year: 2023,
  },
  {
    description:
      'Comprehensive accessibility improvements across a large-scale application. WCAG compliance journey and design-engineering collaboration.',
    id: 'accessibility-deep-dive',
    role: 'UI Designer / Frontend Engineer',
    slug: 'accessibility-deep-dive',
    tags: ['accessibility', 'design', 'engineering'],
    techStack: ['React', 'ARIA', 'axe-core', 'VoiceOver'],
    title: 'Accessibility Deep-Dive',
    year: 2023,
  },
];
