import {createContext} from 'react';

export type AchievementId =
  | 'bugHunter'
  | 'completionist'
  | 'explorer'
  | 'gottaCatchEmAll'
  | 'procrastinator'
  | 'recruiterDelight'
  | 'tabMaster'
  | 'vampireMode'
  | 'voidDweller'
  | 'worksOnMyMachine';

export type AchievementDefinition = {
  description: string;
  hint: string;
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

export const GamificationContext = createContext<GamificationContextType | undefined>(undefined);
