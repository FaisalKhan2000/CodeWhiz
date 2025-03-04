import { beforeEach, describe, expect, test } from "bun:test";

import { TwoSum } from "../src/leetcode_exercises/two_pointers/med/two_sum2";

describe("TwoSum", () => {
  let twoSum: TwoSum;

  beforeEach(() => {
    twoSum = TwoSum.getInstance();
  });

  test("should find two numbers that add up to target", () => {
    expect(twoSum.twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
    expect(twoSum.twoSum([2, 3, 4], 6)).toEqual([1, 3]);
    expect(twoSum.twoSum([-1, 0], -1)).toEqual([1, 2]);
  });

  test("should return [-1, -1] when no solution exists", () => {
    expect(twoSum.twoSum([2, 7, 11, 15], 100)).toEqual([-1, -1]);
  });

  test("should handle array with just two elements", () => {
    expect(twoSum.twoSum([1, 2], 3)).toEqual([1, 2]);
  });
});
