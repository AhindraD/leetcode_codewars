class Solution:
    def search(self, nums: List[int], target: int) -> int:
        start = 0
        end = len(nums)-1
        while (start <= end):
            mid = (start+end)//2
            mid_num = nums[mid]
            print(mid, mid_num)
            if mid_num == target:
                return mid
            elif mid_num > target:
                end = mid-1
            else:
                start = mid+1
        return -1