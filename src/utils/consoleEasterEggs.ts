const ASCII_ART = `
 _   _  ____
| \\ | || __ )
|  \\| ||  _ \\
| |\\  || |_) |
|_| \\_||____/
`;

const GREETING = 'Hi there! Yes, I check the console too.';

const MESSAGES = [
  'Built with React, TypeScript, Tailwind, and mass amounts of caffeine.',
  'No nodes were harmed in the making of this portfolio.',
  '0ms Total Blocking Time. Yes, even with the solar system and confetti.',
  "Try toggling dark mode 5 times. You won't regret it. (Or maybe you will.)",
];

export const printConsoleEasterEggs = () => {
  console.log(`%c${ASCII_ART}`, 'color: #9333ea; font-family: monospace; font-size: 14px;');

  console.log(
    `%c${GREETING}`,
    'color: #9333ea; font-size: 16px; font-weight: bold; padding: 8px 0;'
  );

  MESSAGES.forEach((msg) => {
    console.log(`%c${msg}`, 'color: #6b7280; font-size: 12px;');
  });

  console.log(
    '%cLooking for the source? https://github.com/noranda',
    'color: #9333ea; font-size: 12px; font-style: italic; padding-top: 8px;'
  );
};
