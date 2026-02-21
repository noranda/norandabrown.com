import {createContext} from 'react';

export type AchievementId =
  | 'bugHunter'
  | 'completionist'
  | 'explorer'
  | 'gottaCatchEmAll'
  | 'inspectorGadget'
  | 'procrastinator'
  | 'recruiterDelight'
  | 'tabMaster'
  | 'vampireMode'
  | 'worksOnMyMachine';

export type AchievementDefinition = {
  description: string;
  id: AchievementId;
  name: string;
  toast: string;
};

export type GamificationState = {
  darkModeToggles: number;
  resizeCount: number;
  unlockedAchievements: Partial<Record<AchievementId, number>>;
  viewedComponents: string[];
  viewedProjects: string[];
  visitedPages: string[];
};

export type GamificationContextType = {
  explorationScore: number;
  isUnlocked: (id: AchievementId) => boolean;
  state: GamificationState;
  trackComponentView: (componentId: string) => void;
  trackDarkModeToggle: () => void;
  trackPageVisit: (page: string) => void;
  trackProjectView: (projectId: string) => void;
  trackResize: () => void;
  unlockAchievement: (id: AchievementId) => void;
};

export const MAIN_PAGES = ['/', '/about', '/components', '/resume', '/work'];

export const ACHIEVEMENTS: AchievementDefinition[] = [
  {
    description: 'Found the hidden bug icon',
    id: 'bugHunter',
    name: 'Bug Hunter',
    toast: 'You found a bug. Unlike production bugs, this one was intentional.',
  },
  {
    description: 'Viewed all project case studies',
    id: 'completionist',
    name: 'Completionist',
    toast: "You read every case study. That's more due diligence than most VCs.",
  },
  {
    description: 'Visited all main pages',
    id: 'explorer',
    name: 'Explorer',
    toast: "You've seen every page. There's no secret sixth one. Probably.",
  },
  {
    description: 'Viewed all component variants',
    id: 'gottaCatchEmAll',
    name: "Gotta Catch 'Em All",
    toast: 'Design System Edition complete!',
  },
  {
    description: 'Opened the browser DevTools',
    id: 'inspectorGadget',
    name: 'Inspector Gadget',
    toast: "I see you checking my markup. It's clean, I promise.",
  },
  {
    description: 'Spent 10+ minutes on the site',
    id: 'procrastinator',
    name: 'The Procrastinator',
    toast: "Still here? That's either really good or really bad.",
  },
  {
    description: 'Downloaded the resume PDF',
    id: 'recruiterDelight',
    name: "Recruiter's Delight",
    toast: 'Resume acquired. Now you have no excuse not to call.',
  },
  {
    description: 'Navigated by keyboard for 30+ seconds',
    id: 'tabMaster',
    name: 'Tab Master 3000',
    toast: "30 seconds without a mouse? You're hired.",
  },
  {
    description: 'Toggled dark mode 5+ times',
    id: 'vampireMode',
    name: 'Vampire Mode Activated',
    toast: "Five toggles? Pick a side. (Just kidding, I can't either.)",
  },
  {
    description: 'Resized the browser window 3+ times',
    id: 'worksOnMyMachine',
    name: 'Works on My Machine\u2122',
    toast: "Yes, it's responsive. Yes, I tested. No, not just on my monitor.",
  },
];

export const GamificationContext = createContext<GamificationContextType | undefined>(undefined);
