interface ITwoSum {
  twoSum(numbers: number[], target: number): number[];
}

class TwoSum implements ITwoSum {
  private static instance: TwoSum;
  public static getInstance(): TwoSum {
    if (!TwoSum.instance) {
      TwoSum.instance = new TwoSum();
    }
    return TwoSum.instance;
  }

  twoSum(numbers: number[], target: number): number[] {
    let left = 0,
      right = numbers.length - 1;

    while (left < right) {
      const sum = numbers[left] + numbers[right];

      if (sum === target) {
        return [left + 1, right + 1];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    return [-1, -1];
  }
}

export { TwoSum };
