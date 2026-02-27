import {afterEach, describe, expect, it, vi} from 'vitest';
import {getStorageItem, removeStorageItem, setStorageItem} from './localStorage';

describe('localStorage utils', () => {
  afterEach(() => {
    localStorage.clear();
  });

  describe('getStorageItem', () => {
    it('returns fallback when key does not exist', () => {
      expect(getStorageItem('missing', 'default')).toBe('default');
    });

    it('returns parsed value when key exists', () => {
      localStorage.setItem('test', JSON.stringify({a: 1}));
      expect(getStorageItem('test', {})).toEqual({a: 1});
    });

    it('returns fallback when value is invalid JSON', () => {
      localStorage.setItem('bad', 'not-json');
      expect(getStorageItem('bad', 'fallback')).toBe('fallback');
    });

    it('handles numeric values', () => {
      localStorage.setItem('num', '42');
      expect(getStorageItem('num', 0)).toBe(42);
    });

    it('handles array values', () => {
      localStorage.setItem('arr', JSON.stringify([1, 2, 3]));
      expect(getStorageItem('arr', [])).toEqual([1, 2, 3]);
    });

    it('returns fallback when localStorage throws', () => {
      vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
        throw new Error('quota exceeded');
      });
      expect(getStorageItem('key', 'safe')).toBe('safe');
      vi.restoreAllMocks();
    });
  });

  describe('setStorageItem', () => {
    it('stores a value as JSON', () => {
      setStorageItem('key', {hello: 'world'});
      expect(localStorage.getItem('key')).toBe('{"hello":"world"}');
    });

    it('stores a string value', () => {
      setStorageItem('str', 'value');
      expect(localStorage.getItem('str')).toBe('"value"');
    });

    it('does not throw when localStorage is unavailable', () => {
      vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('quota exceeded');
      });
      expect(() => setStorageItem('key', 'value')).not.toThrow();
      vi.restoreAllMocks();
    });
  });

  describe('removeStorageItem', () => {
    it('removes an existing key', () => {
      localStorage.setItem('key', '"value"');
      removeStorageItem('key');
      expect(localStorage.getItem('key')).toBeNull();
    });

    it('does not throw for non-existent key', () => {
      expect(() => removeStorageItem('missing')).not.toThrow();
    });

    it('does not throw when localStorage is unavailable', () => {
      vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {
        throw new Error('unavailable');
      });
      expect(() => removeStorageItem('key')).not.toThrow();
      vi.restoreAllMocks();
    });
  });
});
