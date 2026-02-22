// ── Types ──

export type CaseStudySection = {
  body: string;
  title: string;
};

export type CaseStudyHighlight = {
  label: string;
  value: string;
};

export type CaseStudyContent = {
  highlights: CaseStudyHighlight[];
  projectId: string;
  sections: CaseStudySection[];
};

// ── Case Study Content ──

export const CASE_STUDY_CONTENT: CaseStudyContent[] = [
  {
    highlights: [
      {label: 'Atomic Components', value: '18+'},
      {label: 'Consuming Apps', value: '5'},
      {label: 'Migration Codemods', value: '7+'},
      {label: 'Storybook Stories', value: '150+'},
    ],
    projectId: 'design-system-architecture',
    sections: [
      {
        body: 'The existing component library was built on CSS-in-JS solutions like Emotion that were becoming incompatible with newer React versions. Its philosophy was strict - no overrides, no deviations. In theory, a design system should enforce consistency. In practice, developers needed flexibility. Teams were finding ways to override styles with more Emotion, creating a tangled mess of specificity battles and fragile styling.',
        title: 'The Challenge',
      },
      {
        body: 'After the original library lost support and my team of two was disbanded, I was placed on a product team. On my own initiative, I began building a replacement from scratch using Tailwind CSS with a fundamentally different philosophy: flexible and atomic. Every component was built to be composable, with all props passable through. No more fighting the system - work with it. After a year of proving the concept, my team (Frontend Core) was rebuilt and given support to expand the library using shadcn/ui principles.',
        title: 'The Approach',
      },
      {
        body: 'The new system saw widespread adoption across applications. The flexible, atomic approach meant teams could move fast without fighting their tools. The migration from the old library to the new one is ongoing across all apps, but the investment is paying off - fewer hacks, faster development, and happier engineers. I spearheaded this effort from solo proof-of-concept to company-wide adoption.',
        title: 'The Outcome',
      },
    ],
  },
  {
    highlights: [
      {label: 'Chromatic Builds', value: '36k+'},
      {label: 'Components Tested', value: '740+'},
      {label: 'Chromatic Webinars', value: '10+'},
      {label: 'Projects', value: '7'},
    ],
    projectId: 'visual-testing-strategy',
    sections: [
      {
        body: 'Functional tests with Jest and React Testing Library were producing false positives. Tests passed, but buggy UI shipped to production. The tests focused on logic, not rendered pixels - so visual regressions slipped through. As the company grew and more teams contributed code, the problem scaled with it.',
        title: 'The Challenge',
      },
      {
        body: 'I drove the company-wide shift from Jest-based component testing to Storybook and Chromatic. I wrote internal documentation, gave tech talks to engineering teams, attended 10+ Chromatic webinars, and became the primary vendor contact for contract renewals and strategy sessions. I pushed for all new rendered component tests to be written in Storybook instead of Jest - not just component-level stories, but full-page testing with MSW handlers for realistic data. The Chromatic team has told us our implementation is the ideal - the way they want everyone to use it.',
        title: 'The Approach',
      },
      {
        body: "Visual regressions are caught before code merges. Distributed teams contribute confidently without centralized gatekeeping. I attend Chromatic workshops regularly and was contacted to consult with other companies looking to adopt Chromatic. The published case study on Chromatic's website features me as the primary customer voice.",
        title: 'The Outcome',
      },
    ],
  },
  {
    highlights: [
      {label: 'Framework', value: 'React 19'},
      {label: 'Styling', value: 'Tailwind v4'},
      {label: 'AI-Assisted', value: '100%'},
      {label: 'Accessibility', value: 'WCAG AAA'},
    ],
    projectId: 'portfolio',
    sections: [
      {
        body: 'Most portfolio sites are static showcases. I wanted mine to reflect how I actually work - with modern tools, attention to craft, and a bit of personality. It needed to demonstrate technical depth (React 19, Tailwind CSS v4, TypeScript) while being genuinely fun to explore.',
        title: 'The Challenge',
      },
      {
        body: 'Built entirely with AI-assisted development using Claude as a pair programming partner. Every component follows shadcn/ui patterns with full accessibility. A gamification system tracks exploration progress with hidden achievements and easter eggs. The component playground embeds live Storybook stories. The entire codebase prioritizes semantic HTML, keyboard navigation, and screen reader support.',
        title: 'The Approach',
      },
      {
        body: 'A portfolio that practices what it preaches - accessible, performant, and delightful. The gamification system encourages exploration beyond the usual resume-and-projects format. The AI-assisted workflow demonstrates a forward-thinking approach to engineering that I champion in my day job.',
        title: 'The Outcome',
      },
    ],
  },
];
