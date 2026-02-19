import {
  ACHIEVEMENTS,
  type AchievementDefinition,
  type AchievementId,
} from '@/context/gamification/gamificationContext';

export const getAchievementById = (id: AchievementId): AchievementDefinition | undefined =>
  ACHIEVEMENTS.find((a) => a.id === id);

export const getUnlockedCount = (
  unlockedAchievements: Partial<Record<AchievementId, number>>
): number => Object.keys(unlockedAchievements).length;

export const getTotalCount = (): number => ACHIEVEMENTS.length;
