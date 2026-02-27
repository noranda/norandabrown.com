import {describe, expect, it} from 'vitest';
import {SCROLL_VIEWPORT, fadeUp, scrollFadeUp} from './animations';

describe('animation utils', () => {
  describe('SCROLL_VIEWPORT', () => {
    it('has correct margin and once properties', () => {
      expect(SCROLL_VIEWPORT.margin).toBe('-80px 0px 0px 0px');
      expect(SCROLL_VIEWPORT.once).toBe(true);
    });
  });

  describe('fadeUp', () => {
    it('hidden state has zero opacity and positive y offset', () => {
      expect(fadeUp.hidden).toEqual({opacity: 0, y: 24});
    });

    it('visible state returns full opacity and zero y', () => {
      const result = fadeUp.visible(0);
      expect(result.opacity).toBe(1);
      expect(result.y).toBe(0);
    });

    it('applies staggered delay based on index', () => {
      expect(fadeUp.visible(0).transition.delay).toBe(0);
      expect(fadeUp.visible(1).transition.delay).toBeCloseTo(0.1);
      expect(fadeUp.visible(3).transition.delay).toBeCloseTo(0.3);
    });
  });

  describe('scrollFadeUp', () => {
    it('hidden state has zero opacity and larger y offset', () => {
      expect(scrollFadeUp.hidden).toEqual({opacity: 0, y: 40});
    });

    it('visible state returns full opacity and zero y', () => {
      const result = scrollFadeUp.visible(0);
      expect(result.opacity).toBe(1);
      expect(result.y).toBe(0);
    });

    it('has longer duration than fadeUp', () => {
      expect(scrollFadeUp.visible(0).transition.duration).toBe(0.6);
      expect(fadeUp.visible(0).transition.duration).toBe(0.5);
    });
  });
});
