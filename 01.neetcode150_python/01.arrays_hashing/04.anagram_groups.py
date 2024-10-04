# https: //neetcode.io/problems/anagram-groups
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = {}
        for word in strs:
            word_sorted = ''.join(sorted(word))
            count = {}
            for s in word_sorted:
                if s in count:
                    count[s] += 1
                else:
                    count[s] = 1
            map_key = ""
            for key in count:
                map_key += key+str(count[key])
            if map_key in map:
                map[map_key].append(word)
            else:
                map[map_key] = [word]
        return map.values()
