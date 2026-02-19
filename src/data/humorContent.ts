export type BugBlasterFact = {
  fact: string;
  id: string;
};

export const BUG_BLASTER_FACTS: BugBlasterFact[] = [
  {
    fact: 'Noranda once refactored the same component 7 times. She regrets nothing.',
    id: 'refactor',
  },
  {
    fact: "Favorite debugging technique: console.log('here')",
    id: 'debug',
  },
  {
    fact: 'Has strong opinions about comma placement in JSX props.',
    id: 'commas',
  },
  {
    fact: 'Believes in design tokens the way some people believe in horoscopes.',
    id: 'tokens',
  },
  {
    fact: "Once spent 3 hours naming a variable. It's called 'data' now.",
    id: 'naming',
  },
  {
    fact: 'Has a tab vs spaces opinion but is too polite to start that war.',
    id: 'tabs',
  },
  {
    fact: 'The CSS specificity wars of 2023 were her Vietnam.',
    id: 'specificity',
  },
  {
    fact: "Reviews her own PRs and still finds things she'd change.",
    id: 'pr-review',
  },
];

export type TooltipContent = {
  id: string;
  text: string;
};

export const TOOLTIPS: TooltipContent[] = [
  {
    id: 'darkModeToggle',
    text: "Toggle between 'Literally can't see' and 'My eyes!'",
  },
  {
    id: 'resumeDownload',
    text: 'Download my life story (ATS-compliant, unfortunately)',
  },
  {
    id: 'github',
    text: 'Where bugs go to live forever',
  },
  {
    id: 'linkedin',
    text: 'The professional version of me',
  },
];
