interface IValidPalindrome {
  twoPointers(s: string): boolean;
  isAlphanumeric(s: string): boolean;
}

class ValidPalindrome implements IValidPalindrome {
  private static instance: ValidPalindrome;

  public static getInstance(): ValidPalindrome {
    if (!ValidPalindrome.instance) {
      ValidPalindrome.instance = new ValidPalindrome();
    }
    return ValidPalindrome.instance;
  }

  twoPointers(s: string): boolean {
    let left = 0,
      right = s.length - 1;

    while (left < right) {
      // Skip non-alphanumeric characters
      while (left < right && !this.isAlphanumeric(s[left])) left++;
      while (left < right && !this.isAlphanumeric(s[right])) right--;

      // Compare characters in a case-insensitive manner
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }

      left++;
      right--;
    }
    return true;
  }

  isAlphanumeric(s: string): boolean {
    return /^[a-zA-Z0-9]$/.test(s);
  }
}

export { ValidPalindrome };
