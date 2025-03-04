import { describe, expect, test } from 'bun:test';
import { TopKFrequent } from '../topk_frequent_elements';

describe('TopKFrequent', () => {
  const solution = TopKFrequent.getInstance();

  test('should return top k frequent elements', () => {
    expect(solution.hashmap([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
    expect(solution.hashmap([1], 1)).toEqual([1]);
    expect(solution.hashmap([1, 2, 3], 3)).toEqual([1, 2, 3]);
    expect(solution.hashmap([], 0)).toEqual([]);
  });

  test('should handle all elements having same frequency', () => {
    expect(solution.hashmap([1, 1, 2, 2, 3, 3], 2)).toEqual([1, 2]);
  });

  test('should handle k equal to array length', () => {
    expect(solution.hashmap([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
  });
});
