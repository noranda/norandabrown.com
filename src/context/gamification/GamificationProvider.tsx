import {useCallback, useEffect, useMemo, useState} from 'react';
import {
  ACHIEVEMENTS,
  GamificationContext,
  MAIN_PAGES,
  type AchievementId,
  type GamificationState,
} from './gamificationContext';

export type {
  AchievementDefinition,
  AchievementId,
  GamificationContextType,
  GamificationState,
} from './gamificationContext';

const STORAGE_KEY = 'gamification';

const DEFAULT_STATE: GamificationState = {
  darkModeToggles: 0,
  resizeCount: 0,
  unlockedAchievements: {},
  viewedComponents: [],
  viewedProjects: [],
  visitedPages: [],
};

const loadState = (): GamificationState => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as Partial<GamificationState>;
      return {...DEFAULT_STATE, ...parsed};
    }
  } catch {
    // Invalid data in localStorage, use defaults
  }
  return DEFAULT_STATE;
};

const saveState = (state: GamificationState) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage full or unavailable
  }
};

export const GamificationProvider = ({children}: {children: React.ReactNode}) => {
  const [state, setState] = useState<GamificationState>(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const isUnlocked = useCallback(
    (id: AchievementId) => id in state.unlockedAchievements,
    [state.unlockedAchievements]
  );

  const unlockAchievement = useCallback(
    (id: AchievementId) => {
      setState((prev) => {
        if (id in prev.unlockedAchievements) return prev;
        return {
          ...prev,
          unlockedAchievements: {
            ...prev.unlockedAchievements,
            [id]: Date.now(),
          },
        };
      });
    },
    []
  );

  const trackPageVisit = useCallback(
    (page: string) => {
      setState((prev) => {
        if (prev.visitedPages.includes(page)) return prev;
        const visitedPages = [...prev.visitedPages, page];
        const next = {...prev, visitedPages};

        // Auto-unlock explorer if all main pages visited
        if (
          !('explorer' in prev.unlockedAchievements) &&
          MAIN_PAGES.every((p) => visitedPages.includes(p))
        ) {
          next.unlockedAchievements = {
            ...next.unlockedAchievements,
            explorer: Date.now(),
          };
        }

        return next;
      });
    },
    []
  );

  const trackProjectView = useCallback(
    (projectId: string) => {
      setState((prev) => {
        if (prev.viewedProjects.includes(projectId)) return prev;
        return {...prev, viewedProjects: [...prev.viewedProjects, projectId]};
      });
    },
    []
  );

  const trackComponentView = useCallback(
    (componentId: string) => {
      setState((prev) => {
        if (prev.viewedComponents.includes(componentId)) return prev;
        return {...prev, viewedComponents: [...prev.viewedComponents, componentId]};
      });
    },
    []
  );

  const trackDarkModeToggle = useCallback(() => {
    setState((prev) => {
      const darkModeToggles = prev.darkModeToggles + 1;
      const next = {...prev, darkModeToggles};

      // Auto-unlock vampire mode at 5 toggles
      if (darkModeToggles >= 5 && !('vampireMode' in prev.unlockedAchievements)) {
        next.unlockedAchievements = {
          ...next.unlockedAchievements,
          vampireMode: Date.now(),
        };
      }

      return next;
    });
  }, []);

  const trackResize = useCallback(() => {
    setState((prev) => {
      const resizeCount = prev.resizeCount + 1;
      const next = {...prev, resizeCount};

      // Auto-unlock at 3 resizes
      if (resizeCount >= 3 && !('worksOnMyMachine' in prev.unlockedAchievements)) {
        next.unlockedAchievements = {
          ...next.unlockedAchievements,
          worksOnMyMachine: Date.now(),
        };
      }

      return next;
    });
  }, []);

  const explorationScore = useMemo(() => {
    const unlocked = Object.keys(state.unlockedAchievements).length;
    return Math.round((unlocked / ACHIEVEMENTS.length) * 100);
  }, [state.unlockedAchievements]);

  const value = useMemo(
    () => ({
      explorationScore,
      isUnlocked,
      state,
      trackComponentView,
      trackDarkModeToggle,
      trackPageVisit,
      trackProjectView,
      trackResize,
      unlockAchievement,
    }),
    [
      explorationScore,
      isUnlocked,
      state,
      trackComponentView,
      trackDarkModeToggle,
      trackPageVisit,
      trackProjectView,
      trackResize,
      unlockAchievement,
    ]
  );

  return (
    <GamificationContext.Provider value={value}>{children}</GamificationContext.Provider>
  );
};
