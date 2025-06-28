import { add } from '../utils/add';
import { describe, it, expect } from 'vitest';

describe('add function', () => {
    it('should return 0 for an empty string', () => {
      expect(add('')).toBe(0);
    });

    it('should return the  number itself for a single number', () => {
      expect(add('5')).toBe(5);
    })

    it('should return the sum of two numbers separated by a comma', () => {
      expect(add('1,2')).toBe(3);
    });

    it('should return the sum of multiple numbers separated by commas', () => {
      expect(add('1,2,3')).toBe(6);
      expect(add('10,20,30')).toBe(60);
    });
  });