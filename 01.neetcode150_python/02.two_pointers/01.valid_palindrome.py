# https: //neetcode.io/problems/is-palindrome
class Solution:
    def isPalindrome(self, s: str) -> bool:
        l = 0
        r = len(s)-1
        while (l < r):
            while (not s[l].isalnum()) and l < r:
                l += 1
                continue
            while (not s[r].isalnum()) and l < r:
                r -= 1
                continue
            if not s[l].lower() == s[r].lower():
                return False
            l += 1
            r -= 1
        return True
