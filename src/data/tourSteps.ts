export type TourStep = {
  content: string;
  position: 'bottom' | 'left' | 'top';
  target: string;
  title: string;
};

export const TOUR_STEPS: TourStep[] = [
  {
    content:
      "Welcome! I'm Noranda, and yes, I built this entire portfolio instead of updating my LinkedIn. Worth it? The jury's still out.",
    position: 'bottom',
    target: 'tour-logo',
    title: 'Hey there!',
  },
  {
    content:
      'These links actually go places. My Work, a Component Playground (yes, really), my Resume, and an About page that proves I have a personality.',
    position: 'bottom',
    target: 'tour-nav',
    title: 'Navigation',
  },
  {
    content:
      "Yes, I'm available. No, I won't fix your printer. But I will make your UI accessible, performant, and unreasonably well-organized.",
    position: 'bottom',
    target: 'tour-availability',
    title: 'Status: Available',
  },
  {
    content:
      "Toggle between 'staring into the void' and 'being blinded by the light.' Both are valid life choices.",
    position: 'bottom',
    target: 'tour-theme',
    title: 'Dark Mode',
  },
  {
    content:
      'There are hidden achievements scattered across the site because I believe in rewarding curiosity (and padding my feature list).',
    position: 'bottom',
    target: 'tour-main',
    title: 'Easter Eggs',
  },
  {
    content:
      "That's the tour! Click around, break things (you won't, I tested), and enjoy the over-engineered portfolio experience.",
    position: 'top',
    target: 'tour-footer',
    title: "You're all set!",
  },
];
