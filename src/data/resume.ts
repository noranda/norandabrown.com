export type ResumeExperience = {
  company: string;
  description: string;
  endDate: string;
  highlights: string[];
  id: string;
  reality?: string;
  role: string;
  startDate: string;
  techStack: string[];
};

export type ResumeEducation = {
  degree: string;
  endYear: number;
  id: string;
  school: string;
  startYear: number;
};

export type ResumeData = {
  education: ResumeEducation[];
  experience: ResumeExperience[];
  skills: string[];
  summary: string;
};

export const RESUME: ResumeData = {
  education: [
    {
      degree: 'Placeholder Degree',
      endYear: 2014,
      id: 'edu-1',
      school: 'Placeholder University',
      startYear: 2010,
    },
  ],
  experience: [
    {
      company: 'Placeholder Company',
      description: 'Senior Frontend Engineer building design systems and leading AI adoption.',
      endDate: 'Present',
      highlights: [
        'Led design system initiative serving 50+ engineers',
        'Built codemod library from scratch in 2 weeks using AI',
        'Pushed AI adoption across engineering org',
      ],
      id: 'exp-1',
      reality: 'Fought 47 battles about button border radius. Button won most of them. Also built components.',
      role: 'Senior Frontend Engineer',
      startDate: '2023',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
    },
    {
      company: 'Placeholder Company',
      description: 'Frontend engineer and UI designer building complex web applications.',
      endDate: '2023',
      highlights: [
        'Reduced bundle size by 40%',
        'Improved accessibility to WCAG AA compliance',
        'Built component library used across 3 products',
      ],
      id: 'exp-2',
      reality: 'Discovered we were shipping the entire internet. Fixed that.',
      role: 'UI Designer / Frontend Engineer',
      startDate: '2020',
      techStack: ['React', 'JavaScript', 'SCSS', 'Storybook'],
    },
    {
      company: 'Placeholder Company',
      description: 'UI Designer with ~50% frontend engineering responsibilities.',
      endDate: '2020',
      highlights: [
        'Designed and built responsive web interfaces',
        'Established design-to-code workflow',
        'Improved accessibility across product suite',
      ],
      id: 'exp-3',
      reality: 'Became best friends with screen readers. They judge my code out loud.',
      role: 'UI Designer',
      startDate: '2016',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Sketch', 'Figma'],
    },
  ],
  skills: [
    'Accessibility',
    'Chromatic',
    'CSS/Tailwind',
    'Design Systems',
    'Figma',
    'JavaScript',
    'React',
    'Storybook',
    'TypeScript',
  ],
  summary:
    '12+ years of hybrid design and engineering experience building accessible, performant web applications.',
};
