/**
 * Interface for Contains Duplicate solution implementations
 */
interface IContainsDuplicate {
  bruteForce(nums: number[]): boolean;
  usingMap(nums: number[]): boolean;
  usingSet(nums: number[]): boolean;
}

/**
 * Contains Duplicate - LeetCode 217
 * Implements Singleton Pattern
 * @see https://leetcode.com/problems/contains-duplicate/
 */
export class ContainsDuplicate implements IContainsDuplicate {
  private static instance: ContainsDuplicate;

  private constructor() {}

  public static getInstance(): ContainsDuplicate {
    if (!ContainsDuplicate.instance) {
      ContainsDuplicate.instance = new ContainsDuplicate();
    }
    return ContainsDuplicate.instance;
  }

  /**
   * Brute force solution using nested loops
   * Time Complexity: O(n²)
   * Space Complexity: O(1)
   */
  public bruteForce(nums: number[]): boolean {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (nums[i] === nums[j]) return true;
      }
    }

    return false;
  }

  /**
   * Solution using Hash Map
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  public usingMap(nums: number[]): boolean {
    const map = new Map<number, boolean>();

    for (const num of nums) {
      if (map.has(num)) return true;
      map.set(num, true);
    }

    return false;
  }

  /**
   * Solution using Set
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  public usingSet(nums: number[]): boolean {
    return new Set(nums).size !== nums.length;
  }
}
