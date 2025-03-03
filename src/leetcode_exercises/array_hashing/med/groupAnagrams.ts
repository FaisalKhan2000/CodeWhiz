interface IGroupAnagrams {
  sorting(strs: string[]): string[][];
}

export class GroupAnagrams implements IGroupAnagrams {
  private static instance: GroupAnagrams;

  private constructor() {}

  public static getInstance(): GroupAnagrams {
    if (!GroupAnagrams.instance) {
      GroupAnagrams.instance = new GroupAnagrams();
    }

    return GroupAnagrams.instance;
  }

  /**
   * sorting
   */
  public sorting(strs: string[]): string[][] {
    const res: Record<string, string[]> = {};

    for (const str of strs) {
      const sortedStr = str.split("").sort().join("");

      if (!res[sortedStr]) {
        res[sortedStr] = [];
      }

      res[sortedStr].push(str);
    }
    return Object.values(res);
  }
}
