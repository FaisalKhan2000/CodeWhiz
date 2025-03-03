import { describe, test, expect } from "bun:test";
import { TwoSum } from "../two_sum";

describe("TwoSum", () => {
  describe("Singleton Pattern", () => {
    test("should maintain a single instance", () => {
      const instance1 = TwoSum.getInstance();
      const instance2 = TwoSum.getInstance();
      expect(instance1).toBe(instance2);
    });
  });

  describe("Solutions", () => {
    const solution = TwoSum.getInstance();

    const testCases = [
      {
        name: "basic case",
        nums: [2, 7, 11, 15],
        target: 9,
        expected: [0, 1],
      },
      {
        name: "no solution",
        nums: [1, 2, 3, 4],
        target: 10,
        expected: [],
      },
      {
        name: "duplicate numbers",
        nums: [3, 3],
        target: 6,
        expected: [0, 1],
      },
      {
        name: "zero target",
        nums: [0, 1, 2, 0],
        target: 0,
        expected: [0, 3],
      },
    ];

    const solutions = [
      { name: "Brute Force", fn: solution.brute },
      { name: "Two Pointers", fn: solution.twoPointers },
      { name: "Hash Map", fn: solution.map },
    ];

    solutions.forEach(({ name, fn }) => {
      describe(name, () => {
        testCases.forEach(({ name: caseName, nums, target, expected }) => {
          test(caseName, () => {
            const result = fn.call(solution, nums, target);
            // Sort the arrays for comparison since order doesn't matter
            expect(result.sort()).toEqual(expected.sort());
          });
        });

        test("should handle empty array", () => {
          expect(fn.call(solution, [], 1)).toEqual([]);
        });

        test("should handle single element array", () => {
          expect(fn.call(solution, [1], 1)).toEqual([]);
        });
      });
    });

    test("solutions should complete within reasonable time", () => {
      const largeArray = Array.from({ length: 10000 }, (_, i) => i);
      const target = 19998; // Sum of 9998 + 9999
      const MAX_BRUTE_TIME = 100; // ms
      const MAX_POINTER_TIME = 50; // ms
      const MAX_MAP_TIME = 50; // ms

      const start1 = performance.now();
      solution.brute(largeArray, target);
      const bruteDuration = performance.now() - start1;

      const start2 = performance.now();
      solution.twoPointers(largeArray, target);
      const pointerDuration = performance.now() - start2;

      const start3 = performance.now();
      solution.map(largeArray, target);
      const mapDuration = performance.now() - start3;

      expect(bruteDuration).toBeLessThan(MAX_BRUTE_TIME);
      expect(pointerDuration).toBeLessThan(MAX_POINTER_TIME);
      expect(mapDuration).toBeLessThan(MAX_MAP_TIME);
    });
  });
});
