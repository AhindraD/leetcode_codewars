# https://neetcode.io/problems/duplicate-integer
class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        map = {}
        for elem in nums:
            if elem in map:
                return True
            else:
                map[elem] = 1
        return False