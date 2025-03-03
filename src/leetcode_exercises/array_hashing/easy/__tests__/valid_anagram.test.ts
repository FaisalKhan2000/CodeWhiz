import { ValidAnagram } from "../valid_anagram";
import { describe, test, expect } from "bun:test";

describe("ValidAnagram", () => {
  describe("Singleton Pattern", () => {
    test("should maintain a single instance", () => {
      const instance1 = ValidAnagram.getInstance();
      const instance2 = ValidAnagram.getInstance();
      expect(instance1).toBe(instance2);
    });
  });

  describe("Solutions", () => {
    const solution = ValidAnagram.getInstance();

    const testCases = [
      {
        name: "valid anagram",
        s: "anagram",
        t: "nagaram",
        expected: true,
      },
      {
        name: "invalid anagram",
        s: "rat",
        t: "car",
        expected: false,
      },
      {
        name: "same strings",
        s: "hello",
        t: "hello",
        expected: true,
      },
      {
        name: "empty strings",
        s: "",
        t: "",
        expected: true,
      },
      {
        name: "different lengths",
        s: "abc",
        t: "abcd",
        expected: false,
      },
      {
        name: "case sensitive",
        s: "Anagram",
        t: "nagaram",
        expected: false,
      },
    ];

    const solutions = [
      { name: "Character Code", fn: solution.charCode },
      { name: "Sorting", fn: solution.sorting },
      { name: "Hash Table", fn: solution.hashTable },
    ];

    solutions.forEach(({ name, fn }) => {
      describe(name, () => {
        testCases.forEach(({ name: caseName, s, t, expected }) => {
          test(caseName, () => {
            expect(fn.call(solution, s, t)).toBe(expected);
          });
        });

        test("should handle invalid inputs", () => {
          expect(() => fn.call(solution, null as any, "")).toThrow();
          expect(() => fn.call(solution, "", null as any)).toThrow();
          expect(() => fn.call(solution, undefined as any, "")).toThrow();
        });
      });
    });

    test("solutions should complete within reasonable time", () => {
      const longString1 = "a".repeat(10000) + "b";
      const longString2 = "a".repeat(10000) + "b";
      const MAX_CHAR_CODE_TIME = 50; // ms
      const MAX_SORTING_TIME = 50; // ms
      const MAX_HASH_TIME = 50; // ms

      const start1 = performance.now();
      solution.charCode(longString1, longString2);
      const charCodeDuration = performance.now() - start1;

      const start2 = performance.now();
      solution.sorting(longString1, longString2);
      const sortingDuration = performance.now() - start2;

      const start3 = performance.now();
      solution.hashTable(longString1, longString2);
      const hashTableDuration = performance.now() - start3;

      expect(charCodeDuration).toBeLessThan(MAX_CHAR_CODE_TIME);
      expect(sortingDuration).toBeLessThan(MAX_SORTING_TIME);
      expect(hashTableDuration).toBeLessThan(MAX_HASH_TIME);
    });
  });
});
