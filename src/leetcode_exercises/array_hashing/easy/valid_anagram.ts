/**
 * Interface for Valid Anagram solution implementations
 */
interface IValidAnagram {
  charCode(s: string, t: string): boolean;
  sorting(s: string, t: string): boolean;
  hashTable(s: string, t: string): boolean;
}

/**
 * Valid Anagram - LeetCode 242
 * @see https://leetcode.com/problems/valid-anagram/
 */
export class ValidAnagram implements IValidAnagram {
  private static instance: ValidAnagram;

  private constructor() {}

  public static getInstance(): ValidAnagram {
    if (!ValidAnagram.instance) {
      ValidAnagram.instance = new ValidAnagram();
    }
    return ValidAnagram.instance;
  }

  /**
   * Solution using character codes
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  public charCode(s: string, t: string): boolean {
    if (typeof s !== "string" || typeof t !== "string") {
      throw new Error("Input must be strings");
    }
    if (s.length !== t.length) return false;
    if (s === t) return true;

    const charCount = new Int32Array(26);
    for (let i = 0; i < s.length; i++) {
      charCount[s.charCodeAt(i) - 97]++;
      charCount[t.charCodeAt(i) - 97]--;
    }
    return charCount.every((val) => val === 0);
  }

  /**
   * Solution using sorting
   * Time Complexity: O(n log n)
   * Space Complexity: O(n)
   */
  public sorting(s: string, t: string): boolean {
    if (typeof s !== "string" || typeof t !== "string") {
      throw new Error("Input must be strings");
    }
    if (s.length !== t.length) return false;
    if (s === t) return true;

    return s.split("").sort().join("") === t.split("").sort().join("");
  }

  /**
   * Solution using hash table
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  public hashTable(s: string, t: string): boolean {
    if (typeof s !== "string" || typeof t !== "string") {
      throw new Error("Input must be strings");
    }
    if (s.length !== t.length) return false;
    if (s === t) return true;

    const charCount = new Map<string, number>();

    for (const char of s) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (const char of t) {
      const count = charCount.get(char);
      if (!count) return false;
      if (count === 1) charCount.delete(char);
      else charCount.set(char, count - 1);
    }

    return charCount.size === 0;
  }
}

const solution = ValidAnagram.getInstance();
console.log(solution.charCode("anagram", "nagaram"));
console.log(solution.charCode("rat", "car"));
