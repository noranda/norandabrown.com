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
    description: 'Click hidden "bug" icon easter egg',
    id: 'bugHunter',
    name: 'Bug Hunter',
    toast: 'You found a bug. Unlike production bugs, this one was intentional.',
  },
  {
    description: 'View all project case studies',
    id: 'completionist',
    name: 'Completionist',
    toast: 'Achievement Unlocked: Completionist',
  },
  {
    description: 'Visit all main pages',
    id: 'explorer',
    name: 'Explorer',
    toast: 'Achievement Unlocked: Explorer',
  },
  {
    description: 'View all component variants',
    id: 'gottaCatchEmAll',
    name: "Gotta Catch 'Em All",
    toast: 'Design System Edition complete!',
  },
  {
    description: 'Triggered when DevTools opened',
    id: 'inspectorGadget',
    name: 'Inspector Gadget',
    toast: 'Achievement Unlocked: Inspector Gadget',
  },
  {
    description: 'Spend 10+ minutes exploring without downloading resume',
    id: 'procrastinator',
    name: 'The Procrastinator',
    toast: "Still here? That's either really good or really bad",
  },
  {
    description: 'Download resume PDF',
    id: 'recruiterDelight',
    name: "Recruiter's Delight",
    toast: "Achievement Unlocked: Recruiter's Delight",
  },
  {
    description: 'Use keyboard navigation only for 30+ seconds',
    id: 'tabMaster',
    name: 'Tab Master 3000',
    toast: "Achievement Unlocked: Tab Master 3000 (you're hired)",
  },
  {
    description: 'Toggle dark mode 5+ times',
    id: 'vampireMode',
    name: 'Vampire Mode Activated',
    toast: 'Achievement Unlocked: Vampire Mode Activated',
  },
  {
    description: 'Triggered when user resizes window 3+ times',
    id: 'worksOnMyMachine',
    name: 'Works on My Machine\u2122',
    toast: 'Achievement Unlocked: Works on My Machine\u2122',
  },
];

export const GamificationContext = createContext<GamificationContextType | undefined>(undefined);
