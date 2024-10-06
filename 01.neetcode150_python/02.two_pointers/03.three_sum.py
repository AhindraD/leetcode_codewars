# https: // neetcode.io/problems/three-integer-sum
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        l = len(nums)
        map_two_sum = defaultdict(list)  # sum->elems
        res = []
        counted = {}
        for i1, n1 in enumerate(nums):
            for i2 in range(i1+1, l):
                n2 = nums[i2]
                map_two_sum[n1+n2].append([i1, i2])
        for i3, n3 in enumerate(nums):
            diff = 0-n3
            if diff in map_two_sum:
                for pair in map_two_sum[diff]:
                    [i1, i2] = pair
                    if i3 != i1 and i3 != i2:
                        key = tuple(sorted([nums[i1], nums[i2], n3]))
                        if not key in counted:
                            print(key)
                            res.append([nums[i1], nums[i2], n3])
                            counted[key] = True
        return res