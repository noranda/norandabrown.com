import {describe, expect, it} from 'vitest';
import {getAchievementById, getTotalCount, getUnlockedCount} from './achievements';

describe('achievement utils', () => {
  describe('getAchievementById', () => {
    it('returns the achievement for a valid id', () => {
      const result = getAchievementById('explorer');
      expect(result).toBeDefined();
      expect(result!.id).toBe('explorer');
      expect(result!.name).toBe('Explorer');
    });

    it('returns undefined for an invalid id', () => {
      // @ts-expect-error - testing invalid input
      expect(getAchievementById('nonexistent')).toBeUndefined();
    });

    it('returns correct data for each achievement', () => {
      const ids = [
        'bugHunter',
        'completionist',
        'explorer',
        'gottaCatchEmAll',
        'procrastinator',
        'recruiterDelight',
        'tabMaster',
        'vampireMode',
        'voidDweller',
        'worksOnMyMachine',
      ] as const;

      for (const id of ids) {
        const achievement = getAchievementById(id);
        expect(achievement).toBeDefined();
        expect(achievement!.id).toBe(id);
        expect(achievement!.name).toBeTruthy();
        expect(achievement!.description).toBeTruthy();
        expect(achievement!.toast).toBeTruthy();
        expect(achievement!.hint).toBeTruthy();
      }
    });
  });

  describe('getUnlockedCount', () => {
    it('returns 0 for empty object', () => {
      expect(getUnlockedCount({})).toBe(0);
    });

    it('returns correct count for unlocked achievements', () => {
      expect(getUnlockedCount({explorer: 123, vampireMode: 456})).toBe(2);
    });

    it('returns total count when all unlocked', () => {
      const all = {
        bugHunter: 1,
        completionist: 2,
        explorer: 3,
        gottaCatchEmAll: 4,
        procrastinator: 5,
        recruiterDelight: 6,
        tabMaster: 7,
        vampireMode: 8,
        voidDweller: 9,
        worksOnMyMachine: 10,
      };
      expect(getUnlockedCount(all)).toBe(10);
    });
  });

  describe('getTotalCount', () => {
    it('returns 10 total achievements', () => {
      expect(getTotalCount()).toBe(10);
    });
  });
});
