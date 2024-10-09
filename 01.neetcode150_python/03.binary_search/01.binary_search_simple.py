class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l=len(nums)
        start=0
        mid=int(l/2)
        while(start<mid):
            if nums[mid]>target:
                mid=int((start+mid)/2)
            else