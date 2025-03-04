import { describe, expect, test } from "bun:test";
import { GroupAnagrams } from "../src/leetcode_exercises/array_hashing/med/groupAnagrams";

describe("GroupAnagrams", () => {
  const groupAnagrams = GroupAnagrams.getInstance();

  test("should group anagrams correctly", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const expected = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];

    const result = groupAnagrams.sorting(input);

    // Sort arrays for consistent comparison
    const sortedResult = result.map((arr) => arr.sort()).sort();
    const sortedExpected = expected.map((arr) => arr.sort()).sort();

    expect(sortedResult).toEqual(sortedExpected);
  });

  test("should handle empty input array", () => {
    expect(groupAnagrams.sorting([])).toEqual([]);
  });

  test("should handle array with single string", () => {
    expect(groupAnagrams.sorting(["hello"])).toEqual([["hello"]]);
  });
});
