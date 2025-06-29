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

    it('should handle numbers with new lines', () => {
      expect(add('1\n2,3')).toBe(6);
      expect(add('4,5\n6')).toBe(15);
    });

    it('should handle different delimiters mentioned in first line', () => {
      expect(add('//;\n1;2;3')).toBe(6);
      expect(add('//:\n4:5:6')).toBe(15);
      expect(add('//|\n7|8|9')).toBe(24);
      expect(add('//,\n10,20,30')).toBe(60);
      expect(add('//-\n1-2-3')).toBe(6);
      expect(add('//.\n4.5.6')).toBe(15);
      expect(add('//]\n7]8]9\n10')).toBe(34);
    });

    it('should throw an error for negative numbers', () => {
      expect(() => add('1,-2,3')).toThrow('Negative numbers are not allowed: -2');
      expect(() => add('1,-3,-4')).toThrow('Negative numbers are not allowed: -3, -4');
      expect(() => add('//;\n1;-2;3')).toThrow('Negative numbers are not allowed: -2');
    })

    it('shhould ignore numbers greater than 1000', () => {
      expect(add('1000,2')).toBe(1002);
      expect(add('1001,2')).toBe(2);
      expect(add('1000,2000')).toBe(1000);
      expect(add('1,2,3,1001')).toBe(6);
      expect(add('//;\n1;2;3;1001')).toBe(6);
    });

    it('should handle bigger length of delimiters', () => {
      expect(add('//[***]\n1***2***3')).toBe(6);
      expect(add('//[###]\n4###5###6')).toBe(15);
      expect(add('//[---]\n7---8---9')).toBe(24);
      expect(add('//[+++]\n10+++20+++30')).toBe(60);
      expect(add('//[===]\n1===2===3')).toBe(6);
      expect(add('//[...]\n4...5...6')).toBe(15);
    });
  });