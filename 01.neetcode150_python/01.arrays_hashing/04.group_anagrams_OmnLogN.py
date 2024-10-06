# https: //neetcode.io/problems/anagram-groups
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = {}
        for word in strs:
            word_sorted = ''.join(sorted(word))
            if word_sorted in map:
                map[word_sorted].append(word)
            else:
                map[word_sorted] = [word]
        return map.values()