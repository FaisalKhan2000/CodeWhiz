import { describe, expect, test } from "bun:test";
import { ValidPalindrome } from "../src/leetcode_exercises/two_pointers/easy/valid_palindrome";

describe("ValidPalindrome", () => {
  const solution = ValidPalindrome.getInstance();

  test("should return true for valid palindromes", () => {
    expect(solution.twoPointers("A man, a plan, a canal: Panama")).toBe(true);
    expect(solution.twoPointers("race a car")).toBe(false);
    expect(solution.twoPointers(" ")).toBe(true);
  });

  test("should handle empty strings", () => {
    expect(solution.twoPointers("")).toBe(true);
  });

  test("should handle strings with special characters", () => {
    expect(solution.twoPointers(".,")).toBe(true);
    expect(solution.twoPointers("0P")).toBe(false);
  });

  test("should handle alphanumeric strings", () => {
    expect(solution.twoPointers("ab_a")).toBe(true);
    expect(solution.twoPointers("1b1")).toBe(true);
  });

  test("isAlphanumeric method", () => {
    expect(solution.isAlphanumeric("a")).toBe(true);
    expect(solution.isAlphanumeric("1")).toBe(true);
    expect(solution.isAlphanumeric(" ")).toBe(false);
    expect(solution.isAlphanumeric(".")).toBe(false);
  });
});
