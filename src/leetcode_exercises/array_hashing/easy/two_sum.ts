export interface ITwoSum {
  brute(nums: number[], target: number): number[];
  twoPointers(nums: number[], target: number): number[];
  map(nums: number[], target: number): number[];
}

export class TwoSum implements ITwoSum {
  private static instance: TwoSum;

  private constructor() {}

  public static getInstance(): TwoSum {
    if (!TwoSum.instance) {
      TwoSum.instance = new TwoSum();
    }
    return TwoSum.instance;
  }

  /**
   * brute
   */
  public brute(nums: number[], target: number): number[] {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const sum = nums[i] + nums[j];
        if (sum == target) {
          return [i, j];
        }
      }
    }

    return [];
  }
  /**
   * map
   */
  public map(nums: number[], target: number): number[] {
    const n = nums.length;
    const map = new Map<number, number>();

    for (let i = 0; i < n; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement) as number, i];
      }
      map.set(nums[i], i);
    }

    return [];
  }

  /**
   * twoPointers
   */
  public twoPointers(nums: number[], target: number): number[] {
    const sortedNums = nums
      .map((num, index) => ({ num, index }))
      .sort((a, b) => a.num - b.num);
    let left = 0;
    let right = sortedNums.length - 1;

    while (left < right) {
      const sum = sortedNums[left].num + sortedNums[right].num;
      if (sum === target) {
        return [sortedNums[left].index, sortedNums[right].index];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    return [];
  }
}

const solution = TwoSum.getInstance();

console.log(solution.brute([3, 4, 5, 6], 7));
console.log(solution.twoPointers([3, 4, 5, 6], 7));
console.log(solution.map([3, 4, 5, 6], 7));
