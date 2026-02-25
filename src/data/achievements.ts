import {
  faBug,
  faCircleCheck,
  faClock,
  faCompass,
  faDesktop,
  faEyeSlash,
  faFileArrowDown,
  faKeyboard,
  faMoon,
  faPuzzlePiece,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {
  type AchievementDefinition,
  type AchievementId,
} from '@/context/gamification/gamificationContext';

export type {
  AchievementDefinition,
  AchievementId,
} from '@/context/gamification/gamificationContext';

export const ACHIEVEMENT_ICONS: Record<AchievementId, IconDefinition> = {
  bugHunter: faBug,
  completionist: faCircleCheck,
  explorer: faCompass,
  gottaCatchEmAll: faPuzzlePiece,
  procrastinator: faClock,
  recruiterDelight: faFileArrowDown,
  tabMaster: faKeyboard,
  vampireMode: faMoon,
  voidDweller: faEyeSlash,
  worksOnMyMachine: faDesktop,
};

export const ACHIEVEMENTS: AchievementDefinition[] = [
  {
    description: 'Found the hidden bug icon',
    hint: 'Something tiny is crawling around the home page...',
    id: 'bugHunter',
    name: 'Bug Hunter',
    toast: 'You found a bug. Unlike production bugs, this one was intentional.',
  },
  {
    description: 'Viewed all project case studies',
    hint: 'The Work page has stories worth reading - all of them.',
    id: 'completionist',
    name: 'Completionist',
    toast: "You read every case study. That's more due diligence than most VCs.",
  },
  {
    description: 'Visited all main pages',
    hint: 'Check every link in the navigation bar.',
    id: 'explorer',
    name: 'Explorer',
    toast: "You've seen every page. There's no secret sixth one. Probably.",
  },
  {
    description: 'Viewed all component variants',
    hint: 'The Components page has tabs - have you clicked them all?',
    id: 'gottaCatchEmAll',
    name: "Gotta Catch 'Em All",
    toast: 'Design System Edition complete!',
  },
  {
    description: 'Spent 10+ minutes on the site',
    hint: 'Sometimes the best achievements come to those who wait.',
    id: 'procrastinator',
    name: 'The Procrastinator',
    toast: "Still here? That's either really good or really bad.",
  },
  {
    description: 'Downloaded the resume PDF',
    hint: 'The Resume page has a download button calling your name.',
    id: 'recruiterDelight',
    name: "Recruiter's Delight",
    toast: 'Resume acquired. Now you have no excuse not to call.',
  },
  {
    description: 'Navigated by keyboard for 10+ seconds',
    hint: 'Put down the mouse and let Tab do the walking.',
    id: 'tabMaster',
    name: 'Tab Master 3000',
    toast: "No mouse? No problem. You're hired.",
  },
  {
    description: 'Toggled dark mode 5+ times',
    hint: "Can't decide between light and dark? Keep toggling.",
    id: 'vampireMode',
    name: 'Vampire Mode Activated',
    toast: "Five toggles? Pick a side. (Just kidding, I can't either.)",
  },
  {
    description: 'Activated void mode',
    hint: 'There is a toggle in the header that leads to nothingness.',
    id: 'voidDweller',
    name: 'Void Dweller',
    toast: 'You stared into the void. The void respects your curiosity.',
  },
  {
    description: 'Resized the browser window 3+ times',
    hint: 'Grab the edge of your browser and get creative with the width.',
    id: 'worksOnMyMachine',
    name: 'Works on My Machine\u2122',
    toast: "Yes, it's responsive. Yes, I tested. No, not just on my monitor.",
  },
];

export const MAIN_PAGES = ['/', '/about', '/components', '/resume', '/work'];
