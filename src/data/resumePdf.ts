export type ContactLink = {
  label: string;
  src: string;
};

export type PdfMeta = {
  author: string;
  fileName: string;
  title: string;
};

export const CONTACT_LINKS: ContactLink[] = [
  {label: 'noranda@norandabrown.com', src: 'mailto:noranda@norandabrown.com'},
  {label: 'norandabrown.com', src: 'https://www.norandabrown.com'},
  {label: 'github.com/noranda', src: 'https://github.com/noranda'},
  {label: 'linkedin.com/in/noranda', src: 'https://linkedin.com/in/noranda'},
  {label: 'medium.com/@noranda', src: 'https://medium.com/@noranda'},
];

export const PDF_META: PdfMeta = {
  author: 'Noranda Brown',
  fileName: 'Noranda-Brown-Resume.pdf',
  title: 'Noranda Brown - Resume',
};

export const TLDR_ITEMS: string[] = [
  'React, TypeScript, Tailwind CSS, Storybook, Chromatic, Design Systems, Visual Testing',
  '12+ years shipping production React UIs - since before hooks were a thing',
  'Built a component library from solo proof-of-concept to company-wide adoption across 5 apps',
  "36k+ Chromatic builds - 740+ components under visual testing - I break things visually so users don't have to",
  'Former NASA JPL researcher (the gravity maps were cool, the Matlab less so)',
  'This PDF was rendered with React + @react-pdf/renderer, because of course it was',
];
