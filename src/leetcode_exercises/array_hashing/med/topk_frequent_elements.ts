interface ITopKFrequent {
  hashmap(nums: number[], k: number): number[];
}

class TopKFrequent implements ITopKFrequent {
  private static instance: TopKFrequent;

  /**
   * getInstance
   */
  public static getInstance(): TopKFrequent {
    if (!TopKFrequent.instance) {
      TopKFrequent.instance = new TopKFrequent();
    }

    return TopKFrequent.instance;
  }

  hashmap(nums: number[], k: number): number[] {
    const freqMap = new Map<number, number>();

    for (const num of nums) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    return [...freqMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map((element) => element[0]);
  }
}

export { TopKFrequent };
