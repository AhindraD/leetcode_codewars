# https: //neetcode.io/problems/top-k-elements-in-list
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        sol = []
        map = {}
        for num in nums:
            if str(num) in map:
                map[str(num)] += 1
            else:
                map[str(num)] = 1
        count = k
        while (count > 0):
            sol_n = None
            max_oc = 0
            for num in map:
                if map[num] > max_oc:
                    max_oc = map[num]
                    sol_n = num
            map[sol_n] = 0
            sol.append(int(sol_n))
            count -= 1
        return sol
