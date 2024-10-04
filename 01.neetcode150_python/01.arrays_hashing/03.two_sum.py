# https: //neetcode.io/problems/two-integer-sum
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        valIndxMap={}
        for i,num in enumerate(nums):
            diff=target-num
            if diff in valIndxMap:
                return [valIndxMap[diff],i]
            else:
                valIndxMap[num]=i
        return None
