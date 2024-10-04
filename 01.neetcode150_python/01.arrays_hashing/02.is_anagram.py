# https: //neetcode.io/problems/is-anagram
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        map1 = {}
        # map2={}
        for elem in s:
            if elem in map1:
                map1[elem] += 1
            else:
                map1[elem] = 1

        for elem in t:
            if elem in map1 and map1[elem] > 0:
                map1[elem] -= 1
            else:
                return False

        for count in map1:
            if map1[count] > 0:
                return False
        return True
