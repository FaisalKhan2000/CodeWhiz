import { ContainsDuplicate } from "../src/leetcode_exercises/array_hashing/easy/contains_duplicate";
import { describe, test, expect } from "bun:test";

describe("ContainsDuplicate", () => {
  // Singleton pattern test
  describe("Singleton Pattern", () => {
    test("should maintain a single instance", () => {
      const instance1 = ContainsDuplicate.getInstance();
      const instance2 = ContainsDuplicate.getInstance();
      expect(instance1).toBe(instance2);
    });
  });

  // Solution tests
  describe("Solutions", () => {
    const solution = ContainsDuplicate.getInstance();

    const testCases = [
      {
        name: "basic case with duplicate",
        input: [1, 2, 3, 1],
        expected: true,
      },
      {
        name: "no duplicates",
        input: [1, 2, 3, 4],
        expected: false,
      },
      {
        name: "multiple duplicates",
        input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
        expected: true,
      },
      // Edge cases
      {
        name: "empty array",
        input: [],
        expected: false,
      },
      {
        name: "single element",
        input: [1],
        expected: false,
      },
      {
        name: "negative numbers",
        input: [-1, -1, 2],
        expected: true,
      },
      {
        name: "large numbers",
        input: [Number.MAX_SAFE_INTEGER, 1, Number.MAX_SAFE_INTEGER],
        expected: true,
      },
    ];

    const solutions = [
      { name: "Brute Force", fn: solution.bruteForce },
      { name: "Hash Map", fn: solution.usingMap },
      { name: "Set", fn: solution.usingSet },
    ];

    solutions.forEach(({ name, fn }) => {
      describe(name, () => {
        testCases.forEach(({ name: caseName, input, expected }) => {
          test(caseName, () => {
            expect(fn.call(solution, input)).toBe(expected);
          });
        });

        test("should handle non-array input", () => {
          expect(() => fn.call(solution, null as any)).toThrow();
          expect(() => fn.call(solution, undefined as any)).toThrow();
        });
      });
    });
  });
});
