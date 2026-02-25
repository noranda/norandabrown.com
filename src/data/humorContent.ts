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

export const VOID_QUIPS: string[] = [
  'You found the void. It is oddly peaceful here.',
  'Welcome to production at 2 AM.',
  "Dark mode wasn't enough for you, was it?",
  "Shh. The bugs can't find you here.",
  'If you stare into the void, the void stares back... and judges your code.',
  'Congratulations, you broke the internet.',
  'Error 418: I am a teapot. Also, it is dark in here.',
  'Have you tried turning it off and- oh wait.',
  'This is what happens when you rm -rf the wrong directory.',
  'Senior engineer tip: sometimes the best feature is no feature.',
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
