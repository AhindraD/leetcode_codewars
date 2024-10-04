# https: //neetcode.io/problems/two-integer-sum
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        middle_index = (len(nums) // 2)
        for i in range(0, middle_index + 1):
            num2 = target - nums[i]
            print(num2)
            if (num2 in nums[i+1:]):
                # print(num2)
                if nums[i] == num2:
                    return [i, nums[i+1:].index(num2)+i+1]
                else:
                    return [i, nums.index(num2)]
        return False
