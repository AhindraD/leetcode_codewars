# https: //neetcode.io/problems/anagram-groups
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # takes care of assigning value to uninitialized keys
        map = defaultdict(list)
        for word in strs:
            count = [0]*26
            for c in word:
                # ord gives unicode value for that char
                # to get values between (0->25) => ord(c)-ord("a")
                count[ord(c)-ord("a")] += 1
            map[tuple(count)].append(word)
        return map.values()
