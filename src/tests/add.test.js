import { add } from '../utils/add';
import { describe, it, expect } from 'vitest';

describe('add function', () => {
    it('should return 0 for an empty string', () => {
      expect(add('')).toBe(0);
    });

    it('should return the number itself for a single number', () => {
      expect(add('5')).toBe(5);
    })
  });